var wms_layers = [];

var lyr_Raster_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Raster",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Raster',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Raster_0, 0]);
var format_Sentinel2024_1 = new ol.format.GeoJSON();
var features_Sentinel2024_1 = format_Sentinel2024_1.readFeatures(json_Sentinel2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentinel2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentinel2024_1.addFeatures(features_Sentinel2024_1);
var lyr_Sentinel2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentinel2024_1, 
                style: style_Sentinel2024_1,
                popuplayertitle: 'Sentinel2024',
                interactive: true,
                title: '<img src="styles/legend/Sentinel2024_1.png" /> Sentinel2024'
            });
var format_vmap_2 = new ol.format.GeoJSON();
var features_vmap_2 = format_vmap_2.readFeatures(json_vmap_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vmap_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vmap_2.addFeatures(features_vmap_2);
var lyr_vmap_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vmap_2, 
                style: style_vmap_2,
                popuplayertitle: 'vmap',
                interactive: true,
                title: '<img src="styles/legend/vmap_2.png" /> vmap'
            });
var format_historyczna_3 = new ol.format.GeoJSON();
var features_historyczna_3 = format_historyczna_3.readFeatures(json_historyczna_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_historyczna_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_historyczna_3.addFeatures(features_historyczna_3);
var lyr_historyczna_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_historyczna_3, 
                style: style_historyczna_3,
                popuplayertitle: 'historyczna',
                interactive: true,
                title: '<img src="styles/legend/historyczna_3.png" /> historyczna'
            });
var format_rzekapyneaminimumraz_4 = new ol.format.GeoJSON();
var features_rzekapyneaminimumraz_4 = format_rzekapyneaminimumraz_4.readFeatures(json_rzekapyneaminimumraz_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rzekapyneaminimumraz_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rzekapyneaminimumraz_4.addFeatures(features_rzekapyneaminimumraz_4);
var lyr_rzekapyneaminimumraz_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rzekapyneaminimumraz_4, 
                style: style_rzekapyneaminimumraz_4,
                popuplayertitle: 'rzeka płyneła minimum raz',
                interactive: true,
                title: '<img src="styles/legend/rzekapyneaminimumraz_4.png" /> rzeka płyneła minimum raz'
            });
var format_rzekapyneazawsze_5 = new ol.format.GeoJSON();
var features_rzekapyneazawsze_5 = format_rzekapyneazawsze_5.readFeatures(json_rzekapyneazawsze_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rzekapyneazawsze_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rzekapyneazawsze_5.addFeatures(features_rzekapyneazawsze_5);
var lyr_rzekapyneazawsze_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rzekapyneazawsze_5, 
                style: style_rzekapyneazawsze_5,
                popuplayertitle: 'rzeka płyneła zawsze',
                interactive: true,
                title: '<img src="styles/legend/rzekapyneazawsze_5.png" /> rzeka płyneła zawsze'
            });
var format_zmianyprzebiegurzekiwlatach19902024_6 = new ol.format.GeoJSON();
var features_zmianyprzebiegurzekiwlatach19902024_6 = format_zmianyprzebiegurzekiwlatach19902024_6.readFeatures(json_zmianyprzebiegurzekiwlatach19902024_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zmianyprzebiegurzekiwlatach19902024_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zmianyprzebiegurzekiwlatach19902024_6.addFeatures(features_zmianyprzebiegurzekiwlatach19902024_6);
var lyr_zmianyprzebiegurzekiwlatach19902024_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zmianyprzebiegurzekiwlatach19902024_6, 
                style: style_zmianyprzebiegurzekiwlatach19902024_6,
                popuplayertitle: 'zmiany przebiegu rzeki w latach 1990-2024',
                interactive: true,
    title: 'zmiany przebiegu rzeki w latach 1990-2024<br />\
    <img src="styles/legend/zmianyprzebiegurzekiwlatach19902024_6_0.png" /> -100% - -60%<br />\
    <img src="styles/legend/zmianyprzebiegurzekiwlatach19902024_6_1.png" /> -60%- -20%<br />\
    <img src="styles/legend/zmianyprzebiegurzekiwlatach19902024_6_2.png" /> -20%-0%<br />\
    <img src="styles/legend/zmianyprzebiegurzekiwlatach19902024_6_3.png" /> 0%-20%<br />\
    <img src="styles/legend/zmianyprzebiegurzekiwlatach19902024_6_4.png" /> 20%-100%<br />'
        });
