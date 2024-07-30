#!/bin/bash

# Start the VNC server
tightvncserver :1 -geometry 1280x720 -depth 24

# Start the desktop environment
export DISPLAY=:1
xfce4-session &
