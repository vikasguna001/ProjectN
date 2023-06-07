#################
## DEVELOPMENT ##
#################
# specify node verson and image
# also choose a unique name to target later
FROM node:18 As development

# We don't need the standalone Chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

# # Install Google Chrome Stable and fonts
# # Note: this installs the necessary libs to make the browser work with Puppeteer.
RUN apt-get update && apt-get install gnupg wget -y && \
  wget --quiet --output-document=- https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor > /etc/apt/trusted.gpg.d/google-archive.gpg && \
  sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
  apt-get update && \
  apt-get install google-chrome-stable -y --no-install-recommends && \
  rm -rf /var/lib/apt/lists/*
  
# specify working directory inside container
WORKDIR /usr/src/app/backend

# copy all package*-files into container
# (container is WORKDIR)
# (package.json, package-lock.json)
COPY package.json ./

# install dev dependencies only
RUN npm install

# bundle app sources
COPY . .

# build everything to dist folder
RUN npm run build

EXPOSE 3500

#################
## PRODDUCTION ##
#################
FROM node:18 as production

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

# We don't need the standalone Chromium
# ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

# # Install Google Chrome Stable and fonts
# # Note: this installs the necessary libs to make the browser work with Puppeteer.
# RUN apt-get update && apt-get install curl gnupg -y \
#   && curl --location --silent https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
#   && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
#   && apt-get update \
#   && apt-get install google-chrome-stable -y --no-install-recommends \
#   && rm -rf /var/lib/apt/lists/*

# set working directory
WORKDIR /usr/src/app/backend

# copy package*-files into container
COPY package.json ./

# install production dependencies only
RUN npm install --only=production

# bundle all sources
COPY . .

# copy from previous stage
COPY --from=development /usr/src/app/backend/dist ./dist

# run commands
CMD ["node", "dist/main"]
