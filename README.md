# Website for Iron Claw, FRC Team 972

## Development

To run the website, you need to have ruby installed.
For OS X/macOS, you can use homebrew.

Then run `gem install bundler` and `bundle install` to install dependencies.

To serve this website, run `jekyll serve`. It will automatically
rebuild the website whenever you change anything. You can then view
the site at `localhost:4000`

## Optimizing images

You should not directly add pictures to the website. Most images aren't optimized
for the web, increasing load time. When you add a new image, run `rake optimize`
to optimize the image for the web. You need to have `pngcrush`, `jpegtran`, and `gifsicle`
installed to be able to run this. These programs can be installed on Ubuntu with
`sudo apt-get install pngcrush gifsicle libjpeg-turbo-progs`.

## Contributing

:warning: **Please do not push directly to the `master` branch!** :warning:

Create a new branch with `git checkout -b <branch name>`. Push that to GitHub and
open a pull request. Have at least one other member review it for spelling errors
and style. Remember that everything pushed to the `master` branch goes live instantly.

## Things to check when reviewing Pull Requests

When reviewing, make sure

- There are no spelling mistakes.
- Images are optimized (See if running `rake optimize` does anything)
- The website still works on smartphones (Use http://www.responsinator.com/ to check the local webserver http://localhost:4000).
- The features are not too cutting edge. We want to support modern versions of Chrome, modern and ESL releases of Firefox, and Internet Explorer 10+ (Use https://saucelabs.com/manual and https://ngrok.com/ to do this).
- The website works without javascript, as many people surf the web with javascript disabled.
