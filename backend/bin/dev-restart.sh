#!/bin/bash

while true
do
  npm run dev
  echo "App crashed. Restarting in 5 seconds..."
  sleep 5
done