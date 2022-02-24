# Listar servicios para tracker

A veces puede ser necesario una pantalla por medio de un servicio que permita reflejar los servcios activos con los diferentes links hacia logs del sistema. Si bien existen herramientas que complementan esto mismo la mayoria son parte de un sistema general con lo cual depende de la integración de cada sistema. Por ello a partir de un json se genera una tabla que permite reflejar el tipo de servicio, el link hacia el y el acceso al log.


# Summary 
 - [x] permitir listar los servicios como service => publicname => internal name
 - [X] Funciona por medio de template asi como por medio de json response.

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

El service.json es un archivo finito con lo cual podemos tenerlo presente de forma sencilla y si esta en otro sistema se pued volcar a disco ya no tiene un tamaño considerablemente alto. Al costo de dar visibilidad al area necesaria. También permite exptender el modelo a mas features o persistencias.