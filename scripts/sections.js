// Defines an array of objects representing different sections of the page for clouds.html
const basicSections = [
    {
      title: "High-Level Clouds",
      description: `High level clouds occur above 16,500 feet (5km) in temperate regions, 10,000 feet (3km) in polar regions,
        and 20,000 feet (6km) for tropical regions. Due to their height they are primarily composed of ice crystals
        rather than water droplets. The three main types of high level clouds are cirrus, cirrocumulus, and cirrostratus.`,
      cols: "row-cols-3",
      modals: [
        {
          id: "cirrus",
          imgSrc: "images/basic/cirrus3.jpg",
        },
        {
          id: "cirrocumulus",
          imgSrc: "images/basic/cirrocumulus1.jpg",
        },
        {
          id: "cirrostratus",
          imgSrc: "images/basic/cirrostratus1.jpg",
        },
      ],
    },
    {
        title: "Mid-Level Clouds",
        description: `Mid level clouds form at altitudes between 6,500 feet (2km) and 23,000 feet (7km) in temperate regions, 6,500 feet (2km)
          and 13,000 feet (4km) in polar regions, and 6,500 feet (2km) through 25,000 feet (8km) in tropical regions. Although here is
          where you find clouds with the prefix "alto" (which means high in latin), the prefix is meant to distinguish them from their
          lower altitude counterparts. Altocumulus, altostratus, and nimbostratus are the main types of mid-level clouds.`,
        cols: "row-cols-3",
        modals: [
          {
            id: "altocumulus",
            imgSrc: "images/basic/altocumulus1.jpg",
          },
          {
            id: "altostratus",
            imgSrc: "images/basic/altostratus1.jpg",
          },
          {
            id: "nimbostratus",
            imgSrc: "images/basic/nimbostratus3.jpg",
          },
        ],
      },
      {
        title: "Low-Level Clouds",
        description: `Low level clouds apear between the surface and 6,500 feet (2km) in all regions. Although, the bases of cumulus
          and cumulonimbus clouds have been observed up to 9,000 feet (2,750 meters) across the central and southwest United
          States. The most commonly found types are cumulonimbus, cumulus, stratocumulus, and stratus.`,
        cols: "row-cols-3 row-cols-lg-4",
        modals: [
          {
            id: "cumulonimbus",
            imgSrc: "images/basic/cumulonimbus4.jpg",
          },
          {
            id: "cumulus",
            imgSrc: "images/basic/cumulus1.jpg",
          },
          {
            id: "stratocumulus",
            imgSrc: "images/basic/stratocumulus1.jpg",
          },
          {
            id: "stratus",
            imgSrc: "images/basic/stratus3.jpg",
          },
        ],
      },
    // Add more sections here...
  ];

// Defines an array of objects representing different sections of the page for nonbasicClouds.html
const nonBasicSections = [
    {
        title: "Storm Related Clouds",
        description: `Wall clouds, shelf clouds, and funnel clouds, are commonly associated with thunderstorms and appear as accessory clouds to larger
          cumulonimbus clouds. Wall clouds are often a precursor to tornado formation, while shelf clouds are typically found at the
          leading edge of a thunderstorm gust front. Funnel clouds, on the other hand,are an accessory of wall clouds, and if they reach the
          ground they become a tornado.`,
        cols: "row-cols-3",
        modals: [
          {
            id: "shelfCloud",
            imgSrc: "images/nonBasic/shelfcloud2.jpg",
          },
          {
            id: "wallCloud",
            imgSrc: "images/nonBasic/wallcloud4.jpg",
          },
          {
            id: "funnelCloud",
            imgSrc: "images/nonBasic/tornado2.jpg",
          },
        ],
      },
      {
        title: "Interesting Shapes/ Formations",
        description: `These clouds are notable for their interesting shapes and formations. Asperitas clouds resemble ocean waves with their rippled appearance,
          while lenticular clouds have a lens-like shape and form near mountains. Mammatus clouds feature distinctive pouch-like structures hanging
          from the underside of the cloud. Even though associated with thunderstorms mammatus clouds are a clear fit for this category due to their
          distinctive shape.`,
        cols: "row-cols-3",
        modals: [
          {
            id: "asperitas",
            imgSrc: "images/nonBasic/asperitas2.jpg",
          },
          {
            id: "lenticular",
            imgSrc: "images/nonBasic/lenticular3.jpg",
          },
          {
            id: "mammatus",
            imgSrc: "images/nonBasic/mammatus4.jpg",
          },
        ],
      },
      {
        title: "High Atmospheric Clouds",
        description: `High above the Earth's troposphere, where the air is thin and the temperature is extremely low, two unique types of clouds can be seen.
          Nacreous clouds are characterized by their vibrant and iridescent colors. Noctilucent clouds are the highest clouds in the Earth's
          atmosphere. Both types of clouds are known for their visual displays.`,
        cols: "row-cols-2",
        modals: [
          {
            id: "nacreous",
            imgSrc: "images/nonBasic/nacreous1.jpg",
          },
          {
            id: "noctilucent",
            imgSrc: "images/nonBasic/noctilucent3.jpg",
          },
        ],
      },
      {
        title: "Other",
        description: `Fall-streak holes and virga are two supplementary features of clouds that can occur in addition to the other features discussed above.
          Supplementary features refer to formations within a cloud, and it is possible for a single cloud to have multiple features. Meanwhile,
          fog is a cloud that forms at or near the ground, often as a result of cooling and condensation of water vapor.`,
        cols: "row-cols-3",
        modals: [
          {
            id: "cavum",
            imgSrc: "images/nonBasic/cavum1.jpeg",
          },
          {
            id: "fog",
            imgSrc: "images/nonBasic/fog1.jpg",
          },
          {
            id: "virga",
            imgSrc: "images/nonBasic/virga2.jpg",
          },
        ],
      },
      // Add more sections here...
    ];