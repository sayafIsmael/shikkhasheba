# Use PHP 7.2 FPM base image
FROM php:7.2-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    unzip \
    git \
    curl \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install gd \
    && docker-php-ext-install zip

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set working directory
WORKDIR /var/www

# Copy composer files
COPY composer.json composer.lock ./

# Install PHP dependencies (skipping scripts and dev dependencies)
RUN composer install --prefer-dist --no-scripts --no-dev --optimize-autoloader || true

# Copy the entire project into the container
COPY . .

RUN mkdir -p database/seeds && mkdir -p database/seeders

RUN composer dump-autoload --optimize

# Handle autoloading issues, dump autoload if needed
RUN composer dump-autoload --optimize

# Install Node.js 10.x
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - \
    && apt-get install -y nodejs

# Install NPM dependencies
RUN npm install

# Expose port 9000 for PHP-FPM
EXPOSE 9000

# Start the PHP-FPM server
CMD ["php-fpm"]
