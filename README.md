# 8-bit Discourse

Greetings, traveler, and welcome to 8-bit Discourse, a web app project built with a React frontend and Rails API backend as the final part of the curriculum for the Flatiron School.

## Usage

The purposed of this site (and my eventual hope for it) is to encourage the adoption of animals from shelters instead of purchasing pets from breeders. With the overwhelming number of animals awaiting adoption, many are euthanized (if they are not held in no-kill shelters), something that will only happen with more frequency unless people seeking pets opt to adopt from these shelters instead of seeking out breeders.

## Ruby version

The Ruby version used is 2.3.3p222.

## Configuration and Installation

To view on a local environment, enter the following commands into terminal to set up the Rails API:
  $ git clone git@github.com:saurookadook/eight-bit-discourse.git
  $ cd eight-bit-discourse
  $ bundle install
  $ rake db:create
  $ rake db:migrate
  $ rake db:seed

To set up the React frontend, open a new tab in terminal and `cd` to the `client` directory, and run `npm install`, `npm run sass:update`, and `npm run build`.

When booting up the app, you will need to run `npm run sass:watch` in the `client` tab (in order for it to watch any potential changes made in the files located in `styles/scss`), and then run `rake start` in the original tab, which should be in the main directory.
