import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
/*
  Photo of Res
  Res Name
  Cuisines
  Stars/Ratings
  EST Time
  $ For Two
*/
const resList = [
  {
    info: {
      id: "253734",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/48543ff4-33b5-4717-afc2-0edad7b0331a_253734.JPG",
      locality: "E Block",
      areaName: "South Extension 2",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "15K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-17 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0025371b-2cfe-496a-8dd3-8f8e21cab3c2",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/mcdonalds-e-block-south-extension-2-rest253734",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "90719",
      name: "Rollsking",
      cloudinaryImageId: "txucybqo3cwhrqgcrjiv",
      locality: "DD Block",
      areaName: "Greater Kailash New",
      costForTwo: "₹250 for two",
      cuisines: ["Fast Food", "Rolls & Wraps", "North Indian", "Snacks"],
      avgRating: 4.4,
      parentId: "4697",
      avgRatingString: "4.4",
      totalRatingsString: "15K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 9.3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "9.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 08:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Rolls.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Rolls.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0025371b-2cfe-496a-8dd3-8f8e21cab3c2",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/rollsking-dd-block-greater-kailash-new-rest90719",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "62721",
      name: "Burger Singh(Big Punjabi Burgers)",
      cloudinaryImageId: "972a37599772cdc7df93a0855ad87591",
      locality: "Rohini",
      areaName: "Kalkaji",
      costForTwo: "₹300 for two",
      cuisines: [
        "Snacks",
        "Fast Food",
        "Indian",
        "American",
        "Beverages",
        "Desserts",
        "Mughlai",
        "North Indian",
        "Biryani",
        "Tibetan",
      ],
      avgRating: 4.3,
      parentId: "375065",
      avgRatingString: "4.3",
      totalRatingsString: "21K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 8.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "8.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.8",
          ratingCount: "116",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0025371b-2cfe-496a-8dd3-8f8e21cab3c2",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/burger-singh-big-punjabi-burgers-rohini-kalkaji-rest62721",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "725986",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/af6da5f8-b1b9-4154-a3e1-c21cda002013_725986.JPG",
      locality: "Nehru Place",
      areaName: "Paras Cinema",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Rolls & Wraps", "Fast Food"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "1.3K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 9.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "9.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 06:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0025371b-2cfe-496a-8dd3-8f8e21cab3c2",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/kfc-nehru-place-paras-cinema-rest725986",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "411035",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "odi8ytl2ol6okdj61uxs",
      locality: "E Block",
      areaName: "Malviya Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4,
      parentId: "4961",
      avgRatingString: "4.0",
      totalRatingsString: "8.7K+",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 8.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "8.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 08:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.6",
          ratingCount: "254",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0025371b-2cfe-496a-8dd3-8f8e21cab3c2",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/la-pinoz-pizza-e-block-malviya-nagar-rest411035",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "250900",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/7479d8d6-c7c4-4ac4-99b4-febdfa23dfe8_250900.JPG",
      locality: "Lajpat Nagar",
      areaName: "Amar Colony",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.3,
      parentId: "2",
      avgRatingString: "4.3",
      totalRatingsString: "5.3K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 6.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0025371b-2cfe-496a-8dd3-8f8e21cab3c2",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/subway-lajpat-nagar-amar-colony-rest250900",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "833156",
      name: "Olio - The Wood Fired Pizzeria",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/2fc1e85e-0f7c-48ce-8e32-cc538fe6e09d_833156.jpg",
      locality: "Uphar cinema complex",
      areaName: "Green Park Extension",
      costForTwo: "₹300 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Fast Food",
        "Snacks",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.4,
      parentId: "11633",
      avgRatingString: "4.4",
      totalRatingsString: "1.4K+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 6.2,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "6.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 06:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0025371b-2cfe-496a-8dd3-8f8e21cab3c2",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/olio-the-wood-fired-pizzeria-uphar-cinema-complex-green-park-extension-rest833156",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "17854",
      name: "Cafe Coffee Day",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/19/8e782938-5149-45d3-bab5-96f7946c7d86_17854.JPG",
      locality: "Lajpat Nagar - 2",
      areaName: "Lajpat Nagar 2",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Burgers",
        "Ice Cream",
        "Bakery",
        "Fast Food",
      ],
      avgRating: 4.5,
      parentId: "1",
      avgRatingString: "4.5",
      totalRatingsString: "2.6K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-17 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "1.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0025371b-2cfe-496a-8dd3-8f8e21cab3c2",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/cafe-coffee-day-lajpat-nagar-2-rest17854",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "426155",
      name: "Choko La",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/31/b1a4c486-4888-49ed-83e2-7e3372a24948_426155.jpg",
      locality: "Bhishma Pitamah Marg",
      areaName: "Defence Colony",
      costForTwo: "₹600 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.6,
      parentId: "2098",
      avgRatingString: "4.6",
      totalRatingsString: "718",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 07:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0025371b-2cfe-496a-8dd3-8f8e21cab3c2",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/choko-la-bhishma-pitamah-marg-defence-colony-rest426155",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "773189",
      name: "Chai Point",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/22/ae78c114-d936-4a38-8974-6f6b6dac7e81_773189.jpg",
      locality: "Lajpat Nagar - 2",
      areaName: "Lajpat Nagar - 2",
      costForTwo: "₹150 for two",
      cuisines: [
        "Bakery",
        "Beverages",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "South Indian",
        "Punjabi",
        "Chaat",
        "Indian",
        "American",
      ],
      avgRating: 4.5,
      parentId: "1607",
      avgRatingString: "4.5",
      totalRatingsString: "2.1K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 4.6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-17 00:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "37",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0025371b-2cfe-496a-8dd3-8f8e21cab3c2",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/chai-point-lajpat-nagar-2-rest773189",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "3563",
      name: "Hot Paprika",
      cloudinaryImageId: "js7abefydjchclxnwidr",
      locality: "East of Kailash",
      areaName: "East of Kailash",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese", "Snacks", "North Indian"],
      avgRating: 3.8,
      parentId: "1413",
      avgRatingString: "3.8",
      totalRatingsString: "27K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 7.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "7.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-17 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹68",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.6",
          ratingCount: "266",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0025371b-2cfe-496a-8dd3-8f8e21cab3c2",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/hot-paprika-east-of-kailash-rest3563",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "5663",
      name: "Burger.in",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/23/d396cf1a-3bf2-4361-8bb0-60013f40db54_5663.jpg",
      locality: "Sri Aurobindo Marg",
      areaName: "Adchini",
      costForTwo: "₹150 for two",
      cuisines: ["Burgers", "American", "Fast Food"],
      avgRating: 4.3,
      parentId: "13338",
      avgRatingString: "4.3",
      totalRatingsString: "72K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 8.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "8.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 06:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "1.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0025371b-2cfe-496a-8dd3-8f8e21cab3c2",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/burger-in-sri-aurobindo-marg-adchini-rest5663",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "799261",
      name: "Seoul Burgers & Shakes",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/30/89caeb4b-9fb0-4b0c-8816-c94dd3fd3d11_799261 (2).jpg",
      locality: "Begumpur",
      areaName: "Malviya Nagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "Bubble Tea",
        "Burger",
        "Korean",
        "Beverages",
        "Fast Food",
        "Juice and shake",
      ],
      avgRating: 4.2,
      parentId: "372969",
      avgRatingString: "4.2",
      totalRatingsString: "391",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 8.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "8.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-17 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0025371b-2cfe-496a-8dd3-8f8e21cab3c2",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/seoul-burgers-and-shakes-begumpur-malviya-nagar-rest799261",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "799262",
      name: "Boba Bhai",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/30/151bb7a9-46c2-4c0f-b08e-a4281318ff88_799262 (2).jpg",
      locality: "Begumpur",
      areaName: "Malviya Nagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "Burger",
        "Bubble Tea",
        "Fast Food",
        "Beverages",
        "Juice and shake",
      ],
      avgRating: 4.3,
      parentId: "361235",
      avgRatingString: "4.3",
      totalRatingsString: "577",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 8.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "8.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-17 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0025371b-2cfe-496a-8dd3-8f8e21cab3c2",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/boba-bhai-begumpur-malviya-nagar-rest799262",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "735722",
      name: "ENSO - Sourdough Pizza by Nomad",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/8a800bf4-1432-418e-ad55-dd1d2d81aefe_735722.jpg",
      locality: "Jain Mandir Marg",
      areaName: "Connaught Place",
      costForTwo: "₹850 for two",
      cuisines: ["Pizzas", "Fast Food", "Desserts", "Salads", "Beverages"],
      avgRating: 4.2,
      parentId: "77344",
      avgRatingString: "4.2",
      totalRatingsString: "195",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 06:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹299",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0025371b-2cfe-496a-8dd3-8f8e21cab3c2",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/enso-sourdough-pizza-by-nomad-jain-mandir-marg-connaught-place-rest735722",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "368180",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/13f545be-8ea8-448b-a377-5ec3ffb33e07_368180.jpg",
      locality: "C Block",
      areaName: "New Friends Colony",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.2,
      parentId: "721",
      avgRatingString: "4.2",
      totalRatingsString: "4.4K+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 6.5,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "6.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 06:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0025371b-2cfe-496a-8dd3-8f8e21cab3c2",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/pizza-hut-c-block-new-friends-colony-rest368180",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "760632",
      name: "Crusto's - Cheese Burst Pizza By Olio",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/a83ec17f-2268-4b8d-81b1-0f2d1199dda1_760632.jpg",
      locality: "VILLAGE GARHI",
      areaName: "SANT NAGAR",
      costForTwo: "₹300 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Fast Food",
        "Snacks",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.5,
      parentId: "268955",
      avgRatingString: "4.5",
      totalRatingsString: "183",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 7.3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "7.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0025371b-2cfe-496a-8dd3-8f8e21cab3c2",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/crustos-cheese-burst-pizza-by-olio-village-garhi-sant-nagar-rest760632",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "831320",
      name: "Pastas By Pizza Hut",
      cloudinaryImageId: "80ca62f0de020f8cbe39fd034d3325d5",
      locality: "C Block",
      areaName: "New Friends Colony",
      costForTwo: "₹400 for two",
      cuisines: ["Pastas"],
      avgRating: 3.5,
      parentId: "306806",
      avgRatingString: "3.5",
      totalRatingsString: "28",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 6.5,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "6.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 06:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0025371b-2cfe-496a-8dd3-8f8e21cab3c2",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/pastas-by-pizza-hut-c-block-new-friends-colony-rest831320",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "590928",
      name: "Nomad Pizza - Traveller Series",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/5dbae236-6ec8-4f22-b5ca-1e099e4925d5_590928.jpg",
      locality: "Jain Mandir Marg",
      areaName: "Connaught Place",
      costForTwo: "₹850 for two",
      cuisines: ["Pizzas", "Fast Food", "Desserts", "Beverages"],
      avgRating: 4,
      parentId: "251919",
      avgRatingString: "4.0",
      totalRatingsString: "491",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 06:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹295",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "33",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0025371b-2cfe-496a-8dd3-8f8e21cab3c2",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/nomad-pizza-traveller-series-jain-mandir-marg-connaught-place-rest590928",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "640358",
      name: "Picante - Burritos By Nomad",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/8ecbcad4-1ba8-4716-a78b-8e5ce3f7de7d_640358.JPG",
      locality: "Connaught Place",
      areaName: "Connaught Place",
      costForTwo: "₹500 for two",
      cuisines: ["Mexican", "Desserts", "Beverages"],
      avgRating: 4.4,
      parentId: "550225",
      avgRatingString: "4.4",
      totalRatingsString: "158",
      sla: {
        deliveryTime: 49,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-10 06:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹279",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0025371b-2cfe-496a-8dd3-8f8e21cab3c2",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/picante-burritos-by-nomad-connaught-place-rest640358",
      type: "WEBLINK",
    },
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
  } = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3 className="res-name">{name}</h3>
      <h4 className="res-cuisines">{cuisines.join(", ")}</h4>
      <h4 className="=res-ratings">{avgRating}</h4>
      <h4 className="est-time">{deliveryTime}</h4>
      <h4 className="pricefortwo">{costForTwo}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<AppLayout />);
