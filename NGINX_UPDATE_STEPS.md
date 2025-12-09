# Steps to Update Nginx Configuration for zuugnu.com

## Step 1: SSH into your server with password
```bash
ssh saubhtech@88.222.241.228
# Enter your server password when prompted
```

## Step 2: Copy the new nginx configuration to your server
The new configuration will serve static HTML from `/home/saubhtech/public_html`

Run this command on the server (one line):
```bash
sudo bash -c 'cat > /home/vikrant/conf/web/zuugnu.com/nginx.conf << "EOF"
server {
    listen 80;
    listen [::]:80;
    server_name zuugnu.com www.zuugnu.com;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name zuugnu.com www.zuugnu.com;

    # SSL certificates
    ssl_certificate /home/vikrant/conf/web/zuugnu.com/ssl/zuugnu.com.crt;
    ssl_certificate_key /home/vikrant/conf/web/zuugnu.com/ssl/zuugnu.com.key;

    # Serve static HTML from user-owned directory
    root /home/saubhtech/public_html;
    index index.html;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Serve static files with caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }

    # Route requests to correct files
    location / {
        try_files $uri $uri.html $uri/ =404;

        if (!-e $request_filename) {
            rewrite ^(.*)$ /index.html break;
        }
    }

    # Deny access to sensitive files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }

    location ~ ~$ {
        deny all;
        access_log off;
        log_not_found off;
    }
}
EOF'
```

## Step 3: Test the nginx configuration
```bash
sudo nginx -t
```
You should see: `nginx: configuration file test is successful`

## Step 4: Reload nginx
```bash
sudo systemctl reload nginx
```

## Step 5: Verify the static files are in place
```bash
ls -la /home/saubhtech/public_html/ | head
```
You should see: `index.html`, `login.html`, `_next/`, etc.

## Step 6: Test the website
Open your browser and visit:
- https://www.zuugnu.com (home page)
- https://www.zuugnu.com/login (login page with new UI)

If you see the updated static site, you're done! 🎉

---

## If you have scp available on Windows PowerShell:

```powershell
# Copy the config file from local to server
scp -i github-deploy-key nginx-zuugnu.conf saubhtech@88.222.241.228:/tmp/nginx-zuugnu.conf

# Then SSH and apply it:
ssh -i github-deploy-key saubhtech@88.222.241.228
sudo cp /tmp/nginx-zuugnu.conf /home/vikrant/conf/web/zuugnu.com/nginx.conf
sudo nginx -t
sudo systemctl reload nginx
```
