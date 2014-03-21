VINCI
============

VINCI is a sleek Resources visualizer application written in PHP


REQUIREMENTS
------------

1. PHP 5.4+


INSTALLATION
------------

Download VINCI from its [github repository](https://github.com/marizmelo/VINCI).

Place your images on the **/resource** directory. Feel free to create sub-folders inside of it with more images.


RUNNING 
--------

You can run VINCI using the following command*:

    php -S 0.0.0.0:8080

Using your favorite web browser access the accress **http://0.0.0.0:8080** you should be able to see all your images now.

**ATTENTION:** 

If you are planning to host VINCI we highly recommend you to use Apache or Nginx web servers since the PHP built in web-server is not meant for production environments.


TODO
----

+ Integration with SQLite
+ Generate thumbnails of images
+ Compare images
+ Favorites
+ Download set of images