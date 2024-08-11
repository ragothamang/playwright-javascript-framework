#!/bin/bash

# Start the VNC server
vncserver :1 -geometry 1280x720 -depth 24
# x11vnc -forever -usepw -create -rfbport 5901 -shared &

# Set up DISPLAY environment variable
export DISPLAY=:1

# Run Playwright tests in headless mode
# xvfb-run -a npx playwright test --headed
npx playwright test
# Keep the container running
tail -f /dev/null


# # Start the VNC server
# tightvncserver :1 -geometry 1280x720 -depth 24

# # Start the desktop environment
# export DISPLAY=:1
# xfce4-session &
