# Listar servicios para tracker

A veces puede ser necesario una pantalla por medio de un servicio que permita reflejar los servcios activos con los diferentes links hacia trackers/logs del sistema. Si bien existen herramientas que complementan esto mismo la mayoria son parte de un sistema general con lo cual depende de la integración de cada sistema. Por ello a partir de un json se genera una tabla que permite reflejar el tipo de servicio, el link del servicio real y el acceso al tracker/log correspondiente. En entornos multinant puede ser util ya que en cada tenant puede ser un mismo servicio pero diferentes nombres internos.


# Summary 
 - [X] permitir listar los servicios como service => publicname => internal name
 - [X] adiciona control de cambios para seguimiento de update de archivo dinamico.
 - [X] Funciona por medio de template asi como por medio de json response.
 - [X] agrega control handler y page error.


# Example

```

File: services.json 

[
    {"name":"nombre de referencia de pila","public":"https://link.de.accesso.al.sistema.dot.tld","internal":"hostname interno de referencia hacia tracker logs"},
    {"name":"nombre de referencia de pila2","public":"https://link.de.accesso.al.sistema.dot.tld","internal":"hostname interno de referencia hacia tracker logs"},
    {"name":"nombre de referencia de pila3","public":"https://link.de.accesso.al.sistema.dot.tld","internal":"hostname interno de referencia hacia tracker logs"},
    {"name":"nombre de referencia de pila4","public":"https://link.de.accesso.al.sistema.dot.tld","internal":"hostname interno de referencia hacia tracker logs"},
    ...,
]


```

El service.json es un archivo finito y simple. Si este fuera parte de otro sistema se puede volcar a disco ya que no tiene un tamaño considerablemente alto. Es una alternativo dinamica a fin de dar visibilidad al area necesaria. También permite extender el modelo a mas features o persistencias.