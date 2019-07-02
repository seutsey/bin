#!/bin/bash
tmux new-session -d -s philips

tmux send-keys -t philips:1 'rvm use 2.1.0' C-m
tmux send-keys -t philips:1 'cd ~/projects/s4' C-m
tmux send-keys -t philips:1 'emacs' C-m

tmux new-window -t philips:2 -n services
tmux send-keys -t philips:2 'cd ~/projects/s4' C-m
tmux send-keys -t philips:2 'rvm use 2.5.3' C-m
tmux send-keys -t philips:2 'clear' C-m
tmux send-keys -t philips:2 'RAILS_ENV=development QUEUE=* COUNT='5' rake resque:workers' C-m
tmux split-window -h
tmux send-keys -t philips:2.2 'cd ~/projects/s4' C-m
tmux send-keys -t philips:2.2 'rvm use 2.5.3' C-m
tmux send-keys -t philips:2.2 'clear' C-m
tmux send-keys -t philips:2.2 'redis-server' C-m

tmux new-window -t philips:3 -n servers
tmux send-keys -t philips:3 'cd ~/projects/s4' C-m
tmux send-keys -t philips:3 'rvm use 2.5.3' C-m
tmux send-keys -t philips:3 'clear' C-m

tmux new-window -t philips:4 -n rspec
tmux send-keys -t philips:4 'cd ~/pojects/s4' C-m
tmux send-keys -t philips:4 'rvm use 2.5.3' C-m
tmux end-keys -t philips:4 'clear' C-m

tmux new-window -t philips:5 -n bash
tmux send-keys -t philips:5 'cd ~/projects/s4' C-m
tmux send-keys -t philips:5 'rvm use 2.5.3' C-m
tmux send-keys -t philips:5 'clear' C-m


tmux new-window -t philips:6 -n bash
tmux send-keys -t philips:6 'cd ~/projects/s4' C-m
tmux send-keys -t philips:6 'rvm use 2.5.3' C-m
tmux send-keys -t philips:6 'clear' C-m


tmux new-window -t philips:7 -n bash
tmux send-keys -t philips:7 'cd ~/projects/s4' C-m
tmux send-keys -t philips:7 'rvm use 2.5.3' C-m
tmux send-keys -t philips:7 'clear' C-m

tmux select-window -t philips:1
tmux -2 attach-session -t philips