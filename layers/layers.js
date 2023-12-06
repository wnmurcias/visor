var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Grupo5_7Oct2018_EPSG9377copiar_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Grupo5_7Oct2018_EPSG9377 copiar",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Grupo5_7Oct2018_EPSG9377copiar_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8223051.913394, 541309.853961, -8221039.828384, 544344.704069]
                            })
                        });
var format_5000_superficiesdeagua_2 = new ol.format.GeoJSON();
var features_5000_superficiesdeagua_2 = format_5000_superficiesdeagua_2.readFeatures(json_5000_superficiesdeagua_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5000_superficiesdeagua_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5000_superficiesdeagua_2.addFeatures(features_5000_superficiesdeagua_2);
var lyr_5000_superficiesdeagua_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5000_superficiesdeagua_2, 
                style: style_5000_superficiesdeagua_2,
                interactive: true,
                title: '<img src="styles/legend/5000_superficiesdeagua_2.png" /> 5000_superficies de agua'
            });
var format_2320_construccion_R_3 = new ol.format.GeoJSON();
var features_2320_construccion_R_3 = format_2320_construccion_R_3.readFeatures(json_2320_construccion_R_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2320_construccion_R_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2320_construccion_R_3.addFeatures(features_2320_construccion_R_3);
var lyr_2320_construccion_R_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2320_construccion_R_3, 
                style: style_2320_construccion_R_3,
                interactive: true,
                title: '<img src="styles/legend/2320_construccion_R_3.png" /> 2320_construccion_R'
            });
var format_4107_zona_de_arboles_4 = new ol.format.GeoJSON();
var features_4107_zona_de_arboles_4 = format_4107_zona_de_arboles_4.readFeatures(json_4107_zona_de_arboles_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4107_zona_de_arboles_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4107_zona_de_arboles_4.addFeatures(features_4107_zona_de_arboles_4);
var lyr_4107_zona_de_arboles_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4107_zona_de_arboles_4, 
                style: style_4107_zona_de_arboles_4,
                interactive: true,
                title: '<img src="styles/legend/4107_zona_de_arboles_4.png" /> 4107_zona_de_arboles'
            });
var format_5128_jaguey_5 = new ol.format.GeoJSON();
var features_5128_jaguey_5 = format_5128_jaguey_5.readFeatures(json_5128_jaguey_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5128_jaguey_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5128_jaguey_5.addFeatures(features_5128_jaguey_5);
var lyr_5128_jaguey_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5128_jaguey_5, 
                style: style_5128_jaguey_5,
                interactive: true,
                title: '<img src="styles/legend/5128_jaguey_5.png" /> 5128_jaguey'
            });
var format_corte_curvas_40_metros_6 = new ol.format.GeoJSON();
var features_corte_curvas_40_metros_6 = format_corte_curvas_40_metros_6.readFeatures(json_corte_curvas_40_metros_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_corte_curvas_40_metros_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_corte_curvas_40_metros_6.addFeatures(features_corte_curvas_40_metros_6);
var lyr_corte_curvas_40_metros_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_corte_curvas_40_metros_6, 
                style: style_corte_curvas_40_metros_6,
                interactive: true,
                title: '<img src="styles/legend/corte_curvas_40_metros_6.png" /> corte_curvas_40_metros'
            });
var format_2311_cerca_alambre_madera_7 = new ol.format.GeoJSON();
var features_2311_cerca_alambre_madera_7 = format_2311_cerca_alambre_madera_7.readFeatures(json_2311_cerca_alambre_madera_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2311_cerca_alambre_madera_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2311_cerca_alambre_madera_7.addFeatures(features_2311_cerca_alambre_madera_7);
var lyr_2311_cerca_alambre_madera_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2311_cerca_alambre_madera_7, 
                style: style_2311_cerca_alambre_madera_7,
                interactive: true,
                title: '<img src="styles/legend/2311_cerca_alambre_madera_7.png" /> 2311_cerca_alambre_madera'
            });
var format_5000_superficiesdeagua_8 = new ol.format.GeoJSON();
var features_5000_superficiesdeagua_8 = format_5000_superficiesdeagua_8.readFeatures(json_5000_superficiesdeagua_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5000_superficiesdeagua_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5000_superficiesdeagua_8.addFeatures(features_5000_superficiesdeagua_8);
var lyr_5000_superficiesdeagua_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5000_superficiesdeagua_8, 
                style: style_5000_superficiesdeagua_8,
                interactive: true,
    title: '5000_superficies de agua<br />\
    <img src="styles/legend/5000_superficiesdeagua_8_0.png" /> 1<br />\
    <img src="styles/legend/5000_superficiesdeagua_8_1.png" /> 2<br />\
    <img src="styles/legend/5000_superficiesdeagua_8_2.png" /> <br />'
        });
var format_3101_vias_9 = new ol.format.GeoJSON();
var features_3101_vias_9 = format_3101_vias_9.readFeatures(json_3101_vias_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3101_vias_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3101_vias_9.addFeatures(features_3101_vias_9);
var lyr_3101_vias_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3101_vias_9, 
                style: style_3101_vias_9,
                interactive: true,
                title: '<img src="styles/legend/3101_vias_9.png" /> 3101_vias'
            });
var format_2320_construccion_10 = new ol.format.GeoJSON();
var features_2320_construccion_10 = format_2320_construccion_10.readFeatures(json_2320_construccion_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2320_construccion_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2320_construccion_10.addFeatures(features_2320_construccion_10);
var lyr_2320_construccion_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2320_construccion_10, 
                style: style_2320_construccion_10,
                interactive: true,
                title: '<img src="styles/legend/2320_construccion_10.png" /> 2320_construccion'
            });
