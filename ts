#!/bin/bash
tmux new-session -d -s maestro

tmux new-window -t maestro:1 -n editor
tmux send-keys -t maestro:1 'cd ~/git/maestro' C-m
tmux send-keys -t maestro:1 'emacs' C-m

tmux new-window -t maestro:2 -n services
tmux send-keys -t maestro:2 'cd ~/git/maestro' C-m
tmux send-keys -t maestro:2 'clear' C-m
tmux split-window -h
tmux send-keys -t maestro:2.2 'cd ~/git/maestro' C-m
tmux send-keys -t maestro:2.2 'clear' C-m

tmux send-keys -t maestro:2.1 'killall postgres' C-m
tmux send-keys -t maestro:2.1 'rm ~/git/maestro/database/postmaster.pid' C-m
tmux send-keys -t maestro:2.1 'clear' C-m
tmux send-keys -t maestro:2.1 'postgres -D ~/git/maestro/database' C-m

tmux new-window -t maestro:3 -n servers
tmux send-keys -t maestro:3 'cd ~/git/maestro' C-m
tmux send-keys -t maestro:3 'clear' C-m

tmux new-window -t maestro:4 -n rspec
tmux send-keys -t maestro:4 'cd ~/git/maestro' C-m
tmux end-keys -t maestro:4 'clear' C-m

tmux new-window -t maestro:5 -n bash
tmux send-keys -t maestro:5 'cd ~/git/maestro' C-m
tmux send-keys -t maestro:5 'clear' C-m


tmux new-window -t maestro:6 -n bash
tmux send-keys -t maestro:6 'cd ~/git/maestro' C-m
tmux send-keys -t maestro:6 'clear' C-m


tmux new-window -t maestro:7 -n bash
tmux send-keys -t maestro:7 'cd ~/git/maestro' C-m
tmux send-keys -t maestro:7 'clear' C-m

tmux select-window -t maestro:1
tmux -2 attach-session -t maestro
