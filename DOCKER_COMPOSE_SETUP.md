# Docker Compose Setup Guide

This guide explains how to use the Docker Compose configuration to run OWASP Juice Shop with an Nginx reverse proxy and Let's Encrypt TLS certificates.

## Prerequisites

- Docker and Docker Compose installed
- A domain name (required for Let's Encrypt)
- Port 80 and 443 accessible on your host

## Setup with Let's Encrypt (HTTPS)

The provided nginx.conf is HTTPS-first. If you really need HTTP-only, comment out the HTTPS server block and the redirect in the HTTP server block in nginx.conf, then run `docker compose up -d`. Otherwise, follow the steps below to obtain certificates and start with TLS.

### Step 1: Update nginx.conf

Edit `nginx.conf` and replace `yourdomain.com` with your actual domain name in these lines:

```nginx
ssl_certificate /etc/nginx/certs/live/yourdomain.com/fullchain.pem;
ssl_certificate_key /etc/nginx/certs/live/yourdomain.com/privkey.pem;
```

Also update the `server_name` directive if you want to restrict it to a specific domain:

```nginx
server_name yourdomain.com www.yourdomain.com;
```

### Step 2: Obtain Initial Certificate (standalone Certbot, outside Compose)

Run Certbot manually (not via Compose) in standalone mode so it spins up its own temporary HTTP server on port 80:

```bash
sudo docker run --rm -it \
  -p 80:80 \
  -v $(pwd)/certs:/etc/letsencrypt \
  certbot/certbot certonly --standalone --preferred-challenges http \
  -d juice.appsecg.host \
  --email your-email@example.com \
  --agree-tos \
  --no-eff-email
```

Notes:
- Ensure port 80 is free (do not start nginx yet, or stop it first: `docker compose stop nginx`).
- Certificates are written into `./certs`, which nginx mounts.
- Use `--staging` to avoid rate limits while testing.

### Step 3: Start Services with HTTPS

With certificates in place, start the stack (nginx will now find the certs). If you previously commented out the HTTPS block or `ssl_certificate*` lines, re-enable them before starting nginx:

```bash
docker compose up -d
```

### Step 4: Renewal (manual)

Repeat the standalone command when renewal is needed. You can script or cron it if desired. Ensure port 80 is free each time (stop nginx, run certbot standalone, then start nginx).

## File Structure

After setup, your directory should contain:

```
juice-shop/
├── docker-compose.yml      # Docker Compose configuration
├── nginx.conf              # Nginx reverse proxy configuration
├── Dockerfile              # Juice Shop Docker image
├── certs/                  # Let's Encrypt certificates (created after setup)
│   └── live/yourdomain.com/
│       ├── fullchain.pem
│       └── privkey.pem
└── www/                    # Certbot webroot directory (created automatically)
```

## Common Commands

### Start all services

```bash
docker compose up -d
```

### View logs

```bash
docker compose logs -f
docker compose logs -f juice-shop
docker compose logs -f nginx
```

### Stop all services

```bash
docker compose down
```

### Restart Nginx

```bash
docker compose restart nginx
```

## Troubleshooting

### Certificate Not Loading

If Nginx shows certificate errors:

1. Verify the certificate path in `nginx.conf` matches your domain
2. Check that certificates exist in `./certs/live/yourdomain.com/`
3. Restart Nginx: `docker compose restart nginx`
4. Check logs: `docker compose logs nginx`

### Can't Reach Application

- Ensure ports 80 and 443 are open: `netstat -an | grep ':80\|:443'`
- Check if containers are running: `docker compose ps`
- View logs: `docker compose logs`

### Certbot Validation Failed

- Ensure DNS is pointing to your server
- Verify port 80 is open for ACME challenge
- Re-run the standalone command with `--staging` for testing or `--debug-challenges` for more output

## Production Recommendations

1. **Backup Certificates**: Regularly backup the `./certs` directory
2. **Monitor Renewal**: Keep an eye on certificate expiration dates
3. **Security**: Keep Docker and images updated
4. **Logs**: Set up log rotation for persistent logs
5. **Firewall**: Only expose ports 80 and 443; restrict other ports

## Modifying Configuration

To adjust Nginx settings or Juice Shop environment variables:

1. Edit `nginx.conf` for Nginx settings
2. Edit `docker-compose.yml` for environment variables
3. Run `docker compose restart` or `docker compose up -d` to apply changes

## Additional Resources

- [Let's Encrypt Documentation](https://letsencrypt.org/docs/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [OWASP Juice Shop Documentation](https://pwning.owasp-juice.shop/)
