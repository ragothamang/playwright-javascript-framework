# Use the Playwright base image
FROM mcr.microsoft.com/playwright:v1.29.1-focal

# Install required packages
RUN apt-get update && apt-get install -y \
    xvfb \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Command to run Playwright tests in headless mode
CMD ["npx", "playwright", "test", "--headless"]
