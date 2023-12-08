const modalContent = {
    cirrus: {
        title: "Cirrus",
        description: `Cirrus clouds are characterized by their thin and wispy filaments that often resemble feathers or strands.
            They form at high altitudes and are composed of ice crystals. These clouds are typically white or light gray and can
            sometimes have a comma-like shape. Cirrus clouds often indicate a change in weather as they tend to precede frontal systems.`,
        images: ["images/basic/cirrus1.jpg", "images/basic/cirrus2.jpg", "images/basic/cirrus3.jpg"],
        image_credits: [
            '<a href="https://pixabay.com/users/photosforyou-124319/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2393167">photosforyou</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2393167">Pixabay</a>',
            '<a href="https://pixabay.com/users/publicdomainpictures-14/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=14465">PublicDomainPictures</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=14465">Pixabay</a>',
            '<a href="https://pixabay.com/users/stux-12364/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=241349">Stefan Schweihofer</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=241349">Pixabay</a>',
        ]
    },
    cirrocumulus: {
        title: "Cirrocumulus",
        description: `These patchy, thin, sheet-like clouds are known as cirrocumulus. They are not a very common cloud as they are made
            of supercooled water that interact with the ice crystal causing them to freeze into cirrostratus. They are always
            associate with cirrus or cirrostratus clouds for that reason.`,
        images: ["images/basic/cirrocumulus1.jpg", "images/basic/cirrocumulus2.jpg", "images/basic/cirrocumulus3.jpg"],
        image_credits: [
            '<a href="https://pixabay.com/users/jingoba-24598/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=234427">Jiří Rotrekl</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=234427">Pixabay</a>',
            '<a href="https://pixabay.com/users/sandid-356019/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3594370">sandid</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3594370">Pixabay</a>',
            'jerry Amatya <a href="https://www.pexels.com/photo/cirrocumulus-clouds-in-the-sky-15413391/">pexels.com</a>',
        ]
    },
    cirrostratus: {
        title: "Cirrostratus",
        description: `Transparent, white clouds that cover the sky like a veil, cirrostratus clouds are thin and often appear in winter.
            These clouds are composed of ice crystals, and their thinness allows sunlight or moonlight to pass through them, producing
            a halo or a colored ring around the sun or moon.`,
        images: ["images/basic/cirrostratus1.jpg", "images/basic/cirrostratus2.jpg", "images/basic/cirrostratus3.jpg"],
        image_credits: [
            '<a href="https://www.freeimages.com/photo/blue-sky-and-clouds-1730924">freeimages.com</a>',
            '<a href="https://pixabay.com/users/vinhlee-17217703/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5541670">Thành Vinh Lê</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5541670">Pixabay</a>',
            '<a href="https://www.freeimages.com/photo/cirrostratus-clouds-in-sky-2041905">freeimages.com</a>',
        ]
    },
    altocumulus: {
        title: "Altocumulus",
        description: `Altocumulus clouds appear as white or grey sheets of rounded masses. Sometimes called "sheepback" or "mackerel" clouds
            due to their resemblance to a sheeps wool or fish scales. These are the most common mid level cloud and will often be
            in the sky with other altocumulus clouds at varying heights or other cloud types.`,
        images: ["images/basic/altocumulus1.jpg", "images/basic/altocumulus2.jpg", "images/basic/altocumulus3.jpg"],
        image_credits: [
            '<a href="https://www.freeimages.com/photo/skies-5-1161298">freeimages.com</a>',
            '<a href="https://pixabay.com/users/jaclou-dl-5602247/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5110842">JackieLou DL</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5110842">Pixabay</a>',
            '<a href="https://pixabay.com/users/hans-2/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=116353">Hans</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=116353">Pixabay</a>',
        ]
    },
    altostratus: {
        title: "Altostratus",
        description: `Unlike most clouds, altostratus (and nimbostratus) grow as the base of the cloud descends from thickening cirrostratus.
            Although it resembles cirrostratus, these clouds do not produce halo or sun pillar phenomenon. Sunlight appears as though
            it's shining through glass and does not cast shadows.`,
        images: ["images/basic/altostratus1.jpg", "images/basic/altostratus2.jpg"],
        image_credits: [
            '<a href="https://www.weather.gov/jetstream/cloudchart">NWS</a>',
            '<a href="https://www.photolib.noaa.gov/Collections">NOAA</a>',
        ]
    },
    nimbostratus: {
        title: "Nimbostratus",
        description: `Often masking the sun, nimbostratus are thick, dark, dense clouds that often bring rain or snow. These clouds are formed when
            altostratus grow low enough to produce precipitation. Although they appear as low-level clouds, they are actually classified as mid-level.`,
        images: ["images/basic/nimbostratus1.jpg", "images/basic/nimbostratus2.jpg", "images/basic/nimbostratus3.jpg"],
        image_credits: [
            '<a href="https://www.weather.gov/jetstream/cloudchart">NWS</a>',
            '<a href="https://pxhere.com/en/photo/1620012">pxhere.com</a>',
            '<a href="https://scool.larc.nasa.govimages">NASA</a>',
        ]
    },
    cumulonimbus: {
        title: "Cumulonimbus",
        description: `Cumulonimbus clouds are known for their anvil or plume shape, which can only be seen from a distance. They can grow up to heights of
            50,000 feet (15 km), which is higher than most commercial airplanes fly. These towering clouds often bring thunderstorms, hail,
            heavy rain, and sometimes even tornadoes, making them an impressive and sometimes dangerous sight to behold.`,
        images: ["images/basic/cumulonimbus1.jpg", "images/basic/cumulonimbus2.jpg", "images/basic/cumulonimbus3.jpg", "images/basic/cumulonimbus4.jpg"],
        image_credits: [
            '<a href="https://www.pxfuel.com/en/free-photo-xwkva">pxfuel.com</a>',
            '<a href="https://www.pxfuel.com/en/free-photo-oquhn">pxfuel.com</a>',
            '<a href="https://unsplash.com/@raychelsnr?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Raychel Sanner</a> on <a href="https://unsplash.com/photos/JENNqPM5z9U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
            'Nicholas A. Tonelli <a href="https://pxhere.com/en/photo/337936?utm_content=clipUser&utm_medium=referral&utm_source=pxhere">PxHere</a>',
        ]
    },
    cumulus: {
        title: "Cumulus",
        description: `Cumulus clouds are puffy, white clouds with flat bottoms and rounded tops that resemble cauliflower. They are formed by the upward
            movement of warm, moist air, and typically indicate fair weather. However, they can also develop into towering cumulus clouds that
            produce thunderstorms, heavy rain, and other severe weather conditions.`,
        images: ["images/basic/cumulus1.jpg", "images/basic/cumulus2.jpg", "images/basic/cumulus3.jpg", "images/basic/cumulus4.jpg", "images/basic/cumulus5.jpg"],
        image_credits: [
            '<a href="https://pixabay.com/users/24278056-24278056/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=7060045">Klaus P.</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=7060045">Pixabay</a>',
            '<a href="https://www.pxfuel.com/en/free-photo-oentg">pxfuel.com</a>',
            '<a href="https://www.publicdomainpictures.net/en/view-image.php?image=381019&picture=large-cumulus-cloud-with-blue-sky">publicdomainpictures.net</a>',
            '<a href="https://www.publicdomainpictures.net/en/view-image.php?image=271805&picture=white-clouds-ideal-for-background">publicdomainpictures.net</a>',
            '<a href="https://www.weather.gov/jetstream/cloudchart">NWS</a>',
        ]
    },
    stratocumulus: {
        title: "Stratocumulus",
        description: `With their honeycomb-like structure, stratocumulus clouds can appear as round masses or rolls forming in patches or multiple layers.
            These clouds are characterized by shades of grey or white, often with dark areas. When the sun is behind the clouds, they can create
            crepuscular rays or sunbeams.`,
        images: ["images/basic/stratocumulus1.jpg", "images/basic/stratocumulus2.jpg", "images/basic/stratocumulus3.jpg"],
        image_credits: [
            '<a href="https://pixabay.com/users/jaclou-dl-5602247/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6278087">JackieLou DL</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6278087">Pixabay</a>',
            '<a href="https://www.weather.gov/jetstream/cloudchart">NWS</a>',
            '<a href="https://commons.wikimedia.org/wiki/File:Salt-river-mouth.jpg">wikimedia commons</a>',
        ]
    },
    stratus: {
        title: "Stratus",
        description: `Although at times it can appear dark and threatening, at most it can only produce weak precipitation. Stratus clouds appear as a
            grey, featureless, uniform low layer of cloud. They sometime appear as ragged shreds underneath nimbostratus and altostratus clouds.
            When they do they are commonly known as scud clouds.`,
        images: ["images/basic/stratus1.jpg", "images/basic/stratus2.jpg", "images/basic/stratus3.jpg"],
        image_credits: [
            '<a href="https://www.photolib.noaa.gov/Collections">NOAA</a>',
            '<a href="https://www.weather.gov/jetstream/cloudchart">NWS</a>',
            '<a href="https://www.publicdomainpictures.net/en/view-image.php?image=28416&picture=winter-weather-overcast-sky">publicdomainpictures.net</a>',
        ]
    },
    // Start of Other Cloud Types
    shelfCloud: {
        title: "Shelf Cloud",
        description: `Shelf clouds are a type of low-level, horizontal cloud that can form along the leading edge of thunderstorms. They are often wedge-shaped
            and have a distinct, flat base that appears to "shelf" away from the storm. These clouds are usually associated with strong gusty winds and
            therefore can also be a warning sign of approaching severe weather.`,
        images: ["images/nonBasic/shelfcloud1.jpg", "images/nonBasic/shelfcloud2.jpg", "images/nonBasic/shelfcloud3.jpg"],
        image_credits: [
            '<a href="https://www.pxfuel.com/en/free-photo-qsaxg">pxfuel.com</a>',
            '<a href="https://www.pxfuel.com/en/free-photo-xtlwp">pxfuel.com</a>',
            '<a href="https://www.pxfuel.com/en/free-photo-qsaia">pxfuel.com</a>',
        ]
    },
    wallCloud: {
        title: "Wall Cloud",
        description: `Appearing under the rain free base of thunderstorms, wall clouds inidicate strong areas of updraft from which tornadoes can sometimes form.
            Most wall clouds rotate, but not all of them. These clouds get their name from their low horizontal shape making them look like a wall
            being lowered from the base of the clouds.`,
        images: ["images/nonBasic/wallcloud1.jpg", "images/nonBasic/wallcloud2.jpg", "images/nonBasic/wallcloud3.jpg", "images/nonBasic/wallcloud4.jpg"],
        image_credits: [
            '<a href="https://www.weather.gov/iwx/torpics">NWS</a>',
            '<a href="https://www.weather.gov/iwx/torpics">NWS</a>',
            '<a href="https://commons.wikimedia.org/w/index.php?curid=408253">wikimedia commons</a>',
            '<a href="https://commons.wikimedia.org/w/index.php?curid=399045">wikimedia commons</a>',
        ]
    },
    funnelCloud: {
        title: "Funnel Cloud",
        description: `A funnel cloud is a rotating column of air that extends downward from the base of a cloud but does not reach the ground. If the funnel
            cloud makes contact with the ground, it becomes a tornado. The most extreme tornadoes can attain wind speeds of more than 300 mph (480 km/h),
            are more than 2 miles (3 km) in diameter, and stay on the ground for more than 60 miles (100 km).`,
        images: ["images/nonBasic/tornado1.jpg", "images/nonBasic/tornado2.jpg", "images/nonBasic/tornado3.JPG"],
        image_credits: [
            '<a href="https://www.weather.gov/safety/tornado">NOAA</a>',
            '<a href="https://www.weather.gov/">NWS</a>',
            '<a href="https://en.wikipedia.org/wiki/File:April_14,_2012_Marquette,_Kansas_EF4_tornado.JPG">wikipedia</a>',
        ]
    },
    asperitas: {
        title: "Asperitas",
        description: `Asperitas clouds, formerly known as undulatus asperatus, were officially recognized as a new type of cloud in 2017, making them the first
            addition to the International Cloud Atlas since 1951. These clouds have a distinct appearance, often described as resembling ocean waves
            with their rippled and turbulent undersides. Despite their ominous look, they do not usually produce precipitation. Asperitas clouds are
            typically found in altocumulus and stratocumulus clouds in the lower to mid-levels of the atmosphere.`,
        images: ["images/nonBasic/asperitas1.jpg", "images/nonBasic/asperitas2.jpg", "images/nonBasic/asperitas3.jpg"],
        image_credits: [
            '<a href="https://www.photolib.noaa.gov/">NOAA</a>',
            '<a href="https://www.pexels.com/photo/asperitas-dark-clouds-in-gloomy-sky-3742711/">pexels.com</a>',
            '<a href="https://en.wikipedia.org/wiki/Asperitas_(cloud)#/media/File:Wea00109_-_Flickr_-_NOAA_Photo_Library.jpg">wikipedia</a>',
        ]
    },
    lenticular: {
        title: "Lenticular",
        description: `The wind can create all sorts of interesting cloud shapes, including one that looks like a lens or a flying saucer: lenticular clouds.
            Often seen above mountains, hills, and buildings, these clouds form when moist air is forced upward by these structures and condenses.
            They are classified as stratocumulus, altocumulus, or cirrocumulus depending on their height in the atmosphere.`,
        images: ["images/nonBasic/lenticular1.JPG", "images/nonBasic/lenticular2.jpg", "images/nonBasic/lenticular3.jpg"],
        image_credits: [
            '<a href="https://commons.wikimedia.org/wiki/File:Lenticular_clouds_._Aspect_of_mountain_suggest_location_near_Eatonville;_apparent_telephoto_(5ccca9893d314ab4bea72a22a827b2e8).JPG">wikimedia commons</a>',
            '<a href="https://commons.wikimedia.org/wiki/File:Lenticular_clouds_above_Buffalo_Plateau_(a378e10a-fceb-4bbe-bc54-0548c50d49fd).jpg">wikimedia commons</a>',
            '<a href="https://commons.wikimedia.org/wiki/File:Lenticular_Cloud_over_Dunes_and_Cleveland_Peak_(51103389272).jpg">wikimedia commons</a>',
        ]
    },
    mammatus: {
        title: "Mammatus",
        description: `Stormy weather can produce some unusual cloud formations, such as mammatus clouds, which have a distinctive appearance resembling pouches
            or udders. These lobes can be smooth, ragged, or lumpy and may appear opaque or translucent. Unlike most clouds, mammatus clouds are formed
            by sinking air rather than rising air. They are often seen before or after severe storms and tend to remain visible for only about fifteen
            minutes to an hour.`,
        images: ["images/nonBasic/mammatus1.jpg", "images/nonBasic/mammatus2.jpg", "images/nonBasic/mammatus3.jpg", "images/nonBasic/mammatus4.jpg"],
        image_credits: [
            '<a href="https://pixy.org/4824490/">pixy.org</a>',
            '<a href="https://pixabay.com/users/royonly-1912967/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5583461">Dibyendu Roy</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5583461">Pixabay</a>',
            '<a href="https://unsplash.com/@klauster?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Karen Ridings</a> on <a href="https://unsplash.com/photos/tQJVrkKBTJA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
            '<a href="https://pxhere.com/en/photo/1060642">pxhere.com</a>',
        ]
    },
    nacreous: {
        title: "Nacreous Clouds",
        description: `Nacreous clouds, also called polar stratospheric clouds, form in the stratosphere at altitudes ranging from 15 to 25 kilometers
            (9 to 16 miles). Their iridescence is a result of the diffusion of sunlight through tiny ice particles that comprise the clouds,
            giving them the nickname "mother of pearl" clouds. They appear exclusively in very cold climates, particularly around the poles during
            the winter season, and are best visible just before sunrise or just after sunset.`,
        images: ["images/nonBasic/nacreous1.jpg", "images/nonBasic/nacreous2.jpg", "images/nonBasic/nacreous3.jpg", "images/nonBasic/nacreous4.jpg"],
        image_credits: [
            '<a href="https://www.publicdomainpictures.net/fr/view-image.php?image=10892&picture=nuages-nacres">publicdomainpictures.net</a>',
            '<a href="https://www.publicdomainpictures.net/en/view-image.php?image=10889&picture=nacreous-clouds-at-mcmurdo">publicdomainpictures.net</a>',
            '<a href="https://www.publicdomainpictures.net/en/view-image.php?image=10894&picture=nacreous-clouds-at-mcmurdo">publicdomainpictures.net</a>',
            '<a href="https://commons.wikimedia.org/wiki/File:Perlemorskyer_Polar_Stratospheric_Cloud.jpg">wikimedia commons</a>'
        ]
    },
    noctilucent: {
        title: "Noctilucent Clouds",
        description: `The highest clouds in the atmosphere are noctilucent clouds, which form in the mesosphere between 76 to 85 kilometers (47 to 53 miles)
            above the Earth's surface in polar regions. They occur during summer months when temperatures in the mesosphere drop below -184ºF (-120ºC),
            allowing ice crystals to form. These rare "night-shining" clouds are too faint to be seen during the day and display a stunning silver and
            blue color best viewed during twilight hours.`,
        images: ["images/nonBasic/noctilucent1.jpg", "images/nonBasic/noctilucent2.jpg", "images/nonBasic/noctilucent3.jpg"],
        image_credits: [
            '<a href="https://unsplash.com/@jhvisuals_de?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joshua Humpfer</a> on <a href="https://unsplash.com/photos/0m31pkVx1fA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
            '<a href="https://commons.wikimedia.org/wiki/File:Noctilucent_Cloud_over_Rostock_II.jpg">wikimedia commons</a>',
            '<a href="https://commons.wikimedia.org/wiki/File:Noctilucent_clouds,_2014-07-08_-_02.jpg">wikimedia commons</a>',
        ]
    },
    cavum: {
        title: "Fall-Streak Hole",
        description: `Fall-streak holes, also known as cavum, are circular or elliptical gaps that can sometimes appear in clouds, particularly altocumulus
            and cirrocumulus clouds. They are formed when the water droplets in the cloud freeze and fall out of the cloud, leaving a hole behind.
            These holes can expand over time and give the cloud a "punched out" appearance.`,
        images: ["images/nonBasic/cavum1.jpeg", "images/nonBasic/cavum2.jpg", "images/nonBasic/cavum3.jpg"],
        image_credits: [
            '<a href="https://commons.wikimedia.org/wiki/File:Wolkenph%C3%A4nomen.jpeg">wikimedia commons</a>',
            '<a href="https://commons.wikimedia.org/wiki/File:Omarama_Fallstreak.jpg">wikimedia commons</a>',
            '<a href="https://photolib.noaa.gov/Collections/National-Weather-Service/Other/emodule/627/eitem/100772">NWS</a>',
        ]
    },
    fog: {
        title: "Fog",
        description: `Fog is always at ground level, regardless of elevation, and appears as a low-lying cloud similar to stratus. However, fog differs from
            a cloud because it is generated locally, often by bodies of water or the topography of an area. It is thicker than mist, another form
            of condensation, and reduces visibility by at least 0.62 miles (1 km).`,
        images: ["images/nonBasic/fog1.jpg", "images/nonBasic/fog2.jpg", "images/nonBasic/fog3.jpg"],
        image_credits: [
            '<a href="https://commons.wikimedia.org/wiki/File:Baum_im_Nebel_bei_Dorfmark_(2).jpg">wikimedia commons</a>',
            '<a href="https://commons.wikimedia.org/wiki/File:Desenka_meadow_2019_G2.jpg">wikimedia commons</a>',
            '<a href="https://commons.wikimedia.org/wiki/File:Fog_in_Yosemite_(Unsplash).jpg">wikimedia commons</a>',
        ]
    },
    virga: {
        title: "Virga",
        description: `Virga is a type of precipitation that appears as wispy, elongated streaks or tendrils that hang beneath clouds. Unlike other forms of
            precipitation, such as rain or snow, virga never reaches the ground. Instead, it evaporates before it can hit the surface, leaving behind
            trails of falling water droplets. Virga is commonly observed in dry or arid regions, and it often serves as a visual indicator of
            thunderstorm activity in the area.`,
        images: ["images/nonBasic/virga1.jpg", "images/nonBasic/virga2.jpg", "images/nonBasic/virga3.jpg"],
        image_credits: [
            '<a href="https://commons.wikimedia.org/wiki/File:Virga_in_the_early_morning.jpg">wikimedia commons</a>',
            '<a href="https://commons.wikimedia.org/wiki/File:Gfp-poofy-white-clouds.jpg">wikimedia commons</a>',
            '<a href="https://commons.wikimedia.org/wiki/File:Burley_Idaho_Snake_River_Sunset.JPG">wikimedia commons</a>',
        ]
    },
};