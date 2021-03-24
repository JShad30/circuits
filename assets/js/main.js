const circuits = [
    {
        id: 1,
        name: "Albert Park",
        location: "Melbourne",
        country: "Australia",
        length: "3.296",
        type: "Street Circuit",
        direction: "Clockwise",
        description: "The Albert Park Circuit is a motorsport street circuit around Albert Park Lake, three kilometres south of central Melbourne. It is used annually as a circuit for the traditional Formula One season-opening Australian Grand Prix, the supporting Supercars Championship Melbourne 400 and other associated support races. The circuit has an FIA Grade 1 license. Although the entire track consists of normally public roads, each sector includes medium to high-speed characteristics more commonly associated with dedicated racetracks facilitated by grass and gravel run-off safety zones that are reconstructed annually. However, the circuit also has characteristics of a street circuit's enclosed nature due to concrete barriers annually built along the Lakeside Drive curve, in particular, where run-off is not available due to the proximity of the lake shore.",
        opened: "1996",
        layout: "../images/layouts/melbourne.png",
        photo: "images/photo/melbourne_image.jpg",
        url: "https://www.grandprix.com.au/"
    },
    {
        id: 2,
        name: "Bahrain International Circuit",
        location: "Sakhir",
        country: "Bahrain",
        length: "3.363",
        type: "Road Course",
        direction: "Clockwise",
        description: "The Bahrain International Circuit (Arabic: حلبة البحرين الدولية) is a motorsport venue opened in 2004 and used for drag racing, GP2 Series and the annual Bahrain Grand Prix. The 2004 Grand Prix was the first held in the Middle East. Beginning in 2006, Australian V8 Supercars raced at the BIC, with the event known as the Desert 400. However, the V8 Supercars did not return for the 2011 V8 Supercar season. 24 Hour endurance races are also hosted at BIC. The circuit has a FIA Grade 1 license.",
        opened: "2004",
        layout: "Lorem",
        photo: "Lorem",
        url: "https://www.bahraingp.com/"
    },
    {
        id: 3,
        name: "Sepang International Circuit",
        location: "Kuala Lumpar",
        country: "Malaysia",
        length: "3.445",
        type: "Road Course",
        direction: "Clockwise",       
        description: "The Sepang International Circuit (Malay: Litar Antarabangsa Sepang) is a motorsport race track in Sepang, Selangor, Malaysia. It is located approximately 45 km (28 mi) south of Kuala Lumpur, and close to Kuala Lumpur International Airport. It hosted the Formula One Malaysian Grand Prix between 1999 and 2017, and is also the venue for the Malaysian Motorcycle Grand Prix, the Malaysia Merdeka Endurance Race and other major motorsport events.",
        opened: "1999",
        layout: "Lorem",
        photo: "Lorem",
        url: "https://www.sepangcircuit.com/home"
    },
    {
        id: 4,
        name: "Circuit de Catalunya",
        location: "Barcelona",
        country: "Spain",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",        
        description: "The Circuit de Barcelona-Catalunya is a motorsport race track in Montmeló, Catalonia, Spain. With long straights and a variety of corners, the Circuit de Barcelona-Catalunya is seen as an all-rounder circuit. The track has stands with a capacity of 140,700. The circuit has FIA Grade 1 license. Until 2013 the track was known only as the Circuit de Catalunya, before a sponsorship deal with Barcelona City Council added Barcelona to the track's title.",
        layout: "Lorem",
        photo: "Lorem",
        url: "https://www.circuitcat.com/en/"
    },
    {
        id: 5,
        name: "Circuit Enzo e Dino Ferrari, Imola",
        location: "Emilia Romagna",
        country: "Italy",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",        
        description: "The Autodromo Internazionale Enzo e Dino Ferrari is a race track in the Italian town Imola, 40 kilometres (24.9 mi) east of Bologna. It is one of the few major international circuits to run in an anti-clockwise direction. The circuit is named after Ferrari's late founder, Enzo Ferrari, and his son, Alfredo Ferrari, who died in 1956 at age 24. The circuit has a FIA Grade One license. It was the venue for the San Marino Grand Prix. For many years, two Grands Prix were held in Italy every year, so the race held at Imola was named after the nearby state. It also hosted the 1980 Italian Grand Prix, although the Italian Grand Prix usually takes place at the Autodromo Nazionale Monza. When Formula One visits Imola, it is seen as the home circuit of Scuderia Ferrari, and masses of supporters come out to support the local team.",
        layout: "Lorem",
        photo: "Lorem",
        url: "http://www.autodromoimola.it/?lang=en"
    },
    {
        id: 6,
        name: "Silverstone",
        location: "Northamptonshire",
        country: "Great Britain",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",        
        description: "Silverstone Circuit is a motor racing circuit in England, near the Northamptonshire villages of Silverstone and Whittlebury. It is the current home of the British Grand Prix, which it first hosted as the 1948 British Grand Prix. The 1950 British Grand Prix at Silverstone was the first race in the newly created World Championship of Drivers. The race rotated between Silverstone, Aintree and Brands Hatch from 1955 to 1986, but settled permanently at the Silverstone track in 1987. The circuit also hosts the British round of the MotoGP series.",
        layout: "Lorem",
        photo: "Lorem",
        url: "https://www.silverstone.co.uk/"
    },
    {
        id: 7,
        name: "Brands Hatch",
        location: "Kent",
        country: "Great Britain",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",        
        description: "Brands Hatch Circuit is a motor racing circuit in West Kingsdown, Kent, England, United Kingdom. Originally used as a grasstrack motorcycle circuit on farmland, it hosted 12 runnings of the British Grand Prix between 1964 and 1986 and currently hosts many British and International racing events. The venue is owned and operated by Jonathan Palmer's MotorSport Vision organisation.",
        layout: "Lorem",
        photo: "Lorem",
        url: "http://www.brandshatch.co.uk/"
    },
    {
        id: 8,
        name: "Daytona International Speedway",
        location: "Daytona, Florida",
        country: "United States",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",
        description: "Daytona International Speedway is a race track in Daytona Beach, Florida, United States. Since opening in 1959, it has been the home of the Daytona 500, the most prestigious race in NASCAR as well as its season opening event. In addition to NASCAR, the track also hosts races of ARCA, AMA Superbike, IMSA, SCCA, and Motocross. The track features multiple layouts including the primary 2.5-mile (4.0 km) high-speed tri-oval, a 3.56-mile (5.73 km) sports car course, a 2.95-mile (4.75 km) motorcycle course, and a 1,320-foot (400 m) karting and motorcycle flat-track. The track's 180-acre (73 ha) infield includes the 29-acre (12 ha) Lake Lloyd, which has hosted powerboat racing. The speedway is operated by International Speedway Corporation pursuant to a lease with the City of Daytona Beach on the property that runs until 2054.",
        layout: "Lorem",
        photo: "Lorem",
        url: "https://origin.daytonainternationalspeedway.com/?homepage=true"
    },
    {
        id: 9,
        name: "Spa Francorchamps",
        location: "Kuala Lumpar",
        country: "Malaysia",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",
        description: "The Circuit de Spa-Francorchamps is a motor-racing circuit located in Stavelot, Belgium. It is the current venue of the Formula One Belgian Grand Prix, hosting its first Grand Prix in 1925, and has held a Grand Prix every year since 1985. Spa also hosts several other international events including the 24 Hours of Spa, the World Endurance Championship 6 Hours of Spa-Francorchamps, and the TCR Spa 500. It is also home to the Uniroyal Fun Cup 25 Hours of Spa, one of the longest motor races in the world. The circuit has undergone several redesigns through its history, most extensively in 1979 when the track was modified and shortened from a 14.10 km circuit using public roads to a 6.95 km (4.32 mi) permanent circuit due to safety concerns with the old circuit. Despite its name, the circuit is not in Spa but lies in the vicinity of the town of Francorchamps within the boundaries of the municipality of Stavelot, with a part in the boundaries of Malmedy.",
        layout: "Lorem",
        photo: "Lorem",
        url: ""
    },
    {
        id: 10,
        name: "Autodromo Nazionale di Monza",
        location: "Monza, Milan",
        country: "Italy",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",
        description: "The Autodromo Nazionale di Monza is a historic race track near the city of Monza, north of Milan, in Italy. Built in 1922, it is the world's third purpose-built motor racing circuit after those of Brooklands and Indianapolis. The circuit's biggest event is the Italian Grand Prix. With the exception of the 1980 running, the race has been hosted there since 1949. Built in the Royal Villa of Monza park in a woodland setting, the site has three tracks – the 5.793-kilometre (3.600 mi) Grand Prix track, the 2.405-kilometre (1.494 mi) Junior track, and a 4.250-kilometre (2.641 mi) high speed oval track with steep bankings which was left unused for decades and had been decaying until it was restored in the 2010s. The major features of the main Grand Prix track include the Curva Grande, the Curva di Lesmo, the Variante Ascari and the Curva Parabolica. The high speed curve, Curva Grande, is located after the Variante del Rettifilo which is located at the end of the front straight or Rettifilo Tribune, and is usually taken flat out by Formula One cars.",
        layout: "Lorem",
        photo: "Lorem"
    },
    {
        id: 11,
        name: "Nordschleife, Nurburgring",
        location: "Nurburg",
        country: "Germany",
        length: "15.770",
        type: "Road Course",
        direction: "Clockwise",
        description: "The Nürburgring is a 150,000 person capacity motorsports complex located in the town of Nürburg, Rhineland-Palatinate, Germany. It features a Grand Prix race track built in 1984, and a much longer Nordschleife 'North loop' track which was built in the 1920s around the village and medieval castle of Nürburg in the Eifel mountains. The north loop is 20.8 km (12.9 mi) long and has more than 300 metres (1,000 feet) of elevation change from its lowest to highest points. Jackie Stewart nicknamed the old track 'The Green Hell'. Originally, the track featured four configurations: the 28.265 km (17.563 mi)-long Gesamtstrecke ('Whole Course'), which in turn consisted of the 22.810 km (14.173 mi) Nordschleife ('North Loop'), and the 7.747 km (4.814 mi) Südschleife ('South Loop'). There was also a 2.281 km (1.417 mi) warm-up loop called Zielschleife ('Finish Loop') or Betonschleife ('Concrete Loop'), around the pit area",
        layout: "Lorem",
        photo: "Lorem"
    },
    {
        id: 12,
        name: "Circuit Zandvoort",
        location: "Kuala Lumpar",
        country: "Malaysia",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",
        description: "Circuit Zandvoort, officially CM.com Circuit Zandvoort, known as Circuit Park Zandvoort until 2017 is a motorsport race track located in the dunes north of Zandvoort, Netherlands, near the North Sea coast line. It will return to the Formula One calendar in 2021 as the location of the revived Dutch Grand Prix.",
        layout: "Lorem",
        photo: "Lorem"
    },
    {
        id: 13,
        name: "Luguna Seca",
        location: "Kuala Lumpar",
        country: "Malaysia",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",
        description: "Laguna Seca Raceway (branded as WeatherTech Raceway Laguna Seca, and previously Mazda Raceway Laguna Seca) is a paved road racing track in central California used for both auto racing and motorcycle racing, built in 1957 near both Salinas and Monterey, California, United States. The racetrack is 2.238 miles (3.602 km) long, with a 180 feet (55 m) elevation change. Its eleven turns are highlighted by the circuit's signature turn, the downhill-plunging 'Corkscrew' at Turns 8 and 8A. A variety of racing, exhibition, and entertainment events are held at the raceway, ranging from superkarts to sports car racing to music festivals. Laguna Seca is classified as an FIA Grade Two circuit. The name Laguna Seca is Spanish for 'dry lagoon': the area where the track now lies was once a lake, and the course was built around the dry lake bed. After the course was reconfigured, two artificial ponds were added.",
        layout: "Lorem",
        photo: "Lorem"
    },
    {
        id: 14,
        name: "Circuit of the Americas",
        location: "Austin, Texas",
        country: "United States",
        length: "3.426",
        type: "Road Course",
        direction: "Anti-clockwise",
        description: "Circuit of the Americas (COTA) is a grade 1 FIA-specification 3.426-mile (5.514 km) motor racing track and facilities located within the extraterritorial jurisdiction of Austin, Texas. The facility is home to the Formula One United States Grand Prix, the IndyCar Classic, and the Motorcycle Grand Prix of the Americas, a round of the FIM Road Racing World Championship, as well a round of the Americas Rallycross Championship. It previously hosted the Australian V8 Supercars, the American Le Mans Series, the Rolex Sports Car Series, the FIA World Endurance Championship, and the IMSA WeatherTech SportsCar Championship. NASCAR will begin racing at the circuit in 2021.",
        layout: "Lorem",
        photo: "Lorem"
    },
    {
        id: 15,
        name: "Suzuka",
        location: "Kuala Lumpar",
        country: "Malaysia",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",
        description: "Lorem",
        layout: "Lorem",
        photo: "Lorem"
    },
    {
        id: 16,
        name: "Kyalami",
        location: "Kuala Lumpar",
        country: "Malaysia",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",
        description: "Lorem",
        layout: "Lorem",
        photo: "Lorem"
    },
    {
        id: 17,
        name: "Bathurst",
        location: "Kuala Lumpar",
        country: "Malaysia",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",
        description: "Lorem",
        layout: "Lorem",
        photo: "Lorem"
    },
    {
        id: 18,
        name: "Circuit de la Sarthe",
        location: "Kuala Lumpar",
        country: "Malaysia",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",
        description: "Lorem",
        layout: "Lorem",
        photo: "Lorem"
    },
    {
        id: 19,
        name: "Interlagos",
        location: "Kuala Lumpar",
        country: "Malaysia",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",
        description: "Lorem",
        layout: "Lorem",
        photo: "Lorem"
    },
    {
        id: 20,
        name: "Indianapolis Motor Speedway",
        location: "Indianapolis, Indiana",
        country: "United States",
        length: "2.500",
        type: "Oval",
        direction: "Anti-clockwise",
        description: "Lorem",
        layout: "Lorem",
        photo: "Lorem"
    }
]