#!/bin/bash

# Wait for MySQL to be available
/usr/local/bin/wait-for-it.sh db:3306 --timeout=30 --strict -- echo "MySQL is up"

# Run artisan commands
php artisan optimize:clear
php artisan migrate:fresh --seed

# Start the Laravel development server
php artisan serve --host=0.0.0.0 --port=8000 &
# Start npm watch
npm run watch
# Wait indefinitely to keep the container running
wait
