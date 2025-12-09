#!/usr/bin/env python3
import os
import subprocess
import sys
from pathlib import Path

LOCAL_DIR = Path("out")
REMOTE_USER = "root"
REMOTE_HOST = "88.222.241.228"
REMOTE_DIR = "/home/vikrant/web/zuugnu.com/public_html"
SSH_KEY = "github-deploy-key"

def run_cmd(cmd):
    """Run a shell command"""
    result = subprocess.run(cmd, shell=True, capture_output=False, text=True)
    return result.returncode

def upload_files():
    """Upload all files from out directory to remote server"""
    
    # Get all files
    files = list(LOCAL_DIR.rglob("*"))
    
    for file_path in files:
        if file_path.is_file():
            rel_path = file_path.relative_to(LOCAL_DIR)
            remote_path = f"{REMOTE_DIR}/{rel_path}".replace("\\", "/")
            remote_dir = str(Path(remote_path).parent).replace("\\", "/")
            
            # Create remote directory
            cmd = f'ssh -i {SSH_KEY} {REMOTE_USER}@{REMOTE_HOST} "mkdir -p \'{remote_dir}\'"'
            subprocess.run(cmd, shell=True, capture_output=True)
            
            # Upload file
            print(f"Uploading {rel_path}...")
            with open(file_path, 'rb') as f:
                data = f.read()
            
            cmd = f'ssh -i {SSH_KEY} {REMOTE_USER}@{REMOTE_HOST} "cat > \'{remote_path}\'"'
            process = subprocess.Popen(cmd, shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            stdout, stderr = process.communicate(input=data)
            
            if process.returncode != 0:
                print(f"Error uploading {rel_path}: {stderr.decode()}")
                return False
    
    return True

if __name__ == "__main__":
    print(f"Starting deployment from {LOCAL_DIR} to {REMOTE_USER}@{REMOTE_HOST}:{REMOTE_DIR}")
    if upload_files():
        print("✓ Deployment successful!")
        sys.exit(0)
    else:
        print("✗ Deployment failed!")
        sys.exit(1)
