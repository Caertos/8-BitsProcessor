# Cómo Probar Jekyll Localmente

## 1. Instalar Ruby y dependencias

```bash
# Instalar Ruby y herramientas de desarrollo
sudo apt update
sudo apt install ruby-full build-essential zlib1g-dev

# Configurar el entorno de gems (evitar usar sudo)
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

## 2. Instalar Jekyll y Bundler

```bash
gem install jekyll bundler
```

## 3. Crear Gemfile (si no existe)

En la raíz del proyecto, crea un archivo `Gemfile` con:

```ruby
source "https://rubygems.org"

gem "jekyll", "~> 4.3"
gem "minima", "~> 2.5"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "watcher", "~> 1.1.0" if Gem.win_platform?

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
```

## 4. Instalar las dependencias

```bash
bundle install
```

## 5. Ejecutar el servidor local

```bash
bundle exec jekyll serve
```

O con live reload:

```bash
bundle exec jekyll serve --livereload
```

## 6. Ver tu sitio

Abre tu navegador y visita: **http://localhost:4000**

## 🎯 Comandos Útiles

- **Servir con drafts**: `bundle exec jekyll serve --drafts`
- **Servir en otra IP/Puerto**: `bundle exec jekyll serve --host 0.0.0.0 --port 4001`
- **Build sin servir**: `bundle exec jekyll build`
- **Limpiar archivos generados**: `bundle exec jekyll clean`

## �� Atajos Rápidos

### Opción Rápida (sin Gemfile):
```bash
jekyll serve
```

### Con actualización automática:
```bash
bundle exec jekyll serve --livereload --open-url
```

## 📝 Notas

- El sitio se regenera automáticamente cuando haces cambios
- Los archivos generados están en `_site/` (no commitear esta carpeta)
- Para detener el servidor: `Ctrl + C`
