# Use the Playwright base image
FROM mcr.microsoft.com/playwright:v1.45.3-focal

# Install required packages
RUN apt-get update && apt-get install -y \
    xvfb \
    x11vnc \
    net-tools \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy VNC startup script
# COPY vncstartup.sh /usr/src/app/vncstartup.sh
# RUN chmod +x /usr/src/app/vncstartup.sh

# Expose the VNC port
# EXPOSE 5901

# Command to start VNC server and Playwright tests
# CMD ["/usr/src/app/vncstartup.sh"]

# Command to run Playwright tests in headless mode
CMD ["npx", "playwright", "test"]

# Command to start Xvfb and run Playwright tests in headed mode
# CMD ["xvfb-run", "-a", "npx", "playwright", "test"]
