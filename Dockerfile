# Use the Playwright base image
FROM mcr.microsoft.com/playwright:v1.29.1-focal

# Install required packages for running a GUI and VNC
RUN apt-get update && apt-get install -y \
    xfce4 \
    xfce4-goodies \
    tightvncserver \
    x11vnc \
    xvfb \
    && rm -rf /var/lib/apt/lists/*

# Set up VNC server and create the VNC password
RUN mkdir -p /root/.vnc && \
    echo 'yourpassword' | vncpasswd -f > /root/.vnc/passwd && \
    chmod 600 /root/.vnc/passwd

# Copy VNC startup script
COPY vncstartup.sh /usr/local/bin/vncstartup.sh
RUN chmod +x /usr/local/bin/vncstartup.sh

# Expose the VNC port
EXPOSE 5901

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Command to start VNC server and run Playwright tests
CMD ["/bin/bash", "-c", "/usr/local/bin/vncstartup.sh && npx playwright test --headed"]