var format_zmianyprzebiegurzekiwlatach19401990_7 = new ol.format.GeoJSON();
var features_zmianyprzebiegurzekiwlatach19401990_7 = format_zmianyprzebiegurzekiwlatach19401990_7.readFeatures(json_zmianyprzebiegurzekiwlatach19401990_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zmianyprzebiegurzekiwlatach19401990_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zmianyprzebiegurzekiwlatach19401990_7.addFeatures(features_zmianyprzebiegurzekiwlatach19401990_7);
var lyr_zmianyprzebiegurzekiwlatach19401990_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zmianyprzebiegurzekiwlatach19401990_7, 
                style: style_zmianyprzebiegurzekiwlatach19401990_7,
                popuplayertitle: 'zmiany przebiegu rzeki w latach 1940- 1990',
                interactive: true,
    title: 'zmiany przebiegu rzeki w latach 1940- 1990<br />\
    <img src="styles/legend/zmianyprzebiegurzekiwlatach19401990_7_0.png" /> -100%- -60%<br />\
    <img src="styles/legend/zmianyprzebiegurzekiwlatach19401990_7_1.png" /> -60%- -20%<br />\
    <img src="styles/legend/zmianyprzebiegurzekiwlatach19401990_7_2.png" /> -20%-0%<br />\
    <img src="styles/legend/zmianyprzebiegurzekiwlatach19401990_7_3.png" /> 0%-20%<br />\
    <img src="styles/legend/zmianyprzebiegurzekiwlatach19401990_7_4.png" /> 20%-100%<br />'
        });