var format_3101_vias_11 = new ol.format.GeoJSON();
var features_3101_vias_11 = format_3101_vias_11.readFeatures(json_3101_vias_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3101_vias_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3101_vias_11.addFeatures(features_3101_vias_11);
var lyr_3101_vias_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3101_vias_11, 
                style: style_3101_vias_11,
                interactive: true,
    title: '3101_vias<br />\
    <img src="styles/legend/3101_vias_11_0.png" /> 2<br />\
    <img src="styles/legend/3101_vias_11_1.png" /> 3<br />\
    <img src="styles/legend/3101_vias_11_2.png" /> 4<br />\
    <img src="styles/legend/3101_vias_11_3.png" /> 5<br />\
    <img src="styles/legend/3101_vias_11_4.png" /> <br />'
        });
var format_8000_toponimia_12 = new ol.format.GeoJSON();
var features_8000_toponimia_12 = format_8000_toponimia_12.readFeatures(json_8000_toponimia_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8000_toponimia_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8000_toponimia_12.addFeatures(features_8000_toponimia_12);
var lyr_8000_toponimia_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_8000_toponimia_12, 
                style: style_8000_toponimia_12,
                interactive: true,
                title: '<img src="styles/legend/8000_toponimia_12.png" /> 8000_toponimia'
            });
var group_11111 = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_Grupo5_7Oct2018_EPSG9377copiar_1,lyr_5000_superficiesdeagua_2,lyr_2320_construccion_R_3,lyr_4107_zona_de_arboles_4,lyr_5128_jaguey_5,lyr_corte_curvas_40_metros_6,lyr_2311_cerca_alambre_madera_7,lyr_5000_superficiesdeagua_8,lyr_3101_vias_9,lyr_2320_construccion_10,lyr_3101_vias_11,lyr_8000_toponimia_12,],
                                title: "11111"});

lyr_OSMStandard_0.setVisible(true);lyr_Grupo5_7Oct2018_EPSG9377copiar_1.setVisible(true);lyr_5000_superficiesdeagua_2.setVisible(true);lyr_2320_construccion_R_3.setVisible(true);lyr_4107_zona_de_arboles_4.setVisible(true);lyr_5128_jaguey_5.setVisible(true);lyr_corte_curvas_40_metros_6.setVisible(true);lyr_2311_cerca_alambre_madera_7.setVisible(true);lyr_5000_superficiesdeagua_8.setVisible(true);lyr_3101_vias_9.setVisible(true);lyr_2320_construccion_10.setVisible(true);lyr_3101_vias_11.setVisible(true);lyr_8000_toponimia_12.setVisible(true);
var layersList = [group_11111];
lyr_5000_superficiesdeagua_2.set('fieldAliases', {'id': 'id', 'Tipo': 'Tipo', 'Nombre': 'Nombre', });
lyr_2320_construccion_R_3.set('fieldAliases', {'id': 'id', });
lyr_4107_zona_de_arboles_4.set('fieldAliases', {'id': 'id', });
lyr_5128_jaguey_5.set('fieldAliases', {'id': 'id', });
lyr_corte_curvas_40_metros_6.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', 'cota ind': 'cota ind', });
lyr_2311_cerca_alambre_madera_7.set('fieldAliases', {'id': 'id', });
lyr_5000_superficiesdeagua_8.set('fieldAliases', {'id': 'id', 'Tipo': 'Tipo', 'Nombre': 'Nombre', });
lyr_3101_vias_9.set('fieldAliases', {'id': 'id', 'Clasi': 'Clasi', 'nombre via': 'nombre via', });
lyr_2320_construccion_10.set('fieldAliases', {'id': 'id', });
lyr_3101_vias_11.set('fieldAliases', {'id': 'id', 'Clasi': 'Clasi', 'nombre via': 'nombre via', });
lyr_8000_toponimia_12.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_5000_superficiesdeagua_2.set('fieldImages', {'id': 'Range', 'Tipo': 'Range', 'Nombre': 'TextEdit', });
lyr_2320_construccion_R_3.set('fieldImages', {'id': 'Range', });
lyr_4107_zona_de_arboles_4.set('fieldImages', {'id': 'Range', });
lyr_5128_jaguey_5.set('fieldImages', {'id': 'Range', });
lyr_corte_curvas_40_metros_6.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', 'cota ind': 'Range', });
lyr_2311_cerca_alambre_madera_7.set('fieldImages', {'id': 'Range', });
lyr_5000_superficiesdeagua_8.set('fieldImages', {'id': 'Range', 'Tipo': 'Range', 'Nombre': 'TextEdit', });
lyr_3101_vias_9.set('fieldImages', {'id': '', 'Clasi': '', 'nombre via': '', });
lyr_2320_construccion_10.set('fieldImages', {'id': '', });
lyr_3101_vias_11.set('fieldImages', {'id': 'Range', 'Clasi': 'Range', 'nombre via': 'TextEdit', });
lyr_8000_toponimia_12.set('fieldImages', {'id': 'Range', 'Nombre': 'TextEdit', });
lyr_5000_superficiesdeagua_2.set('fieldLabels', {});
lyr_2320_construccion_R_3.set('fieldLabels', {});
lyr_4107_zona_de_arboles_4.set('fieldLabels', {});
lyr_5128_jaguey_5.set('fieldLabels', {});
lyr_corte_curvas_40_metros_6.set('fieldLabels', {});
lyr_2311_cerca_alambre_madera_7.set('fieldLabels', {});
lyr_5000_superficiesdeagua_8.set('fieldLabels', {});
lyr_3101_vias_9.set('fieldLabels', {});
lyr_2320_construccion_10.set('fieldLabels', {});
lyr_3101_vias_11.set('fieldLabels', {});
lyr_8000_toponimia_12.set('fieldLabels', {});
lyr_8000_toponimia_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});