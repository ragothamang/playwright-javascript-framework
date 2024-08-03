# Use the Playwright base image
FROM mcr.microsoft.com/playwright:v1.45.3-focal

# Install Node.js version 18
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

# Install required packages
RUN apt-get update && apt-get install -y \
    xvfb \
    x11vnc \
    fluxbox \
    net-tools \
    openjdk-11-jdk \
    && rm -rf /var/lib/apt/lists/* \
    && npm install -g allure-commandline --save-dev

# Set the working directory
# WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .


# Command to run Playwright tests in headless mode
CMD ["xvfb-run", "--auto-servernum", "--server-args='-screen 0 1920x1080x24'", "npx", "playwright", "test"]

# Command to start VNC server and Playwright tests
# CMD ["xvfb-run", "--auto-servernum", "--server-args=-screen 0 1920x1080x24", "/usr/local/bin/vncstartup.sh"]

# Copy VNC startup script
# COPY vncstartup.sh /usr/src/app/vncstartup.sh
# RUN chmod +x /usr/src/app/vncstartup.sh

# COPY vncstartup.sh /usr/local/bin/vncstartup.sh
# RUN chmod +x /usr/local/bin/vncstartup.sh

# Start an interactive shell by default
# CMD ["/bin/bash"]

# Expose the VNC port
# EXPOSE 5901

# Command to start VNC server and Playwright tests
# CMD ["/usr/src/app/vncstartup.sh"]

# Command to run Playwright tests in headless mode
# CMD ["npx", "playwright", "test"]

# Command to start Xvfb and run Playwright tests in headed mode
# CMD ["xvfb-run", "-a", "npx", "playwright", "test"]
