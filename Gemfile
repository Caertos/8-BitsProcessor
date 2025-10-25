source "https://rubygems.org"

# Gem principal de Jekyll
gem "jekyll", "~> 4.3"

# Tema usado
gem "minima", "~> 2.5"

# Plugins de Jekyll
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

# Para sistemas Windows
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Mejora de rendimiento en Windows
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock para JRuby
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Para compatibilidad con GitHub Pages (opcional)
# gem "github-pages", group: :jekyll_plugins