lyr_Raster_0.setVisible(true);lyr_Sentinel2024_1.setVisible(true);lyr_vmap_2.setVisible(true);lyr_historyczna_3.setVisible(true);lyr_rzekapyneaminimumraz_4.setVisible(true);lyr_rzekapyneazawsze_5.setVisible(true);lyr_zmianyprzebiegurzekiwlatach19902024_6.setVisible(true);lyr_zmianyprzebiegurzekiwlatach19401990_7.setVisible(true);
var layersList = [lyr_Raster_0,lyr_Sentinel2024_1,lyr_vmap_2,lyr_historyczna_3,lyr_rzekapyneaminimumraz_4,lyr_rzekapyneazawsze_5,lyr_zmianyprzebiegurzekiwlatach19902024_6,lyr_zmianyprzebiegurzekiwlatach19401990_7];
lyr_Sentinel2024_1.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_vmap_2.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_historyczna_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Id': 'Id', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_rzekapyneaminimumraz_4.set('fieldAliases', {'FID_Raster': 'FID_Raster', 'Id': 'Id', 'gridcode': 'gridcode', 'FID_Bug194': 'FID_Bug194', 'Shape_Leng': 'Shape_Leng', 'Id_1': 'Id_1', 'FID_HYDRO_': 'FID_HYDRO_', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_12': 'ID_12', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_rzekapyneazawsze_5.set('fieldAliases', {'FID_HYDRO_': 'FID_HYDRO_', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'FID_Raster': 'FID_Raster', 'Id_1': 'Id_1', 'gridcode': 'gridcode', 'FID_Bug194': 'FID_Bug194', 'Shape_Leng': 'Shape_Leng', 'Id_12': 'Id_12', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_zmianyprzebiegurzekiwlatach19902024_6.set('fieldAliases', {'GRID_ID': 'GRID_ID', 'Różnicap': 'Różnicap', 'rożnicavm': 'rożnicavm', 'OBJECTID': 'OBJECTID', 'OBJECTID_1': 'OBJECTID_1', 'AREA': 'AREA', 'PERCENTAGE': 'PERCENTAGE', 'OBJECTID_2': 'OBJECTID_2', 'GenerateTe': 'GenerateTe', 'AREA_1': 'AREA_1', 'PERCENTA_1': 'PERCENTA_1', 'OBJECTID_3': 'OBJECTID_3', 'Generate_1': 'Generate_1', 'AREA_12': 'AREA_12', 'PERCENTA_2': 'PERCENTA_2', 'różnicac': 'różnicac', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_zmianyprzebiegurzekiwlatach19401990_7.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'Różnicap': 'Różnicap', 'rożnicavm': 'rożnicavm', 'różnicac': 'różnicac', });
lyr_Sentinel2024_1.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_vmap_2.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_historyczna_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Id': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_rzekapyneaminimumraz_4.set('fieldImages', {'FID_Raster': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'FID_Bug194': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Id_1': 'TextEdit', 'FID_HYDRO_': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_12': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_rzekapyneazawsze_5.set('fieldImages', {'FID_HYDRO_': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'FID_Raster': 'TextEdit', 'Id_1': 'TextEdit', 'gridcode': 'TextEdit', 'FID_Bug194': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Id_12': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_zmianyprzebiegurzekiwlatach19902024_6.set('fieldImages', {'GRID_ID': 'TextEdit', 'Różnicap': 'TextEdit', 'rożnicavm': 'TextEdit', 'OBJECTID': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'AREA': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'GenerateTe': 'TextEdit', 'AREA_1': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'Generate_1': 'TextEdit', 'AREA_12': 'TextEdit', 'PERCENTA_2': 'TextEdit', 'różnicac': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_zmianyprzebiegurzekiwlatach19401990_7.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'Różnicap': 'TextEdit', 'rożnicavm': 'TextEdit', 'różnicac': 'TextEdit', });
lyr_Sentinel2024_1.set('fieldLabels', {'Id': 'inline label - always visible', 'gridcode': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_vmap_2.set('fieldLabels', {'DLUG_BRZEG': 'inline label - always visible', 'DLUGOSC': 'inline label - always visible', 'DOKLADNOSC': 'inline label - always visible', 'DOSTEPNOSC': 'inline label - always visible', 'GLEBOKOSC': 'inline label - always visible', 'ISTNIENIE': 'inline label - always visible', 'KAT_HYDRO': 'inline label - always visible', 'KAT_PLYWU': 'inline label - always visible', 'KAT_POJEMN': 'inline label - always visible', 'KAT_POLOZ': 'inline label - always visible', 'KAT_WODY': 'inline label - always visible', 'NAJW_WYS': 'inline label - always visible', 'NAZWA': 'inline label - always visible', 'OBIEKT': 'inline label - always visible', 'OPR_UPUST': 'inline label - always visible', 'OPR_ZBURZ': 'inline label - always visible', 'POCH_HYDRO': 'inline label - always visible', 'PRED_PRZEP': 'inline label - always visible', 'SREDNIA_GL': 'inline label - always visible', 'STAT_EKSPL': 'inline label - always visible', 'SZEROKOSC': 'inline label - always visible', 'TAJNOSC': 'inline label - always visible', 'TYP_AKWED': 'inline label - always visible', 'TYP_WYBRZ': 'inline label - always visible', 'ZN_ORIENT': 'inline label - always visible', 'POWIERZCHN': 'inline label - always visible', 'ID': 'inline label - always visible', 'Shape_Leng': 'no label', 'Shape_Area': 'inline label - always visible', });
lyr_historyczna_3.set('fieldLabels', {'Shape_Leng': 'inline label - always visible', 'Id': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_rzekapyneaminimumraz_4.set('fieldLabels', {'FID_Raster': 'inline label - always visible', 'Id': 'inline label - always visible', 'gridcode': 'inline label - always visible', 'FID_Bug194': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Id_1': 'inline label - always visible', 'FID_HYDRO_': 'inline label - always visible', 'DLUG_BRZEG': 'inline label - always visible', 'DLUGOSC': 'inline label - always visible', 'DOKLADNOSC': 'inline label - always visible', 'DOSTEPNOSC': 'inline label - always visible', 'GLEBOKOSC': 'inline label - always visible', 'ISTNIENIE': 'inline label - always visible', 'KAT_HYDRO': 'inline label - always visible', 'KAT_PLYWU': 'inline label - always visible', 'KAT_POJEMN': 'inline label - always visible', 'KAT_POLOZ': 'inline label - always visible', 'KAT_WODY': 'inline label - always visible', 'NAJW_WYS': 'inline label - always visible', 'NAZWA': 'inline label - always visible', 'OBIEKT': 'inline label - always visible', 'OPR_UPUST': 'inline label - always visible', 'OPR_ZBURZ': 'inline label - always visible', 'POCH_HYDRO': 'inline label - always visible', 'PRED_PRZEP': 'inline label - always visible', 'SREDNIA_GL': 'inline label - always visible', 'STAT_EKSPL': 'inline label - always visible', 'SZEROKOSC': 'inline label - always visible', 'TAJNOSC': 'inline label - always visible', 'TYP_AKWED': 'inline label - always visible', 'TYP_WYBRZ': 'inline label - always visible', 'ZN_ORIENT': 'inline label - always visible', 'POWIERZCHN': 'inline label - always visible', 'ID_12': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_rzekapyneazawsze_5.set('fieldLabels', {'FID_HYDRO_': 'inline label - always visible', 'DLUG_BRZEG': 'inline label - always visible', 'DLUGOSC': 'inline label - always visible', 'DOKLADNOSC': 'inline label - always visible', 'DOSTEPNOSC': 'inline label - always visible', 'GLEBOKOSC': 'inline label - always visible', 'ISTNIENIE': 'inline label - always visible', 'KAT_HYDRO': 'inline label - always visible', 'KAT_PLYWU': 'inline label - always visible', 'KAT_POJEMN': 'inline label - always visible', 'KAT_POLOZ': 'inline label - always visible', 'KAT_WODY': 'inline label - always visible', 'NAJW_WYS': 'inline label - always visible', 'NAZWA': 'inline label - always visible', 'OBIEKT': 'inline label - always visible', 'OPR_UPUST': 'inline label - always visible', 'OPR_ZBURZ': 'inline label - always visible', 'POCH_HYDRO': 'inline label - always visible', 'PRED_PRZEP': 'inline label - always visible', 'SREDNIA_GL': 'inline label - always visible', 'STAT_EKSPL': 'inline label - always visible', 'SZEROKOSC': 'inline label - always visible', 'TAJNOSC': 'inline label - always visible', 'TYP_AKWED': 'inline label - always visible', 'TYP_WYBRZ': 'inline label - always visible', 'ZN_ORIENT': 'inline label - always visible', 'POWIERZCHN': 'inline label - always visible', 'ID': 'inline label - always visible', 'FID_Raster': 'inline label - always visible', 'Id_1': 'inline label - always visible', 'gridcode': 'inline label - always visible', 'FID_Bug194': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Id_12': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_zmianyprzebiegurzekiwlatach19902024_6.set('fieldLabels', {'GRID_ID': 'inline label - always visible', 'Różnicap': 'inline label - always visible', 'rożnicavm': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'OBJECTID_1': 'inline label - always visible', 'AREA': 'inline label - always visible', 'PERCENTAGE': 'inline label - always visible', 'OBJECTID_2': 'inline label - always visible', 'GenerateTe': 'inline label - always visible', 'AREA_1': 'inline label - always visible', 'PERCENTA_1': 'inline label - always visible', 'OBJECTID_3': 'inline label - always visible', 'Generate_1': 'inline label - always visible', 'AREA_12': 'inline label - always visible', 'PERCENTA_2': 'inline label - always visible', 'różnicac': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_zmianyprzebiegurzekiwlatach19401990_7.set('fieldLabels', {'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'GRID_ID': 'inline label - always visible', 'Różnicap': 'inline label - always visible', 'rożnicavm': 'inline label - always visible', 'różnicac': 'inline label - always visible', });
lyr_zmianyprzebiegurzekiwlatach19401990_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});