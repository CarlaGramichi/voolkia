-- --------------------------------------------------------
-- Query para obtener el Costo total de cada Carrier
-- Propuesta para el mes 1 considerando un presupuesto de $3.000.000:
-- Se deberían eliminar, temporalmente, los envíos al resto y hacer solo a BsAs
-- o AMBA. 
-- --------------------------------------------------------


SELECT 
    
    NAME AS Carrier,
    SUM(costo * cantidad_envios) AS CostoTotal

FROM
    prueba_sql.carrier
        INNER JOIN
    costo ON carrier_id = carrierId
        INNER JOIN
    cantidad_envios ON costo.zona = cantidad_envios.zona
    WHERE mes = 1 
    GROUP BY carrier.name
