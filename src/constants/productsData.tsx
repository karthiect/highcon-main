import {
  Activity,
  ArrowUpDown,
  BatteryCharging,
  Cable,
  AirVent,
  Archive,
  Atom,
  AudioWaveform,
  Bolt,
  CircleDot,
  CircuitBoard,
  Clock,
  Cloud,
  CloudRain,
  Compass,
  Cpu,
  Crosshair,
  Disc,
  Droplet,
  Droplets,
  Factory,
  Gauge,
  GaugeCircle,
  Grid3x3,
  HardHat,
  Hotel,
  Hourglass,
  House,
  Landmark,
  Layers,
  Magnet,
  Map,
  MapPinHouse,
  Microchip,
  Mountain,
  MoveHorizontal,
  Play,
  PlugZap,
  Power,
  RefreshCw,
  Repeat,
  Rocket,
  RotateCcw,
  RotateCw,
  Ruler,
  Scale,
  Settings,
  Shield,
  ShieldCheck,
  Shuffle,
  Sigma,
  Sliders,
  SlidersHorizontal,
  SquareSigma,
  ThermometerSnowflake,
  VolumeX,
  Target,
  Thermometer,
  Timer,
  TrendingDown,
  TrendingUp,
  Vibrate,
  Waves,
  Weight,
  Wind,
  Wrench,
  Zap,
  ZapOff,
  type LucideProps,
} from "lucide-react";
import { IdlersPulleysPage } from "../pages/products/IdlersPulleysPage";
import type { JSX, ReactNode } from "react";
import { WinchCarPage } from "../pages/products/WinchCarPage";
import { TowerCranesPage } from "../pages/products/TowerCranesPage";
import { TowerCraneDetailPage } from "../pages/products/TowerCraneDetailPage";
import { CranesPage } from "../pages/products/CranesPage";
import { CraneDetailPage } from "../pages/products/CraneDetailPage";
import { AerospaceComponentsPage } from "../pages/products/AerospaceComponentsPage";
import { AerospaceComponentsDetailPage } from "../pages/products/AerospaceComponentsDetailPage";
import { AerospaceComponentsProductDetailPage } from "../pages/products/AerospaceComponentsProductDetailPage";
import { IdlersPulleysDetailPage } from "../pages/products/IdlersPulleysDetailPage";
import { IdlersPulleysProductDetailPage } from "../pages/products/IdlersPulleysProductDetailPage";
import Images from "./images";
import { CraneProductDetailPage } from "../pages/products/CraneProductDetailPage";

export interface LayerCommonTypes {
  id: string;
  isPartner?: boolean;
  Component: ({
    data,
    isBulk,
  }: {
    data: LayerOneProductsType;
    isBulk: boolean;
  }) => ReactNode | Promise<ReactNode>;
  title: string;
  label?: string;
  image?: { src: string; alt: string };
  shortDescription?: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  meta_canonical?: string;
  heroData: {
    image?: { src: string; alt: string };
    title: string;
    subtitle?: string;
    description?: string;
  };
  overview?: {
    title: string;
    paragraphs?: { title: string; description: string[] }[];
  };
  detailPageContent?: {
    type: "white-bordered" | "dark" | "gray-shadow";
    title?: string;
    subtitle?: string;
    paragraphs?: string[];
    list?: string[];
    paragraphPairs?: {
      title: string;
      paragraphs?: string[];
      list?: string[];
    }[];
  }[];
  detailedDescription?: {
    title: string;
    subtitle: string;
    description: string[];
  };
  keyPerformanceHighlights?: Array<{
    title: string;
    unit?: string;
    value: string;
  }>;
  keyAdvantages?: {
    heading: string;
    items: Array<{
      description: string;
    }>;
  };
  advantagesImage?: string[];
  productConfigurations?: Array<{
    image: string;
    alt: string;
    name: string;
  }>;
  technicalSpecifications?: {
    standardFeatures: Array<{
      heading: string;
      value: string;
    }>;
    optionalFeatures?: Array<{
      heading: string;
      value: string;
    }>;
  };
  pictureGallery?: Array<{
    image: string;
    alt: string;
  }>;
  additionalData?: {
    title: string;
    description?: string;
    subData: {
      image?: { src: string; alt: string };
      Icon?: (props: LucideProps) => JSX.Element;
      title: string;
      badges?: string[];
      subTitle?: string;
      description?: string;
    }[];
  }[];
}

export interface LayerFourProductsType extends LayerCommonTypes {
  id: string;
}

export interface LayerThreeProductsType extends LayerCommonTypes {
  layerFourProducts?: LayerFourProductsType[];
}

export interface LayerTwoProductsType extends LayerCommonTypes {
  layerThreeProducts?: LayerThreeProductsType[];
}

export interface LayerOneProductsType extends LayerCommonTypes {
  layerTwoProducts?: LayerTwoProductsType[];
}

export interface ProductsDataType {
  id: string;
  isPartner?: boolean;
  Component: ({
    data,
    isBulk,
  }: {
    data: ProductsDataType;
    isBulk: boolean;
  }) => ReactNode | Promise<ReactNode>;
  title: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  meta_canonical?: string;
  heroData: {
    image: { src: string; alt: string };
    title: string;
    subtitle?: string;
    description?: string;
  };
  layerOneProducts?: LayerOneProductsType[];
  additionalData?: {
    title: string;
    description?: string;
    subData: {
      image?: { src: string; alt: string };
      Icon?: (props: LucideProps) => JSX.Element;
      title: string;
      subTitle?: string;
      description?: string;
    }[];
  }[];
  detailPageContent?: {
    type: "white-bordered" | "dark" | "gray-shadow";
    title?: string;
    subtitle?: string;
    paragraphs?: string[];
    list?: string[];
    paragraphPairs?: {
      title: string;
      paragraphs?: string[];
      list?: string[];
    }[];
  }[];
}

export const productsData: ProductsDataType[] = [
  {
    id: "idlers-pulleys",
    Component: IdlersPulleysPage,
    title: "Idlers & Pulleys",
    heroData: {
      image: { src: Images?.IdlersPulleysHero, alt: "" },
      title: "IDLERS & PULLEYS",
      description:
        "Precision That Powers Every Movement\nExplore Highcon's high-performance idlers and pulleys — engineered for strength, longevity, and efficiency across the toughest industrial environments.",
    },
    layerOneProducts: [
      {
        id: "rollers",
        Component: IdlersPulleysDetailPage,
        title: "Rollers",
        shortDescription:
          "Production of a wide range of belt conveyor rollers that offer resistance, efficiency, and long life, characteristics required by multiple industrial applications.",
        image: {
          src: Images?.carryidlers,
          alt: "Rollers",
        },
        heroData: {
          image: { src: Images?.RollersHero, alt: "" },
          title: "Rollers",
        },
        detailPageContent: [
          {
            type: "white-bordered",
            title:
              "High-performance belt conveyor rollers for any bulk material handling application.",
            paragraphs: [
              "Conveyor rollers represent a significant investment in the overall design of a material handling system. Their quality and performance are essential to ensure the efficient and continuous operation of the plant over time.",
              "Highcon rollers are manufactured in accordance with the highest national and international quality and safety standards, including ISO, UNI, DIN, AFNOR, FEM, BS, JIS, SANS and CEMA. Particular attention is paid to every phase of the manufacturing process — from preliminary research and engineered design to production and laboratory testing using dedicated machines to verify performance. Moreover, Highcon’s long-standing practical experience across a wide range of installations helps identify the most suitable solution for each customer.",
              "Our flexible production results in a complete range of conveyor rollers according to the required function. Carrying rollers, impact rollers, return rollers (including self-cleaning versions) and all rollers commonly used in bulk material handling conveyors are included in the catalogue. While differing in dimensions, materials and technical specifications, all configurations are designed to rotate freely and reliably under medium and high loads over time.",
            ],
          },
          {
            type: "dark",
            title: "Premium construction for long-lasting performance",
            paragraphs: [
              "All Highcon conveyor rollers are engineered with a strong focus on quality, durability and efficient use of components. Each roller body is made from a precision-machined tube, ensuring accurate assembly and the correct thickness, diameter and material for the intended application. Robust bearing housings, positioned at both ends by welding or deep swaging, support high-quality bearings with high load capacity and low rotational resistance. In addition, the self-lubricated sealing system protects the bearings and minimizes routine maintenance.",
            ],
          },
          {
            type: "gray-shadow",
            title:
              "Designed for your application: from steel to alternative materials",
            paragraphs: [
              "All conveyor components must be selected according to technical criteria to ensure plant efficiency and cost-effective operation. Rollers must be correctly sized and manufactured from suitable materials, depending on the type and size of the conveyed material and the environmental conditions such as temperature, dust, moisture or corrosion.",
              "Our catalogue includes various series of steel conveyor rollers, whose strength and rigidity make them the traditional choice for handling heavy materials and impact loads. For abrasive or corrosive applications, steel rollers can be painted, rubber-lined or coated with anti-corrosion materials. The range also includes rollers entirely manufactured from corrosion-resistant plastic materials.",
            ],
          },
        ],
        layerTwoProducts: [
          {
            id: "carry-idlers",
            Component: IdlersPulleysDetailPage,
            title: "Carry Idlers",
            shortDescription:
              "Designed to provide smooth, continuous material movement, reduce friction, and improve efficiency.",
            image: {
              src: Images?.carryidlers,
              alt: "Carry Idlers",
            },
            heroData: {
              title: "Carry Idlers",
              image: {
                src: Images?.carryidlershero,
                alt: "Carry Idlers Hero Image",
              },
            },
            layerThreeProducts: [
              {
                id: "steel-rollers-psv",
                Component: IdlersPulleysDetailPage,
                title: "Steel Rollers - PSV",
                shortDescription: "For light/medium/heavy duty applications",
                heroData: {
                  title: "Steel rollers - PSV",
                  subtitle: "For light/medium/heavy duty applications",
                  image: {
                    src: Images?.carryidlerssteelrollerspsvhero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.carryidlerssteelrollerspsv,
                  alt: "",
                },
                detailPageContent: [
                  {
                    type: "white-bordered",
                    title:
                      "The ultimate series of our heavy-duty conveyor rollers selection",
                    paragraphs: [
                      "In the demanding world of bulk material handling where realibility, efficiency, and performance are non-negotiable, Highcon PSV roller is a prime example of engineering excellence - resulting form our decades of industry expertise.",
                      "Due to an accurate design and manufacturing, Highcon PSV roller meets the utmost standards of quality and performance of heavy-duty conveyor rollers expected by plenty of equipment manufacturers or end users dealing with automated systems for bulk material handling. Our commitment to excellence is woven into every stage of production. The control of all components and materials, from incoming inspection through manufacturing and assembly in the automatic cycle with function tests on 100% of production, is at the heart of what makes it a trusted choice for specialists in the field. This dedication allows us to state that the quality, load capacity and life of PSV roller are among the highest in the world.",
                    ],
                  },
                  {
                    type: "gray-shadow",
                    title:
                      "Unmatched durability, performance and efficiency for heavy-duty bulk material handling",
                    paragraphs: [
                      "PSV roller is specifically designed to operate in very difficult conditions of the most varied bulk handling applications: mines, caves, cement works, coal-fired electric utilities and dock installations. Different configurations are available sharing a robust steel construction and an hermetic sealing system with multiple labyrinth seals. These provide extremely high load capacity and resistance to impact, corrosion and abrasion of bulk materials, pollutants and other aggressive elements during conveyance.",
                      "This unique design perfectly fits for the double challenge that heavy-duty conveyor rollers are usually called to. First, it allows for the transportation of heavy and large lump size bulk materials. Moreover, it’s the solution to the environmental challenges of dust, dirt, water, low and high temperatures or strong day/night temperature variation. For instance, the working temperature of PSV roller is defined as between -20°C and + 100°C with standard greased components, but it’s possible to reach also temperatures outside of this range using special grease, bearings and seals.",
                      "While being an heavy-duty solution meant to work in such harmful and challenging conditions, PSV roller is able to offer maximum effectiveness and productivity, furthermore combined with commonly desired energy savings, long working life and minimal maintenance over time.",
                    ],
                  },
                ],
                layerFourProducts: [
                  {
                    id: "steel-impact-rollers-psv",
                    Component: IdlersPulleysProductDetailPage,
                    title: "Steel Impact Rollers - PSV",
                    shortDescription:
                      "Enhanced protection for material impact for light/medium/heavy duty applications",
                    heroData: {
                      title: "Steel impact rollers - PSV",
                      subtitle:
                        "Enhanced protection for material impact for light/medium/heavy duty applications",
                      image: {
                        src: Images?.carryidlerssteelimpactrollerspsvhero,
                        alt: "",
                      },
                    },
                    image: {
                      src: Images?.carryidlerssteelimpactrollerspsv,
                      alt: "",
                    },
                    overview: {
                      title: "Ultimate Protection for Your Conveyor Belt",
                      paragraphs: [
                        {
                          title: "Overview",
                          description: [
                            'Shock absorbing rollers, commonly referred to as "impact rollers," feature a robust steel roller core outfitted with specialized rings. These rings are engineered to withstand and cushion the forces exerted by materials impacting the conveyor belt. Strategically placed within the belt\'s carrying section, impact rollers are positioned precisely where the material is deposited, safeguarding the belt from potential damage caused by the weight and force of falling materials. To mitigate the impact, each roller is encased in durable rubber rings, providing the necessary thickness and resilience to absorb shocks effectively.',
                          ],
                        },
                      ],
                    },
                    additionalData: [
                      {
                        title: "Main Features",
                        subData: [
                          {
                            Icon: (props) => <Zap {...props} />,
                            title: "Higher Quality Rubber Rings",
                            badges: [
                              "Superior Shock Absorption",
                              "Enhanced Durability",
                              "Reduced Maintenance",
                            ],
                            description:
                              "The impact rollers are equipped with higher quality rubber rings that are specifically designed to provide superior shock absorption and durability. These high-performance rubber rings effectively cushion the impact forces from falling materials, ensuring minimal wear on the conveyor system. The material composition is optimized for enhanced resistance to abrasion, temperature variations, and chemical exposure, offering longer-lasting protection and reducing maintenance intervals, even in demanding bulk handling applications.",
                          },
                          {
                            Icon: (props) => <Shield {...props} />,
                            title:
                              "Solid Rubber Rings Fixation by High Steel Stop Ring, Welded to the Shell",
                            badges: [
                              "Secure Fixation",
                              "No Slippage",
                              "Heavy-Duty Construction",
                            ],
                            description:
                              "The solid rubber rings are securely fixed using a high steel stop ring that is welded directly to the roller shell. This advanced fixation method ensures a firm and stable attachment of the rubber rings, preventing slippage or premature wear during operation. The welded steel stop ring provides additional strength and durability, contributing to the roller’s overall resilience and reliability, even in high-impact and harsh working conditions. This construction guarantees that the rubber rings remain intact and perform optimally under heavy loads.",
                          },
                          {
                            Icon: (props) => <Wrench {...props} />,
                            title:
                              "Highly Efficient & Hermetic Sealing System → Long Life Roller",
                            badges: [
                              "Contamination Protection",
                              "Extended Lifespan",
                              "Minimal Downtime",
                            ],
                            description:
                              "The roller features a highly efficient hermetic sealing system that protects the internal components from dust, water, and other contaminants. This robust sealing mechanism ensures that the roller remains fully protected, reducing the risk of internal damage and enhancing its overall lifespan. By preventing the ingress of harmful elements, the hermetic seals contribute to the roller's long life, minimizing downtime and maintenance costs while ensuring maximum performance in heavy-duty applications.",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "steel-return-self-cleaning-rollers-psv",
                    Component: IdlersPulleysProductDetailPage,
                    title: "Steel Return Self-Cleaning Rollers - PSV",
                    heroData: {
                      title: "Steel Return Self-Cleaning Rollers - PSV",
                      description:
                        "Optimal protection and perfect tracking for viscous materials",
                      image: {
                        src: Images?.carryidlerssteelreturnselfcleaningrollerspsv,
                        alt: "",
                      },
                    },
                    image: {
                      src: Images?.carryidlerssteelreturnselfcleaningrollerspsv,
                      alt: "",
                    },
                    overview: {
                      title:
                        "Prevent Material Buildup and Maintain Optimal Belt Tracking",
                      paragraphs: [
                        {
                          title: "Overview",
                          description: [
                            "When conveying abrasive or viscous materials, standard steel return rollers may suffer from wear or unwanted material buildup. Our specialized rollers are designed to address these issues with a helical spiral of non-abrasive rings that clean the belt surface and prevent sticky material from accumulating. Ideal for use in the return section of short conveyors, these rollers help maintain belt tracking and reduce vibration. For long conveyors, they should be installed up to the point where material adhesion ceases. Note that these rollers are not suitable as snub rollers near drive or return drums.",
                          ],
                        },
                      ],
                    },
                    additionalData: [
                      {
                        title: "Main Features",
                        subData: [
                          {
                            Icon: (props) => <Zap {...props} />,
                            title: "Higher Quality Rubber Rings",
                            badges: [
                              "Superior Shock Absorption",
                              "Enhanced Durability",
                              "Reduced Maintenance",
                            ],
                            description:
                              "The rollers are equipped with high-quality rubber rings designed for maximum durability and shock absorption. These superior rubber rings are formulated to provide exceptional resistance to wear, abrasion, and environmental conditions, ensuring consistent performance in heavy-duty applications. They effectively cushion the impact of falling materials, reduce the stress on the conveyor system, and enhance the overall longevity of the rollers, even in extreme operational conditions such as bulk material handling and mining environments.",
                          },
                          {
                            Icon: (props) => <Shield {...props} />,
                            title:
                              "Solid Rubber Rings Fixation by Outer Steel Stop Ring Welded and Hard PVC Central Distance Rings",
                            badges: [
                              "Secure Fixation",
                              "No Slippage",
                              "Heavy-Duty Construction",
                            ],
                            description:
                              "The rubber rings are securely fixed in place using an outer steel stop ring, which is welded to the roller shell, providing a stable and durable attachment. The welded steel stop ring ensures that the rubber rings stay firmly in position, preventing slippage or degradation over time. Additionally, the inclusion of hard PVC central distance rings provides precise spacing between the rubber rings, enhancing the roller’s stability and efficiency while ensuring that the roller operates smoothly and maintains its shape under heavy loads and high impact.",
                          },
                          {
                            Icon: (props) => <Wrench {...props} />,
                            title:
                              "Highly Efficient & Hermetic Sealing System → Long Life Roller",
                            badges: [
                              "Contamination Protection",
                              "Extended Lifespan",
                              "Minimal Downtime",
                            ],
                            description:
                              "The roller features a highly efficient hermetic sealing system that safeguards its internal components from dust, water, and other contaminants. This robust sealing mechanism effectively prevents the ingress of harmful materials, which could lead to premature wear or malfunction. By protecting the internal parts of the roller, the hermetic sealing system ensures extended lifespan and reliable performance, even in the harshest conditions. The combination of these seals, along with the durable rubber rings and steel construction, results in a roller that requires minimal maintenance and operates efficiently over an extended service life.",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "steel-lagged-rollers-psv",
                    Component: IdlersPulleysProductDetailPage,
                    title: "Steel Lagged Rollers - PSV",
                    shortDescription:
                      "Customized roller surface for enhanced smooth operation in light, medium, and heavy-duty applications",
                    heroData: {
                      title: "Steel lagged rollers - PSV",
                      subtitle:
                        "Enhanced protection for material impact for light/medium/heavy duty applications",
                      image: {
                        src: Images?.carryidlerssteellaggedrollerspsv,
                        alt: "",
                      },
                    },
                    image: {
                      src: Images?.carryidlerssteellaggedrollerspsv,
                      alt: "",
                    },
                    overview: {
                      title: "",
                      paragraphs: [
                        {
                          title:
                            "Reducing Material Build-Up for Optimal Belt Performance",
                          description: [
                            "Materials transported on conveyors often stick to the conveyor belt and return rollers, leading to build-up on the rollers and causing belt tracking issues. To minimize this build-up, Highcon rollers can be coated with rubber or polyurethane, creating a surface that reduces material adherence. The rubber coating can be customized to meet specific customer requirements, with options including standard, antistatic, fire-resistant, or flame-retardant grades.",
                          ],
                        },
                      ],
                    },
                    additionalData: [
                      {
                        title: "Main Features",
                        subData: [
                          {
                            Icon: (props) => <Zap {...props} />,
                            title: "Higher Quality Rubber Rings",
                            badges: [
                              "Superior Shock Absorption",
                              "Enhanced Durability",
                              "Reduced Maintenance",
                            ],
                            description:
                              "The rollers are equipped with premium-grade rubber rings that deliver superior performance in demanding applications. These high-quality rubber rings are engineered for exceptional durability and resistance to wear, providing effective shock absorption even in harsh environments. Their advanced formulation ensures excellent resistance to abrasion, temperature fluctuations, and exposure to chemicals, enhancing the roller’s lifespan and ensuring reliable operation under continuous heavy loads and extreme conditions",
                          },
                          {
                            Icon: (props) => <Shield {...props} />,
                            title:
                              "Solid Rubber Rings Fixation by High Steel Stop Ring, Welded to the Shell",
                            badges: [
                              "Secure Fixation",
                              "No Slippage",
                              "Heavy-Duty Construction",
                            ],
                            description:
                              "The solid rubber rings are securely fixed in place by a high-strength steel stop ring, which is welded directly to the roller shell. This robust attachment method ensures that the rubber rings remain firmly in position, even under high-impact and high-load conditions. The welded steel stop ring provides superior stability and strength, preventing any potential movement or slippage of the rubber rings. This construction method ensures a secure, long-lasting solution for high-duty applications, ensuring consistent performance and reduced maintenance",
                          },
                          {
                            Icon: (props) => <Wrench {...props} />,
                            title:
                              "Highly Efficient & Hermetic Sealing System → Long Life Roller",
                            badges: [
                              "Contamination Protection",
                              "Extended Lifespan",
                              "Minimal Downtime",
                            ],
                            description:
                              "The roller is equipped with a highly efficient hermetic sealing system that provides optimal protection against the ingress of dust, water, and other contaminants. The hermetic seals ensure that the internal components of the roller remain free from harmful elements, reducing wear and tear and extending the overall lifespan of the roller. This sealing system contributes to the roller’s ability to perform reliably in tough conditions, minimizing the need for maintenance and ensuring long-term durability, even in the most challenging environments",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "steel-belt-scale-rollers-psv",
                    Component: IdlersPulleysProductDetailPage,
                    title: "Steel Belt Scale Rollers - PSV",
                    shortDescription:
                      "Absolute precision, guaranteed reliability for light/medium/heavy duty applications",
                    heroData: {
                      title: "Steel belt scale rollers - PSV",
                      subtitle:
                        "Absolute precision, guaranteed reliability for light/medium/heavy duty applications",
                      image: {
                        src: Images?.carryidlerssteelbeltscalerollerspsv,
                        alt: "",
                      },
                    },
                    image: {
                      src: Images?.carryidlerssteelbeltscalerollerspsv,
                      alt: "",
                    },
                    overview: {
                      title: "",
                      paragraphs: [
                        {
                          title:
                            "Precision Engineered for Accurate Weighing Performance",
                          description: [
                            "PSV series belt scale rollers are engineered for exceptional accuracy in weighing applications. Designed with precision-calibrated tubes and expertly machined outer diameters, these rollers ensure optimal performance and reliability in high-precision settings. Ideal for use in weighing stations, the PSV series provides the consistency and precision needed for accurate material measurement.",
                          ],
                        },
                      ],
                    },
                    additionalData: [
                      {
                        title: "Main Features",
                        subData: [
                          {
                            Icon: (props) => <Zap {...props} />,
                            title: "Higher Quality Rubber Rings",
                            badges: [
                              "Superior Shock Absorption",
                              "Enhanced Durability",
                              "Reduced Maintenance",
                            ],
                            description:
                              "The rollers are equipped with premium-grade rubber rings that deliver superior performance in demanding applications. These high-quality rubber rings are engineered for exceptional durability and resistance to wear, providing effective shock absorption even in harsh environments. Their advanced formulation ensures excellent resistance to abrasion, temperature fluctuations, and exposure to chemicals, enhancing the roller’s lifespan and ensuring reliable operation under continuous heavy loads and extreme conditions",
                          },
                          {
                            Icon: (props) => <Shield {...props} />,
                            title:
                              "Solid Rubber Rings Fixation by High Steel Stop Ring, Welded to the Shell",
                            badges: [
                              "Secure Fixation",
                              "No Slippage",
                              "Heavy-Duty Construction",
                            ],
                            description:
                              "The solid rubber rings are securely fixed in place by a high-strength steel stop ring, which is welded directly to the roller shell. This robust attachment method ensures that the rubber rings remain firmly in position, even under high-impact and high-load conditions. The welded steel stop ring provides superior stability and strength, preventing any potential movement or slippage of the rubber rings. This construction method ensures a secure, long-lasting solution for high-duty applications, ensuring consistent performance and reduced maintenance",
                          },
                          {
                            Icon: (props) => <Wrench {...props} />,
                            title:
                              "Highly Efficient & Hermetic Sealing System → Long Life Roller",
                            badges: [
                              "Contamination Protection",
                              "Extended Lifespan",
                              "Minimal Downtime",
                            ],
                            description:
                              "The roller is equipped with a highly efficient hermetic sealing system that provides optimal protection against the ingress of dust, water, and other contaminants. The hermetic seals ensure that the internal components of the roller remain free from harmful elements, reducing wear and tear and extending the overall lifespan of the roller. This sealing system contributes to the roller’s ability to perform reliably in tough conditions, minimizing the need for maintenance and ensuring long-term durability, even in the most challenging environments",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "steel-return-rollers-with-rubber-rings-psv",
                    Component: IdlersPulleysProductDetailPage,
                    title: "Steel return rollers with rubber rings - PSV",
                    shortDescription:
                      "Wide versatility, limitless performance for light/medium/heavy duty applications",
                    heroData: {
                      title: "Steel return rollers with rubber rings - PSV",
                      subtitle:
                        "Wide versatility, limitless performance for light/medium/heavy duty applications",
                      image: {
                        src: Images?.carryidlerssteelreturnrollerswithrubberringspsv,
                        alt: "",
                      },
                    },
                    image: {
                      src: Images?.carryidlerssteelreturnrollerswithrubberringspsv,
                      alt: "",
                    },
                    detailPageContent: [
                      {
                        type: "white-bordered",
                        paragraphPairs: [
                          {
                            title:
                              "Enhanced Support, Stability, and Belt Protection for Optimal Performance",
                            paragraphs: [
                              "Rollers featuring spaced rings are designed to enhance support and stability in the belt’s return section. These rollers are particularly effective where material adherence or belt wear issues are prevalent. The rubber rings can operate within a temperature range of -20°C to +80°C, effectively tackling the challenges posed by sticky materials that adhere to the belt. By preventing material buildup on the rollers, these spaced rings help maintain proper belt tracking and reduce the irregularities that can lead to belt wear and misalignment. Available in the following arrangements (G,L,C):",
                            ],
                          },
                          {
                            title: "Arrangement G",
                            paragraphs: [
                              "Return rollers with pointed rings spaced in the central part and positioned in sets at the side. Used on belt conveyors of medium capacity.",
                            ],
                          },
                          {
                            title: "Arrangement L",
                            paragraphs: [
                              "Return rollers used on belt conveyors in high duty plant. They are provided with sets of fl at rings, positioned at the roller extremities, and with pointed rings spaced in the central part of the roller.",
                            ],
                          },
                          {
                            title: "Arrangement C",
                            paragraphs: [
                              "Return rollers for return transom sets of “V” design format with base rolllers from series PSV, with characteristic proportional dimensions to the requirements designed into large belt conveyors.",
                            ],
                          },
                        ],
                      },
                    ],
                    additionalData: [
                      {
                        title: "Main Features",
                        subData: [
                          {
                            Icon: (props) => <Zap {...props} />,
                            title: "Higher Quality Rubber Rings",
                            badges: [
                              "Superior Shock Absorption",
                              "Enhanced Durability",
                              "Reduced Maintenance",
                            ],
                            description:
                              "The rollers are equipped with high-quality rubber rings designed for maximum durability and shock absorption. These superior rubber rings are formulated to provide exceptional resistance to wear, abrasion, and environmental conditions, ensuring consistent performance in heavy-duty applications. They effectively cushion the impact of falling materials, reduce the stress on the conveyor system, and enhance the overall longevity of the rollers, even in extreme operational conditions such as bulk material handling and mining environments",
                          },
                          {
                            Icon: (props) => <Shield {...props} />,
                            title:
                              "Solid Rubber Rings Fixation by Outer Steel Stop Ring Welded and Hard PVC Central Distance Rings",
                            badges: [
                              "Secure Fixation",
                              "No Slippage",
                              "Heavy-Duty Construction",
                            ],
                            description:
                              "The rubber rings are securely fixed in place using an outer steel stop ring, which is welded to the roller shell, providing a stable and durable attachment. The welded steel stop ring ensures that the rubber rings stay firmly in position, preventing slippage or degradation over time. Additionally, the inclusion of hard PVC central distance rings provides precise spacing between the rubber rings, enhancing the roller’s stability and efficiency while ensuring that the roller operates smoothly and maintains its shape under heavy loads and high impact",
                          },
                          {
                            Icon: (props) => <Wrench {...props} />,
                            title:
                              "Highly Efficient & Hermetic Sealing System → Long Life Roller",
                            badges: [
                              "Contamination Protection",
                              "Extended Lifespan",
                              "Minimal Downtime",
                            ],
                            description:
                              "The roller features a highly efficient hermetic sealing system that safeguards its internal components from dust, water, and other contaminants. This robust sealing mechanism effectively prevents the ingress of harmful materials, which could lead to premature wear or malfunction. By protecting the internal parts of the roller, the hermetic sealing system ensures extended lifespan and reliable performance, even in the harshest conditions. The combination of these seals, along with the durable rubber rings and steel construction, results in a roller that requires minimal maintenance and operates efficiently over an extended service life.",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                id: "steel-heavy-duty-rollers-hdr",
                Component: IdlersPulleysDetailPage,
                title: "Steel Heavy Duty Rollers - HDR",
                shortDescription:
                  "For extra heavy duty conveyors and mining applications",
                heroData: {
                  title: "Steel Heavy Duty Rollers - HDR",
                  subtitle:
                    "For extra heavy duty conveyors and mining applications",
                  image: {
                    src: Images?.carryidlerssteelheavydutyrollershdr,
                    alt: "",
                  },
                },
                detailPageContent: [
                  {
                    type: "white-bordered",
                    title:
                      "Unstoppable performance worthy of extra heavy-duty conveyor rollers",
                    paragraphs: [
                      "HDR roller is Highcon engineered solution for those extremely bulk material handling applications where extra heavy-duty conveyor rollers are required.",
                      "The robust design incorporates premium quality components and material to deliver high-performance and extended service life – typically 8 years with 24/7 operation – in the most demanding conditions and environments:",
                    ],
                  },
                  {
                    type: "dark",
                    title: "",
                    paragraphs: [
                      "Precision steel tube to DIN 2458, electrically welded with tight tolerances to ensure minimal radial run-out, reduced imbalance, and quiet, smooth operation.",
                      "Carbon steel shaft ST37 to DIN 17100, offering the required strength and resilience for heavy-duty applications.",
                      "Forged steel bearing housings with tight tolerances, ensuring durability and precise alignment",
                      "Deep groove precision ball bearings, lubricated with lithium grease NLGI 2 for long-term protection against dirt and water ingress.",
                      "Non-contacting triple-lip labyrinth seals, with a heavy-duty circlip cover cap made from cold-pressed deep-drawn steel (DIN 1623/1624), zinc-plated for added durability.",
                      "Roller shell and axle treated with a special long-life wax to resist rust and corrosion.",
                    ],
                  },
                  {
                    type: "white-bordered",
                    title: "",
                    paragraphs: [
                      "This heavy-duty construction, combined with the sophisticated hermetic sealing system with multiple labyrinth seals, ensures superior load capacity, resistance to impact, corrosion and abrasion, and reliability under low and high temperatures (between -20°C and +100°C).",
                    ],
                  },
                  {
                    type: "gray-shadow",
                    title:
                      "Suitable and customizable for the toughest environments",
                    paragraphs: [
                      "HDR roller is specifically design for open mining applications but it excels in the most challeging conveyor systems for handling a variety of bulk materials, including also quarrying, cement production, coal power generation, and dock operations.",
                      "The standard design can be tailored to meet specific customer requirements. Options include mass-limited version, varying shell thicknesses, lagging for aggressive or corrosive environments, additional sealing for extreme conditions, specialized greasing for harsher temperatures. Custom configurations are also available, including different types of garlands for belt speeds up to 10 m/s.",
                    ],
                  },
                ],
                layerFourProducts: [
                  {
                    id: "steel-heavy-duty-return-rollers-rubber-rings-hdr",
                    Component: IdlersPulleysProductDetailPage,
                    title:
                      "Steel heavy duty return rollers with rubber rings - HDR",
                    shortDescription:
                      "Support and stability, extended belt life for extra heavy duty conveyors and mining applications",
                    heroData: {
                      title:
                        "Steel heavy duty return rollers with rubber rings - HDR",
                      subtitle:
                        "Support and stability, extended belt life for extra heavy duty conveyors and mining applications",
                      image: {
                        src: Images?.carryidlerssteelheavydutyreturnrollerswithrubberringshdrhero,
                        alt: "",
                      },
                    },
                    image: {
                      src: Images?.carryidlerssteelheavydutyreturnrollerswithrubberringshdr,
                      alt: "",
                    },
                    overview: {
                      title:
                        "Maximize Belt Life: Return Rollers with Spaced Rubber Rings for Superior Tracking and Protection",
                      paragraphs: [
                        {
                          title: "Overview",
                          description: [
                            "Our return rollers with spaced rubber rings are specially designed to support the belt during its return journey, addressing issues of material adhesion and belt wear. The rubber rings are effective within temperatures ranging from -20°C to +80°C and work to prevent the buildup of sticky materials that can disrupt belt tracking. By breaking up scale accumulation and providing stability, these rollers help ensure the belt maintains its proper alignment and extends its operational life.",
                          ],
                        },
                      ],
                    },
                    additionalData: [
                      {
                        title: "Main Features",
                        subData: [
                          {
                            Icon: (props) => <Zap {...props} />,
                            title:
                              "Higher Quality Rubber Rings, Respect Competitors",
                            badges: [
                              "Superior Shock Absorption",
                              "Enhanced Durability",
                              "Reduced Maintenance",
                            ],
                            description:
                              "Our return rollers are equipped with premium-quality rubber rings, specifically engineered to deliver superior performance and longevity compared to competitors. These high-quality rubber rings provide enhanced flexibility, greater resistance to wear, and improved shock absorption, ensuring effective protection against material adhesion and belt wear. The durable material composition ensures that these rubber rings maintain their integrity over time, providing reliable performance even under challenging conditions. This advanced design ensures that our rollers outperform the competition, making them the optimal choice for long-term, cost-effective conveyor system operation.",
                          },
                          {
                            Icon: (props) => <Shield {...props} />,
                            title:
                              "Solid Rubber Rings Fixation by Outer Steel Stop Ring Welded and Hard PVC Central Distance Rings",
                            badges: [
                              "Secure Fixation",
                              "No Slippage",
                              "Heavy-Duty Construction",
                            ],
                            description:
                              "The rubber rings on our return rollers are securely fixed using a robust outer steel stop ring, welded to the shell, and complemented by hard PVC central distance rings. This unique fixation system provides enhanced durability and prevents the rings from shifting or detaching during operation, even under high-impact conditions. The outer steel stop ring offers additional strength and stability, while the hard PVC central distance rings maintain consistent spacing between the rubber rings, improving performance and extending the life of the roller. This secure fixation system ensures that the rubber rings deliver maximum cushioning and support, reducing material buildup and belt wear",
                          },
                          {
                            Icon: (props) => <Wrench {...props} />,
                            title:
                              "Highly Efficient & Hermetic Sealing System → Long Life Roller",
                            badges: [
                              "Contamination Protection",
                              "Extended Lifespan",
                              "Minimal Downtime",
                            ],
                            description:
                              "Our return rollers feature a highly efficient, hermetic sealing system that provides superior protection against dirt, dust, moisture, and other contaminants. This advanced sealing technology prevents the ingress of harmful materials into the internal components of the roller, such as bearings and shafts, significantly extending the roller's lifespan. By reducing the need for maintenance and enhancing the roller’s performance, the hermetic seals ensure smooth operation even in the harshest environments. This long-lasting protection ensures that the roller performs reliably over time, offering a cost-effective solution with minimal downtime and enhanced operational efficiency",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "steel-heavy-duty-impact-rollers-hdr",
                    Component: IdlersPulleysProductDetailPage,
                    title: "Steel heavy duty impact rollers - HDR",
                    shortDescription:
                      "Impact protection, extra heavy duty performance for heavy duty conveyors and mining applications",
                    heroData: {
                      title: "Steel heavy duty impact rollers - HDR",
                      subtitle:
                        "Impact protection, extra heavy duty performance for heavy duty conveyors and mining applications",
                      image: {
                        src: Images?.carryidlerssteelheavydutyimpactrollershdr,
                        alt: "",
                      },
                    },
                    image: {
                      src: Images?.carryidlerssteelheavydutyimpactrollershdr,
                      alt: "",
                    },
                    overview: {
                      title:
                        "Impact Protection at Its Best: Shock-Absorbing Rollers for Heavy-Duty Conveyor Systems",
                      paragraphs: [
                        {
                          title: "Overview",
                          description: [
                            "The impact rollers, also known as shock absorbing rollers, incorporate a sturdy steel roller framework equipped with specially designed rings to handle the impact pressures from materials falling onto the conveyor belt. These rollers are strategically positioned in the belt's carrying section, directly at the loading zones where materials land. To counteract the impact force, each roller is covered with a series of thick, resilient rubber rings that provide the necessary cushioning and protection, ensuring that both the belt and rollers are shielded from damage due to heavy material loads.",
                          ],
                        },
                      ],
                    },
                    additionalData: [
                      {
                        title: "Main Features",
                        subData: [
                          {
                            Icon: (props) => <Zap {...props} />,
                            title:
                              "Higher Quality Rubber Rings, Respect Competitors",
                            badges: [
                              "Superior Shock Absorption",
                              "Enhanced Durability",
                              "Reduced Maintenance",
                            ],
                            description:
                              "Our impact rollers are equipped with superior quality rubber rings, engineered to outperform standard alternatives. These high-performance rubber rings offer enhanced durability, superior cushioning, and excellent resistance to wear and abrasion. The carefully selected materials ensure optimal shock absorption and protect both the conveyor belt and the rollers from the damaging effects of heavy material impact. The quality of these rubber rings surpasses competitor offerings, guaranteeing longer service life and reduced maintenance requirements, making them the ideal solution for demanding material handling applications.",
                          },
                          {
                            Icon: (props) => <Shield {...props} />,
                            title:
                              "Solid Rubber Rings Fixation by High Steel Stop Ring, Welded to the Shell",
                            badges: [
                              "Secure Fixation",
                              "No Slippage",
                              "Heavy-Duty Construction",
                            ],
                            description:
                              "To ensure maximum stability and long-term reliability, the rubber rings of our impact rollers are securely fixed with a high-strength steel stop ring, welded directly to the roller shell. This robust fixation method prevents the rings from dislodging or shifting during operation, even under extreme impact forces. The welded steel stop ring provides additional reinforcement, ensuring that the rubber rings remain firmly in place while delivering consistent protection. This advanced fixation design enhances the overall durability of the roller, making it highly resistant to the stresses typically experienced in heavy-duty conveyor systems",
                          },
                          {
                            Icon: (props) => <Wrench {...props} />,
                            title:
                              "Highly Efficient & Hermetic Sealing System → Long Life Roller",
                            badges: [
                              "Contamination Protection",
                              "Extended Lifespan",
                              "Minimal Downtime",
                            ],
                            description:
                              "Our rollers feature a state-of-the-art, highly efficient hermetic sealing system that offers exceptional protection against dirt, moisture, and other environmental contaminants. This advanced sealing technology ensures that the internal components of the roller, including bearings and shafts, remain sealed from external elements, extending the roller's service life. The hermetic seals reduce wear and prevent the ingress of harmful materials, enabling the roller to operate reliably in harsh environments. With this superior sealing system, our rollers offer extended durability, lower maintenance costs, and consistently high performance throughout their lifespan.",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                id: "steel-rollers-mps",
                Component: IdlersPulleysDetailPage,
                title: "Steel Rollers - MPS",
                shortDescription:
                  "For light/medium duty conveyors at medium/high speed",
                heroData: {
                  title: "Steel Rollers - MPS",
                  subtitle:
                    "For light/medium duty conveyors at medium/high speed",
                  image: {
                    src: Images?.carryidlerssteelrollersmpshero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.carryidlerssteelrollersmps,
                  alt: "",
                },
                detailPageContent: [
                  {
                    type: "white-bordered",
                    title:
                      "Cost-Effective, High-Performance Solutions for Medium-Duty Conveyors",
                    paragraphs: [
                      "MPS rollers offer excellent cost efficiency and are equipped with rigid radial precision 6202 ball bearings, making them ideal for medium-duty conveyor systems. These rollers are designed to operate at high speeds and in environments with exposure to dirt and debris. They are constructed from durable steel to ensure long-lasting performance.",
                      "Standard components and grease enable the rollers to function within a temperature range of -20°C to +100°C. For applications requiring operation outside this range, specialized grease, bearings, and seals can be used. The robust labyrinth seal, featuring an inner lip, enhances the roller’s resistance to contaminants, ensuring reliable performance in challenging conditions. MPS rollers are particularly well-suited for medium-duty conveyors, as well as high-speed applications, offering an effective solution for demanding environments.",
                    ],
                  },
                ],
                layerFourProducts: [
                  {
                    id: "steel-impact-rollers-mps",
                    Component: IdlersPulleysProductDetailPage,
                    title: "Steel impact rollers - MPS",
                    shortDescription:
                      "Absorb the impact, protect your belt for light duty conveyors at medium/high speed",
                    heroData: {
                      title: "Steel impact rollers - MPS",
                      subtitle:
                        "Absorb the impact, protect your belt for light duty conveyors at medium/high speed",
                      image: {
                        src: Images?.carryidlerssteelrollersmpshero,
                        alt: "",
                      },
                    },
                    image: {
                      src: Images?.carryidlerssteelrollersmps,
                      alt: "",
                    },
                    overview: {
                      title:
                        "Durable Shock Absorption for Heavy Loads and Optimal Conveyor Protection",
                      paragraphs: [
                        {
                          title: "Overview",
                          description: [
                            "Our impact rollers, or shock absorbing rollers, are built with a durable steel roller base and enhanced with impact-resistant rings. These rings are designed to absorb and manage the stresses from materials hitting the conveyor belt. Located in the belt's carrying section, these rollers are aligned with the loading points where materials make contact. The addition of thick, resilient rubber rings ensures that the impact forces are adequately absorbed, protecting both the rollers and the belt from potential damage caused by heavy or uneven material loads.",
                          ],
                        },
                      ],
                    },

                    additionalData: [
                      {
                        title: "Main Features",
                        subData: [
                          {
                            Icon: (props) => <Zap {...props} />,
                            title: "Higher Quality Rubber Rings",
                            badges: [
                              "Superior Shock Absorption",
                              "Enhanced Durability",
                              "Reduced Maintenance",
                            ],
                            description:
                              "Our impact rollers are equipped with premium, high-quality rubber rings designed for superior performance and durability. These rubber rings are specifically engineered to absorb shock and manage the stresses caused by heavy materials, providing long-lasting resilience under demanding conditions. With their exceptional wear resistance and flexibility, these rubber rings help protect both the roller and conveyor belt, minimizing damage from impact forces. The high-quality material ensures that the rings maintain their shape and functionality over time, offering reliable protection and extending the life of your conveyor system",
                          },
                          {
                            Icon: (props) => <Shield {...props} />,
                            title:
                              "Solid Rubber Rings Fixation by High Steel Stop Ring, Welded to the Shell",
                            badges: [
                              "Secure Fixation",
                              "No Slippage",
                              "Heavy-Duty Construction",
                            ],
                            description:
                              "The rubber rings on our impact rollers are securely fixed using a high-strength steel stop ring, welded directly to the roller shell. This robust fixation system ensures that the rings remain firmly in place, even under intense impact and heavy material loads. The welded steel stop ring provides additional stability, preventing the rings from shifting or detaching during operation. This design guarantees the reliable performance of the impact roller, reducing the need for maintenance and increasing the overall durability of the roller system",
                          },
                          {
                            Icon: (props) => <Wrench {...props} />,
                            title:
                              "Highly Efficient & Hermetic Sealing System → Long Life Roller",
                            badges: [
                              "Contamination Protection",
                              "Extended Lifespan",
                              "Minimal Downtime",
                            ],
                            description:
                              "Our impact rollers feature a highly efficient, hermetic sealing system that provides superior protection against dust, dirt, and moisture. This advanced sealing technology prevents contaminants from entering the roller, safeguarding the internal components and ensuring smooth, reliable operation. The hermetic seal significantly reduces the risk of corrosion and wear, extending the roller’s lifespan and minimizing maintenance needs. By maintaining optimal performance in harsh environments, the sealing system ensures that the impact roller continues to operate effectively, even in challenging conditions, contributing to the long-term reliability and efficiency of your conveyor system",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "steel-return-rollers-rubber-rings-mps",
                    Component: IdlersPulleysProductDetailPage,
                    title: "Steel return rollers with rubber rings - MPS",
                    shortDescription:
                      "Support and cleaning, perfect tracking for light/medium duty applications",
                    heroData: {
                      title: "Steel return rollers with rubber rings - MPS",
                      subtitle:
                        "Support and cleaning, perfect tracking for light/medium duty applications",
                      image: {
                        src: Images?.carryidlerssteelreturnrollerswithrubberringsmps,
                        alt: "",
                      },
                    },
                    image: {
                      src: Images?.carryidlerssteelreturnrollerswithrubberringsmps,
                      alt: "",
                    },
                    overview: {
                      title:
                        "The Ultimate Solution for Conveyor Belt Support and Wear Prevention",
                      paragraphs: [
                        {
                          title: "Overview",
                          description: [
                            "Spaced ring rollers are an ideal solution for supporting and sustaining the conveyor belt in its return section, particularly where material adhesion and belt wear are concerns. These rollers feature rubber rings that operate within a temperature range of -20°C to +80°C. The rings are designed to disrupt the accumulation of sticky materials, helping to prevent irregular buildup and maintain proper belt tracking. With pointed rings in the center and flat rings at the edges, these rollers support both the belt's central and edge areas, ensuring reliable performance even under challenging conditions. Available in the following arrangement:",
                            "Arrangement G",
                            "Return rollers with pointed rings spaced in the central part and positioned in sets at the side. Used on belt conveyors of medium capacity.",
                          ],
                        },
                      ],
                    },

                    additionalData: [
                      {
                        title: "Main Features",
                        subData: [
                          {
                            Icon: (props) => <Zap {...props} />,
                            title: "Higher Quality Rubber Rings",
                            badges: [
                              "Superior Shock Absorption",
                              "Enhanced Durability",
                              "Reduced Maintenance",
                            ],
                            description:
                              "Our spaced ring rollers feature high-quality rubber rings designed to offer superior durability and performance. These premium rubber rings are crafted to withstand extreme conditions, ensuring exceptional resistance to wear, abrasion, and material adhesion. With a temperature range of -20°C to +80°C, they provide reliable operation across diverse environments, effectively reducing belt friction and enhancing overall conveyor system efficiency",
                          },
                          {
                            Icon: (props) => <Shield {...props} />,
                            title:
                              "Solid Rubber Rings Fixation by Outer Steel Stop Ring Welded and Hard PVC Central Distance Rings",
                            badges: [
                              "Secure Fixation",
                              "No Slippage",
                              "Heavy-Duty Construction",
                            ],
                            description:
                              "The robust construction of our spaced ring rollers includes solid rubber rings securely fixed in place by an outer steel stop ring. This welded design guarantees a stable and long-lasting performance, even under heavy load conditions. Additionally, the hard PVC central distance rings ensure consistent spacing between the rubber rings, maintaining optimal belt support and preventing irregular buildup. This combination enhances the roller's durability and performance in demanding conveyor systems",
                          },
                          {
                            Icon: (props) => <Wrench {...props} />,
                            title:
                              "Highly Efficient & Hermetic Sealing System → Long Life Roller",
                            badges: [
                              "Contamination Protection",
                              "Extended Lifespan",
                              "Minimal Downtime",
                            ],
                            description:
                              "Our rollers are equipped with a highly efficient hermetic sealing system, designed to protect against dirt, moisture, and abrasive particles. This advanced sealing mechanism ensures that the rubber rings remain intact and functional throughout their long lifespan. By preventing contamination and wear, this system maximizes the roller’s efficiency, providing long-term reliability and significantly reducing maintenance needs for conveyor systems",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "steel-return-self-cleaning-rollers-mps",
                    Component: IdlersPulleysProductDetailPage,
                    title: "Steel return self-cleaning rollers - MPS",
                    shortDescription:
                      "Clean surface, smooth performance for light/medium duty applications",
                    heroData: {
                      title: "Steel return self-cleaning rollers - MPS",
                      subtitle:
                        "Clean surface, smooth performance for light/medium duty applications",
                      image: {
                        src: Images?.carryidlerssteelreturnselfcleaningrollersmps,
                        alt: "",
                      },
                    },
                    image: {
                      src: Images?.carryidlerssteelreturnselfcleaningrollersmps,
                      alt: "",
                    },
                    overview: {
                      title: "",
                      paragraphs: [
                        {
                          title:
                            "The Perfect Solution for Preventing Material Buildup and Vibrations",
                          description: [
                            "Designed for environments where conveyed materials are either abrasive or highly viscous, these rollers feature helical spiral non-abrasive rings that clean and reduce material buildup on the belt surface. Ideal for the return section of short conveyors, they help prevent scale accumulation and vibrations caused by sticky materials. For long conveyors, use these rollers only in sections where material no longer adheres to the belt. These rollers are not intended for use as snub rollers adjacent to drive or return drums.",
                          ],
                        },
                      ],
                    },

                    additionalData: [
                      {
                        title: "Main Features",
                        subData: [
                          {
                            Icon: (props) => <Zap {...props} />,
                            title: "Higher Quality Rubber Rings",
                            badges: [
                              "Superior Shock Absorption",
                              "Enhanced Durability",
                              "Reduced Maintenance",
                            ],
                            description:
                              "Our spaced ring rollers feature high-quality rubber rings designed to offer superior durability and performance. These premium rubber rings are crafted to withstand extreme conditions, ensuring exceptional resistance to wear, abrasion, and material adhesion. With a temperature range of -20°C to +80°C, they provide reliable operation across diverse environments, effectively reducing belt friction and enhancing overall conveyor system efficiency",
                          },
                          {
                            Icon: (props) => <Shield {...props} />,
                            title:
                              "Solid Rubber Rings Fixation by High Steel Stop Ring, Welded to the Shell",
                            badges: [
                              "Secure Fixation",
                              "No Slippage",
                              "Heavy-Duty Construction",
                            ],
                            description:
                              "The robust construction of our spaced ring rollers includes solid rubber rings securely fixed in place by an outer steel stop ring. This welded design guarantees a stable and long-lasting performance, even under heavy load conditions. Additionally, the hard PVC central distance rings ensure consistent spacing between the rubber rings, maintaining optimal belt support and preventing irregular buildup. This combination enhances the roller's durability and performance in demanding conveyor systems",
                          },
                          {
                            Icon: (props) => <Wrench {...props} />,
                            title:
                              "Highly Efficient & Hermetic Sealing System → Long Life Roller",
                            badges: [
                              "Contamination Protection",
                              "Extended Lifespan",
                              "Minimal Downtime",
                            ],
                            description:
                              "Our rollers are equipped with a highly efficient hermetic sealing system, designed to protect against dirt, moisture, and abrasive particles. This advanced sealing mechanism ensures that the rubber rings remain intact and functional throughout their long lifespan. By preventing contamination and wear, this system maximizes the roller’s efficiency, providing long-term reliability and significantly reducing maintenance needs for conveyor systems",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "steel-belt-scale-rollers-mps",
                    Component: IdlersPulleysProductDetailPage,
                    title: "Steel belt scale rollers - MPS",
                    shortDescription:
                      "Precision you can count on for light/medium duty applications",
                    heroData: {
                      title: "Steel belt scale rollers - MPS",
                      subtitle:
                        "Precision you can count on for light/medium duty applications",
                      image: {
                        src: Images?.carryidlerssteelbeltscalerollersmps,
                        alt: "",
                      },
                    },
                    image: {
                      src: Images?.carryidlerssteelbeltscalerollersmps,
                      alt: "",
                    },
                    overview: {
                      title: "",
                      paragraphs: [
                        {
                          title:
                            "Precision Engineering for Accurate Belt Scale Performance",
                          description: [
                            "The MPS series from Highcon offers an excellent solution for applications requiring high rolling precision. With their calibrated tubes and precision-machined outer diameters, these belt scale rollers are designed to perform exceptionally well in weighing stations. The MPSseries ensures optimal performance and reliable accuracy for all your weighing needs.",
                          ],
                        },
                      ],
                    },

                    additionalData: [
                      {
                        title: "Main Features",
                        subData: [
                          {
                            Icon: (props) => <Zap {...props} />,
                            title: "Higher Quality Rubber Rings",
                            badges: [
                              "Superior Shock Absorption",
                              "Enhanced Durability",
                              "Reduced Maintenance",
                            ],
                            description:
                              "Our spaced ring rollers feature high-quality rubber rings designed to offer superior durability and performance. These premium rubber rings are crafted to withstand extreme conditions, ensuring exceptional resistance to wear, abrasion, and material adhesion. With a temperature range of -20°C to +80°C, they provide reliable operation across diverse environments, effectively reducing belt friction and enhancing overall conveyor system efficiency",
                          },
                          {
                            Icon: (props) => <Shield {...props} />,
                            title:
                              "Solid Rubber Rings Fixation by Outer Steel Stop Ring Welded and Hard PVC Central Distance Rings",
                            badges: [
                              "Secure Fixation",
                              "No Slippage",
                              "Heavy-Duty Construction",
                            ],
                            description:
                              "The robust construction of our spaced ring rollers includes solid rubber rings securely fixed in place by an outer steel stop ring. This welded design guarantees a stable and long-lasting performance, even under heavy load conditions. Additionally, the hard PVC central distance rings ensure consistent spacing between the rubber rings, maintaining optimal belt support and preventing irregular buildup. This combination enhances the roller's durability and performance in demanding conveyor systems",
                          },
                          {
                            Icon: (props) => <Wrench {...props} />,
                            title:
                              "Highly Efficient & Hermetic Sealing System → Long Life Roller",
                            badges: [
                              "Contamination Protection",
                              "Extended Lifespan",
                              "Minimal Downtime",
                            ],
                            description:
                              "Our rollers are equipped with a highly efficient hermetic sealing system, designed to protect against dirt, moisture, and abrasive particles. This advanced sealing mechanism ensures that the rubber rings remain intact and functional throughout their long lifespan. By preventing contamination and wear, this system maximizes the roller’s efficiency, providing long-term reliability and significantly reducing maintenance needs for conveyor systems",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "steel-lagged-rollers-mps",
                    Component: IdlersPulleysProductDetailPage,
                    title: "Steel lagged rollers - MPS",
                    shortDescription:
                      "Tailored surface design for greater efficiency and reduced material build-up in light and medium-duty applications",
                    heroData: {
                      title: "Steel lagged rollers - MPS",
                      subtitle:
                        "Tailored surface design for greater efficiency and reduced material build-up in light and medium-duty applications",
                      image: {
                        src: Images?.carryidlerssteellaggedrollersmps,
                        alt: "",
                      },
                    },
                    image: {
                      src: Images?.carryidlerssteellaggedrollersmps,
                      alt: "",
                    },
                    overview: {
                      title: "",
                      paragraphs: [
                        {
                          title:
                            "Maximize Efficiency and Prevent Material Buildup on Conveyors",
                          description: [
                            "Materials conveyed on belts frequently adhere to both the conveyor belt and return rollers, resulting in troublesome build-up and belt tracking issues. To combat this, Highconighcon offers rollers with customizable coatings in rubber or polyurethane, designed to minimize material adherence. Our rubber coatings come in various types, including standard, antistatic, fire-resistant, and flame-retardant, tailored to meet your specific needs and enhance conveyor efficiency.",
                          ],
                        },
                      ],
                    },

                    additionalData: [
                      {
                        title: "Main Features",
                        subData: [
                          {
                            Icon: (props) => <Zap {...props} />,
                            title: "Higher Quality Rubber Rings",
                            badges: [
                              "Superior Shock Absorption",
                              "Enhanced Durability",
                              "Reduced Maintenance",
                            ],
                            description:
                              "Our spaced ring rollers feature high-quality rubber rings designed to offer superior durability and performance. These premium rubber rings are crafted to withstand extreme conditions, ensuring exceptional resistance to wear, abrasion, and material adhesion. With a temperature range of -20°C to +80°C, they provide reliable operation across diverse environments, effectively reducing belt friction and enhancing overall conveyor system efficiency",
                          },
                          {
                            Icon: (props) => <Shield {...props} />,
                            title:
                              "Solid Rubber Rings Fixation by Outer Steel Stop Ring Welded and Hard PVC Central Distance Rings",
                            badges: [
                              "Secure Fixation",
                              "No Slippage",
                              "Heavy-Duty Construction",
                            ],
                            description:
                              "The robust construction of our spaced ring rollers includes solid rubber rings securely fixed in place by an outer steel stop ring. This welded design guarantees a stable and long-lasting performance, even under heavy load conditions. Additionally, the hard PVC central distance rings ensure consistent spacing between the rubber rings, maintaining optimal belt support and preventing irregular buildup. This combination enhances the roller's durability and performance in demanding conveyor systems",
                          },
                          {
                            Icon: (props) => <Wrench {...props} />,
                            title:
                              "Highly Efficient & Hermetic Sealing System → Long Life Roller",
                            badges: [
                              "Contamination Protection",
                              "Extended Lifespan",
                              "Minimal Downtime",
                            ],
                            description:
                              "Our rollers are equipped with a highly efficient hermetic sealing system, designed to protect against dirt, moisture, and abrasive particles. This advanced sealing mechanism ensures that the rubber rings remain intact and functional throughout their long lifespan. By preventing contamination and wear, this system maximizes the roller’s efficiency, providing long-term reliability and significantly reducing maintenance needs for conveyor systems",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                id: "steel-tube-technopolymers-rtl",
                Component: IdlersPulleysProductDetailPage,
                title: "Steel tube and technopolymers bearing housings - RTL",
                shortDescription: "For light duty applications",
                heroData: {
                  title: "Steel tube and technopolymers bearing housings - RTL",
                  subtitle: "For light duty applications",
                  image: {
                    src: Images?.carryidlerssteeltubeandtechnopolymersbearinghousingsrtlhero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.carryidlerssteeltubeandtechnopolymersbearinghousingsrtl,
                  alt: "",
                },
                overview: {
                  title:
                    "Durable and Efficient Solutions for Moving Light Loads in Harsh Conditions",
                  paragraphs: [
                    {
                      title: "Overview",
                      description: [
                        "The roller series RTL has been designed to be used in the movement of small or light loads. The roller consists of a special steel tube swaged over the bearing housings which are made from technopolymers which have high elastic properties, and resistance to mechanical forces and to corrosion.The standard design utilises bearings of type 6202 rigid radial ball race, a spindle of Ø15 mm with locking bush with spanner flats ch = 17 mm.",
                        "A double radial labyrinth protects the bearing to allow use in medium severe environmental conditions.",
                        "The functioning temperatures recommended are: – 10°C a + 70 °C.",
                      ],
                    },
                  ],
                },
                additionalData: [
                  {
                    title: "Main Features",
                    subData: [
                      {
                        Icon: (props) => <Zap {...props} />,
                        title: "Anticorrosion Polymer Housings for Light Duty",
                        badges: [
                          "Superior Shock Absorption",
                          "Enhanced Durability",
                          "Reduced Maintenance",
                        ],
                        description:
                          "The roller housings are made from high-quality anticorrosion polymer materials, specifically designed for light-duty applications. These housings provide exceptional resistance to corrosion, making them ideal for environments where exposure to moisture, chemicals, or other corrosive substances is common. The polymer construction ensures that the roller remains durable and maintains its performance over time, reducing maintenance requirements and extending the lifespan of the conveyor system, even in challenging conditions",
                      },
                      {
                        Icon: (props) => <Shield {...props} />,
                        title:
                          "Highly Cost-Saving Solution, Also with Stainless Steel Options (Tube, Shaft, Bearings)",
                        badges: [
                          "Secure Fixation",
                          "No Slippage",
                          "Heavy-Duty Construction",
                        ],
                        description:
                          "This roller series offers a highly cost-effective solution, providing reliable performance without compromising on quality. For applications requiring enhanced durability, stainless steel options are available for the tube, shaft, and bearings. These stainless steel components provide additional resistance to corrosion and wear, making the rollers suitable for harsher environments while maintaining a competitive cost structure. This versatility allows companies to choose the optimal solution based on their specific operational needs and budget constraints",
                      },
                      {
                        Icon: (props) => <Wrench {...props} />,
                        title:
                          "Tight & Compact Sealing System, Also for Outdoor & Aggressive Environments",
                        badges: [
                          "Contamination Protection",
                          "Extended Lifespan",
                          "Minimal Downtime",
                        ],
                        description:
                          "The roller features a tight and compact sealing system that ensures optimal protection against dust, dirt, water, and other contaminants. This advanced sealing design is specifically engineered for use in outdoor and aggressive environments, where exposure to harsh weather, chemicals, or pollutants is common. The hermetic seals prevent the ingress of harmful materials, extending the lifespan of the roller and maintaining its high performance even under extreme conditions. This sealing system reduces maintenance needs and enhances the roller’s overall reliability in demanding applications",
                      },
                    ],
                  },
                ],
              },
              {
                id: "hdpe-rollers-top",
                Component: IdlersPulleysProductDetailPage,
                title: "HDPE Rollers - TOP",
                shortDescription: "For light/medium duty applications",
                heroData: {
                  title: "HDPE Rollers - TOP",
                  subtitle: "For light/medium duty applications",
                  image: {
                    src: Images?.carryidlershdpehighdensitypolyethylenerollerstophero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.carryidlershdpehighdensitypolyethylenerollerstop,
                  alt: "",
                },
                detailPageContent: [
                  {
                    type: "white-bordered",
                    title:
                      "Lightweight, energy-efficient and durable HDPE roller for safer, low-maintenance operations",
                    paragraphs: [
                      "Highcon TOP series is a totally thermoplastic polymer roller, with the exeption of steel in the ball bearing and shaft. In fact, a reinforcing steel tube is fitted inside the high density polyethylene shell for rollers lenghts B>600 only.",
                      "The high density polyethylene tube has about 50% lower weight with respect to steel rollers. First, this ensures easier and safer transportation, mounting and maintenance operations. Especially where such interventions may be critical – like in suspended, long or hard-to-access belt conveyors – operators can better prevent back injuries. Moreover, lightness means lower power consumption during start/stop operations of the belt conveyor and therefore a reduction of power requirements on the plant. Even the low running resistance sealing system of our TOP roller has the same effect by requiring lower motor torque in conveyor starts, lower motor power size and therefore a reduction of energy consumption of the belt conveyor.",
                      "Other advantages come from the construction material of an HDPE roller. First, thermoplastic noise and vibration absorption result in low noise emission. Second, low level of abrasion and corrosion denotes high wear resistance which guarantees longer life of the roller itself and lower maintenance of the whole plant. Third, the self-cleaning surface of our roller favors the prevention of build-up of material – main cause of belt mis-tracking – and the consequent reduction of spillage from the belt.",
                    ],
                  },
                  {
                    type: "gray-shadow",
                    title:
                      "One of the most versatile and used type of polymer rollers",
                    paragraphs: [
                      "By now, polymer rollers have become integral to modern material handling and HDPE is among the most widely used materials by manufacturers. While not designed for extreme heavy-duty applications where other materials may be better suited, it has the ideal balance between mechanical and chemical resistance, cost-efficiency and operational reliability for most bulk handling operations.",
                      "At Highcon, we chose to design and engineer an HDPE roller able to deliver higher performance, safer and lower maintenance operations in light and medium duty conveyor systems. Our TOP roller is a very flexible series, suitable for use in a wide variety of applicationa and products such as cement, coal, gravel, fertilisers, ports, chemicals and many others.",
                    ],
                  },
                ],
                additionalData: [
                  {
                    title: "Main Features",
                    subData: [
                      {
                        Icon: (props) => <Zap {...props} />,
                        title:
                          "Anticorrosion polymer roller for light/medium duty applications",
                        badges: [
                          "Superior Shock Absorption",
                          "Enhanced Durability",
                          "Reduced Maintenance",
                        ],
                        description:
                          "TOP roller, featuring both polymer housing and tube, is specifically engineered for light/medium applications. This innovative design ensures enhanced protection against corrosion, wear, and harsh environmental factors, making it ideal for industries dealing with bulk material handling. The high-performance polymer construction significantly extends the lifespan of the roller, reducing maintenance needs and ensuring reliable, consistent performance under heavy loads and extreme conditions",
                      },
                      {
                        Icon: (props) => <Shield {...props} />,
                        title:
                          "Hermetic or contactless seals options available",
                        badges: [
                          "Secure Fixation",
                          "No Slippage",
                          "Heavy-Duty Construction",
                        ],
                        description:
                          "TOP roller is available in both hermetic and contactless executions, providing superior protection for internal components in challenging environments. The hermetic seals offer a tight, reliable barrier against dust, water, and other contaminants, ensuring optimal bearing protection and performance over time. Alternatively, the contactless seal option minimizes friction and wear, reducing maintenance requirements while ensuring smooth operation. Both sealing options are designed to improve durability and extend operational life of the roller, making it well-suited for harsh industrial applications",
                      },
                      {
                        Icon: (props) => <Wrench {...props} />,
                        title:
                          "Extra light weight, low noise level due to HDPE roller outer shell",
                        badges: [
                          "Contamination Protection",
                          "Extended Lifespan",
                          "Minimal Downtime",
                        ],
                        description:
                          "The roller outer shell in HDPE is engineered to be extremely lightweight while maintaining strength and durability. This design reduces the overall weight of the roller by approximately 50% compared to traditional steel rollers, making it easier to transport, install, and maintain. Additionally, the HDPE shell absorbs noise and vibrations, resulting in quieter operation and reduced mechanical wear. This contributes to a more comfortable and energy-efficient working environment, reducing both power consumption and noise pollution in conveyor",
                      },
                    ],
                  },
                ],
              },
              {
                id: "hdpe-rollers-supreme",
                Component: IdlersPulleysProductDetailPage,
                title: "HDPE Rollers - SUPREME",
                shortDescription: "For medium/heavy duty applications",
                heroData: {
                  title: "HDPE Rollers - SUPREME",
                  subtitle: "For medium/heavy duty applications",
                  image: {
                    src: Images?.carryidlershdpehighdensitypolyethylenerollerssupremehero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.carryidlershdpehighdensitypolyethylenerollerssupreme,
                  alt: "",
                },
                detailPageContent: [
                  {
                    type: "white-bordered",
                    title:
                      "Light in weight, but not in results: HDPE roller for heavy-duty bulk handling",
                    paragraphs: [
                      "Highcon SUPREME roller is designed for a wide variety of applications where low noise operation and low energy consumption are researched while dealing with heavy-duty bulk handling and corrosive materials or environments.",
                      "It’s a completely HDPE roller, featuring high density polyethylene tube and housings (only rollers of > 600 length have a reinforcing steel tube fitted inside the HDPE shell). The ultra-tick polymer shell has a high strength-to-weight ratio, noise and vibration absorption properties, high resistance to abrasion and corrosion of the main aggressive contaminants and chemical agents. Add to that an additional static face and a labyrinth sealing system to further limit the ingress of dirt and provide a safety system to limit nip point risk. Also, the machined finish ensures low run-out and its self-cleaning surface prevents material spillage and belt miss-tracking.",
                    ],
                  },
                  {
                    type: "gray-shadow",
                    title:
                      "Comparing our HDPE roller with normal steel rollers",
                    paragraphs: [
                      "Highcon SUPREME HDPE roller is able to handle the same loading capacity as a steel roller with equal dimensions. However, it has important operative advantages for the whole plant in comparison.",
                      "First, the polymer construction makes it about 50% lighter, therby ensuring easier handling and mounting operations, especially on large rollers. The resultant lower rotating mass also reduces the torque required for the conveyor, leading to energy savings during start-up, start/stop and continuous operations. Secondly, speaking about another sensitive issue in terms of environemnts and safety, high density polyethylene is able to minimize vibrations and absorb noise emissions in contrast to steel. Finally, the non-corrosive HDPE face means longer operating life and lower maintenance under aggressive conditions that steel is more vulnerable to. Our SUPREME roller is particularly suited to handling operations of abrasive sand, iron, gold, platinum ore, coal handling, indeed.",
                    ],
                  },
                ],
                additionalData: [
                  {
                    title: "Main Features",
                    subData: [
                      {
                        Icon: (props) => <Zap {...props} />,
                        title:
                          "Corrosion-resistant polymer roller for heavy-duty",
                        badges: [
                          "Superior Shock Absorption",
                          "Enhanced Durability",
                          "Reduced Maintenance",
                        ],
                        description:
                          "SUPREME roller is specifically designed for heavy-duty applications, offering superior resistance to harsh environments. With both housings and tube of high-performance HDPE, it provides excellent protection against corrosion, wear and chemical damage, ensuring long-lasting performance in aggressive conditions. Ideal for use in industries such as mining, cement and bulk material handling, its polymer construction reduces the need for frequent maintenance and enhances the overall durability even under heavy loads",
                      },
                      {
                        Icon: (props) => <Shield {...props} />,
                        title:
                          "Availability of hermetic or contactless executions",
                        badges: [
                          "Secure Fixation",
                          "No Slippage",
                          "Heavy-Duty Construction",
                        ],
                        description:
                          "SUPREME roller features advanced hermetic or contactless seal options, providing enhanced protection for the internal components. The hermetic sealing system prevents the ingress of dust, water and other contaminants, ensuring that the bearings and other critical parts remain intact and operate smoothly. The contactless seal option minimizes friction and wear, offering a longer service life and lower maintenance needs. These sealing technologies are particularly effective in harsh environments, extending the roller's reliability and performance in industries that require minimal downtime",
                      },
                      {
                        Icon: (props) => <Wrench {...props} />,
                        title:
                          "Extra low noise rotation due to HDPE outer turner shell",
                        badges: [
                          "Contamination Protection",
                          "Extended Lifespan",
                          "Minimal Downtime",
                        ],
                        description:
                          "The outer turner shell of SUPREME roller is designed to provide extra low noise during rotation, making it ideal for environments where noise reduction is crucial. The precision-machined HDPE shell helps minimize vibrations and noise emissions, ensuring quieter operation compared to traditional steel rollers. This feature contributes to a more comfortable and safer work environment, especially in sensitive or noise-sensitive applications. The high-quality HDPE shell not only reduces noise but also enhances the roller's overall performance and longevity",
                      },
                    ],
                  },
                ],
              },
              {
                id: "polymer-rollers-pl",
                Component: IdlersPulleysProductDetailPage,
                title: "Polymer Rollers - PL",
                shortDescription:
                  "For light duty conveyors in severe corrosive environments",
                heroData: {
                  title: "Polymer Rollers - PL",
                  subtitle:
                    "For light duty conveyors in severe corrosive environments",
                  image: {
                    src: Images?.carryidlerspolymerrollersplhero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.carryidlerspolymerrollerspl,
                  alt: "",
                },
                detailPageContent: [
                  {
                    type: "white-bordered",
                    title:
                      "Full polymer roller, full mechanical and corrosion resistance",
                    paragraphs: [
                      "Product testing and plant trials have well demonstrated that polymer rollers are a cost-effective alternative to traditional materials such as steel, bronze and aluminum in bulk handling applications.",
                      "The design of Highcon PL roller uses premium plastic materials for the most critical parts: roller shell is PVC, while bearing housings are in polypropylene with fiberglass. Both are highly resistant to most chemical agents, water, humidity, and other corrosive elements present in the environment or the conveyed material itself. Also, they can handle low and high temperatures from -10°C to +50°C and support heavy loads while maintaining lightness, balance, and noiselessness. High mechanical properties of PL roller are also ensured by its own design as a precision arrangement and generously dimensioned components allow optimal load distribution and belt contact. Besides that, another key advantage of PL roller is reduced energy consumption due to the outer PVC shell and contact-free parts in the sealing system.",
                    ],
                  },
                  {
                    type: "gray-shadow",
                    title: "Great fit for severe bulk handling applications",
                    paragraphs: [
                      "Thanks to its features, PL roller provides a long working life combined with low maintenance costs even where difficult operating or environmental conditions prevail. Severe bulk handling applications like mines and extraction industries, salt and sugar processing plants, chemical industries, fertilizer manufacture, marine environments can rely on the superior performance of our roller to run belt conveyors where traditional rollers would struggle.",
                    ],
                  },
                ],
                additionalData: [
                  {
                    title: "Main Features",
                    subData: [
                      {
                        Icon: (props) => <Zap {...props} />,
                        title:
                          "Anticorrosion full polymer roller for medium duty",
                        badges: [
                          "Superior Shock Absorption",
                          "Enhanced Durability",
                          "Reduced Maintenance",
                        ],
                        description:
                          "PL roller is specifically designed for medium-duty applications, particularly in environments exposed to salt and acid conveyors. Constructed from advanced polymer materials, it offers superior resistance to corrosion, ensuring long-lasting performance even in harsh, chemically aggressive conditions. Ideal for industries such as chemical processing, mining, and food production, it maintains reliable operation, reducing maintenance needs and extending the lifespan of the conveyor system",
                      },
                      {
                        Icon: (props) => <Shield {...props} />,
                        title:
                          "Polymer slotted bush, contactless, low running resistance",
                        badges: [
                          "Secure Fixation",
                          "No Slippage",
                          "Heavy-Duty Construction",
                        ],
                        description:
                          "The polymer slotted bush system of PL roller features a contactless design, which minimizes friction and ensures smooth operation of the rollers. This low running resistance significantly enhances conveyor efficiency by reducing energy consumption and wear on components. The absence of direct contact between moving parts reduces the risk of damage and extends the lifespan of the system. This innovative design delivers optimal performance in medium-duty applications, offering both durability and operational efficiency",
                      },
                      {
                        Icon: (props) => <Wrench {...props} />,
                        title: "Extra light weight and low noise level",
                        badges: [
                          "Contamination Protection",
                          "Extended Lifespan",
                          "Minimal Downtime",
                        ],
                        description:
                          "PL roller is engineered with an ultra-lightweight design, featuring an outer PVC shell that contributes to its reduced noise level during operation. The lightweight construction facilitates easy installation and maintenance, while the PVC shell helps minimize vibrations and noise, creating a quieter working environment. This feature is especially beneficial in applications where noise reduction is crucial, such as in production lines or sensitive working environments, offering an efficient, low-maintenance solution with superior acoustic performance",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "impact-rollers",
            Component: IdlersPulleysDetailPage,
            title: "Impact Rollers",
            shortDescription:
              "With rubber rings and steel core, designed to absorb the stress given by the impact of the material drop.",
            image: {
              src: Images?.impactrollers,
              alt: "Impact Rollers",
            },
            heroData: {
              title: "Impact Rollers",
              image: {
                src: Images?.impactrollershero,
                alt: "Impact Rollers Hero Image",
              },
            },
            layerThreeProducts: [
              {
                id: "steel-rollers-psv",
                Component: IdlersPulleysProductDetailPage,
                title: "Steel impact rollers - PSV",
                shortDescription:
                  "Enhanced protection for material impact for light/medium/heavy duty applications",
                heroData: {
                  title: "Steel impact rollers - PSV",
                  subtitle:
                    "Enhanced protection for material impact for light/medium/heavy duty applications",
                  image: {
                    src: Images?.impactrollerssteelimpactrollerspsvhero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.impactrollerssteelimpactrollerspsv,
                  alt: "",
                },
                overview: {
                  title: "Ultimate Protection for Your Conveyor Belt",
                  paragraphs: [
                    {
                      title: "Overview",
                      description: [
                        'Shock absorbing rollers, commonly referred to as "impact rollers," feature a robust steel roller core outfitted with specialized rings. These rings are engineered to withstand and cushion the forces exerted by materials impacting the conveyor belt. Strategically placed within the belt\'s carrying section, impact rollers are positioned precisely where the material is deposited, safeguarding the belt from potential damage caused by the weight and force of falling materials. To mitigate the impact, each roller is encased in durable rubber rings, providing the necessary thickness and resilience to absorb shocks effectively.',
                      ],
                    },
                  ],
                },
                additionalData: [
                  {
                    title: "Main Features",
                    subData: [
                      {
                        Icon: (props) => <Zap {...props} />,
                        title: "Higher Quality Rubber Rings",
                        badges: [
                          "Superior Shock Absorption",
                          "Enhanced Durability",
                          "Reduced Maintenance",
                        ],
                        description:
                          "The impact rollers are equipped with higher quality rubber rings that are specifically designed to provide superior shock absorption and durability. These high-performance rubber rings effectively cushion the impact forces from falling materials, ensuring minimal wear on the conveyor system. The material composition is optimized for enhanced resistance to abrasion, temperature variations, and chemical exposure, offering longer-lasting protection and reducing maintenance intervals, even in demanding bulk handling applications.",
                      },
                      {
                        Icon: (props) => <Shield {...props} />,
                        title:
                          "Solid Rubber Rings Fixation by High Steel Stop Ring, Welded to the Shell",
                        badges: [
                          "Secure Fixation",
                          "No Slippage",
                          "Heavy-Duty Construction",
                        ],
                        description:
                          "The solid rubber rings are securely fixed using a high steel stop ring that is welded directly to the roller shell. This advanced fixation method ensures a firm and stable attachment of the rubber rings, preventing slippage or premature wear during operation. The welded steel stop ring provides additional strength and durability, contributing to the roller’s overall resilience and reliability, even in high-impact and harsh working conditions. This construction guarantees that the rubber rings remain intact and perform optimally under heavy loads",
                      },
                      {
                        Icon: (props) => <Wrench {...props} />,
                        title:
                          "Highly Efficient & Hermetic Sealing System → Long Life Roller",
                        badges: [
                          "Contamination Protection",
                          "Extended Lifespan",
                          "Minimal Downtime",
                        ],
                        description:
                          "The roller features a highly efficient hermetic sealing system that protects the internal components from dust, water, and other contaminants. This robust sealing mechanism ensures that the roller remains fully protected, reducing the risk of internal damage and enhancing its overall lifespan. By preventing the ingress of harmful elements, the hermetic seals contribute to the roller's long life, minimizing downtime and maintenance costs while ensuring maximum performance in heavy-duty applications",
                      },
                    ],
                  },
                ],
              },
              {
                id: "steel-heavy-duty-impact-rollers-hdr",
                Component: IdlersPulleysProductDetailPage,
                title: "Steel heavy duty impact rollers - HDR",
                shortDescription:
                  "Impact protection, extra heavy duty performance for heavy duty conveyors and mining applications",
                heroData: {
                  title: "Steel heavy duty impact rollers - HDR",
                  subtitle:
                    "Impact protection, extra heavy duty performance for heavy duty conveyors and mining applications",
                  image: {
                    src: Images?.impactrollerssteelheavydutyimpactrollershdrhero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.impactrollerssteelheavydutyimpactrollershdr,
                  alt: "",
                },
                overview: {
                  title:
                    "Impact Protection at Its Best: Shock-Absorbing Rollers for Heavy-Duty Conveyor Systems",
                  paragraphs: [
                    {
                      title: "Overview",
                      description: [
                        "The impact rollers, also known as shock absorbing rollers, incorporate a sturdy steel roller framework equipped with specially designed rings to handle the impact pressures from materials falling onto the conveyor belt. These rollers are strategically positioned in the belt's carrying section, directly at the loading zones where materials land. To counteract the impact force, each roller is covered with a series of thick, resilient rubber rings that provide the necessary cushioning and protection, ensuring that both the belt and rollers are shielded from damage due to heavy material loads.",
                      ],
                    },
                  ],
                },
                additionalData: [
                  {
                    title: "Main Features",
                    subData: [
                      {
                        Icon: (props) => <Zap {...props} />,
                        title:
                          "Higher Quality Rubber Rings, Respect Competitors",
                        badges: [
                          "Superior Shock Absorption",
                          "Enhanced Durability",
                          "Reduced Maintenance",
                        ],
                        description:
                          "Our impact rollers are equipped with superior quality rubber rings, engineered to outperform standard alternatives. These high-performance rubber rings offer enhanced durability, superior cushioning, and excellent resistance to wear and abrasion. The carefully selected materials ensure optimal shock absorption and protect both the conveyor belt and the rollers from the damaging effects of heavy material impact. The quality of these rubber rings surpasses competitor offerings, guaranteeing longer service life and reduced maintenance requirements, making them the ideal solution for demanding material handling applications",
                      },
                      {
                        Icon: (props) => <Shield {...props} />,
                        title:
                          "Solid Rubber Rings Fixation by High Steel Stop Ring, Welded to the Shell",
                        badges: [
                          "Secure Fixation",
                          "No Slippage",
                          "Heavy-Duty Construction",
                        ],
                        description:
                          "To ensure maximum stability and long-term reliability, the rubber rings of our impact rollers are securely fixed with a high-strength steel stop ring, welded directly to the roller shell. This robust fixation method prevents the rings from dislodging or shifting during operation, even under extreme impact forces. The welded steel stop ring provides additional reinforcement, ensuring that the rubber rings remain firmly in place while delivering consistent protection. This advanced fixation design enhances the overall durability of the roller, making it highly resistant to the stresses typically experienced in heavy-duty conveyor systems",
                      },
                      {
                        Icon: (props) => <Wrench {...props} />,
                        title:
                          "Highly Efficient & Hermetic Sealing System → Long Life Roller",
                        badges: [
                          "Contamination Protection",
                          "Extended Lifespan",
                          "Minimal Downtime",
                        ],
                        description:
                          "Our rollers feature a state-of-the-art, highly efficient hermetic sealing system that offers exceptional protection against dirt, moisture, and other environmental contaminants. This advanced sealing technology ensures that the internal components of the roller, including bearings and shafts, remain sealed from external elements, extending the roller's service life. The hermetic seals reduce wear and prevent the ingress of harmful materials, enabling the roller to operate reliably in harsh environments. With this superior sealing system, our rollers offer extended durability, lower maintenance costs, and consistently high performance throughout their lifespan",
                      },
                    ],
                  },
                ],
              },
              {
                id: "steel-impact-rollers-mps",
                Component: IdlersPulleysProductDetailPage,
                title: "Steel impact rollers - MPS",
                shortDescription:
                  "Absorb the impact, protect your belt for light duty conveyors at medium/high speed",
                heroData: {
                  title: "Steel impact rollers - MPS",
                  subtitle:
                    "Absorb the impact, protect your belt for light duty conveyors at medium/high speed",
                  image: {
                    src: Images?.impactrollerssteelimpactrollersmpshero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.impactrollerssteelimpactrollersmps,
                  alt: "",
                },
                overview: {
                  title:
                    "Durable Shock Absorption for Heavy Loads and Optimal Conveyor Protection",
                  paragraphs: [
                    {
                      title: "Overview",
                      description: [
                        "Our impact rollers, or shock absorbing rollers, are built with a durable steel roller base and enhanced with impact-resistant rings. These rings are designed to absorb and manage the stresses from materials hitting the conveyor belt. Located in the belt's carrying section, these rollers are aligned with the loading points where materials make contact. The addition of thick, resilient rubber rings ensures that the impact forces are adequately absorbed, protecting both the rollers and the belt from potential damage caused by heavy or uneven material loads.",
                      ],
                    },
                  ],
                },
                additionalData: [
                  {
                    title: "Main Features",
                    subData: [
                      {
                        Icon: (props) => <Zap {...props} />,
                        title: "Higher Quality Rubber Rings",
                        badges: [
                          "Superior Shock Absorption",
                          "Enhanced Durability",
                          "Reduced Maintenance",
                        ],
                        description:
                          "Our impact rollers are equipped with premium, high-quality rubber rings designed for superior performance and durability. These rubber rings are specifically engineered to absorb shock and manage the stresses caused by heavy materials, providing long-lasting resilience under demanding conditions. With their exceptional wear resistance and flexibility, these rubber rings help protect both the roller and conveyor belt, minimizing damage from impact forces. The high-quality material ensures that the rings maintain their shape and functionality over time, offering reliable protection and extending the life of your conveyor system",
                      },
                      {
                        Icon: (props) => <Shield {...props} />,
                        title:
                          "Solid Rubber Rings Fixation by High Steel Stop Ring, Welded to the Shell",
                        badges: [
                          "Secure Fixation",
                          "No Slippage",
                          "Heavy-Duty Construction",
                        ],
                        description:
                          "The rubber rings on our impact rollers are securely fixed using a high-strength steel stop ring, welded directly to the roller shell. This robust fixation system ensures that the rings remain firmly in place, even under intense impact and heavy material loads. The welded steel stop ring provides additional stability, preventing the rings from shifting or detaching during operation. This design guarantees the reliable performance of the impact roller, reducing the need for maintenance and increasing the overall durability of the roller system",
                      },
                      {
                        Icon: (props) => <Wrench {...props} />,
                        title:
                          "Highly Efficient & Hermetic Sealing System → Long Life Roller",
                        badges: [
                          "Contamination Protection",
                          "Extended Lifespan",
                          "Minimal Downtime",
                        ],
                        description:
                          "Our impact rollers feature a highly efficient, hermetic sealing system that provides superior protection against dust, dirt, and moisture. This advanced sealing technology prevents contaminants from entering the roller, safeguarding the internal components and ensuring smooth, reliable operation. The hermetic seal significantly reduces the risk of corrosion and wear, extending the roller’s lifespan and minimizing maintenance needs. By maintaining optimal performance in harsh environments, the sealing system ensures that the impact roller continues to operate effectively, even in challenging conditions, contributing to the long-term reliability and efficiency of your conveyor system",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "return-roller",
            Component: IdlersPulleysDetailPage,
            title: "Return Roller",
            shortDescription:
              "To eliminate the build-up of material, particularly present in the belt centre",
            image: {
              src: Images?.returnrollers,
              alt: "Return Roller",
            },
            heroData: {
              title: "Return Roller",
              subtitle:
                "To eliminate the build-up of material, particularly present in the belt centre",
              image: {
                src: Images?.returnrollershero,
                alt: "",
              },
            },
            layerThreeProducts: [
              {
                id: "steel-return-rollers-rubber-rings-psv",
                Component: IdlersPulleysProductDetailPage,
                title: "Steel return rollers with rubber rings - PSV",
                shortDescription: "For light/medium/heavy duty applications",
                heroData: {
                  title: "Steel return rollers with rubber rings - PSV",
                  subtitle:
                    "Wide versatility, limitless performance for light/medium/heavy duty applications",
                  image: {
                    src: Images?.returnrollerssteelreturnrollersrubberringspsvhero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.returnrollerssteelreturnrollersrubberringspsv,
                  alt: "",
                },
                overview: {
                  title:
                    "Enhanced Support, Stability, and Belt Protection for Optimal Performance",
                  paragraphs: [
                    {
                      title: "Overview",
                      description: [
                        "Rollers featuring spaced rings are designed to enhance support and stability in the belt’s return section. These rollers are particularly effective where material adherence or belt wear issues are prevalent. The rubber rings can operate within a temperature range of -20°C to +80°C, effectively tackling the challenges posed by sticky materials that adhere to the belt. By preventing material buildup on the rollers, these spaced rings help maintain proper belt tracking and reduce the irregularities that can lead to belt wear and misalignment. Available in the following arrangements (G,L,C):",
                        "Arrangement G",
                        "Return rollers with pointed rings spaced in the central part and positioned in sets at the side. Used on belt conveyors of medium capacity.",
                        "Arrangement L",
                        "Return rollers used on belt conveyors in high duty plant. They are provided with sets of fl at rings, positioned at the roller extremities, and with pointed rings spaced in the central part of the roller.",
                        "Arrangement C",
                        "Return rollers for return transom sets of “V” design format with base rolllers from series PSV, with characteristic proportional dimensions to the requirements designed into large belt conveyors.",
                      ],
                    },
                  ],
                },

                additionalData: [
                  {
                    title: "Main Features",
                    subData: [
                      {
                        Icon: (props) => <Zap {...props} />,
                        title: "Higher Quality Rubber Rings",
                        badges: [
                          "Superior Shock Absorption",
                          "Enhanced Durability",
                          "Reduced Maintenance",
                        ],
                        description:
                          "The rollers are equipped with high-quality rubber rings designed for maximum durability and shock absorption. These superior rubber rings are formulated to provide exceptional resistance to wear, abrasion, and environmental conditions, ensuring consistent performance in heavy-duty applications. They effectively cushion the impact of falling materials, reduce the stress on the conveyor system, and enhance the overall longevity of the rollers, even in extreme operational conditions such as bulk material handling and mining environments",
                      },
                      {
                        Icon: (props) => <Shield {...props} />,
                        title:
                          "Solid Rubber Rings Fixation by Outer Steel Stop Ring Welded and Hard PVC Central Distance Rings",
                        badges: [
                          "Secure Fixation",
                          "No Slippage",
                          "Heavy-Duty Construction",
                        ],
                        description:
                          "The rubber rings are securely fixed in place using an outer steel stop ring, which is welded to the roller shell, providing a stable and durable attachment. The welded steel stop ring ensures that the rubber rings stay firmly in position, preventing slippage or degradation over time. Additionally, the inclusion of hard PVC central distance rings provides precise spacing between the rubber rings, enhancing the roller’s stability and efficiency while ensuring that the roller operates smoothly and maintains its shape under heavy loads and high impact",
                      },
                      {
                        Icon: (props) => <Wrench {...props} />,
                        title:
                          "Highly Efficient & Hermetic Sealing System → Long Life Roller",
                        badges: [
                          "Contamination Protection",
                          "Extended Lifespan",
                          "Minimal Downtime",
                        ],
                        description:
                          "The roller features a highly efficient hermetic sealing system that safeguards its internal components from dust, water, and other contaminants. This robust sealing mechanism effectively prevents the ingress of harmful materials, which could lead to premature wear or malfunction. By protecting the internal parts of the roller, the hermetic sealing system ensures extended lifespan and reliable performance, even in the harshest conditions. The combination of these seals, along with the durable rubber rings and steel construction, results in a roller that requires minimal maintenance and operates efficiently over an extended service life.",
                      },
                    ],
                  },
                ],
              },
              {
                id: "steel-heavy-duty-return-rollers-with-rubber-rings-hdr",
                Component: IdlersPulleysProductDetailPage,
                title:
                  "Steel heavy duty return rollers with rubber rings - HDR",
                shortDescription:
                  "Support and stability, extended belt life for extra heavy duty conveyors and mining applications",
                heroData: {
                  title:
                    "Steel heavy duty return rollers with rubber rings - HDR",
                  subtitle:
                    "Support and stability, extended belt life for extra heavy duty conveyors and mining applications",
                  image: {
                    src: Images?.returnrollerssteelheavydutyreturnrollerswithrubberringshdrhero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.returnrollerssteelheavydutyreturnrollerswithrubberringshdr,
                  alt: "",
                },
                overview: {
                  title:
                    "Maximize Belt Life: Return Rollers with Spaced Rubber Rings for Superior Tracking and Protection",
                  paragraphs: [
                    {
                      title: "Overview",
                      description: [
                        "Our return rollers with spaced rubber rings are specially designed to support the belt during its return journey, addressing issues of material adhesion and belt wear. The rubber rings are effective within temperatures ranging from -20°C to +80°C and work to prevent the buildup of sticky materials that can disrupt belt tracking. By breaking up scale accumulation and providing stability, these rollers help ensure the belt maintains its proper alignment and extends its operational life.",
                      ],
                    },
                  ],
                },
                additionalData: [
                  {
                    title: "Main Features",
                    subData: [
                      {
                        Icon: (props) => <Zap {...props} />,
                        title:
                          "Higher Quality Rubber Rings, Respect Competitors",
                        badges: [
                          "Superior Shock Absorption",
                          "Enhanced Durability",
                          "Reduced Maintenance",
                        ],
                        description:
                          "Our return rollers are equipped with premium-quality rubber rings, specifically engineered to deliver superior performance and longevity compared to competitors. These high-quality rubber rings provide enhanced flexibility, greater resistance to wear, and improved shock absorption, ensuring effective protection against material adhesion and belt wear. The durable material composition ensures that these rubber rings maintain their integrity over time, providing reliable performance even under challenging conditions. This advanced design ensures that our rollers outperform the competition, making them the optimal choice for long-term, cost-effective conveyor system operation",
                      },
                      {
                        Icon: (props) => <Shield {...props} />,
                        title:
                          "Solid Rubber Rings Fixation by Outer Steel Stop Ring Welded and Hard PVC Central Distance Rings",
                        badges: [
                          "Secure Fixation",
                          "No Slippage",
                          "Heavy-Duty Construction",
                        ],
                        description:
                          "The rubber rings on our return rollers are securely fixed using a robust outer steel stop ring, welded to the shell, and complemented by hard PVC central distance rings. This unique fixation system provides enhanced durability and prevents the rings from shifting or detaching during operation, even under high-impact conditions. The outer steel stop ring offers additional strength and stability, while the hard PVC central distance rings maintain consistent spacing between the rubber rings, improving performance and extending the life of the roller. This secure fixation system ensures that the rubber rings deliver maximum cushioning and support, reducing material buildup and belt wear",
                      },
                      {
                        Icon: (props) => <Wrench {...props} />,
                        title:
                          "Highly Efficient & Hermetic Sealing System → Long Life Roller",
                        badges: [
                          "Contamination Protection",
                          "Extended Lifespan",
                          "Minimal Downtime",
                        ],
                        description:
                          "Our return rollers feature a highly efficient, hermetic sealing system that provides superior protection against dirt, dust, moisture, and other contaminants. This advanced sealing technology prevents the ingress of harmful materials into the internal components of the roller, such as bearings and shafts, significantly extending the roller's lifespan. By reducing the need for maintenance and enhancing the roller’s performance, the hermetic seals ensure smooth operation even in the harshest environments. This long-lasting protection ensures that the roller performs reliably over time, offering a cost-effective solution with minimal downtime and enhanced operational efficiency",
                      },
                    ],
                  },
                ],
              },
              {
                id: "steel-return-rollers-rubber-rings-mps",
                Component: IdlersPulleysProductDetailPage,
                title: "Steel return rollers with rubber rings - MPS",
                shortDescription:
                  "Support and cleaning, perfect tracking for light/medium duty applications",
                heroData: {
                  title: "Steel return rollers with rubber rings - MPS",
                  subtitle:
                    "Support and cleaning, perfect tracking for light/medium duty applications",
                  image: {
                    src: Images?.returnrollerssteelreturnrollerswithrubberringsmps,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.returnrollerssteelreturnrollerswithrubberringsmps,
                  alt: "",
                },
                overview: {
                  title:
                    "The Ultimate Solution for Conveyor Belt Support and Wear Prevention",
                  paragraphs: [
                    {
                      title: "Overview",
                      description: [
                        "Spaced ring rollers are an ideal solution for supporting and sustaining the conveyor belt in its return section, particularly where material adhesion and belt wear are concerns. These rollers feature rubber rings that operate within a temperature range of -20°C to +80°C. The rings are designed to disrupt the accumulation of sticky materials, helping to prevent irregular buildup and maintain proper belt tracking. With pointed rings in the center and flat rings at the edges, these rollers support both the belt's central and edge areas, ensuring reliable performance even under challenging conditions. Available in the following arrangement:",
                        "Arrangement G",
                        "Return rollers with pointed rings spaced in the central part and positioned in sets at the side. Used on belt conveyors of medium capacity.",
                      ],
                    },
                  ],
                },
                additionalData: [
                  {
                    title: "Main Features",
                    subData: [
                      {
                        Icon: (props) => <Zap {...props} />,
                        title: "Higher Quality Rubber Rings",
                        badges: [
                          "Superior Shock Absorption",
                          "Enhanced Durability",
                          "Reduced Maintenance",
                        ],
                        description:
                          "Our spaced ring rollers feature high-quality rubber rings designed to offer superior durability and performance. These premium rubber rings are crafted to withstand extreme conditions, ensuring exceptional resistance to wear, abrasion, and material adhesion. With a temperature range of -20°C to +80°C, they provide reliable operation across diverse environments, effectively reducing belt friction and enhancing overall conveyor system efficiency",
                      },
                      {
                        Icon: (props) => <Shield {...props} />,
                        title:
                          "Solid Rubber Rings Fixation by Outer Steel Stop Ring Welded and Hard PVC Central Distance Rings",
                        badges: [
                          "Secure Fixation",
                          "No Slippage",
                          "Heavy-Duty Construction",
                        ],
                        description:
                          "The robust construction of our spaced ring rollers includes solid rubber rings securely fixed in place by an outer steel stop ring. This welded design guarantees a stable and long-lasting performance, even under heavy load conditions. Additionally, the hard PVC central distance rings ensure consistent spacing between the rubber rings, maintaining optimal belt support and preventing irregular buildup. This combination enhances the roller's durability and performance in demanding conveyor systems",
                      },
                      {
                        Icon: (props) => <Wrench {...props} />,
                        title:
                          "Highly Efficient & Hermetic Sealing System → Long Life Roller",
                        badges: [
                          "Contamination Protection",
                          "Extended Lifespan",
                          "Minimal Downtime",
                        ],
                        description:
                          "Our rollers are equipped with a highly efficient hermetic sealing system, designed to protect against dirt, moisture, and abrasive particles. This advanced sealing mechanism ensures that the rubber rings remain intact and functional throughout their long lifespan. By preventing contamination and wear, this system maximizes the roller’s efficiency, providing long-term reliability and significantly reducing maintenance needs for conveyor systems",
                      },
                    ],
                  },
                ],
              },
              {
                id: "steel-tube-and-technopolymers-bearing-housings-rtl",
                Component: IdlersPulleysProductDetailPage,
                title: "Steel tube and technopolymers bearing housings - RTL",
                shortDescription: "For light duty applications",
                heroData: {
                  title: "Steel tube and technopolymers bearing housings - RTL",
                  subtitle: "For light duty applications",
                  image: {
                    src: Images?.returnrollerssteeltubeandtechnopolymersbearinghousingsrtlhero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.returnrollerssteeltubeandtechnopolymersbearinghousingsrtl,
                  alt: "",
                },
                overview: {
                  title:
                    "Durable and Efficient Solutions for Moving Light Loads in Harsh Conditions",
                  paragraphs: [
                    {
                      title: "Overview",
                      description: [
                        "The roller series RTL has been designed to be used in the movement of small or light loads. The roller consists of a special steel tube swaged over the bearing housings which are made from technopolymers which have high elastic properties, and resistance to mechanical forces and to corrosion. The standard design utilises bearings of type 6202 rigid radial ball race, a spindle of Ø15 mm with locking bush with spanner flats ch = 17 mm.",
                        "A double radial labyrinth protects the bearing to allow use in medium severe environmental conditions.",
                        "The functioning temperatures recommended are: – 10°C a + 70 °C.",
                      ],
                    },
                  ],
                },

                additionalData: [
                  {
                    title: "Main Features",
                    subData: [
                      {
                        Icon: (props) => <Zap {...props} />,
                        title: "Anticorrosion Polymer Housings for Light Duty",
                        badges: [
                          "Superior Shock Absorption",
                          "Enhanced Durability",
                          "Reduced Maintenance",
                        ],
                        description:
                          "The roller housings are made from high-quality anticorrosion polymer materials, specifically designed for light-duty applications. These housings provide exceptional resistance to corrosion, making them ideal for environments where exposure to moisture, chemicals, or other corrosive substances is common. The polymer construction ensures that the roller remains durable and maintains its performance over time, reducing maintenance requirements and extending the lifespan of the conveyor system, even in challenging conditions",
                      },
                      {
                        Icon: (props) => <Shield {...props} />,
                        title:
                          "Highly Cost-Saving Solution, Also with Stainless Steel Options (Tube, Shaft, Bearings)",
                        badges: [
                          "Secure Fixation",
                          "No Slippage",
                          "Heavy-Duty Construction",
                        ],
                        description:
                          "This roller series offers a highly cost-effective solution, providing reliable performance without compromising on quality. For applications requiring enhanced durability, stainless steel options are available for the tube, shaft, and bearings. These stainless steel components provide additional resistance to corrosion and wear, making the rollers suitable for harsher environments while maintaining a competitive cost structure. This versatility allows companies to choose the optimal solution based on their specific operational needs and budget constraints",
                      },
                      {
                        Icon: (props) => <Wrench {...props} />,
                        title:
                          "Tight & Compact Sealing System, Also for Outdoor & Aggressive Environments",
                        badges: [
                          "Contamination Protection",
                          "Extended Lifespan",
                          "Minimal Downtime",
                        ],
                        description:
                          "The roller features a tight and compact sealing system that ensures optimal protection against dust, dirt, water, and other contaminants. This advanced sealing design is specifically engineered for use in outdoor and aggressive environments, where exposure to harsh weather, chemicals, or pollutants is common. The hermetic seals prevent the ingress of harmful materials, extending the lifespan of the roller and maintaining its high performance even under extreme conditions. This sealing system reduces maintenance needs and enhances the roller’s overall reliability in demanding applications",
                      },
                    ],
                  },
                ],
              },
              {
                id: "hdpe-high-density-polyethylene-rollers-top",
                Component: IdlersPulleysProductDetailPage,
                title: "HDPE high density polyethylene rollers - TOP",
                shortDescription: "For light/medium duty applications",
                heroData: {
                  title: "HDPE high density polyethylene rollers - TOP",
                  subtitle: "For light/medium duty applications",
                  image: {
                    src: Images?.returnrollershdpehighdensitypolyethlyenerollerstophero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.returnrollershdpehighdensitypolyethlyenerollerstop,
                  alt: "",
                },
                detailPageContent: [
                  {
                    type: "white-bordered",
                    title:
                      "Lightweight, energy-efficient and durable HDPE roller for safer, low-maintenance operations",
                    paragraphs: [
                      "Highcon TOP series is a totally thermoplastic polymer roller, with the exeption of steel in the ball bearing and shaft. In fact, a reinforcing steel tube is fitted inside the high density polyethylene shell for rollers lenghts B>600 only.",
                      "The high density polyethylene tube has about 50% lower weight with respect to steel rollers. First, this ensures easier and safer transportation, mounting and maintenance operations. Especially where such interventions may be critical – like in suspended, long or hard-to-access belt conveyors – operators can better prevent back injuries. Moreover, lightness means lower power consumption during start/stop operations of the belt conveyor and therefore a reduction of power requirements on the plant. Even the low running resistance sealing system of our TOP roller has the same effect by requiring lower motor torque in conveyor starts, lower motor power size and therefore a reduction of energy consumption of the belt conveyor.",
                      "Other advantages come from the construction material of an HDPE roller. First, thermoplastic noise and vibration absorption result in low noise emission. Second, low level of abrasion and corrosion denotes high wear resistance which guarantees longer life of the roller itself and lower maintenance of the whole plant. Third, the self-cleaning surface of our roller favors the prevention of build-up of material – main cause of belt mis-tracking – and the consequent reduction of spillage from the belt.",
                    ],
                  },
                  {
                    type: "gray-shadow",
                    title:
                      "One of the most versatile and used type of polymer rollers",
                    paragraphs: [
                      "By now, polymer rollers have become integral to modern material handling and HDPE is among the most widely used materials by manufacturers. While not designed for extreme heavy-duty applications where other materials may be better suited, it has the ideal balance between mechanical and chemical resistance, cost-efficiency and operational reliability for most bulk handling operations.",
                      "At Highcon, we chose to design and engineer an HDPE roller able to deliver higher performance, safer and lower maintenance operations in light and medium duty conveyor systems. Our TOP roller is a very flexible series, suitable for use in a wide variety of applicationa and products such as cement, coal, gravel, fertilisers, ports, chemicals and many others.",
                    ],
                  },
                ],
                additionalData: [
                  {
                    title: "Main Features",
                    subData: [
                      {
                        Icon: (props) => <Zap {...props} />,
                        title:
                          "Anticorrosion polymer roller for light/medium duty applications",
                        badges: [
                          "Superior Shock Absorption",
                          "Enhanced Durability",
                          "Reduced Maintenance",
                        ],
                        description:
                          "TOP roller, featuring both polymer housing and tube, is specifically engineered for light/medium applications. This innovative design ensures enhanced protection against corrosion, wear, and harsh environmental factors, making it ideal for industries dealing with bulk material handling. The high-performance polymer construction significantly extends the lifespan of the roller, reducing maintenance needs and ensuring reliable, consistent performance under heavy loads and extreme conditions",
                      },
                      {
                        Icon: (props) => <Shield {...props} />,
                        title:
                          "Hermetic or contactless seals options available",
                        badges: [
                          "Secure Fixation",
                          "No Slippage",
                          "Heavy-Duty Construction",
                        ],
                        description:
                          "TOP roller is available in both hermetic and contactless executions, providing superior protection for internal components in challenging environments. The hermetic seals offer a tight, reliable barrier against dust, water, and other contaminants, ensuring optimal bearing protection and performance over time. Alternatively, the contactless seal option minimizes friction and wear, reducing maintenance requirements while ensuring smooth operation. Both sealing options are designed to improve durability and extend operational life of the roller, making it well-suited for harsh industrial applications",
                      },
                      {
                        Icon: (props) => <Wrench {...props} />,
                        title:
                          "Extra light weight, low noise level due to HDPE roller outer shell",
                        badges: [
                          "Contamination Protection",
                          "Extended Lifespan",
                          "Minimal Downtime",
                        ],
                        description:
                          "The roller outer shell in HDPE is engineered to be extremely lightweight while maintaining strength and durability. This design reduces the overall weight of the roller by approximately 50% compared to traditional steel rollers, making it easier to transport, install, and maintain. Additionally, the HDPE shell absorbs noise and vibrations, resulting in quieter operation and reduced mechanical wear. This contributes to a more comfortable and energy-efficient working environment, reducing both power consumption and noise pollution in conveyor",
                      },
                    ],
                  },
                ],
              },
              {
                id: "hdpe-high-density-polyethylene-rollers-supreme",
                Component: IdlersPulleysProductDetailPage,
                title: "HDPE high density polyethylene rollers - SUPREME",
                shortDescription: "For medium/heavy duty applications",
                heroData: {
                  title: "HDPE high density polyethylene rollers - SUPREME",
                  subtitle: "For medium/heavy duty applications",
                  image: {
                    src: Images?.returnrollershdpehighdensitypolyethlyenerollerssupremehero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.returnrollershdpehighdensitypolyethlyenerollerssupreme,
                  alt: "",
                },
                detailPageContent: [
                  {
                    type: "white-bordered",
                    title:
                      "Light in weight, but not in results: HDPE roller for heavy-duty bulk handling",
                    paragraphs: [
                      "Highcon SUPREME roller is designed for a wide variety of applications where low noise operation and low energy consumption are researched while dealing with heavy-duty bulk handling and corrosive materials or environments.",
                      "It’s a completely HDPE roller, featuring high density polyethylene tube and housings (only rollers of > 600 length have a reinforcing steel tube fitted inside the HDPE shell). The ultra-tick polymer shell has a high strength-to-weight ratio, noise and vibration absorption properties, high resistance to abrasion and corrosion of the main aggressive contaminants and chemical agents. Add to that an additional static face and a labyrinth sealing system to further limit the ingress of dirt and provide a safety system to limit nip point risk. Also, the machined finish ensures low run-out and its self-cleaning surface prevents material spillage and belt miss-tracking.",
                    ],
                  },
                  {
                    type: "gray-shadow",
                    title:
                      "Comparing our HDPE roller with normal steel rollers",
                    paragraphs: [
                      "Highcon SUPREME HDPE roller is able to handle the same loading capacity as a steel roller with equal dimensions. However, it has important operative advantages for the whole plant in comparison.",
                      "First, the polymer construction makes it about 50% lighter, therby ensuring easier handling and mounting operations, especially on large rollers. The resultant lower rotating mass also reduces the torque required for the conveyor, leading to energy savings during start-up, start/stop and continuous operations. Secondly, speaking about another sensitive issue in terms of environemnts and safety, high density polyethylene is able to minimize vibrations and absorb noise emissions in contrast to steel. Finally, the non-corrosive HDPE face means longer operating life and lower maintenance under aggressive conditions that steel is more vulnerable to. Our SUPREME roller is particularly suited to handling operations of abrasive sand, iron, gold, platinum ore, coal handling, indeed.",
                    ],
                  },
                ],
                additionalData: [
                  {
                    title: "Main Features",
                    subData: [
                      {
                        Icon: (props) => <Zap {...props} />,
                        title:
                          "Corrosion-resistant polymer roller for heavy-duty",
                        badges: [
                          "Superior Shock Absorption",
                          "Enhanced Durability",
                          "Reduced Maintenance",
                        ],
                        description:
                          "SUPREME roller is specifically designed for heavy-duty applications, offering superior resistance to harsh environments. With both housings and tube of high-performance HDPE, it provides excellent protection against corrosion, wear and chemical damage, ensuring long-lasting performance in aggressive conditions. Ideal for use in industries such as mining, cement and bulk material handling, its polymer construction reduces the need for frequent maintenance and enhances the overall durability even under heavy loads",
                      },
                      {
                        Icon: (props) => <Shield {...props} />,
                        title:
                          "Availability of hermetic or contactless executions",
                        badges: [
                          "Secure Fixation",
                          "No Slippage",
                          "Heavy-Duty Construction",
                        ],
                        description:
                          "SUPREME roller features advanced hermetic or contactless seal options, providing enhanced protection for the internal components. The hermetic sealing system prevents the ingress of dust, water and other contaminants, ensuring that the bearings and other critical parts remain intact and operate smoothly. The contactless seal option minimizes friction and wear, offering a longer service life and lower maintenance needs. These sealing technologies are particularly effective in harsh environments, extending the roller's reliability and performance in industries that require minimal downtime",
                      },
                      {
                        Icon: (props) => <Wrench {...props} />,
                        title:
                          "Extra low noise rotation due to HDPE outer turner shell",
                        badges: [
                          "Contamination Protection",
                          "Extended Lifespan",
                          "Minimal Downtime",
                        ],
                        description:
                          "The outer turner shell of SUPREME roller is designed to provide extra low noise during rotation, making it ideal for environments where noise reduction is crucial. The precision-machined HDPE shell helps minimize vibrations and noise emissions, ensuring quieter operation compared to traditional steel rollers. This feature contributes to a more comfortable and safer work environment, especially in sensitive or noise-sensitive applications. The high-quality HDPE shell not only reduces noise but also enhances the roller's overall performance and longevity",
                      },
                    ],
                  },
                ],
              },
              {
                id: "polymer-rollers-pl",
                Component: IdlersPulleysProductDetailPage,
                title: "Polymer rollers - PL",
                shortDescription:
                  "For light duty conveyors in severe corrosive environments",
                heroData: {
                  title: "Polymer rollers - PL",
                  subtitle: "For medium/heavy duty applications",
                  image: {
                    src: Images?.returnrollerspolymerrollersplhero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.returnrollerspolymerrollerspl,
                  alt: "",
                },
                detailPageContent: [
                  {
                    type: "white-bordered",
                    title:
                      "Full polymer roller, full mechanical and corrosion resistance",
                    paragraphs: [
                      "Product testing and plant trials have well demonstrated that polymer rollers are a cost-effective alternative to traditional materials such as steel, bronze and aluminum in bulk handling applications.",
                      "The design of Highcon PL roller uses premium plastic materials for the most critical parts: roller shell is PVC, while bearing housings are in polypropylene with fiberglass. Both are highly resistant to most chemical agents, water, humidity, and other corrosive elements present in the environment or the conveyed material itself. Also, they can handle low and high temperatures from -10°C to +50°C and support heavy loads while maintaining lightness, balance, and noiselessness. High mechanical properties of PL roller are also ensured by its own design as a precision arrangement and generously dimensioned components allow optimal load distribution and belt contact. Besides that, another key advantage of PL roller is reduced energy consumption due to the outer PVC shell and contact-free parts in the sealing system.",
                    ],
                  },
                  {
                    type: "gray-shadow",
                    title: "Great fit for severe bulk handling applications",
                    paragraphs: [
                      "Thanks to its features, PL roller provides a long working life combined with low maintenance costs even where difficult operating or environmental conditions prevail. Severe bulk handling applications like mines and extraction industries, salt and sugar processing plants, chemical industries, fertilizer manufacture, marine environments can rely on the superior performance of our roller to run belt conveyors where traditional rollers would struggle.",
                    ],
                  },
                ],
                additionalData: [
                  {
                    title: "Main Features",
                    subData: [
                      {
                        Icon: (props) => <Zap {...props} />,
                        title:
                          "Anticorrosion full polymer roller for medium duty",
                        badges: [
                          "Superior Shock Absorption",
                          "Enhanced Durability",
                          "Reduced Maintenance",
                        ],
                        description:
                          "PL roller is specifically designed for medium-duty applications, particularly in environments exposed to salt and acid conveyors. Constructed from advanced polymer materials, it offers superior resistance to corrosion, ensuring long-lasting performance even in harsh, chemically aggressive conditions. Ideal for industries such as chemical processing, mining, and food production, it maintains reliable operation, reducing maintenance needs and extending the lifespan of the conveyor system",
                      },
                      {
                        Icon: (props) => <Shield {...props} />,
                        title:
                          "Polymer slotted bush, contactless, low running resistance",
                        badges: [
                          "Secure Fixation",
                          "No Slippage",
                          "Heavy-Duty Construction",
                        ],
                        description:
                          "The polymer slotted bush system of PL roller features a contactless design, which minimizes friction and ensures smooth operation of the rollers. This low running resistance significantly enhances conveyor efficiency by reducing energy consumption and wear on components. The absence of direct contact between moving parts reduces the risk of damage and extends the lifespan of the system. This innovative design delivers optimal performance in medium-duty applications, offering both durability and operational efficiency",
                      },
                      {
                        Icon: (props) => <Wrench {...props} />,
                        title: "Extra light weight and low noise level",
                        badges: [
                          "Contamination Protection",
                          "Extended Lifespan",
                          "Minimal Downtime",
                        ],
                        description:
                          "PL roller is engineered with an ultra-lightweight design, featuring an outer PVC shell that contributes to its reduced noise level during operation. The lightweight construction facilitates easy installation and maintenance, while the PVC shell helps minimize vibrations and noise, creating a quieter working environment. This feature is especially beneficial in applications where noise reduction is crucial, such as in production lines or sensitive working environments, offering an efficient, low-maintenance solution with superior acoustic performance",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "belt-scale-rollers",
            Component: IdlersPulleysDetailPage,
            title: "Belt Scale Rollers",
            shortDescription:
              "High-precision rollers for accurate belt scale measurement.",
            image: {
              src: Images?.beltscalerollers,
              alt: "Belt Scale Rollers",
            },
            heroData: {
              title: "Belt Scale Rollers",
              subtitle:
                "High-precision rollers for accurate belt scale measurement.",
              image: {
                src: Images?.beltscalerollershero,
                alt: "",
              },
            },
            layerThreeProducts: [
              {
                id: "steel-belt-scale-rollers-psv",
                Component: IdlersPulleysProductDetailPage,
                title: "Steel belt scale rollers - PSV",
                shortDescription: "For light/medium/heavy duty applications",
                heroData: {
                  title: "Steel belt scale rollers - PSV",
                  subtitle:
                    "Absolute precision, guaranteed reliability for light/medium/heavy duty applications",
                  image: {
                    src: Images?.beltscalerollerssteelbeltscalerollerspsvhero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.beltscalerollerssteelbeltscalerollerspsv,
                  alt: "",
                },
                overview: {
                  title:
                    "Precision Engineered for Accurate Weighing Performance",
                  paragraphs: [
                    {
                      title: "Overview",
                      description: [
                        "PSV series belt scale rollers are engineered for exceptional accuracy in weighing applications. Designed with precision-calibrated tubes and expertly machined outer diameters, these rollers ensure optimal performance and reliability in high-precision settings. Ideal for use in weighing stations, the PSV series provides the consistency and precision needed for accurate material measurement.",
                      ],
                    },
                  ],
                },
                additionalData: [
                  {
                    title: "Main Features",
                    subData: [
                      {
                        Icon: (props) => <Zap {...props} />,
                        title: "Higher Quality Rubber Rings",
                        badges: [
                          "Superior Shock Absorption",
                          "Enhanced Durability",
                          "Reduced Maintenance",
                        ],
                        description:
                          "The rollers are equipped with premium-grade rubber rings that deliver superior performance in demanding applications. These high-quality rubber rings are engineered for exceptional durability and resistance to wear, providing effective shock absorption even in harsh environments. Their advanced formulation ensures excellent resistance to abrasion, temperature fluctuations, and exposure to chemicals, enhancing the roller’s lifespan and ensuring reliable operation under continuous heavy loads and extreme conditions",
                      },
                      {
                        Icon: (props) => <Shield {...props} />,
                        title:
                          "Solid Rubber Rings Fixation by High Steel Stop Ring, Welded to the Shell",
                        badges: [
                          "Secure Fixation",
                          "No Slippage",
                          "Heavy-Duty Construction",
                        ],
                        description:
                          "The solid rubber rings are securely fixed in place by a high-strength steel stop ring, which is welded directly to the roller shell. This robust attachment method ensures that the rubber rings remain firmly in position, even under high-impact and high-load conditions. The welded steel stop ring provides superior stability and strength, preventing any potential movement or slippage of the rubber rings. This construction method ensures a secure, long-lasting solution for high-duty applications, ensuring consistent performance and reduced maintenance",
                      },
                      {
                        Icon: (props) => <Wrench {...props} />,
                        title:
                          "Highly Efficient & Hermetic Sealing System → Long Life Roller",
                        badges: [
                          "Contamination Protection",
                          "Extended Lifespan",
                          "Minimal Downtime",
                        ],
                        description:
                          "The roller is equipped with a highly efficient hermetic sealing system that provides optimal protection against the ingress of dust, water, and other contaminants. The hermetic seals ensure that the internal components of the roller remain free from harmful elements, reducing wear and tear and extending the overall lifespan of the roller. This sealing system contributes to the roller’s ability to perform reliably in tough conditions, minimizing the need for maintenance and ensuring long-term durability, even in the most challenging environments",
                      },
                    ],
                  },
                ],
              },
              {
                id: "steel-belt-scale-rollers-mps",
                Component: IdlersPulleysProductDetailPage,
                title: "Steel belt scale rollers - MPS",
                shortDescription:
                  "Precision you can count on for light/medium duty applications",
                heroData: {
                  title: "Steel belt scale rollers - MPS",
                  subtitle:
                    "Precision you can count on for light/medium duty applications",
                  image: {
                    src: Images?.beltscalerollerssteelbeltscalerollersmpshero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.beltscalerollerssteelbeltscalerollersmps,
                  alt: "",
                },
                overview: {
                  title:
                    "Precision Engineering for Accurate Belt Scale Performance",
                  paragraphs: [
                    {
                      title: "Overview",
                      description: [
                        "The MPS series from Highcon offers an excellent solution for applications requiring high rolling precision. With their calibrated tubes and precision-machined outer diameters, these belt scale rollers are designed to perform exceptionally well in weighing stations. The MPSseries ensures optimal performance and reliable accuracy for all your weighing needs.",
                      ],
                    },
                  ],
                },
                additionalData: [
                  {
                    title: "Main Features",
                    subData: [
                      {
                        Icon: (props) => <Zap {...props} />,
                        title: "Higher Quality Rubber Rings",
                        badges: [
                          "Superior Shock Absorption",
                          "Enhanced Durability",
                          "Reduced Maintenance",
                        ],
                        description:
                          "Our spaced ring rollers feature high-quality rubber rings designed to offer superior durability and performance. These premium rubber rings are crafted to withstand extreme conditions, ensuring exceptional resistance to wear, abrasion, and material adhesion. With a temperature range of -20°C to +80°C, they provide reliable operation across diverse environments, effectively reducing belt friction and enhancing overall conveyor system efficiency",
                      },
                      {
                        Icon: (props) => <Shield {...props} />,
                        title:
                          "Solid Rubber Rings Fixation by Outer Steel Stop Ring Welded and Hard PVC Central Distance Rings",
                        badges: [
                          "Secure Fixation",
                          "No Slippage",
                          "Heavy-Duty Construction",
                        ],
                        description:
                          "The robust construction of our spaced ring rollers includes solid rubber rings securely fixed in place by an outer steel stop ring. This welded design guarantees a stable and long-lasting performance, even under heavy load conditions. Additionally, the hard PVC central distance rings ensure consistent spacing between the rubber rings, maintaining optimal belt support and preventing irregular buildup. This combination enhances the roller's durability and performance in demanding conveyor systems",
                      },
                      {
                        Icon: (props) => <Wrench {...props} />,
                        title:
                          "Highly Efficient & Hermetic Sealing System → Long Life Roller",
                        badges: [
                          "Contamination Protection",
                          "Extended Lifespan",
                          "Minimal Downtime",
                        ],
                        description:
                          "Our rollers are equipped with a highly efficient hermetic sealing system, designed to protect against dirt, moisture, and abrasive particles. This advanced sealing mechanism ensures that the rubber rings remain intact and functional throughout their long lifespan. By preventing contamination and wear, this system maximizes the roller’s efficiency, providing long-term reliability and significantly reducing maintenance needs for conveyor systems",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "lagged-rollers",
            Component: IdlersPulleysDetailPage,
            title: "Lagged Rollers",
            shortDescription:
              "Durable rollers with lagging for improved traction and reduced wear.",
            image: {
              src: Images?.laggedrollers,
              alt: "Lagged Rollers",
            },
            heroData: {
              title: "Lagged Rollers",
              subtitle:
                "Durable rollers with lagging for improved traction and reduced wear.",
              image: {
                src: Images?.laggedrollershero,
                alt: "",
              },
            },
            layerThreeProducts: [
              {
                id: "steel-lagged-rollers-psv",
                Component: IdlersPulleysProductDetailPage,
                title: "Steel lagged rollers - PSV",
                shortDescription:
                  "Customized roller surface for enhanced smooth operation in light, medium, and heavy-duty applications",
                heroData: {
                  title: "Steel lagged rollers - PSV",
                  subtitle:
                    "Customized roller surface for enhanced smooth operation in light, medium, and heavy-duty applications",
                  image: {
                    src: Images?.laggedrollerssteellaggedrollerspsvhero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.laggedrollerssteellaggedrollerspsv,
                  alt: "",
                },
                overview: {
                  title:
                    "Reducing Material Build-Up for Optimal Belt Performance",
                  paragraphs: [
                    {
                      title: "Overview",
                      description: [
                        "Materials transported on conveyors often stick to the conveyor belt and return rollers, leading to build-up on the rollers and causing belt tracking issues. To minimize this build-up, Highcon rollers can be coated with rubber or polyurethane, creating a surface that reduces material adherence. The rubber coating can be customized to meet specific customer requirements, with options including standard, antistatic, fire-resistant, or flame-retardant grades.",
                      ],
                    },
                  ],
                },
                additionalData: [
                  {
                    title: "Main Features",
                    subData: [
                      {
                        Icon: (props) => <Zap {...props} />,
                        title: "Higher Quality Rubber Rings",
                        badges: [
                          "Superior Shock Absorption",
                          "Enhanced Durability",
                          "Reduced Maintenance",
                        ],
                        description:
                          "The rollers are equipped with premium-grade rubber rings that deliver superior performance in demanding applications. These high-quality rubber rings are engineered for exceptional durability and resistance to wear, providing effective shock absorption even in harsh environments. Their advanced formulation ensures excellent resistance to abrasion, temperature fluctuations, and exposure to chemicals, enhancing the roller’s lifespan and ensuring reliable operation under continuous heavy loads and extreme conditions",
                      },
                      {
                        Icon: (props) => <Shield {...props} />,
                        title:
                          "Solid Rubber Rings Fixation by High Steel Stop Ring, Welded to the Shell",
                        badges: [
                          "Secure Fixation",
                          "No Slippage",
                          "Heavy-Duty Construction",
                        ],
                        description:
                          "The solid rubber rings are securely fixed in place by a high-strength steel stop ring, which is welded directly to the roller shell. This robust attachment method ensures that the rubber rings remain firmly in position, even under high-impact and high-load conditions. The welded steel stop ring provides superior stability and strength, preventing any potential movement or slippage of the rubber rings. This construction method ensures a secure, long-lasting solution for high-duty applications, ensuring consistent performance and reduced maintenance",
                      },
                      {
                        Icon: (props) => <Wrench {...props} />,
                        title:
                          "Highly Efficient & Hermetic Sealing System → Long Life Roller",
                        badges: [
                          "Contamination Protection",
                          "Extended Lifespan",
                          "Minimal Downtime",
                        ],
                        description:
                          "The roller is equipped with a highly efficient hermetic sealing system that provides optimal protection against the ingress of dust, water, and other contaminants. The hermetic seals ensure that the internal components of the roller remain free from harmful elements, reducing wear and tear and extending the overall lifespan of the roller. This sealing system contributes to the roller’s ability to perform reliably in tough conditions, minimizing the need for maintenance and ensuring long-term durability, even in the most challenging environments",
                      },
                    ],
                  },
                ],
              },
              {
                id: "steel-lagged-rollers-mps",
                Component: IdlersPulleysProductDetailPage,
                title: "Steel lagged rollers - MPS",
                shortDescription:
                  "Tailored surface design for greater efficiency and reduced material build-up in light and medium-duty applications",
                heroData: {
                  title: "Steel lagged rollers - MPS",
                  subtitle:
                    "Tailored surface design for greater efficiency and reduced material build-up in light and medium-duty applications",
                  image: {
                    src: Images?.laggedrollerssteellaggedrollersmpshero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.laggedrollerssteellaggedrollersmps,
                  alt: "",
                },
                overview: {
                  title:
                    "Maximize Efficiency and Prevent Material Buildup on Conveyors",
                  paragraphs: [
                    {
                      title: "Overview",
                      description: [
                        "Materials conveyed on belts frequently adhere to both the conveyor belt and return rollers, resulting in troublesome build-up and belt tracking issues. To combat this, Highcon offers rollers with customizable coatings in rubber or polyurethane, designed to minimize material adherence. Our rubber coatings come in various types, including standard, antistatic, fire-resistant, and flame-retardant, tailored to meet your specific needs and enhance conveyor efficiency.",
                      ],
                    },
                  ],
                },
                additionalData: [
                  {
                    title: "Main Features",
                    subData: [
                      {
                        Icon: (props) => <Zap {...props} />,
                        title: "Higher Quality Rubber Rings",
                        badges: [
                          "Superior Shock Absorption",
                          "Enhanced Durability",
                          "Reduced Maintenance",
                        ],
                        description:
                          "Our spaced ring rollers feature high-quality rubber rings designed to offer superior durability and performance. These premium rubber rings are crafted to withstand extreme conditions, ensuring exceptional resistance to wear, abrasion, and material adhesion. With a temperature range of -20°C to +80°C, they provide reliable operation across diverse environments, effectively reducing belt friction and enhancing overall conveyor system efficiency",
                      },
                      {
                        Icon: (props) => <Shield {...props} />,
                        title:
                          "Solid Rubber Rings Fixation by Outer Steel Stop Ring Welded and Hard PVC Central Distance Rings",
                        badges: [
                          "Secure Fixation",
                          "No Slippage",
                          "Heavy-Duty Construction",
                        ],
                        description:
                          "The robust construction of our spaced ring rollers includes solid rubber rings securely fixed in place by an outer steel stop ring. This welded design guarantees a stable and long-lasting performance, even under heavy load conditions. Additionally, the hard PVC central distance rings ensure consistent spacing between the rubber rings, maintaining optimal belt support and preventing irregular buildup. This combination enhances the roller's durability and performance in demanding conveyor systems.",
                      },
                      {
                        Icon: (props) => <Wrench {...props} />,
                        title:
                          "Highly Efficient & Hermetic Sealing System → Long Life Roller",
                        badges: [
                          "Contamination Protection",
                          "Extended Lifespan",
                          "Minimal Downtime",
                        ],
                        description:
                          "Our rollers are equipped with a highly efficient hermetic sealing system, designed to protect against dirt, moisture, and abrasive particles. This advanced sealing mechanism ensures that the rubber rings remain intact and functional throughout their long lifespan. By preventing contamination and wear, this system maximizes the roller’s efficiency, providing long-term reliability and significantly reducing maintenance needs for conveyor systems",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "return-self-cleaning-rollers",
            Component: IdlersPulleysDetailPage,
            title: "Return Self Cleaning Rollers",
            shortDescription:
              "Innovative rollers designed for self-cleaning and smooth operation.",
            image: {
              src: Images?.returnselfcleaningrollers,
              alt: "Return Self Cleaning Rollers",
            },
            heroData: {
              title: "Return Self Cleaning Rollers",
              subtitle:
                "Innovative rollers designed for self-cleaning and smooth operation.",
              image: {
                src: Images?.returnselfcleaningrollershero,
                alt: "",
              },
            },
            layerThreeProducts: [
              {
                id: "steel-return-self-cleaning-rollers-psv",
                Component: IdlersPulleysProductDetailPage,
                title: "Steel return self-cleaning rollers - PSV",
                shortDescription:
                  "Optimal protection and perfect tracking for viscous materials",
                heroData: {
                  title: "Steel return self-cleaning rollers - PSV",
                  subtitle:
                    "Optimal protection and perfect tracking for viscous materials",
                  image: {
                    src: Images?.returnselfcleaningrollerssteelreturnselfcleaningrollerspsvhero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.returnselfcleaningrollerssteelreturnselfcleaningrollerspsv,
                  alt: "",
                },
                overview: {
                  title:
                    "Prevent Material Buildup and Maintain Optimal Belt Tracking",
                  paragraphs: [
                    {
                      title: "Overview",
                      description: [
                        "When conveying abrasive or viscous materials, standard steel return rollers may suffer from wear or unwanted material buildup. Our specialized rollers are designed to address these issues with a helical spiral of non-abrasive rings that clean the belt surface and prevent sticky material from accumulating. Ideal for use in the return section of short conveyors, these rollers help maintain belt tracking and reduce vibration. For long conveyors, they should be installed up to the point where material adhesion ceases. Note that these rollers are not suitable as snub rollers near drive or return drums.",
                      ],
                    },
                  ],
                },
                additionalData: [
                  {
                    title: "Main Features",
                    subData: [
                      {
                        Icon: (props) => <Zap {...props} />,
                        title: "Higher Quality Rubber Rings",
                        badges: [
                          "Superior Shock Absorption",
                          "Enhanced Durability",
                          "Reduced Maintenance",
                        ],
                        description:
                          "The rollers are equipped with high-quality rubber rings designed for maximum durability and shock absorption. These superior rubber rings are formulated to provide exceptional resistance to wear, abrasion, and environmental conditions, ensuring consistent performance in heavy-duty applications. They effectively cushion the impact of falling materials, reduce the stress on the conveyor system, and enhance the overall longevity of the rollers, even in extreme operational conditions such as bulk material handling and mining environments",
                      },
                      {
                        Icon: (props) => <Shield {...props} />,
                        title:
                          "Solid Rubber Rings Fixation by High Steel Stop Ring, Welded to the Shell",
                        badges: [
                          "Secure Fixation",
                          "No Slippage",
                          "Heavy-Duty Construction",
                        ],
                        description:
                          "The rubber rings are securely fixed in place using an outer steel stop ring, which is welded to the roller shell, providing a stable and durable attachment. The welded steel stop ring ensures that the rubber rings stay firmly in position, preventing slippage or degradation over time. Additionally, the inclusion of hard PVC central distance rings provides precise spacing between the rubber rings, enhancing the roller’s stability and efficiency while ensuring that the roller operates smoothly and maintains its shape under heavy loads and high impact",
                      },
                      {
                        Icon: (props) => <Wrench {...props} />,
                        title:
                          "Highly Efficient & Hermetic Sealing System → Long Life Roller",
                        badges: [
                          "Contamination Protection",
                          "Extended Lifespan",
                          "Minimal Downtime",
                        ],
                        description:
                          "The roller features a highly efficient hermetic sealing system that safeguards its internal components from dust, water, and other contaminants. This robust sealing mechanism effectively prevents the ingress of harmful materials, which could lead to premature wear or malfunction. By protecting the internal parts of the roller, the hermetic sealing system ensures extended lifespan and reliable performance, even in the harshest conditions. The combination of these seals, along with the durable rubber rings and steel construction, results in a roller that requires minimal maintenance and operates efficiently over an extended service life.",
                      },
                    ],
                  },
                ],
              },
              {
                id: "steel-return-self-cleaning-rollers-mps",
                Component: IdlersPulleysProductDetailPage,
                title: "Steel lagged rollers - MPS",
                shortDescription:
                  "Clean surface, smooth performance for light/medium duty applications",
                heroData: {
                  title: "Steel lagged rollers - MPS",
                  subtitle:
                    "Clean surface, smooth performance for light/medium duty applications",
                  image: {
                    src: Images?.returnselfcleaningrollerssteelreturnselfcleaningrollersmpshero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.returnselfcleaningrollerssteelreturnselfcleaningrollersmps,
                  alt: "",
                },
                overview: {
                  title:
                    "The Perfect Solution for Preventing Material Buildup and Vibrations",
                  paragraphs: [
                    {
                      title: "Overview",
                      description: [
                        "Designed for environments where conveyed materials are either abrasive or highly viscous, these rollers feature helical spiral non-abrasive rings that clean and reduce material buildup on the belt surface. Ideal for the return section of short conveyors, they help prevent scale accumulation and vibrations caused by sticky materials. For long conveyors, use these rollers only in sections where material no longer adheres to the belt. These rollers are not intended for use as snub rollers adjacent to drive or return drums.",
                      ],
                    },
                  ],
                },
                additionalData: [
                  {
                    title: "Main Features",
                    subData: [
                      {
                        Icon: (props) => <Zap {...props} />,
                        title: "Higher Quality Rubber Rings",
                        badges: [
                          "Superior Shock Absorption",
                          "Enhanced Durability",
                          "Reduced Maintenance",
                        ],
                        description:
                          "Our spaced ring rollers feature high-quality rubber rings designed to offer superior durability and performance. These premium rubber rings are crafted to withstand extreme conditions, ensuring exceptional resistance to wear, abrasion, and material adhesion. With a temperature range of -20°C to +80°C, they provide reliable operation across diverse environments, effectively reducing belt friction and enhancing overall conveyor system efficiency",
                      },
                      {
                        Icon: (props) => <Shield {...props} />,
                        title:
                          "Solid Rubber Rings Fixation by Outer Steel Stop Ring Welded and Hard PVC Central Distance Rings",
                        badges: [
                          "Secure Fixation",
                          "No Slippage",
                          "Heavy-Duty Construction",
                        ],
                        description:
                          "The robust construction of our spaced ring rollers includes solid rubber rings securely fixed in place by an outer steel stop ring. This welded design guarantees a stable and long-lasting performance, even under heavy load conditions. Additionally, the hard PVC central distance rings ensure consistent spacing between the rubber rings, maintaining optimal belt support and preventing irregular buildup. This combination enhances the roller's durability and performance in demanding conveyor systems.",
                      },
                      {
                        Icon: (props) => <Wrench {...props} />,
                        title:
                          "Highly Efficient & Hermetic Sealing System → Long Life Roller",
                        badges: [
                          "Contamination Protection",
                          "Extended Lifespan",
                          "Minimal Downtime",
                        ],
                        description:
                          "Our rollers are equipped with a highly efficient hermetic sealing system, designed to protect against dirt, moisture, and abrasive particles. This advanced sealing mechanism ensures that the rubber rings remain intact and functional throughout their long lifespan. By preventing contamination and wear, this system maximizes the roller’s efficiency, providing long-term reliability and significantly reducing maintenance needs for conveyor systems",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "special-application-rollers",
            Component: IdlersPulleysDetailPage,
            title: "Special application rollers",
            shortDescription: "Customized solutions for every needs",
            image: {
              src: Images?.specialapplicationrollers,
              alt: "Special application rollers",
            },
            heroData: {
              title: "Special application rollers",
              subtitle: "Customized solutions for every needs",
              image: {
                src: Images?.specialapplicationrollersspecialapplicationrollershero,
                alt: "",
              },
            },
            layerThreeProducts: [
              {
                id: "anti-runback-roller",
                Component: IdlersPulleysProductDetailPage,
                title: "Anti-runback roller",
                shortDescription: "Prevent failures, maximize efficiency",
                heroData: {
                  title: "Anti-runback roller",
                  subtitle: "Prevent failures, maximize efficiency",
                  image: {
                    src: Images?.specialapplicationrollersantirunbackrollerhero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.specialapplicationrollersantirunbackroller,
                  alt: "",
                },
                overview: {
                  title:
                    "Anti-Runback Roller: Enhancing Safety and Reducing Downtime in Inclined Conveyor Systems",
                  paragraphs: [
                    {
                      title: "Overview",
                      description: [
                        "The Anti-Runback Roller is an essential safety feature for inclined conveyor systems, preventing the conveyor from running backwards if the belt breaks. This uni-directional roller features a patented mechanism that engages only during a belt failure, ensuring minimal wear and friction during normal operation. Key benefits include enhanced safety, reduced downtime, minimized spillage and equipment damage, and supplementary protection to existing holdbacks. Features:",
                        "Improves Safety: Prevents uncontrolled belt run-back.",
                        "Minimizes Downtime: Keeps operations running smoothly.",
                        "Reduces Spillage and Damage: Protects materials and equipment.",
                        "Frictionless Operation: Mechanism is disengaged during normal use.",
                        "Easy Retrofit: Fits into existing frames with directional indicators for proper installation.",
                      ],
                    },
                  ],
                },
                additionalData: [
                  {
                    title: "Main Features",
                    subData: [
                      {
                        Icon: (props) => <Zap {...props} />,
                        title: "Safety Enhancement (Prevents Belt Run-Back)",

                        description:
                          "The Anti-Runback Roller is a crucial safety feature for inclined conveyor systems, specifically designed to prevent the conveyor from reversing its direction in the event of a belt failure. When the conveyor belt breaks, the uni-directional roller automatically engages, locking the system in place and stopping any uncontrolled backward movement. This innovative mechanism ensures that materials remain safely in position, minimizing the risk of accidents or injuries caused by unexpected belt movement. Its safety-first design is ideal for high-risk applications, making it a necessary addition to any inclined conveyor system.",
                      },
                      {
                        Icon: (props) => <Shield {...props} />,
                        title: "Downtime Reduction (Smooth Operations)",
                        description:
                          "Downtime can be costly, especially in industries where conveyors are critical to operations. The Anti-Runback Roller helps minimize downtime by providing reliable protection against belt run-back, ensuring that conveyor systems continue to function efficiently even after a belt failure. Since the mechanism only engages during a belt failure and disengages during normal operation, wear and tear are kept to a minimum. This reduces the need for repairs or replacements, allowing your conveyor system to maintain smooth operations and avoid unexpected stoppages. The result is more efficient and continuous production with fewer interruptions",
                      },
                      {
                        Icon: (props) => <Wrench {...props} />,
                        title:
                          "Damage and Spillage Reduction (Protects Materials and Equipment)",

                        description:
                          "The Anti-Runback Roller not only protects your personnel but also safeguards valuable materials and equipment. In the event of a belt failure, the roller's anti-runback mechanism prevents spillage, avoiding material loss and damage to downstream equipment. This feature is especially beneficial in handling fragile or high-value materials, as it ensures that they remain securely in place, even if the belt breaks. Additionally, by preventing reverse motion and potential collisions, the roller reduces the risk of damage to the conveyor structure, bearings, and other key components, contributing to a longer lifespan for your equipment",
                      },
                    ],
                  },
                ],
              },
              {
                id: "belt-tracking-roller",
                Component: IdlersPulleysProductDetailPage,
                title: "Belt Tracking roller",
                shortDescription:
                  "Mechanical solution for controlling belt misalignment in conveyor systems",
                heroData: {
                  title: "Belt Tracking roller",
                  subtitle:
                    "Mechanical solution for controlling belt misalignment in conveyor systems",
                  image: {
                    src: Images?.specialapplicationrollersbelttrackingrollerhero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.specialapplicationrollersbelttrackingroller,
                  alt: "",
                },
                detailPageContent: [
                  {
                    type: "white-bordered",
                    paragraphPairs: [
                      {
                        title:
                          "Self-Aligning Roller: Prevent Damage, Minimize Downtime, and Extend Belt Life",
                        paragraphs: [
                          "Widely used across the mining industry and in all sectors where conveyor belts operate, the self-aligning roller provides an immediate response to belt misalignment on the return side. By constantly correcting the belt’s trajectory, it ensures stable, consistent alignment and eliminates the need for additional containment or tracking devices.",
                          "Designed for belt widths ranging from 450 mm to 2300 mm, it can be installed exactly like any standard roller, without requiring special tools or complex procedures. Its performance is guaranteed by an internal sealed cartridge, which houses a purely mechanical self-aligning system. This sealed design protects the mechanism from dust, debris, and environmental contaminants, ensuring long-lasting reliability with virtually no maintenance.",
                          "Integrating a self-aligning roller into a conveyor system significantly reduces the risk of belt edge damage, structural wear, and material loss due to lateral spillage. By maintaining proper belt tracking, it helps operators avoid costly interruptions, improving both operational safety and plant efficiency.",
                          "Ultimately, these benefits contribute to lower maintenance requirements, longer component service life, and overall cost savings.",
                        ],
                      },
                      {
                        title: "FEATURES & BENEFITS:",
                        list: [
                          "Prevent Belt Damage",
                          "Prevent Structural Damage",
                          "Prevent Spillage",
                          "Decrease downtime",
                          "Decrease maintenance",
                          "Extend Belt Life",
                          "Save Money",
                        ],
                      },
                    ],
                  },
                ],
                additionalData: [
                  {
                    title: "Main Features",
                    subData: [
                      {
                        Icon: (props) => <Zap {...props} />,
                        title:
                          "Self-Centering Highly Efficient Heavy Return Roller",

                        description:
                          "The self-centering design of this heavy-duty return roller keeps the conveyor belt properly aligned, preventing misalignment that can cause damage or inefficiency. Its efficient construction ensures smooth belt operation, reducing wear and extending the life of both the roller and the conveyor system. The belt-friendly design minimizes edge wear and friction, supporting safer and more reliable operation",
                      },
                      {
                        Icon: (props) => <Shield {...props} />,
                        title:
                          "Rugged Mechanical Construction for Maximum Durability",
                        description:
                          " Built to withstand the harshest environments, this return roller features rugged mechanical construction for outstanding durability and performance. Designed for heavy-duty applications, it excels in demanding settings such as mining, quarrying, and industrial sites. Its robust design allows it to handle high loads and continuous operation without compromising reliability, making it ideal for conveyors operating under extreme conditions",
                      },
                      {
                        Icon: (props) => <Wrench {...props} />,
                        title:
                          "Thick and Strong Rubber Lagging for Enhanced Grip and Protection",

                        description:
                          " Featuring thick, durable rubber lagging, this roller ensures excellent grip and traction, keeping the conveyor belt securely in place during operation. The rubber coating also serves as a protective layer, reducing wear and damage to both the roller and the belt. Designed to resist abrasion, impact, and harsh environmental conditions, the lagging delivers superior protection while enhancing overall performance and operational efficiency",
                      },
                    ],
                  },
                ],
              },
              {
                id: "composite-roller",
                Component: IdlersPulleysProductDetailPage,
                title: "Composite",
                shortDescription: "Lightweight strength, superior efficiency",
                heroData: {
                  title: "Composite",
                  subtitle: "Lightweight strength, superior efficiency",
                  image: {
                    src: Images?.specialapplicationrollerscompositehero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.specialapplicationrollerscomposite,
                  alt: "",
                },
                detailPageContent: [
                  {
                    type: "white-bordered",
                    paragraphPairs: [
                      {
                        title:
                          "Lightweight, Durable, and High-Performance for Extreme Applications",
                        paragraphs: [
                          "The Composite Roller consists of a glass filled high density polyethylene tube, injection moulded bearing housing, stationary stoneguard and FRAS labyrinth seal.",
                          "The Composite Roller offers a distinct mass advantage when compared to equivalent length standard steel and HDPE rollers.",
                        ],
                      },
                      {
                        title: "BEARING HOUSING",
                        list: [
                          "Injection moulded glass filled polypropylene with anti-static additive.",
                        ],
                      },
                      {
                        title: "STONEGUARD",
                        list: [
                          "Injection moulded impact modified PA66;",
                          " The additional labyrinth offers increased protection for the seal and bearing;",
                          "The stoneguard prevents the roller from seizing if a stone or rock gets stuck between the roller face and the roller bracket.",
                        ],
                      },
                      {
                        title: "SEALING",
                        list: [
                          "The multi-part labyrinth seal is injection moulded with UL94-V0 rated GF PA6;",
                          "The seal is available as contactless for low drag application requirements or hermetic seal for dirty and wet applications.",
                        ],
                      },
                      {
                        title: "TUBE",
                        list: [
                          "The tube material properties and tube wall thickness provide superior load carrying capacity;",
                          "The tube offers very high abrasion resistance making the roller ideal for hard rock application;",
                          "The machined outer surface offers excellent TIR and low noise emission.",
                        ],
                      },
                    ],
                  },
                ],
                additionalData: [
                  {
                    title: "Main Features",
                    subData: [
                      {
                        Icon: (props) => <Zap {...props} />,
                        title:
                          "Composite Roller: Lightweight and Superior Performance with Advanced Materials",

                        description:
                          "The Highcon Composite Roller is designed for exceptional performance while significantly reducing weight compared to traditional steel rollers. Made from advanced materials, including a glass-filled high-density polyethylene tube and injection-molded bearing housing, this roller offers superior strength without the added weight. Its lightweight design improves conveyor system efficiency by reducing energy consumption, enhancing speed, and lowering operational costs. Perfect for a wide range of applications, the composite roller delivers reliable performance in challenging environments, ensuring long-lasting reliability and optimized productivity",
                      },
                      {
                        Icon: (props) => <Shield {...props} />,
                        title: "Abrasion and Corrosion Resistant",
                        description:
                          "Engineered to withstand harsh working conditions, the Highcon Composite Roller is highly resistant to both abrasion and corrosion. Its tube, crafted from high-density polyethylene, offers exceptional durability, particularly in abrasive environments such as mining or bulk material handling. Additionally, the roller’s composite construction provides superior protection against corrosive elements, extending the life of the roller and minimizing maintenance requirements. This durability ensures that the composite roller performs consistently, even in the most demanding environments, making it an ideal choice for applications where long-term reliability is critical",
                      },
                      {
                        Icon: (props) => <Wrench {...props} />,
                        title: "UV Resistant",

                        description:
                          "The Highcon Composite Roller is built to endure the effects of prolonged exposure to UV radiation, thanks to its UV-resistant materials. The high-density polyethylene tube and the advanced composite components are engineered to maintain their structural integrity and performance even under intense sunlight and outdoor conditions. This UV resistance ensures that the roller will not degrade or become brittle over time, providing a longer service life and reliable operation in outdoor or exposed conveyor systems. The UV-resistant feature adds to the overall durability, making it a perfect solution for all-weather applications",
                      },
                    ],
                  },
                ],
              },
              {
                id: "guide-rollers-for-conveyor",
                Component: IdlersPulleysProductDetailPage,
                title: "Guide Rollers for Conveyor",
                shortDescription: "Keep it aligned, maximize efficiency",
                heroData: {
                  title: "Guide Rollers for Conveyor",
                  subtitle: "Keep it aligned, maximize efficiency",
                  image: {
                    src: Images?.specialapplicationrollersspecialapplicationrollershero,
                    alt: "",
                  },
                },
                image: {
                  src: Images?.specialapplicationrollersguiderollersforconveyor,
                  alt: "",
                },
                overview: {
                  title:
                    "Optimizing Conveyor Efficiency: The Role of Belt Guide Rollers in Conveyor Systems",
                  paragraphs: [
                    {
                      title: "Overview",
                      description: [
                        "For various reasons, conveyor belts may tend to drift laterally during operation. To limit this issue, vertical guide rollers with cantilevered spindles—commonly referred to as belt guide rollers—can be installed. These components ensure continuous and immediate belt alignment, even under the significant stress generated by the transport of heavy loads.",
                        "The installation of guide rollers offers several advantages, contributing to a more efficient, durable, and safer operation of the conveyor system. Proper belt tracking helps prevent material spillage and reduces the risk of slips or falls for operators, while also minimizing resource waste. In addition, correct belt alignment reduces downtime and unplanned maintenance, ultimately leading to increased productivity and improved profitability.",
                        "However, special attention must be paid to the correct use of rollers for conveyors, as excessive lateral forces may damage the belt edges. It is important to note that guide rollers do not eliminate the root causes of belt misalignment. As a result, the belt may ride up over the roller or become distorted if the issue is not properly addressed.",
                        "For this reason, the use of guide rollers is recommended in combination with self-centering idlers, which automatically rotate when the belt moves off-center and actively correct its alignment.",
                      ],
                    },
                  ],
                },
                additionalData: [
                  {
                    title: "Main Features",
                    subData: [
                      {
                        Icon: (props) => <Zap {...props} />,
                        title:
                          "Very Solid High Wall Thickness, Resistant to Belt Edge Wear",

                        description:
                          "Our belt guide rollers feature a robust construction with an exceptionally thick wall design, ensuring maximum durability and resistance to wear, particularly at the belt edges. This high wall thickness helps protect the roller from the constant friction and pressure applied during material transport, significantly reducing the risk of damage. The enhanced strength also prevents premature wear, making these rollers ideal for heavy-duty applications where harsh conditions and intense load-bearing are common. As a result, they help maintain the integrity of the conveyor belt, reducing maintenance costs and prolonging the life of both the rollers and the belt",
                      },
                      {
                        Icon: (props) => <Shield {...props} />,
                        title:
                          "Top Closed Tight Shell + Smooth Rotation Due to Contactless Seals",
                        description:
                          "Our belt guide rollers are equipped with a top-closed, tightly sealed shell, designed to protect the internal components from dust, dirt, and moisture. This sealed design ensures the rollers remain operational in harsh environments, with minimal risk of contamination. The rollers also feature advanced contactless seals that reduce friction, allowing for smooth, efficient rotation. This unique sealing system enhances the overall performance of the roller, ensuring quieter and more energy-efficient operation, while simultaneously reducing wear and extending service life. The smooth rotation provided by the contactless seals ensures that the conveyor belt is guided effectively with minimal resistance",
                      },
                      {
                        Icon: (props) => <Wrench {...props} />,
                        title:
                          "Standard + All Requested Executions (Ex, for Pipe Conveyor)",

                        description:
                          "Our belt guide rollers are available in standard configurations, as well as customized executions to meet specific customer requirements, including those for pipe conveyors. Whether for general bulk material handling or specialized applications, we offer tailored solutions to fit a variety of conveyor systems. These rollers can be adapted to different operational needs, including temperature extremes, corrosive environments, or space constraints. With the flexibility to meet any application request, including complex configurations like pipe conveyors, our rollers provide reliable, high-performance alignment and protection for all types of conveyor belts",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "frames",
        Component: IdlersPulleysDetailPage,
        title: "Frames",
        shortDescription:
          "Versatile conveyor idlers for bulk handling with enhanced stability and productivity",
        image: {
          src: Images?.frames,
          alt: "Frames",
        },
        heroData: {
          image: { src: Images?.frameshero, alt: "" },
          title: "Frames",
        },
        detailPageContent: [
          {
            type: "white-bordered",
            title: "Belt Conveyor Idlers",
            subtitle:
              "Transoms and frames for troughing sets for bulk material handling.",
            paragraphs: [
              "In bulk material handling applications, idlers play an essential role as a core component of belt conveyor systems. They are composed of one or more rollers, supported or suspended by dedicated frames and transoms, designed to ensure proper belt support and stability. Highcon manufactures a wide range of idler types and configurations, suitable for different operating conditions and load requirements.",
              "In a belt conveyor system, two main categories of idler sets can be identified. Upper carrying sets are designed to support the loaded belt section and facilitate material transport. Lower return sets, instead, support the unloaded belt along its return path.",
              "Upper troughing sets are generally available in two basic arrangements. Flat sets consist of a single horizontal roller, typically supported by fixed brackets connected to the conveyor structure. Troughed sets usually include three rollers mounted within a frame, which is fixed to the structure and shapes the belt to contain bulk material effectively. Additional idler solutions for the loaded side include impact troughing sets, equipped with rollers fitted with rubber rings to absorb shocks, and suspended garland sets, used in specific applications.",
              "The Highcon range also includes self-centering troughing sets, designed to correct belt misalignment and keep the belt constantly in a central running position.",
              "Our extensive product portfolio, all belt conveyor idlers share the same fundamental purpose: supporting the belt and conveyed material along the entire conveyor length, preventing excessive stretching, bending or structural failure. This ensures smooth and efficient conveyor operation, reduces the risk of material spillage, and contributes to improved safety and overall productivity.",
            ],
          },
        ],
        layerTwoProducts: [
          {
            id: "return-sets",
            Component: IdlersPulleysProductDetailPage,
            title: "Return sets",
            shortDescription: "Fixed or Suspended Sets for Optimal Performance",
            heroData: {
              title: "Return sets",
              subtitle: "Fixed or Suspended Sets for Optimal Performance",
              image: {
                src: Images?.framesreturnsethero,
                alt: "",
              },
            },
            image: {
              src: Images?.framesreturnset,
              alt: "",
            },
            overview: {
              title:
                "Customized Return Conveyor Sets for Seamless Operation and Flexibility",
              paragraphs: [
                {
                  title: "Overview",
                  description: [
                    "The lower or return sets of your conveyor system can be customized to suit specific operational needs, offering flexibility in configuration. You can choose from fixed sets with plain steel rollers or spacer rings, ideal for stable support, or opt for suspended 'garland' sets, which are available with plain rollers or rings for added adaptability. These options ensure that your conveyor system operates smoothly, regardless of the application.",
                  ],
                },
              ],
            },
            additionalData: [
              {
                title: "Main Features",
                subData: [
                  {
                    Icon: (props) => <Zap {...props} />,
                    title:
                      "V-Return Transom Sets for Long and Critical Conveyors",

                    description:
                      "V-return transom sets are specifically engineered for long or high-capacity conveyors, where precise belt tracking and consistent performance are critical. These sets feature a V-shaped configuration that helps maintain proper belt alignment, even in challenging operational conditions. By positioning rollers at optimized angles, the transoms effectively support the belt during the return phase, minimizing stress and wear while ensuring smooth material flow. Ideal for conveyors that face heavy loads or complex routing, these V-return transom sets guarantee long-lasting, reliable operation",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title:
                      "Self-Aligning Belt Effect, Even on Reversible Conveyors",
                    description:
                      "The self-aligning belt feature in these transoms ensures optimal tracking and belt centering, even on reversible conveyors. Through their innovative design, these systems automatically adjust to the belt's movement, maintaining its central position during both forward and reverse operations. This feature is crucial for preventing misalignment caused by changing material flow or direction, reducing belt wear, and enhancing overall system efficiency. Self-aligning transoms are especially beneficial in applications where conveyors experience frequent directional changes, offering ease of maintenance and increased reliability",
                  },
                  {
                    Icon: (props) => <Wrench {...props} />,
                    title:
                      "Robust and Very Safe, Preserving Belt Centering and Integrity",

                    description:
                      "These robust return transom sets are built for maximum durability and safety, ensuring the preservation of belt centering and integrity under all conditions. Constructed from high-strength materials, they are engineered to withstand extreme stresses, resist corrosion, and prevent misalignment. The design maintains consistent support, ensuring that the belt remains properly centered, reducing the risk of uneven wear and preventing potential system failures. With these transom sets, users can trust in a secure and efficient conveyor operation, extending the lifespan of both the belt and the entire conveyor system",
                  },
                ],
              },
            ],
          },
          {
            id: "self-centering-sets",
            Component: IdlersPulleysProductDetailPage,
            title: "Self-centering sets",
            shortDescription:
              "Ensure seamless belt alignment with advanced self-centering troughing sets for challenging conditions",
            heroData: {
              title: "Self-centering sets",
              subtitle:
                "Ensure seamless belt alignment with advanced self-centering troughing sets for challenging conditions",
              image: {
                src: Images?.framesselfcenteringsethero,
                alt: "",
              },
            },
            image: {
              src: Images?.framesselfcenteringset,
              alt: "",
            },
            overview: {
              title:
                "Maximizing Efficiency with Self-Centering Troughing Sets for Precise Belt Tracking",
              paragraphs: [
                {
                  title: "Overview",
                  description: [
                    "In challenging operational environments, belts can often shift laterally, leading to misalignment and operational inefficiencies. To counter this, self-centering troughing sets are employed to correct belt tracking and maintain the belt in a central position. These sets consist of a series of rollers arranged in a trough configuration, mounted on a transom that is connected to a slewing ring, allowing limited rotation of 5-8 degrees to accommodate vertical loading. The design also includes a tapered roller bearing to absorb side forces. Ideal for installation on the upper strand, these self-centering sets ensure smooth and consistent belt operation. It is recommended to install them approximately 15 meters from the pulley and at a pitch of 30 meters. Available in three models—S with a rigid arm, F with a pivoting arm and brake, and R with a centralized pivoting arm for reversible belts—these sets are designed to be easily interchangeable with standard transoms.",
                  ],
                },
              ],
            },
            additionalData: [
              {
                title: "Main Features",
                subData: [
                  {
                    Icon: (props) => <Zap {...props} />,
                    title:
                      "Highly Efficient & Robust Self-Aligning Troughing and Return Sets",

                    description:
                      "Our self-aligning troughing and return sets are engineered for maximum efficiency and durability, ensuring consistent belt tracking and optimal conveyor performance. The robust design features high-quality components, allowing these sets to operate seamlessly in a variety of challenging environments. They are ideal for both standard and reversible conveyors, maintaining precise belt alignment and preventing operational inefficiencies due to lateral belt movement. Perfect for high-load applications, these sets provide a dependable solution for maintaining conveyor system stability",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title:
                      "Long-Life Reliable Function, Thanks to Large Hardened Slewing Bearing with Full Balls Complement",
                    description:
                      "The long-lasting performance of our self-aligning sets is achieved through the use of large, hardened slewing bearings with a full complement of balls. This advanced bearing design enhances load-bearing capacity and minimizes friction, extending the lifespan of the system even in demanding conditions. The slewing bearing ensures smooth rotation while absorbing side forces, preventing wear and ensuring a reliable, consistent function over time. This design is particularly beneficial in high-impact applications where longevity and durability are crucial",
                  },
                  {
                    Icon: (props) => <Wrench {...props} />,
                    title:
                      "Using Standard Carrying or Return Rollers (With No Rubber Rings)",

                    description:
                      "Our self-aligning troughing and return sets utilize standard carrying or return rollers, designed for efficient performance without the use of rubber rings. These rollers offer exceptional support and durability, ensuring proper load distribution across the belt. The absence of rubber rings simplifies maintenance and minimizes material buildup, making these rollers ideal for applications with minimal risk of material adhesion. Their straightforward design reduces complexity while maintaining high performance and low maintenance requirements, perfect for efficient and reliable conveyor operation",
                  },
                ],
              },
            ],
          },
          {
            id: "supports",
            Component: IdlersPulleysProductDetailPage,
            title: "Supports",
            shortDescription: "Support brackets in cold pressed sheet steel",
            heroData: {
              title: "Supports",
              subtitle: "Support brackets in cold pressed sheet steel",
              image: {
                src: Images?.framessupporthero,
                alt: "",
              },
            },
            image: {
              src: Images?.framessupport,
              alt: "",
            },
            detailPageContent: [
              {
                type: "white-bordered",
                paragraphPairs: [
                  {
                    title:
                      "Durable and Efficient Supports for Belt Drives: High Torque Capacity, Reversible Belt Compatibility, and Corrosion-Resistant Options",
                    paragraphs: [
                      "Suggested for many starts/stops, 5÷10/min or higher (if approved by Highcon).",
                      "Recommended for reversible belts. Max. torque for the two supports: 40 Nm",
                    ],
                  },
                  {
                    title: "Supports for Belt Drives:",
                    list: [
                      "S1DD60 (DJC 113) - steel with yellow tropic-proofing zinc-plating",
                      "S1DD6K (DJC113I) - AISI 304 stainless steel",
                    ],
                  },
                  {
                    title:
                      "Supports only for idle pulleys (not to be used with belt drives!):",
                    list: [
                      "S1DD61 (DJC 113T) - steel with yellow tropic-proofing zinc-plating",
                      "S1DD6M (DJC113TI) - AISI 304 stainless steel.",
                    ],
                  },
                ],
              },
            ],
            additionalData: [
              {
                title: "Main Features",
                subData: [
                  {
                    Icon: (props) => <Zap {...props} />,
                    title:
                      "Versatile Sizing for Flat Carrying and Return Rollers",

                    description:
                      "Our flat carrying and return rollers are available in a wide variety of sizes, ensuring compatibility with different conveyor systems. Whether you need rollers for small or large belt widths, these rollers can be tailored to fit specific operational requirements. The adaptability of sizes allows for seamless integration into both standard and custom conveyor configurations, ensuring reliable performance and efficient material handling",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title:
                      "Compatible with Plain or Rubber Ring Rollers for Diverse Shell and Shaft Specifications",
                    description:
                      "Designed to accommodate a broad range of shell diameters, shaft diameters, and SW slot widths, our rollers are available with plain or rubber rings. This extensive compatibility ensures that the rollers meet the precise specifications of your conveyor system, whether it requires added belt protection or enhanced performance in challenging conditions. Choose from plain steel rollers or enhanced versions with rubber rings for optimized material handling and belt stability",
                  },
                  {
                    Icon: (props) => <Wrench {...props} />,
                    title:
                      "Shaped Slots for Enhanced Roller Fit with Open and Closed Slotted Shaft Configurations",

                    description:
                      "Our rollers feature precisely engineered shaped slots, designed to accept both open and closed slotted shaft executions. This design flexibility ensures that the rollers are securely mounted, providing superior alignment and load distribution. The shaped slots are compatible with a wide range of shaft configurations, making the rollers versatile for various conveyor setups, whether standard or custom",
                  },
                ],
              },
            ],
          },
          {
            id: "upper-carrying-troughing",
            Component: IdlersPulleysProductDetailPage,
            title: "Upper carrying troughing",
            shortDescription:
              "Optimized Upper Carrying Troughing Idlers for Enhanced Material Handling and Belt Tracking",
            heroData: {
              title: "Upper carrying troughing",
              subtitle:
                "Optimized Upper Carrying Troughing Idlers for Enhanced Material Handling and Belt Tracking",
              image: {
                src: Images?.framesuppercarryingtroughinghero,
                alt: "",
              },
            },
            image: {
              src: Images?.framesuppercarryingtroughing,
              alt: "",
            },
            overview: {
              title: "Custom Solutions for Bulk Handling and Reversible Belts",
              paragraphs: [
                {
                  title: "Overview",
                  description: [
                    "Upper carrying troughing belt conveyor idlers are crucial for supporting the sections of the belt where material is loaded and transported. These idlers come in two basic configurations: a flat design with a single horizontal roller supported by fixed brackets, and a troughed structure with two or three rollers supported within a frame. The troughed design is especially effective in bulk handling applications, as it allows for greater material capacity at the same belt width and speed. Three-roller upper carrying troughing idlers are typically used for unidirectional belts, with side rollers slightly inclined for self-centering belt tracking. For reversible belts, the R version without this inclination is recommended. Selecting the appropriate rollers is essential during the design phase to ensure compatibility with belt width, speed, material characteristics, and environmental conditions. Additionally, transoms and pitch must be carefully calculated to provide adequate support for the material being handled.",
                  ],
                },
              ],
            },
            additionalData: [
              {
                title: "Main Features",
                subData: [
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Standard Angle Beam & Tubular Beam New Design",

                    description:
                      "The latest design for conveyor systems features both standard angle beams and tubular beams, ensuring a robust and efficient structure for a variety of applications. The use of tubular beams offers mass and cost savings, while providing superior strength and minimal deflection under load. These beams are engineered to withstand significant stress, ensuring the stability and reliability of conveyor systems, particularly in heavy-duty and high-capacity operations. The new tubular beam design is ideal for conveyors where both weight reduction and structural integrity are essential, providing an optimal balance for performance and cost efficiency",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title:
                      "European Standard BW's & Custom Standards Available on Request",
                    description:
                      "Highcon's idler frame designs are manufactured to meet European Standard BW’s, ensuring compliance with industry norms and offering excellent performance across various applications. Additionally, the flexibility to provide custom configurations tailored to specific project requirements is available, allowing for the accommodation of diverse conveyor system needs. Whether your project demands adherence to international or regional standards, Highcon provides the flexibility to meet exact specifications, offering solutions that match your material handling requirements in terms of capacity, environmental conditions, and design preferences",
                  },
                  {
                    Icon: (props) => <Wrench {...props} />,
                    title:
                      "Finishing: Hot Dip Galvanized or Painted, Standard or Custom Options",

                    description:
                      "Highcon provides high-quality finishing options for its conveyor components, including hot dip galvanization or painting, which ensures maximum protection against corrosion and extends the life of the equipment. Hot dip galvanizing offers excellent durability, particularly in harsh environments where exposure to moisture and chemicals is prevalent. Alternatively, custom painting options can be selected to meet aesthetic or operational requirements. Whether you require standard finishes or customized solutions to suit specific operational needs, Highcon’s finishing options provide reliable protection and enhance the overall durability of the conveyor system",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "garlands",
        Component: IdlersPulleysDetailPage,
        title: "Garlands",
        shortDescription:
          "Suspended sets used in applications like mining for the conveying of large lump size material",
        image: {
          src: Images?.garlandgarland,
          alt: "Garlands",
        },
        heroData: {
          image: { src: Images?.garlandhero, alt: "" },
          title: "Garlands",
        },
        detailPageContent: [
          {
            type: "white-bordered",
            title:
              "Suspended Garland Troughing Sets: Boosting Conveyor Efficiency and Flexibility",
            paragraphs: [
              "The global growth of the bulk handling industry has created a need to move larger volumes of bulk and oversized materials quickly, safely, and reliably. To meet these demands, suspended garland troughing sets have been developed, combining exceptional structural strength with operational flexibility. As conveyor systems evolve to handle higher speeds and heavier loads, these systems play a crucial role in maintaining smooth and stable material flow. Special attention has been given to the most critical section of any conveyor - the loading zone - where constant material impact requires precise engineering. In this context, Highcon's suspended garland troughing sets offer a new standard for efficiency, durability, and adaptability in demanding bulk handling applications.",
            ],
          },
          {
            type: "dark",
            title:
              "Easy Installation, Fast Maintenance, and Exceptional Versatility",
            paragraphs: [
              "Highcons's suspended garland troughing sets are designed for quick and simple installation without interrupting plant operations. Their suspended design allows maintenance teams to access and service components while the conveyor continues running, minimizing downtime and boosting overall productivity. Years of engineering refinement and research have produced a system capable of handling a wide range of applications—from mining and quarrying to ports, terminals, and heavy industrial environments. Today, these garland troughing sets are favored for their reliability, durability, and ability to enhance both conveyor flexibility and long-term operational efficiency.",
            ],
          },
        ],
        layerTwoProducts: [
          {
            id: "garlands",
            Component: IdlersPulleysProductDetailPage,
            title: "Garlands",
            shortDescription:
              "Suspended stations, fully configurable, for a wide variety of loads",
            heroData: {
              title: "Garlands",
              subtitle:
                "Suspended stations, fully configurable, for a wide variety of loads",
              image: {
                src: Images?.garlandgarlandhero,
                alt: "",
              },
            },
            image: {
              src: Images?.garlandgarland,
              alt: "",
            },
            detailPageContent: [
              {
                type: "white-bordered",

                paragraphPairs: [
                  {
                    title:
                      "Robust and Flexible Conveyor Solution for High-Speed Transport and Effortless Maintenance",
                    paragraphs: [
                      "The installation of garland rollers represents a construction solution for belt conveyors that combines robustness with operational flexibility, while ensuring high transport speeds.",
                      "Garland stations, which are easy and quick to install, allow for particularly fast maintenance interventions and, in some cases, eliminate the need for plant shutdowns. They are fully configurable, both in terms of the rollers used for assembly, their number, and the type of attachment.",
                    ],
                  },
                  {
                    title: "Number of Rollers",
                    list: [
                      "2 Rolls: For upper and return set with two rollers",
                      "3 Rolls: For upper and impact set with three rollers",
                      "5 Rolls: For upper and impact set with five rollers",
                    ],
                  },
                  {
                    title: "Suspensions",
                    paragraphs: [
                      "The connecting links and suspensions are crucial components that provide a wide range of movement while ensuring quick and straightforward installation and maintenance. Various types of suspensions are designed to meet different operational conditions. Below are some of the most commonly used suspension types.",
                    ],
                  },
                  {
                    title: "Hook type A",
                    paragraphs: [
                      "For upper and return sets with roller spindled = 20 and 25 mm.",
                    ],
                  },
                  {
                    title: "Hook type B",
                    paragraphs: [
                      "For upper and return impact sets with roller spindled = 30 and 40 mm for heavy loads.",
                    ],
                  },
                  {
                    title: "Hook type C",
                    paragraphs: ["Upper and return sets for light loads"],
                  },
                  {
                    title: "Hook type E",
                    paragraphs: [
                      "This is a system for rapid “unhooking” of an upper troughing set. To be used when the conveyor cannot be stopped. This system allows sets to be removed from below the belt and allows substitution, during normal maintenance breaks.",
                    ],
                  },
                  {
                    title: "Hook type F",
                    paragraphs: [
                      "To support the return belt and where it is necessary  to change the angle of the rollers, the chain may be slotted into the fork as the links permit.",
                    ],
                  },
                ],
              },
            ],
            additionalData: [
              {
                title: "Main Features",
                subData: [
                  {
                    Icon: (props) => <Zap {...props} />,
                    title:
                      "Integrated solution for conveyor belts, for medium-heavy loads",

                    description: "",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title: "Flexible configuration",
                    description: "",
                  },
                  {
                    Icon: (props) => <Wrench {...props} />,
                    title: "Easy to assemble",

                    description: "",
                  },
                ],
              },
            ],
          },

          {
            id: "valmec",
            Component: IdlersPulleysProductDetailPage,
            title: "Valmec",
            shortDescription:
              "Special garland: boost capacity, minimize footprint",
            heroData: {
              title: "Valmec",
              subtitle: "Special garland: boost capacity, minimize footprint",
              image: {
                src: Images?.garlandvalmechero,
                alt: "",
              },
            },
            image: {
              src: Images?.garlandvalmec,
              alt: "",
            },
            detailPageContent: [
              {
                type: "white-bordered",
                paragraphPairs: [
                  {
                    title:
                      "The Next-Generation Conveyor Roller for Enhanced Load Capacity, Stability, and Cost Efficiency",
                    paragraphs: [
                      "A version called 'VALMEC' designed for particularly critical applications, uses 6 rollers, with the two central rollers mounted on the same V-shaped shaft.",
                      "This allows for precise guidance of the belt on varied paths, including changes in elevation and curves.",
                      "Please contact Highcon for details on the benefits of this version and specific technical information.",
                    ],
                  },
                  {
                    title: "Key Features:",
                    list: [
                      "Semicircular Shape: The shape of the Valmec allows the belt to better conform to the trough, reducing sharp bends and enabling the use of thicker belts or belts with higher transverse rigidity",
                      "Improved Stability: The system ensures greater stability for both the belt and the material being conveyed, thanks to its self-aligning geometry and the ability to tension the belt with a steel rope device.",
                      "Efficiency in New Installations: In new setups, the Valmec allows the use of a narrower belt compared to traditional 30° trough conveyors, lowering the cost of mechanical parts, pulleys, and structural frames.",
                      "Space and Weight Optimization: Compared to traditional systems, the Valmec significantly reduces weight and overall dimensions, eliminating roller supports (transoms) by mounting directly onto the supporting frame.",
                    ],
                  },
                  {
                    title: "Advantages Over Traditional Systems:",
                    list: [
                      " Higher Load Capacity: The Valmec increases load capacity (m³/h) compared to traditional 3 or 5 roller trough systems:",
                      "Up to 35% more capacity than traditional 3-roll 30° troughs.",
                      "20% more capacity than traditional 3-roll 45° troughs",
                      "8% more capacity than traditional 5-roll 60° troughs.",
                      "Increased Distance Between Idler Stations: The Valmec allows the distance between idler stations to be increased by a factor of 2 to 3 compared to traditional roller systems.",
                    ],
                  },
                  {
                    title: "Easy Installation and Compatibility:",
                    list: [
                      "Easy Adaptation: The Valmec is compatible with existing support frames, reducing installation costs and easily adjusting the inclination to suit different operational needs.",
                      "Cost Reduction: Whether for new or retrofit installations, the Valmec system offers an excellent cost-benefit ratio, improving performance while keeping operational costs low.",
                    ],
                  },
                  {
                    title: "",
                    paragraphs: [
                      "With Valmec, bulk material handling can be optimized, increasing productivity while reducing costs, all while maintaining high levels of stability and reliability in the conveyor system.",
                    ],
                  },
                ],
              },
            ],
            additionalData: [
              {
                title: "Main Features",
                subData: [
                  {
                    Icon: (props) => <Zap {...props} />,
                    title:
                      "Integrated solution for conveyor belts, for medium-heavy loads",

                    description: "",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title: "Flexible configuration",
                    description: "",
                  },
                  {
                    Icon: (props) => <Wrench {...props} />,
                    title: "Easy to assemble",

                    description: "",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "motorized-pulleys",
        Component: IdlersPulleysDetailPage,
        title: "Motorized Pulleys",
        shortDescription:
          "Efficient and reliable motorized pulleys: sealed for safety and low maintenance",
        image: {
          src: Images?.MotorizedPulley,
          alt: "Motorized Pulleys",
        },
        heroData: {
          image: { src: Images?.MotorizedPulley, alt: "Motorized Pulleys" },
          title: "Motorized Pulleys",
        },
        detailPageContent: [
          {
            type: "white-bordered",
            title:
              "Suspended Garland Troughing Sets: Boosting Conveyor Efficiency and Flexibility",
            paragraphs: [
              "Highcon Motorized Pulleys are highly efficient hermetically sealed geared motor drives: all components (motor, gearbox and bearings) are totally enclosed and sealed inside a steel cylindrical shell. This special design results in compact and space saving, extremely safe, silent, low maintenance and versatile drive components for conveyors which are quick and simple to install, require virtually no maintenance and are suitable for plenty of applications. Indeed, Highcon catalogue of motorized pulleys counts different models and sizes designed for light, medium and heavy-duty conveyors to be installed in typically aggressive bulk. Thanks to their totally sealed enclosure, Highcon Motorized Pulleys are likely to be unaffected by harmful substances and aggressive environmental conditions like dust, water, oil, grease, chemicals, detergents, high-pressure cleaning operations, extreme temperatures and so on.",
              "As further proof of their high quality, Highcon Motorized Pulleys are supplied with the degree of protection IP66/67, they are also in compliance with the Safety norm ANSI 535.4 and ISO 3864-2. Moreover, they are manufactured according to the Council Directives of the European Communities, particularly according to Directive 2006/95/EC relating to electrical equipment and according to Directive 2004/108/EC relating to electrical magnetic compatibility.",
            ],
          },
        ],
        layerTwoProducts: [
          {
            id: "motorized-pulley-138ls",
            Component: IdlersPulleysProductDetailPage,
            title: "Motorized Pulley 138LS",
            shortDescription:
              "Compact and Efficient Power for Light-Duty Bulk Handling",
            heroData: {
              title: "Motorized Pulley 138LS",
              subtitle:
                "Compact and Efficient Power for Light-Duty Bulk Handling",
              image: {
                src: Images?.MotorizedPulley138LS,
                alt: "",
              },
            },
            image: {
              src: Images?.MotorizedPulley138LS1,
              alt: "",
            },
            detailPageContent: [
              {
                type: "white-bordered",
                paragraphPairs: [
                  {
                    title: "Motorized Pulley 138LS, Ø 138 mm",
                    paragraphs: [
                      "Motorized Pulley 138LS, with machined helical gear box, performs an efficiency, in a compact diameter of 138 mm only. With a min RL of 300 mm and powers ranging from 0.10 to 0.75kW this size of motorized pulley is suitable for most duties requiring such a small diameter - e.g:",
                    ],
                  },
                  {
                    title: "",
                    list: [
                      "Light agriculture and bulk solids handling conveyors",
                      "Mobile or portable conveyors",
                      "As a drive unit for brush cleaners etc.",
                    ],
                  },
                  {
                    title: "",
                    paragraphs: [
                      "Motorized pulley 138E has standard IP66/67 enclosure and is available in complete stainless steel execution for wash down application.",
                      "For the choice of the Motorized Pulley it is very important to know or to calculate the belt tension T1+T2 (radial load). This MUST NOT OVERCOME the 'max. radial load' allowed as shown in the catalogue.",
                      "Be careful to very high belt tensions when using thick, heavy and/or large belts.",
                      "If the type 138E cannot provide the necessary max. radial load T1+T2, you have to choose a Motorized Pulley with a bigger diameter.",
                    ],
                  },
                ],
              },
            ],
            additionalData: [
              {
                title: "Main Features",
                subData: [
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Compact",

                    description: "",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title: "Equal weight distribution",
                    description: "",
                  },
                  {
                    Icon: (props) => <Wrench {...props} />,
                    title: "Resistance against external influences",

                    description: "",
                  },
                ],
              },
            ],
          },
          {
            id: "motorized-pulley-165ls",
            Component: IdlersPulleysProductDetailPage,
            title: "Motorized Pulley 165LS",
            shortDescription:
              "Compact Power for Light Agriculture and Bulk Handling Applications",
            heroData: {
              title: "Motorized Pulley 165LS",
              subtitle:
                "Compact Power for Light Agriculture and Bulk Handling Applications",
              image: {
                src: Images?.MotorizedPulley165LS,
                alt: "",
              },
            },
            image: {
              src: Images?.MotorizedPulley165LS1,
              alt: "",
            },
            detailPageContent: [
              {
                type: "white-bordered",
                paragraphPairs: [
                  {
                    title: "Motorized Pulley 165LS, Ø 165 mm",
                    paragraphs: [
                      "Motorized Pulley 165LS, with machined helical gear box, performs an efficiency, in a compact diameter of 165 mm only. With a min RL of 400 mm and and powers ranging from 0.11kW to 1.5kW this size of motorized pulley is suitable for most duties requiring such a small diameter – e.g.:",
                    ],
                  },
                  {
                    title: "",
                    list: [
                      "Light agriculture and bulk solids handling conveyors",
                      "Mobile or portable conveyors",
                      "As a drive unit for brush cleaners etc.",
                    ],
                  },
                  {
                    title: "",
                    paragraphs: [
                      "Motorized pulley 165LS has standard IP66/67 enclosure and is available in complete stainless steel execution for wash down application.",
                      "For the choice of the Motorized Pulley it is very important to know or to calculate the belt tension T1+T2 (radial load). This MUST NOT OVERCOME the 'max. radial load' allowed as shown in the catalogue.",
                      "Be careful to very high belt tensions when using thick, heavy and/or large belts.",
                      "If the type 165E cannot provide the necessary max. radial load T1+T2, you have to choose a Motorized Pulley with a bigger diameter.",
                    ],
                  },
                ],
              },
            ],
            additionalData: [
              {
                title: "Main Features",
                subData: [
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Compact",

                    description: "",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title: "Equal weight distribution",
                    description: "",
                  },
                  {
                    Icon: (props) => <Wrench {...props} />,
                    title: "Resistance against external influences",

                    description: "",
                  },
                ],
              },
            ],
          },
          {
            id: "motorized-pulley-220m-220h",
            Component: IdlersPulleysProductDetailPage,
            title: "Motorized Pulleys 220M & 220H",
            shortDescription:
              "Optimal Solutions for Medium and Heavy-Duty Bulk Handling Needs",
            heroData: {
              title: "Motorized Pulleys 220M & 220H",
              subtitle:
                "Optimal Solutions for Medium and Heavy-Duty Bulk Handling Needs",
              image: {
                src: Images?.MotorizedPulleys220M220H,
                alt: "",
              },
            },
            image: {
              src: Images?.MotorizedPulleys220M220H1,
              alt: "",
            },
            detailPageContent: [
              {
                type: "white-bordered",
                paragraphPairs: [
                  {
                    title: "Motorized Pulleys 220M & 220H, Ø 216 mm",
                    paragraphs: [
                      "Highcon offers a range of motorized pulleys - used to drive conveyor belts and other material handling systems - with two different load capacities in the 216 mm diameter, designed for bulk handling applications:",
                    ],
                  },
                  {
                    title: "",
                    list: ["M for Medium-duty", "H for Heavy-duty"],
                  },
                  {
                    title: "",
                    paragraphs: [
                      "It is important to understand the differences between the various types of motorized pulleys in order to select the most suitable one for your specific application. In particular, the estimated belt tension (radial load), T1+T2, must be lower than the maximum allowable radial load. Keep in mind that using multiply thick, heavy and/or large belt can lead to increased values. However, if the proper belt tension cannot be achieved with the selected diameter, a larger pulley diameter must be chosen",
                    ],
                  },
                ],
              },
              {
                type: "gray-shadow",
                paragraphPairs: [
                  {
                    title: "M for Medium-duty",
                    paragraphs: [
                      "The internal components of motorized pulleys 220M are designed for applications that feature harsh operating conditions such as crushing and screening equipment, cement and concrete plants, mobile conveyors, open-pit mines and gravel pits, where reliability is essential. These components are able to provide adequate belt tensionfor these demanding environments.",
                    ],
                  },
                  {
                    title: "H for Heavy-duty",
                    paragraphs: [
                      "Equipped with a reinforced 3-stage-gearbox, Highcon 220H diameter model is engineered to operate with the necessary strength at low speeds, deliver high torque and meet demanding belt tension requirements. This makes them ideal for recycling plants, waste management (e.g. hand sorter conveyors and bunker discharge conveyors) but they can be also used in ports and logistic hubs (e.g. to drive conveyors that handle coal, sand,..) applications where a combination of these specifications is essential.",
                      "These products offer a great variety of benefits: their integrated design eliminates the need for external components, resulting in a compact, all-in-one pulley that, consequently, only needs an easy and fast installation which reduces setup time.",
                      "In addition, it is also possible to save energy since Highcon products are characterized by poor power consumption compared to traditional systems. Another important aspect to consider when talking about such a complete article is the level of safety: all moving and potentially hazardous components of the pulley – such as motors and gearboxes - are sealed inside the pulley shell so the risk of injury is very low.",
                      "These pulleys can also be classified as eco- friendly conveyor solutions reducing energy consumption, offering both cost savings and environmental advantages given from the fewer number of components to replace which lowers the ecological impact compared to more traditional products. Using Highcon motorized pulleys is a step toward more sustainable material handling, helping companies meet internal green targets and comply with stricter environmental regulations.",
                      "By choosing the right motorized pulley model for your sector, you ensure optimal performance, longer equipment lifespan, and minimized downtime.",
                    ],
                  },
                ],
              },
            ],

            additionalData: [
              {
                title: "Main Features",
                subData: [
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Compact setup, ideal for tight spaces",

                    description:
                      "Models 220H and 220M are designed with the drive unit, bearings and gearbox integrated directly inside the shell. This compact solution occupies significantly less space compared to conventional external drives, making it perfect for installations where space is limited. With no need for additional housings these items are lighter, easier to handle, and faster to install.",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title: "Balanced weight distribution and lower maintenance",
                    description:
                      "Since the motor, bearings and gearbox are enclosed within the pulley shell, the weight is evenly distributed across the conveyor structure. This balanced design eliminates the need for external large and bulky components, reducing both installation complexity and maintenance costs.",
                  },
                  {
                    Icon: (props) => <Wrench {...props} />,
                    title: "Resistance against external factors",

                    description:
                      "Unlike conventional and traditional conveyor drives, that are exposed to environmental stress, Highcon motorized pulleys are completely sealed inside a robust steel cylindrical shell. This structure protects critical internal parts- the motor, gearbox and bearings - from dust, moisture, abrasive or corrosive materials and extreme temperatures, enhancing higher resistance, durability and an extended component lifespan.",
                  },
                ],
              },
            ],
          },
          {
            id: "motorized-pulley-320l-320m-320h",
            Component: IdlersPulleysProductDetailPage,
            title: "Motorized Pulleys 320L, 320M & 320H",
            shortDescription:
              "Tailored Power Solutions for Light, Medium, and Heavy-Duty Bulk Handling",
            heroData: {
              title: "Motorized Pulleys 320L, 320M & 320H",
              subtitle:
                "Tailored Power Solutions for Light, Medium, and Heavy-Duty Bulk Handling",
              image: {
                src: Images?.MotorizedPulleys320L320M320H,
                alt: "",
              },
            },
            image: {
              src: Images?.MotorizedPulleys320L320M320H1,
              alt: "",
            },
            detailPageContent: [
              {
                type: "white-bordered",
                paragraphPairs: [
                  {
                    title: "Motorized Pulleys 320L, 320M & 320H, Ø320 m",
                    paragraphs: [
                      "In order to match specific project requirements of bulk applications, Highcon product range includes three types of motorized pulleys in diameter 320mm having different loading performances:",
                    ],
                  },
                  {
                    title: "",
                    list: [
                      "L for Light-duty",
                      "M for Medium-duty",
                      "H for Heavy-duty",
                    ],
                  },
                  {
                    title: "",
                    paragraphs: [
                      "Torque and power of these items vary and must be carefully matched to the belt tension, calculated as T1+T2. It is essential that this value – which represents the total load transmitted through the belt - does not exceed the maximum allowable radial load for the selected ensuring safe and reliable operation without the risk of premature wear or reduced efficiency.",
                      "Particular attention should be given when using multiply thick, heavy or large belts as these may require higher tension demands to operate effectively. If none of the 320 mm diameter pulleys meet the project requirements, Highcon also offers larger diameter motorized pulleys capable of providing higher torque and supporting greater radial loads, ensuring the right fit for demanding applications.",
                    ],
                  },
                ],
              },
              {
                type: "gray-shadow",
                paragraphPairs: [
                  {
                    title: "Differences among the three models",
                    paragraphs: [
                      "The motor and gearbox inside the 320L model are derived from the smaller diameter 220M model, providing a compact and efficient solution. These products are meant for applications operating under regular conditions, where loading and speed remain stable. They are commonly used in mobile and cross- belt conveyors for crushing and screening, but are not recommended for feed conveyors and extractors, where belt tension can fluctuate significantly.",
                      "As noted above, the maximum allowable radial load must always be respected. It is advisable to cover these pulleys with rubber to increase grip and help limit belt tension, improving overall system efficiency, as this coating helps minimize stress on the components.",
                    ],
                  },
                  {
                    title: "M for Medium-duty",
                    paragraphs: [
                      "While belt tension must always be calculated carefully, the 320M version is designed to support a higher maximum radial load compared to the light-duty version. Its components are built to withstand the tough and irregular working conditions typical of crushing and screening applications, as well as asphalt, cement and concrete plants. These pulleys provide enhanced durability and performance in more demanding environments, making them suitable for a wide range of industrial bulk handling applications.",
                    ],
                  },
                  {
                    title: "H for Heavy-duty",
                    paragraphs: [
                      "Heavy-duty 320H motorized pulleys are engineered to handle heavy and irregular loads in extreme conditions. They provide the power required for applications that demand low speeds combined with high torque. These pulleys are ideal for the most challenging environments such as mining, recycling, and heavy construction sectors, where reliability under harsh conditions is critical.",
                    ],
                  },
                ],
              },
            ],
            additionalData: [
              {
                title: "Main Features",
                subData: [
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Compactness of Highcon motorized pulleys",

                    description:
                      "The entire drive system - composed of motor, gearbox and bearing - is enclosed within the pulley shell, creating a space-saving structure and a self-contained design. This compact pulley reduces the overall size of the drive unit by eliminating the need for external elements. It also simplifies installation and maintenance, making it ideal for applications in limited places.",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title:
                      "Balanced weight distribution inside the all-in-one structure",
                    description:
                      "Since the motor, gearbox, and bearings are integrated within the pulley shell, the weight of the motorized pulley is evenly distributed along the conveyor frame. This distribution minimizes stress on individual components and reduces vibration, while improving, at the same time, stability and alignment under heavy loading conditions. The results is lower maintenance requirements and an extended lifespan of the conveyor system.",
                  },
                  {
                    Icon: (props) => <Wrench {...props} />,
                    title: "Resistance against external influences",

                    description:
                      "The sealed steel shell protects and shields the internal components from external factors such as dust, moisture, abrasive materials and chemicals. This shielding enhances the durability and reliability of the motorized pulley, ensuring consistent performance even in harsh industrial environments. By preventing contamination and corrosion, the pulley requires less maintenance over time.",
                  },
                ],
              },
            ],
          },
          {
            id: "motorized-pulley-400m-400h",
            Component: IdlersPulleysProductDetailPage,
            title: "Motorized Pulleys 400M & 400H",
            shortDescription:
              "Versatile Power Solutions for Medium & Heavy-Duty Bulk Handling",
            heroData: {
              title: "Motorized Pulleys 400M & 400H",
              subtitle:
                "Versatile Power Solutions for Medium & Heavy-Duty Bulk Handling",
              image: {
                src: Images?.MotorizedPulleys400M400H,
                alt: "",
              },
            },
            image: {
              src: Images?.MotorizedPulleys400M400H1,
              alt: "",
            },
            detailPageContent: [
              {
                type: "white-bordered",
                paragraphPairs: [
                  {
                    title: "Motorized Pulleys 400M & 400H, Ø400 mm",
                    paragraphs: [
                      "Highcon range of motorized pulleys for bulk handling applications provides two different loading options in the 400 mm diameter:",
                    ],
                  },
                  {
                    title: "",
                    list: ["M for Medium-duty", "H for Heavy-duty"],
                  },
                  {
                    title: "",
                    paragraphs: [
                      "Understanding the differences between models and types is essential when selecting the most suitable solution, starting with the estimated belt tension. For optimal performance and safety, the actual radial load must always remain below the maximum allowable limit.",
                      "Special care should be taken when using multiply thick, heavy or large belts as they can generate excessive belt tension, putting stress on the system and reducing performance. If the selected pulley diameter cannot achieve the required tension for your specific application, it is advisable to choose a larger diameter to maintain belt integrity, ensure proper functionality and prevent failure.",
                    ],
                  },
                ],
              },
              {
                type: "gray-shadow",
                paragraphPairs: [
                  {
                    title:
                      "Different options for different demanding applications",
                    paragraphs: [
                      "The internal components of 400M motorized pulleys are engineered to withstand tough, irregular and extreme working conditions. They are commonly used in grain storage facilities, cement plants, steel mills and fertilizer processing sites, as well as they can provide an excellent solution for heavy mobile crushing and screening applications. These pulleys deliver reliable performance and maintain sufficient belt tension in demanding environments where material consistency and operating conditions can vary widely.",
                    ],
                  },
                  {
                    title: "H for Heavy-duty",
                    paragraphs: [
                      "The design of these products features a solid 3-stage gearbox created to deliver the necessary torque for low-speed and and high-power performance, making them ideal for extremely challenging applications.",
                      "The heavy-duty and solid construction allows the pulley to handle irregular bulk loads and materials under extremely harsh and brutal conditions without compromising durability, efficiency or overall performance. These pulleys ensure smooth conveyor operation even in challanging conditions, becoming an ideal choice for applications in demanding industrial settings, such as mining sites, recycling plants, port terminals and heavy-duty material handling systems, where maximum strength and reliability are essential.",
                      "Both 400M and 400H models are designed to perform reliably in tough and irregular operating conditions. By combining advanced engineering with integrated components, they reduce maintenance, save space, and improve overall conveyor system efficiency. Their sealed design protects internal parts, extending their lifespan and maintaining operational safety, while also contributing to safer operation by containing moving parts safely inside the pulley.",
                    ],
                  },
                ],
              },
            ],
            additionalData: [
              {
                title: "Main Features",
                subData: [
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Compact structure",

                    description:
                      "Motorized pulleys 400M & 400H feature a design that integrates the drive unit, bearings, and gearbox directly within the pulley shell, eliminating the need for external drive components such as chains, gears, or couplings. This compact design saves valuable space in conveyor systems, simplifies installation, reduces mechanical complexity, and makes the product ideal for applications in confined areas.",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title: "Equal weight distribution",
                    description:
                      "Since all the components of the all-in-one pulley are enclosed within the shell, the total weight is evenly distributed along the structure. This balance minimizes stress that could cause wear or misalignment on the conveyor framework. In addition, balanced operation ensures smoother material handling, reduces maintenance downtime, and improves overall productivity.",
                  },
                  {
                    Icon: (props) => <Wrench {...props} />,
                    title: "Resistance against external influences",

                    description:
                      "Designed for durability, the shell of these motorized pulleys protects all internal components even from harsh industrial environments, including extreme temperatures, chemicals and moisture risk. This sealed construction reduces the risk of mechanical failure because of environmental exposure and eliminates the need for frequent cleaning or lubrication, ensuring consistent performance regardless of external influences or working conditions.",
                  },
                ],
              },
            ],
          },
          {
            id: "motorized-pulley-500h",
            Component: IdlersPulleysProductDetailPage,
            title: "Motorized Pulleys 500H",
            shortDescription:
              "Heavy-Duty Power for Demanding Bulk Handling Applications",
            heroData: {
              title: "Motorized Pulleys 500H",
              subtitle:
                "Heavy-Duty Power for Demanding Bulk Handling Applications",
              image: {
                src: Images?.MotorizedPulleys500H,
                alt: "",
              },
            },
            image: {
              src: Images?.MotorizedPulleys500H1,
              alt: "",
            },
            detailPageContent: [
              {
                type: "white-bordered",
                paragraphPairs: [
                  {
                    title: "Motorized Pulleys 500H, Ø 500 mm",
                    paragraphs: [
                      "Motorized pulleys 500H are designed to meet the most demanding requirements inside the bulk handling conveyor market. They are specifically engineered for applications where belt conveyors require exceptionally large pulley diameters to ensure efficient and reliable power transmission. These pulleys are widely used in industries such as grain storage, cement production, steel processing, fertilizer handling, heavy mobile crushing & screening equipment.",
                      "Each of these industries operates under extreme conditions — including high dust levels, variable loads, and continuous operation — demanding equipment that can withstand mechanical stress without sacrificing performance. The robust construction and high torque capacity of Highcon 500H model make it ideally suited for handling heavy loads and performing reliably in harsh working environments.",
                      "It is crucial to accurately calculate the belt tension (T1+T2) to determine the required torque and power to move the conveyor efficiently and to ensure optimal performance. If the estimated belt tension exceeds the maximum permissible radial load or if thick, heavy or large belts are used – resulting in higher belt tension - Highcon offers alternative series of motorized pulleys. Every conveyor system must be equipped with the appropriate pulley to maintain safe and reliable operation.",
                    ],
                  },
                  {
                    title: "H means Heavy-duty motorized pulleys",
                    paragraphs: [
                      "500H model is designed to withstand the heaviest application demands: its mechanical strength and durability define the entire construction of this pulley. Its internal components - including the gearbox and the matching bearings - are extremely strong and designed to operate efficiently even under irregular, tough and extreme conditions. This heavy-duty construction ensures continuous, trouble-free service even in harsh environments where conventional drive systems may fail.",
                      "Consequently, this model can combine high mechanical efficiency, minimal maintenance, and superior environmental protection in a single sealed unit which is a powerful, space-saving, and reliable solution for the most challenging bulk-handling applications across multiple industries.",
                    ],
                  },
                ],
              },
            ],
            additionalData: [
              {
                title: "Main Features",
                subData: [
                  {
                    Icon: (props) => <Zap {...props} />,
                    title:
                      "Integrated and compact construction of 500H motorized pulleys",

                    description:
                      "Since all drive components – motor, gearbox and bearings- are integrated within the pulley shelf, this compact design replaces traditional setups that require external components and additional equipment. It is able to save valuable installation space while simplifying the assembly process as there are no additional elements to mount or protect, making the installation phase faster, simpler and cleaner. By minimizing the overall footprint, these pulleys make conveyor setup more streamlined and adaptable to environments where space constraints are critical.",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title:
                      "Equal weight distribution along the entire structure",
                    description:
                      "The integrated structure which characterizes the motorized pulley provides a perfectly balanced organization of the components in terms of weight and forces distribution along the pulley’s axis: this feature minimizes the potential alignment issues. Clearly, a balanced structure prevents excessive radial load on the single components minimizing vibration and mechanical stress: over time, this leads to a noticeable increase in system longevity and a reduction in maintenance costs.",
                  },
                  {
                    Icon: (props) => <Wrench {...props} />,
                    title:
                      "Enhanced durability and resistance against harsh environments",

                    description:
                      "The components of the all-in-one product are made from high-grade materials and designed to resist contamination from dirt, dust, water, corrosion, and abrasion. The fully sealed and permanently lubricated unit requires no external maintenance and ensures continuous protection of internal components against contaminants, even in extremely wet environments.",
                  },
                ],
              },
            ],
          },
          {
            id: "motorized-pulley-630m-630h",
            Component: IdlersPulleysProductDetailPage,
            title: "Motorized Pulley 630M & 630H",
            shortDescription:
              "Meant for heavy applications with tough, irregular, extreme and brutal working conditions",
            heroData: {
              title: "Motorized Pulley 630M & 630H",
              subtitle:
                "Meant for heavy applications with tough, irregular, extreme and brutal working conditions",
              image: {
                src: Images?.MotorizedPulley630M630H,
                alt: "",
              },
            },
            image: {
              src: Images?.MotorizedPulley630M630H1,
              alt: "",
            },
            detailPageContent: [
              {
                type: "white-bordered",
                paragraphPairs: [
                  {
                    title: "Motorized Pulley 630M & 630H",
                    paragraphs: [
                      "To match your requirements in diameter 630 mm, our product range offers two different loading performances for your BULK applications:",
                    ],
                  },
                  {
                    title: "",
                    list: ["630M", "630H"],
                  },
                  {
                    title: "",
                    paragraphs: [
                      "You have a choice.",
                      "Therefore, it is important to notice the differences to choose the right type of pulley for the right application based on estimated belt tension (radial load) = T1+T2. The actual radial load MUST be LESS than the max. allowable radial load shown in this catalogue.",
                      "Be aware of increased belt tensions using multi-ply thick heavy belts and/or larger belt widths.",
                      "If you do not find the belt tension needed in this diameter, you might have to choose a larger one.",
                      "Except for the fact that motor/gearbox of 630M originates from 500H, both types – 630M and 630H – are designed for HEAVY DUTY applications. They provide the necessary torque and belt pull.",
                      "Both pulleys are designed for tough, irregular, extreme and brutal working conditions.",
                    ],
                  },
                ],
              },
            ],
            additionalData: [
              {
                title: "Main Features",
                subData: [
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Compact",

                    description: "",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title: "Equal weight distribution",
                    description: "",
                  },
                  {
                    Icon: (props) => <Wrench {...props} />,
                    title: "Resistance against external influences",

                    description: "",
                  },
                ],
              },
            ],
          },
          {
            id: "motorized-pulley-800m-800h-800hd",
            Component: IdlersPulleysProductDetailPage,
            title: "Motorized Pulley 800M, 800H & 800HD",
            shortDescription:
              "Heavy Duty Power for Tough Bulk Handling Applications",
            heroData: {
              title: "Motorized Pulley 800M, 800H & 800HD",
              subtitle: "Heavy Duty Power for Tough Bulk Handling Applications",
              image: {
                src: Images?.MotorizedPulley800M800H800HD,
                alt: "",
              },
            },
            image: {
              src: Images?.MotorizedPulley800M800H800HD1,
              alt: "",
            },
            detailPageContent: [
              {
                type: "white-bordered",
                paragraphPairs: [
                  {
                    title: "Motorized Pulley 800M, 800H & 800HD, Ø 800 mm",
                    paragraphs: [
                      "To match your requirements in diameter 800 mm, our product range offers two different loading performances for your BULK applications:",
                    ],
                  },
                  {
                    title: "",
                    list: ["800M, 800H", "800HD"],
                  },
                  {
                    title: "",
                    paragraphs: [
                      "You have a choice.",
                      "Therefore, it is important to notice the differences to choose the right type of pulley for the right application based on estimated belt tension (radial load) = T1+T2. The actual radial load MUST be LESS than the max. allowable radial load shown in this catalogue.",
                      "Be aware of increased belt tensions using multi-ply thick heavy belts and/or larger belt widths.",
                      "Motor/gearbox of 800M has its origin from 630H.",
                      "However, 800H remains top of the range as to design, reinforcement and strength.",
                      "800M, H and 800HD are designed for HEAVY DUTY applications and they provide the necessary torque, belt pull and allowable belt tension in order to handle the toughest, irregular & most extreme and brutal working conditions.",
                    ],
                  },
                ],
              },
            ],
            additionalData: [
              {
                title: "Main Features",
                subData: [
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Compact",

                    description: "",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title: "Equal weight distribution",
                    description: "",
                  },
                  {
                    Icon: (props) => <Wrench {...props} />,
                    title: "Resistance against external influences",

                    description: "",
                  },
                ],
              },
            ],
          },
          {
            id: "motorized-pulley-1000h-1000hd",
            Component: IdlersPulleysProductDetailPage,
            title: "Motorized Pulley 1000H & 1000HD",
            shortDescription:
              "Highly developed reliable and strong drive with an outstanding power range of 160 – 250 kW",
            heroData: {
              title: "Motorized Pulley 1000H & 1000HD",
              subtitle:
                "Highly developed reliable and strong drive with an outstanding power range of 160 – 250 kW",
              image: {
                src: Images?.MotorizedPulley1000H1000HD,
                alt: "",
              },
            },
            image: {
              src: Images?.MotorizedPulley1000H1000HD1,
              alt: "",
            },
            detailPageContent: [
              {
                type: "white-bordered",
                paragraphPairs: [
                  {
                    title:
                      "Power and Durability for Extreme Industrial Conditions",
                    paragraphs: [
                      "The Highcon motorized pulley type 1000HD is a highly developed reliable and strong drive with an outstanding power range of 160 – 250 kW.",
                      "It is able to take a high radial load and robust in design.",
                      "Therefore it is especially developed for use in:",
                    ],
                  },
                  {
                    title: "",
                    list: [
                      "Mining conveyors,",
                      "Excavators,",
                      "Stackers,",
                      "Reclaimers",
                      "Heavy loaded conveyors in gravel and sand.",
                    ],
                  },
                  {
                    title: "",
                    paragraphs: [
                      "The motorized pulley 1000HD is designed for tough, irregular, extreme and brutal working condition.",
                      "The compact design allows the design engineers to save material and cost when developing the conveyor.",
                      "A high protection rate connected with the standard labyrinth sealing system it can be used in all ambient conditions.",
                    ],
                  },
                ],
              },
            ],
            additionalData: [
              {
                title: "Main Features",
                subData: [
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Compact",

                    description: "",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title: "Equal weight distribution",
                    description: "",
                  },
                  {
                    Icon: (props) => <Wrench {...props} />,
                    title: "Resistance against external influences",

                    description: "",
                  },
                ],
              },
            ],
          },
          {
            id: "monitoring",
            Component: IdlersPulleysProductDetailPage,
            title: "Monitoring System",
            shortDescription:
              "Revolutionary remote monitoring system for conveyor components",
            heroData: {
              title: "Monitoring System",
              subtitle:
                "Revolutionary remote monitoring system for conveyor components",
              image: {
                src: Images?.RMSMonitoring,
                alt: "",
              },
            },
            image: {
              src: Images?.RMSMonitoring1,
              alt: "",
            },
            detailPageContent: [
              {
                type: "white-bordered",
                title: "Stay ahead with the ability to make timely decisions",
                paragraphs: [
                  "Continuous real time surveillance of conveyor components is essential for preventing unexpected breakdowns and minimizing costly downtime. In modern conveying systems, even a single component failure can escalate from a minor issue to a severe operational disruption. To stay ahead, operators need a dependable and user-friendly monitoring system for conveyor components that can detect early signs of malfunction and support timely decision-making. The Highcon Monitoring System delivers exactly that—a revolutionary remote-monitoring solution designed to enhance the safety, efficiency, and reliability of conveyor installations.",
                ],
              },
              {
                type: "gray-shadow",
                title:
                  "Intelligent Insights for Optimized Maintenance and Productivity",
                paragraphs: [
                  "MS equips belt conveyors with an integrated, intelligent platform capable of identifying potential failures long before they become critical.",
                  "By continuously collecting data and presenting clear, actionable information on the condition of key components, this advanced monitoring system for conveyor components empowers users to plan maintenance proactively, extend component lifespan, and reduce downtime.",
                  "Focused on simplicity, accuracy, and operational value, the Monitoring System (MS) sets a new benchmark in proactive conveyor management—helping businesses operate smoother, safer, and more efficiently than ever.",
                ],
              },
            ],
            additionalData: [
              {
                title: "Main Features",
                subData: [
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Data: diagnostic and status report",

                    description:
                      "Provides continuous data collection and detailed diagnostic insights, giving operators a clear overview of the system’s health and enabling faster, more accurate decision-making. Reports include component condition, operating trends, and early signs of potential issues.",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title:
                      "Vital parameters under control: temperature, vibration, current and speed",
                    description:
                      "Constantly monitors the most critical indicators that influence conveyor performance and component life. By tracking temperature fluctuations, vibration patterns, electrical load, and rotational speed, the system helps detect abnormal behaviour before it leads to a failure.",
                  },
                  {
                    Icon: (props) => <Wrench {...props} />,
                    title:
                      "Available for Highcon Motorized Pulleys: 500, 630, 800, 1000",

                    description:
                      "Fully compatible with the most widely used Highcon Motorized Pulley sizes, ensuring easy integration into existing installations. This flexibility allows operators to adopt a unified monitoring solution across multiple conveyor lines and applications.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "pulleys",
        Component: IdlersPulleysDetailPage,
        title: "Pulleys",
        shortDescription:
          "From design to production: a wide and complete selection of high-quality belt conveyor pulleys to ensure system operation",
        image: {
          src: Images?.Pulleys,
          alt: "pulleys",
        },
        heroData: {
          image: { src: Images?.Pulleys, alt: "" },
          title: "Pulleys",
        },
        detailPageContent: [
          {
            type: "white-bordered",
            title:
              "Belt conveyor pulleys designed for heavy-duty bulk handling",
            paragraphs: [
              "As essential mechanical components, belt conveyor pulleys are designated to drive, redirect, track or provide tension to the belt, playing a key role in the performance of bulk material handling systems. They need to be precisely engineered to bear heavy loads and withstand harsh working conditions while driving smooth, cotinuous operations. Highcon offers a complete and versatile range of products, including tailored solutions to meet the specific mechanical and structural needs of each conveyor layout ensuring efficiency, safety and durability in every application.",
            ],
          },
          {
            type: "dark",
            title:
              "Precision-engineered conveyor pulleys for long-lasting reliability and performance",
            paragraphs: [
              "Highcon uses materials of the highest quality and employes advanced technology and manufacturing techniques in the production process of products. Our belt conveyor pulleys are developed using a high degree of security in the dimensioning of the flanges, sizing and penetration of the welding and assembly between shell, flange and hub. The shaft is assembled by friction lock clamping units which is the most used and reliable solution to get the best strenght, perfect centering, reliability and possibility of eventual future disassembly. Together with the application of the Quality Assurance system certified to ISO 9001, all these characteristics contribute to the production of high-quality products offering a dependable and long-life performance in the application field resulting in appreciably reduced maintenance costs. ",
            ],
          },
          {
            type: "gray-shadow",
            title: "Tailored construction for any conveyor layout",
            paragraphs: [
              "The complete Highcon production of belt conveyor pulleys covers all these basic functions needed to make the system run, since it includes drive pulleys, return pulleys, bend pulleys, idler pulleys and snub pulleys which are specifically designed according to their role and position in the belt conveyor layout. Basically, our solutions address bulk handling applications where heavy-duty conveyors are required to transport big quantities and loads of various bulk materials. Then, they are dimensioned depending on the specific features of each conveyor and application, such as belt dimensions, stress potential, distribution of load and matching performance of components and their materials.",
            ],
          },
        ],
        layerTwoProducts: [
          {
            id: "drive-pulleys",
            Component: IdlersPulleysProductDetailPage,
            title: "Drive pulleys",
            shortDescription: "Versatility in motion, durability in action",
            heroData: {
              title: "Drive pulleys",
              description: "Versatility in motion, durability in action",
              image: {
                src: Images?.Drivepulleys,
                alt: "Drive pulleys",
              },
            },
            image: {
              src: Images?.Drivepulleys,
              alt: "Drive pulleys",
            },
            detailPageContent: [
              {
                type: "white-bordered",
                title: "Drive pulleys, durability in action",
                paragraphs: [
                  "Drum pulleys are one of the most important parts that comprise an entire conveyor system, due to the fact that they actually drive the conveyor belt: their role is not only to support the belt but also to guide it.",
                  "These components are very adaptable but also critical elements of a conveyor system as they impact both its performance and safety. Thanks to their versatility, they can serve multiple roles, based on their design, specifications and application needs. They can function as drive or head pulleys to power the movement of the belt, head or tail pulleys located at the end of the conveyor depending on the constructional needs, bend pulleys to change the direction of the belt, snub pulleys to reduce the belt tension while also improving traction or take-up pulleys to provide and maintain the belt with the proper tension.",
                ],
              },
              {
                type: "gray-shadow",
                title:
                  "Enhancing conveyor system efficiency with reliable drum pulleys",
                paragraphs: [
                  "These components are critical for managing belt tension, adjusting slack: drive pulleys help maintain the balance regarding tension and correct slack ensuring smooth and, above all, safe conveyor operation without misalignment. On the other part, an unbalanced tension can lead to inefficiency and safety problems. Moreover, ensuring a long lifespan for drum pulleys is crucial for both cost-effective material handling and high-performance production: regular maintainability plays a key role to the lifecycle of the pulleys and their overall performance. These products are sensitive to poor maintenance practices so underperformance, failure and other operational issues of these products are greatly influenced by the manufacturer's design procedures, manufacturing processes, and the correct application of the pulleys. Regular and correct maintenance practices are crucial to enhance the reliability of the product as well as quality control and material selection.",
                  "Therefore, it is an essential decision to choose high-quality pulleys able to run smooth and efficient operation of a conveyor system.",
                ],
              },
            ],

            additionalData: [
              {
                title: "Main Features",
                subData: [
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Versatility of drive pulleys",

                    description:
                      "Drum pulleys can be fully customised to fit specific operational needs and technical requirements. Consequently, they are able to perform various functions depending on their design, size and application: Thanks to their flexibility they operate reliably under different conditions",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title: "Belt tension and slack management",
                    description:
                      "The components provide an optimal solution for regulating belt tension, adjusting slack, and maintaining smooth, uninterrupted operation of the conveyor system ",
                  },
                  {
                    Icon: (props) => <Wrench {...props} />,
                    title:
                      "Reliability and durability of the entire conveyor system",
                    description:
                      "The reliability and longevity of drive pulleys are influenced by manufacturing processes, but mostly by correct conveyor installation, application and maintenance. If these actions are carried on properly, they will lead to an optimal performance of the product, reducing operational issues and ensuring a safe conveyor system",
                  },
                ],
              },
            ],
          },
          {
            id: "incorporated-bearings",
            Component: IdlersPulleysProductDetailPage,
            title: "Incorporated bearings",
            shortDescription: "Simple design, reliable performance",
            heroData: {
              title: "Incorporated bearings",
              description: "Simple design, reliable performance",
              image: {
                src: Images?.Incorporatedbearings,
                alt: "Incorporated bearings",
              },
            },
            image: {
              src: Images?.Incorporatedbearings,
              alt: "Incorporated bearings",
            },
            detailPageContent: [
              {
                type: "white-bordered",
                title:
                  "Compact and Efficient Tail Pulleys with TDV Tension Units for Small to Medium Conveyors",
                paragraphs: [
                  "Essentially a simplified construction, using radial ball bearings in a moveable housing designed into the pulley itself. This system lends itself to be used together with the screw tensioning unit. Normally used as tail pulleys for small or medium loaded conveyors, and naturally only for idler type pulleys (not driven). This type of pulley and tension units TDV are suggested for use on belt conveyors length not up to 50 m.",
                ],
              },
            ],

            additionalData: [
              {
                title: "Main Features",
                subData: [
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Simplified construction",

                    description:
                      "Utilizes a simplified design incorporating radial ball bearings in a movable housing integrated into the pulley itself",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title: "Compatibility with screw tensioning unit",
                    description:
                      "The system is designed to be used together with a screw tensioning unit",
                  },
                  {
                    Icon: (props) => <Wrench {...props} />,
                    title: "Suitable for small and medium-sized conveyors",

                    description:
                      "This type of pulley is intended for use on conveyors with small or medium loads, with a belt length of up to 50 meters",
                  },
                ],
              },
            ],
          },
          {
            id: "wing-pulleys",
            Component: IdlersPulleysProductDetailPage,
            title: "Wing pulleys",
            shortDescription: "Boost efficiency, reduce maintenance",
            heroData: {
              title: "Wing pulleys",
              description: "Boost efficiency, reduce maintenance",
              image: {
                src: Images?.Wingpulleys,
                alt: "Wing pulleys",
              },
            },
            image: {
              src: Images?.Wingpulleys,
              alt: "Wing pulleys",
            },
            detailPageContent: [
              {
                type: "white-bordered",
                title:
                  "Boost Conveyor Performance and Efficiency with Wing Pulleys",
                paragraphs: [
                  "Wing pulleys are designed to enhance the performance and efficiency of conveyor systems. Their unique construction features outward-extending wings, which play a crucial role in maintaining the cleanliness and functionality of the conveyor belt. Wing pulleys are an effective solution for improving the reliability and efficiency of conveyor systems. Their design not only enhances performance but also contributes to lower maintenance costs, making them a valuable component in many industrial applications.",
                ],
              },
            ],

            additionalData: [
              {
                title: "Main Features",
                subData: [
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Construction with outward-extending wings",

                    description:
                      "Wing pulleys feature outward-extending wings that play a crucial role in maintaining the cleanliness and functionality of the conveyor belt",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title: "Enhanced efficiency and performance",
                    description:
                      "The design of wing pulleys improves the overall performance of the conveyor system, increasing reliability",
                  },
                  {
                    Icon: (props) => <Wrench {...props} />,
                    title: "Reduced maintenance costs",

                    description:
                      "The innovative design of wing pulleys contributes to lower maintenance costs, making them a cost-effective solution in industrial applications",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "cleaners",
        title: "Cleaners",
        Component: IdlersPulleysDetailPage,
        shortDescription:
          "Reduction of maintenance and increased productivity by extending the lifespan of the belt",
        heroData: {
          title: "Cleaners",
          description:
            "Reduction of maintenance and increased productivity by extending the lifespan of the belt",
          image: {
            src: Images?.Cleaners,
            alt: "Cleaners",
          },
        },
        detailPageContent: [
          {
            type: "white-bordered",
            title:
              "Efficient Conveyor Belt Cleaning Systems: Boosting Productivity and Reducing Maintenance",
            paragraphs: [
              "Conveyor belt cleaning systems are considered more intensely these days, since they reduce the maintenance services on conveyors handling wet or sticky material and they allow higher or maximum productivity.",
              "There are several types of cleaning equipment.",
              "The most used for ease of application are those with scraper blades mounted on rubber flexible supports.",
            ],
          },
        ],
        layerTwoProducts: [
          {
            id: "cleaners-polyurethane-blades",
            Component: IdlersPulleysProductDetailPage,
            title: "Cleaners Polyurethane Blades",
            shortDescription: "Scrapers with blades in polyurethane",
            heroData: {
              title: "Cleaners Polyurethane Blades",
              description: "Scrapers with blades in polyurethane",
              image: {
                src: Images?.CleanersPolyurethaneBlades,
                alt: "Cleaners Polyurethane Blades",
              },
            },
            image: {
              src: Images?.CleanersPolyurethaneBlades,
              alt: "Cleaners Polyurethane Blades",
            },
            detailPageContent: [
              {
                type: "white-bordered",
                paragraphPairs: [
                  {
                    title:
                      "Type PU-83 Simple Pre-scraper with single polyurethane blade",
                    paragraphs: [
                      "Position: Tangential for pulleys Ø 220-1000 mm",
                      "For easy to medium cleaning",
                      "Typically a fi rst scraper for an end user",
                      "Also used by many OEM as a standard scraper",
                      "Easy to replace the scraper blade without tools",
                      "The scraper must not be fitted to chevron belts or belts with mechanical joints",
                      "For materials: Sand, Gravel, Stone, Saw dust, garbage, soil",
                    ],
                  },
                  {
                    title:
                      "Type PU-29 Pre-scraper with single polyurethane blade",
                    paragraphs: [
                      "Position: Tangential for pulleys Ø 320-800 mm.",
                      "For BW 400-1600. (B-W 1000 the scraper is supplied with dual lever arms, B-W 1600 the scraper is supplied with Holder HD), max speed 5,0 m/s, also reversible.",
                      "Design is patented.",
                      "Easy to service and maintain. Easy to replace the scraper blade without tools.",
                      "All steel parts are electro - galvanized as standard.",
                      "For materials: Gravel, limestone, crushed stone, iron ore, cement.",
                    ],
                  },
                  {
                    title:
                      "Type PU-89 Heavy Pre-scraper single strong and thick polyurethane blade",
                    paragraphs: [
                      "Position: Tangential for big pulleys Ø 400-1000 mm",
                      "For BW 650-1400, max speed 6 m/s, also reversible",
                      "For heavy cleaning",
                      "Easy to replace the scraper blade without tools",
                      "The scraper must not be fitted to chevron belts or belts with mechanical joints",
                      "For materials: Gravel, limestone, crushed stone, iron ore, cement",
                    ],
                  },
                  {
                    title:
                      "Type PU-91 Pre-scraper with segment polyurethane blades",
                    paragraphs: [
                      "Position: Tangential for pulleys Ø 200-630 mm",
                      "For BW 400-2000, max speed 3.5* m/s, also reversible",
                      "Medium to heavy cleaning",
                      "Accurate cleaning due to flexible multi sectored blades",
                      "Easy to service and maintain",
                      "The scraper must not be fitted to chevron belts or belts with mechanical joints",
                      "For materials: Sand, Gravel, crushed stone, wet and sticky material",
                      "* PU 91 can be used at belt speeds up to 5 m/s with certain modifications. Contact your Highcon representative",
                    ],
                  },
                  {
                    title: "Type PU-92 Secondary scraper",
                    paragraphs: [
                      "Single strong and thick polyurethane blade and pre-tensioning device",
                      "Position: under the return belt 30-100 mm away from the head pulley",
                      "For BW 400-2000, max speed 3.5** m/s, single direction belts",
                      "For medium industry with stringent cleaning requirements",
                      "Also in combination with a pre-scraper for a max cleaning effect",
                      "Easy to service and maintain",
                      "Can be fitted with tungsten-carbide blades",
                      "The scraper must not be fitted to chevron belts or belts with mechanical joints",
                      "For materials: Gravel, limestone, crushed stone, iron ore, cement and others",
                      "** PU 92 can be used at belt speeds up to 4,5 m/s with certain modifications. Contact your Highcon representative",
                    ],
                  },
                  {
                    title: "Type PU-88 Plough scraper",
                    paragraphs: [
                      "Self aligning steel frame and 2 exchangeable PU-scraper strips.",
                      "Position: on the return belt before the tail pulley For BW 400-1800, max speed 4.5 m/s. The purpose of the plough is to remove loose material from the return run of the belt.",
                    ],
                  },
                ],
              },
            ],
            additionalData: [
              {
                title: "Main Features",
                subData: [
                  {
                    Icon: (props) => <Zap {...props} />,
                    title:
                      "Hard steel blade and polyurethane cleaners for single and reversible belts",

                    description:
                      "These polyurethane cleaners are designed for both single and reversible belts, offering reliable and efficient cleaning performance. Their robust construction ensures durability in various industrial environments",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title:
                      "Highly flexible and efficient design scrapers, up to 98% cleaning rate when coupled",
                    description:
                      "These scrapers feature a highly flexible and efficient design, achieving up to 98% cleaning efficiency when properly paired. They are ideal for maintaining clean belts and optimizing operational performance",
                  },
                  {
                    Icon: (props) => <Wrench {...props} />,
                    title:
                      "Spare parts and harder material blade options allowing long lasting",

                    description:
                      "The cleaners come with spare parts and offer blades made from harder materials, ensuring long-lasting durability and consistent performance even in challenging conditions",
                  },
                ],
              },
            ],
          },
          {
            id: "cleaners-tungsten-carbide",
            Component: IdlersPulleysProductDetailPage,
            title: "Cleaners Tungsten Carbide",
            shortDescription: "Effortless cleaning, lower costs",
            heroData: {
              title: "Cleaners Tungsten Carbide",
              description: "Effortless cleaning, lower costs",
              image: {
                src: Images?.CleanersTungstenCarbide,
                alt: "Cleaners Tungsten Carbide",
              },
            },
            image: {
              src: Images?.CleanersTungstenCarbide,
              alt: "Cleaners Tungsten Carbide",
            },
            detailPageContent: [
              {
                type: "white-bordered",
                paragraphPairs: [
                  {
                    title:
                      "Maximize Efficiency with Highcon's Advanced Belt Cleaning Solutions",
                    paragraphs: [
                      "The problem of conveyed material adhering to the conveyor belt, occurs frequently with wet or sticky material, resulting in frequent downtime for maintenance, and clean up, with consequent loss of production.",
                      "The problems of belt cleaning have increased in parallel with the development of conveyors of ever increasing lengths, speed and belts widths, necessary to satisfy the need to maximise load capacities.",
                      "Therefore, the use of cleaning equipment has become an indispensable requirement to assure general plant efficiency and to reduce the periods of service needed for maintenance.",
                      "There has been a notable development of this equipment in recent time for differing reasons: prolonging the life of the conveyor limiting the deterioration of the belt, improving the energy efficiency of the installation, reducing loss of material thereby increasing the load capacity, eliminating a major cause of wear on the return rollers.",
                    ],
                  },
                  {
                    title: "",
                    list: [
                      "Belt cleaners series P for uni-directional belts",
                      "Belt cleaners series R for reversible belts",
                      "Belt cleaners series H for reversible and uni-directional belts for tangential applications",
                      "Belt cleaners series D patented for single directional belts",
                      "Simple plough cleaners",
                    ],
                  },
                ],
              },
              {
                type: "dark",
                title: "Belt Cleaners Series P for Single Directional Belts",
                paragraphs: [
                  "Characteristics and Indications of Use",
                  "The belt cleaners of series P are characterized by scraper components (TIPS) attached to flexible and highly resistant rubber elements mounted on a tubular frame. These supports, serving as anchors for the scrapers, strike the right balance between the frictional force and the necessary force to remove residual scale from the belt surface.",
                  "To function correctly, the pressure of the blade application is very low, but it can be controlled by adjusting an opposing screw from the moveable support to the support frame",
                  "Thanks to their simple construction, these cleaners are very easy to install and maintain, with minimal service costs. The high quality of the materials used and the robustness of the components, designed to withstand overload conditions, ensure a long and efficient operational life.",
                  "Special versions can be provided for food or chemical environments in addition to the standard types.",
                ],
              },
              {
                type: "gray-shadow",
                title: "Belt Cleaners Series R for Reversible Belts",
                paragraphs: [
                  "Characteristics and Indications of Use",
                  "The belt cleaners of series R also use a tubular member, with scraper blade components mounted on its structure and fixed between intermediate rubber supports, similar to series P. The rubber components are cleverly designed to allow the scraper blades to flex in both directions, without damaging the belt in case of unforeseen pressures.",
                  "The scraper blade is positioned perpendicular to the belt, differing from the series P cleaner. The correct installation and precise regulation of the belt cleaner are crucial for efficient system function, with detailed instructions provided in an accompanying booklet.",
                ],
              },
              {
                type: "white-bordered",
                title:
                  "Belt Cleaners Series H for Reversible and Single Directional Belts for Tangential Applications",
                paragraphs: [
                  "Characteristics and Indications of Use",
                  "The belt cleaner series H shares similar characteristics with the preceding series, utilizing a tubular member. Multiple scraper blades are mounted on this structure and fixed via supporting arms, which are proportional in size to the diameter of the drum and ultimately anchored in rubber supports.",
                  "The design characteristics of the system allow for the use of extremely low functional pressure, precisely controlled by an appropriate regulating screw.",
                  "The belt cleaner operates with a tangential action and is applied to the external front part of the pulley. It effectively cleans the belt on the pulley using a perpendicular or square application.",
                  "The simplicity of the design in this series ensures excellent long-term performance, resulting in cost savings both in management and in the reduction of labor costs associated with maintenance.",
                  "It can be easily installed on the belt conveyor structure and is suitable for reversible, extendable, and other types of conveyors.",
                ],
              },
              {
                type: "dark",
                title:
                  "Belt Cleaners Series D Patented for Single Directional Belts",
                paragraphs: [
                  "Characteristics and Indications of Use",
                  "The cleaner type D represents a new technology. It consists of a carbon steel blade welded to a curved support, forming a unique scraper blade that is inserted into a robust structural arc mounted on special bearings. Although there is vertical adjustment, the system is under spring pressure, causing the curved structure to rotate as a whole. The blade pressure is stronger at the center, where there is typically the most residue to remove, and decreases towards the edges. This controlled pressure ensures the scraper is most effective in high-wear areas of the blade and belt.",
                  "The unique curved design prevents material buildup, maintaining efficient cleaning action. The scraper blade, the only component subject to wear, can be easily and quickly replaced without disassembling the scraper.",
                  "This universal belt cleaner is particularly recommended for high-speed single directional conveyor belts, especially when the conveyed material is very wet and sticky. Enhanced cleaning performance can be achieved by using this cleaner in conjunction with the series H cleaner.",
                ],
              },
              {
                type: "gray-shadow",
                title: "Belt Cleaners: Simple and Plough Types",
                paragraphs: [
                  "Characteristics and Indications of Use",
                  "The most economical cleaners feature a scraper made of anti-abrasive rubber. These cleaners are suitable for light belts where cost efficiency is crucial. They are recommended for belt widths ranging from 400 to 1200 mm.",
                ],
              },
              {
                type: "white-bordered",
                title: "Simple Belt Cleaner Type PLG",
                paragraphs: [
                  "The PLG cleaner consists of a steel structure housing a 15 mm thick anti-abrasive rubber blade (60 shore). Given the pressure exerted on the belt, this cleaner should ideally be installed during the initial setup of the conveyor system. The PLG cleaner is designed for belt widths of 400, 500, and 650 mm and should be installed near the drive drum.",
                ],
              },
              {
                type: "dark",
                paragraphPairs: [
                  {
                    title: "Belt Plough Cleaner Type VLG - VLP",
                    paragraphs: [
                      "The belt plough cleaner system is applied to the underside of the return belt, adjacent to the return drum. It effectively removes any residual material by diverting it with the “V” design before it reaches the belt's terminal drum.",
                    ],
                  },
                  {
                    title: "There are two models:",
                    list: [
                      "The standard VLG model",
                      "The VLP model with pressure regulation for heavy-duty applications, tailored to specific customer needs",
                    ],
                  },
                  {
                    title: "",
                    paragraphs: [
                      "The belt plough cleaner should be installed at the terminal end of the belt, near the return drum, with the plough positioned opposite to the direction of belt movement.",
                    ],
                  },
                ],
              },
            ],

            additionalData: [
              {
                title: "Main Features",
                subData: [
                  {
                    Icon: (props) => <Zap {...props} />,
                    title:
                      "Hard steel blade cleaners for single and reversible belts",

                    description:
                      "These cleaners feature durable hard steel blades, designed for both single and reversible belts. They ensure optimal cleaning performance and long-lasting durability in various industrial applications",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title:
                      "Highly flexible and efficient design scrapers, up to 98% cleaning rate when coupled",
                    description:
                      "These scrapers offer a highly flexible and efficient design, delivering up to 98% cleaning effectiveness when properly paired. They are ideal for keeping belts clean and maximizing operational efficiency",
                  },
                  {
                    Icon: (props) => <Wrench {...props} />,
                    title:
                      "Spare parts and harder material blade options allowing long lasting",

                    description:
                      "The cleaners come with spare parts and optional blades made from harder materials, ensuring extended service life and reliable performance even in demanding conditions",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "covers",
        Component: IdlersPulleysProductDetailPage,
        title: "Covers",
        heroData: {
          title: "Covers",
          description:
            "Steel and PVC covers for conveyor belt protection and to prevent powder dispersion",
          image: {
            src: Images?.Covers,
            alt: "Covers",
          },
        },
        detailPageContent: [
          {
            type: "white-bordered",
            title:
              "Protecting Belt Conveyors: Essential Covers for Optimal Performance and Compliance",
            paragraphs: [
              "In the project design of a belt conveyor, after having defined the components of primary importance, it is important to consider other accessories such as covers for the conveyor.",
              "The necessity to protect belt conveyors may arise from the weather, from the volatile characteristics of the conveyed material, or from the type of works plant, and also from European norms that require the covering of the total length of a belt conveyor in the open.",
              "For example rain may create a problem of belt slip on the drums causing a tracking problem. Extreme temperatures may cause the plant to mal-function or stop, whilst very strong wind may move the conveyor belt off its natural position causing serious problems to the business or loss of conveyed material.",
            ],
          },
          {
            type: "dark",
            paragraphPairs: [
              {
                title: "Covers series CPTA in steel",
                list: [
                  "Half circle with straight side",
                  "Half circle without straight side",
                  "45° inspection door",
                  "Dual full opening covers",
                  "Removable covers",
                  "Ventilated covers",
                  "Covers walkway",
                  "Roof covers",
                ],
              },
            ],
          },

          {
            type: "gray-shadow",
            title: "Covers series CPT in PVC",
            paragraphs: [" "],
          },
        ],
        additionalData: [
          {
            title: "Main Features",
            subData: [
              {
                Icon: (props) => <Zap {...props} />,
                title:
                  "Hot-dip galvanized steel or PVC covers, for any belt width",

                description:
                  "These covers are available in hot-dip galvanized steel or PVC, designed to fit any belt width. They offer durability and protection for a wide range of applications",
              },
              {
                Icon: (props) => <Shield {...props} />,
                title:
                  "Standard covers, closed, with window and all fastening accessories",

                description:
                  "These standard covers are closed with a window and come complete with all necessary fastening accessories, ensuring easy installation and secure protection of the belt and material",
              },
              {
                Icon: (props) => <Wrench {...props} />,
                title: "Protect the conveyed material, protect the environment",

                description:
                  "These covers are designed to protect the material being conveyed and help safeguard the environment by preventing spillage and contamination during the transportation process",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "aerospace-components",
    Component: AerospaceComponentsPage,
    title: "Aerospace Components",
    heroData: {
      image: {
        src: Images?.Aerospace,
        alt: "Aerospace Components",
      },
      title: "Aerospace Components Engineered for Extreme Precision",
      description:
        "From design to delivery, Highcon creates high-performance aerospace parts that meet the most demanding industry standards.",
    },
    layerOneProducts: [
      {
        id: "motors-and-actuators",
        Component: AerospaceComponentsDetailPage,
        title: "Motors & Actuators",
        image: { src: Images?.MotorAcutator, alt: "" },
        shortDescription:
          "We manufacture a versatile range of motors like DC Torque Motor, DC Gear Head Motor, DC Electrical Actuator, and Stepper Motor.",
        heroData: {
          image: { src: Images?.MotorAcutator, alt: "" },
          title: "MOTORS & ACTUATORS",
        },
        layerTwoProducts: [
          {
            id: "dc-torque-motor",
            Component: AerospaceComponentsProductDetailPage,
            title: "DC Torque Motor",
            shortDescription:
              "These DC motors produce high torque of 4.5Nm at low RPM. It can operate indefinitely while stalled without incurring damages, it can be directly attached to the load. It comes with an integral commutator with a new earth magnet stator and cantilever brush ring.",
            heroData: {
              image: {
                src: Images?.DCTMAero,
                alt: "",
              },
              title: "DC Torque Motor",
            },
            additionalData: [
              {
                title: "Features",
                subData: [
                  { title: "High torque-to-power ratio" },
                  { title: "High accuracy at low speed" },
                  { title: "Easy integration" },
                  { title: "Low operating voltage" },
                ],
              },
              {
                title: "Specifications",
                subData: [
                  {
                    Icon: (props) => <Gauge {...props} />,
                    title: "Peak torque (Nm)",
                    subTitle: "4.5",
                    description: "0.76",
                  },
                  {
                    Icon: (props) => <PlugZap {...props} />,
                    title: "Power Input Stalled at 25°C (Watt)",
                    subTitle: "190",
                    description: "41",
                  },
                  {
                    Icon: (props) => <Sigma {...props} />,
                    title: "Motor Constant (Nm/ √Watt)",
                    subTitle: "190",
                    description: "0.119",
                  },
                  {
                    Icon: (props) => <RotateCw {...props} />,
                    title: "No Load Speed (rad/Sec)",
                    subTitle: "42",
                    description: "54",
                  },
                  {
                    Icon: (props) => <CircleDot {...props} />,
                    title: "Number Of Poles",
                    subTitle: "10",
                    description: "8",
                  },
                  {
                    Icon: (props) => <Disc {...props} />,
                    title: "Motor Inertia (Nm-sec²)",
                    subTitle: "7.7x10⁴",
                    description: "1.18x10⁵",
                  },
                  {
                    Icon: (props) => <Weight {...props} />,
                    title: "Motor Weight (kg)",
                    subTitle: "1.4",
                    description: "0.56",
                  },
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Voltage stalled at 25°C (V)",
                    subTitle: "27.4",
                    description: "24.1",
                  },
                  {
                    Icon: (props) => <Activity {...props} />,
                    title: "Peak Current (A)",
                    subTitle: "6.94",
                    description: "1.77",
                  },
                  {
                    Icon: (props) => <CircuitBoard {...props} />,
                    title: "DC Resistance(mH) (± 20%)",
                    subTitle: "3.95",
                    description: "13.6",
                  },
                  {
                    Icon: (props) => <Waves {...props} />,
                    title: "Inductance(mH) (± 20%)",
                    subTitle: "6",
                    description: "12",
                  },
                ],
              },
              {
                title: "EV-Spec",
                subData: [
                  {
                    Icon: (props) => <Thermometer {...props} />,
                    title: "Operating Temperature",
                    subTitle: "70",
                    description: "°C",
                  },
                  {
                    Icon: (props) => <Clock {...props} />,
                    title: "Maximum Continuous Operating Time",
                    subTitle: "30",
                    description: "Minutes",
                  },
                  {
                    Icon: (props) => <Waves {...props} />,
                    title: "Vibration Level",
                    subTitle: "30",
                    description: "-g-random 20-2000 Hz",
                  },
                  {
                    Icon: (props) => <ZapOff {...props} />,
                    title: "Shock Level",
                    subTitle: "50",
                    description: "-g, 100 m/sec",
                  },
                  {
                    Icon: (props) => <Repeat {...props} />,
                    title: "Operation",
                    subTitle: "Intermittent",
                  },
                  {
                    Icon: (props) => <Hourglass {...props} />,
                    title: "Operational Life",
                    subTitle: "100",
                    description: "hrs",
                  },
                  {
                    Icon: (props) => <Mountain {...props} />,
                    title: "Operating Altitude",
                    subTitle: "52",
                    description: "kft",
                  },
                ],
              },
            ],
          },
          {
            id: "dc-gear-head-motor",
            Component: AerospaceComponentsProductDetailPage,
            title: "DC Gear Head Motor",
            shortDescription:
              "These DC Gear head Motor motors produce high low-speed torque by converting the high speed, low torque. Typically the motor has 7000 RPM. The speed is reduced to 120RPM by planetary gear head to achieve the torque of 0.8Nm at the rated voltage of 28VDC.",
            heroData: {
              image: {
                src: Images?.DCGHM,
                alt: "",
              },
              title: "DC Gear Head Motor",
            },
            additionalData: [
              {
                title: "Features",
                subData: [
                  { title: "Compact size" },
                  { title: "High torque" },
                  { title: "Less power consumption" },
                  { title: "Higher efficiency" },
                ],
              },
              {
                title: "Specifications",
                subData: [
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Operating voltage (Vp)(Volts)",
                    subTitle: "27",
                  },
                  {
                    Icon: (props) => <Gauge {...props} />,
                    title: "Nominal torque on output shaft(Da Ncm)",
                    subTitle: "8 ±10%",
                  },
                  {
                    Icon: (props) => <Activity {...props} />,
                    title: "Nominal current at nominal torque(mA)",
                    subTitle: "650 ±10%",
                  },
                  {
                    Icon: (props) => <Wind {...props} />,
                    title: "Output speed under no load (rpm)",
                    subTitle: "130 ±15%",
                  },
                  {
                    Icon: (props) => <GaugeCircle {...props} />,
                    title: "Speed at nominal load(rpm)",
                    subTitle: "100 ±15%",
                  },
                  {
                    Icon: (props) => <RotateCcw {...props} />,
                    title: "Reverse sense of motion(--)",
                    subTitle: "By changing polarity",
                  },
                  {
                    Icon: (props) => <ShieldCheck {...props} />,
                    title: "Insulation resistance at 250V DC(Meg-Ohms)",
                    subTitle: "≥100",
                  },
                  {
                    Icon: (props) => <Sigma {...props} />,
                    title: "Armature resistance(Ohms)",
                    subTitle: "10 ±10%",
                  },
                  {
                    Icon: (props) => <Magnet {...props} />,
                    title: "Armature Inductance(mH)",
                    subTitle: "4.2 ±30%",
                  },
                  {
                    Icon: (props) => <TrendingUp {...props} />,
                    title: "No load speed(rpm)",
                    subTitle: "130 ±15%",
                  },
                  {
                    Icon: (props) => <Power {...props} />,
                    title: "No load current(mA)",
                    subTitle: "200 (Max)",
                  },
                  {
                    Icon: (props) => <Play {...props} />,
                    title: "Min voltage to start(V)",
                    subTitle: "≤2.5",
                  },
                  {
                    Icon: (props) => <Clock {...props} />,
                    title: "Minimum life duration(Hrs)",
                    subTitle: "1000 (Intermittent operation)",
                  },
                  {
                    Icon: (props) => <Weight {...props} />,
                    title: "Motor weight(Grams)",
                    subTitle: "330 ±5%",
                  },
                ],
              },
              {
                title: "EV-Spec",
                subData: [
                  {
                    Icon: (props) => <Thermometer {...props} />,
                    title: "Operating Temperature",
                    subTitle: "70",
                    description: "°C",
                  },
                  {
                    Icon: (props) => <Timer {...props} />,
                    title: "Minimum life duration(Hrs)",
                    subTitle: "1000",
                  },
                  {
                    Icon: (props) => <Waves {...props} />,
                    title: "Vibration Level",
                    subTitle: "30",
                    description: "-g-random 20-2000 Hz",
                  },
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Shock Level",
                    subTitle: "50",
                    description: "-g, 100 m/sec",
                  },
                  {
                    Icon: (props) => <Activity {...props} />,
                    title: "Operation",
                    subTitle: "Intermittent",
                  },
                  {
                    Icon: (props) => <Clock {...props} />,
                    title: "Operational Life",
                    subTitle: "100",
                    description: "hrs",
                  },
                  {
                    Icon: (props) => <Mountain {...props} />,
                    title: "Operating Altitude",
                    subTitle: "52",
                    description: "kms",
                  },
                  {
                    Icon: (props) => <Archive {...props} />,
                    title: "Storage life(Yrs)",
                    subTitle: "8",
                  },
                ],
              },
            ],
          },
          {
            id: "dc-electrical-actuator",
            Component: AerospaceComponentsProductDetailPage,
            title: "DC Electrical Actuator",
            shortDescription:
              "These DC electrical actuators are linear output actuators. The travel length of the actuator is 12mm per direction. And the cycle time of the actuator is 6 seconds/actuation. These are specially designed for high-pressure open and closing valves, which are used for space applications.",
            heroData: {
              image: {
                src: Images?.DCEA,
                alt: "",
              },
              title: "DC Electrical Actuator",
            },
            additionalData: [
              {
                title: "Features",
                subData: [
                  { title: "Compact size" },
                  { title: "Higher reliability" },
                  { title: "Low noise" },
                  { title: "Low operating voltage" },
                ],
              },
              {
                title: "Specifications",
                subData: [
                  {
                    Icon: (props) => <Weight {...props} />,
                    title: "Nominal load(daN)",
                    subTitle: "27",
                  },
                  {
                    Icon: (props) => <MoveHorizontal {...props} />,
                    title: "Displacement(mm)",
                    subTitle: "8 ±10%",
                  },
                  {
                    Icon: (props) => <Bolt {...props} />,
                    title: "Operating voltage (Vp)(Volts)",
                    subTitle: "650 ±10%",
                  },
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Nominal current at nominal torque(mA)",
                    subTitle: "130 ±15%",
                  },
                  {
                    Icon: (props) => <Gauge {...props} />,
                    title: "Output speed under no load(mm/s)",
                    subTitle: "100 ±15%",
                  },
                  {
                    Icon: (props) => <RotateCw {...props} />,
                    title: "Speed at nominal load(mm/s)",
                    subTitle: "By changing polarity",
                  },
                  {
                    Icon: (props) => <RefreshCw {...props} />,
                    title:
                      "Direction of rotation with (+)ve supply to (+) terminal(--)",
                    subTitle: "≥100",
                  },
                  {
                    Icon: (props) => <ShieldCheck {...props} />,
                    title: "Insulation resistance at 250V DC(Meg-Ohms)",
                    subTitle: "10 ±10%",
                  },
                  {
                    Icon: (props) => <CircuitBoard {...props} />,
                    title: "Armature resistance(Ohms)",
                    subTitle: "4.2 ±30%",
                  },
                  {
                    Icon: (props) => <Magnet {...props} />,
                    title: "Armature Inductance(mH)",
                    subTitle: "130 ±15%",
                  },
                  {
                    Icon: (props) => <GaugeCircle {...props} />,
                    title: "No load speed(rpm)",
                    subTitle: "200 (Max)",
                  },
                  {
                    Icon: (props) => <Power {...props} />,
                    title: "Min voltage to start(V)",
                    subTitle: "≤2.5",
                  },
                ],
              },
              {
                title: "EV-Spec",
                subData: [
                  {
                    Icon: (props) => <Thermometer {...props} />,
                    title: "Operating Temperature",
                    subTitle: "70",
                    description: "°C",
                  },
                  {
                    Icon: (props) => <Timer {...props} />,
                    title: "Minimum life duration(Hrs)",
                    subTitle: "1000",
                  },
                  {
                    Icon: (props) => <ZapOff {...props} />,
                    title: "Vibration Level",
                    subTitle: "30",
                    description: "-g-random 20-2000 Hz",
                  },
                  {
                    Icon: (props) => <Activity {...props} />,
                    title: "Shock Level",
                    subTitle: "50",
                    description: "-g, 100 m/sec",
                  },
                  {
                    Icon: (props) => <Repeat {...props} />,
                    title: "Operation",
                    subTitle: "Intermittent",
                  },
                  {
                    Icon: (props) => <Clock {...props} />,
                    title: "Operational Life",
                    subTitle: "100",
                    description: "hrs",
                  },
                  {
                    Icon: (props) => <Mountain {...props} />,
                    title: "Operating Altitude",
                    subTitle: "52",
                    description: "kms",
                  },
                ],
              },
            ],
          },
          {
            id: "stepper-motor",
            Component: AerospaceComponentsProductDetailPage,
            title: "Stepper Motor",
            shortDescription:
              "A stepper motor is an electric motor that divides a full rotation into many steps. It is programmed to control the motor's position accurately without feedback when the motor is carefully sized to the application.",
            heroData: {
              image: {
                src: Images?.StepperMotor,
                alt: "",
              },
              title: "Stepper Motor",
            },
            additionalData: [
              {
                title: "Features",
                subData: [],
              },
              {
                title: "Specifications",
                subData: [
                  {
                    Icon: (props) => <Cpu {...props} />,
                    title: "Type",
                    subTitle: "Housed Hybrid Stepper",
                  },
                  {
                    Icon: (props) => <Gauge {...props} />,
                    title: "Rated Torque",
                    subTitle: "270 mNm",
                  },
                  {
                    Icon: (props) => <Compass {...props} />,
                    title: "Step Angle",
                    subTitle: "1.8°",
                  },
                  {
                    Icon: (props) => <Target {...props} />,
                    title: "Step Angle Accuracy",
                    subTitle: "±5%",
                  },
                  {
                    Icon: (props) => <Bolt {...props} />,
                    title: "Supply Voltage",
                    subTitle: "24V DC (Max 26V)",
                  },
                  {
                    Icon: (props) => <Layers {...props} />,
                    title: "No of Phases",
                    subTitle: "2",
                  },
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Current/Phase",
                    subTitle: "1A (1.5A peak)",
                  },
                  {
                    Icon: (props) => <CircuitBoard {...props} />,
                    title: "Resistance/Phase",
                    subTitle: "4.5 Ω",
                  },
                  {
                    Icon: (props) => <Magnet {...props} />,
                    title: "Inductance/Phase",
                    subTitle: ">100 MΩ",
                  },
                  {
                    Icon: (props) => <Thermometer {...props} />,
                    title: "Operating Temperature",
                    subTitle: "-20 to +60°C (Max 80°C)",
                  },
                  {
                    Icon: (props) => <ShieldCheck {...props} />,
                    title: "Insulation Class",
                    subTitle: "B",
                  },
                  {
                    Icon: (props) => <Microchip {...props} />,
                    title: "Electronics Type",
                    subTitle: "Integrated",
                  },
                  {
                    Icon: (props) => <GaugeCircle {...props} />,
                    title: "Speed",
                    subTitle: "75 RPM",
                  },
                  {
                    Icon: (props) => <RotateCw {...props} />,
                    title: "Direction of Rotation",
                    subTitle: "Bidirectional",
                  },
                  {
                    Icon: (props) => <Grid3x3 {...props} />,
                    title: "Step Resolution",
                    subTitle: "256 microsteps per full step",
                  },
                ],
              },
              {
                title: "EV-Spec",
                subData: [
                  {
                    Icon: (props) => <Thermometer {...props} />,
                    title: "Operating Temperature",
                    subTitle: "70",
                    description: "°C",
                  },
                  {
                    Icon: (props) => <Timer {...props} />,
                    title: "Minimum life duration(Hrs)",
                    subTitle: "1000",
                  },
                  {
                    Icon: (props) => <Waves {...props} />,
                    title: "Vibration Level",
                    subTitle: "30",
                    description: "-g-random 20-2000 Hz",
                  },
                  {
                    Icon: (props) => <ZapOff {...props} />,
                    title: "Shock Level",
                    subTitle: "50",
                    description: "-g, 100 m/sec",
                  },
                  {
                    Icon: (props) => <Repeat {...props} />,
                    title: "Operation",
                    subTitle: "Intermittent",
                  },
                  {
                    Icon: (props) => <Clock {...props} />,
                    title: "Operational Life",
                    subTitle: "100",
                    description: "hrs",
                  },
                  {
                    Icon: (props) => <Mountain {...props} />,
                    title: "Operating Altitude",
                    subTitle: "52",
                    description: "kms",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "control-valves",
        Component: AerospaceComponentsDetailPage,
        title: "Control Valves",
        image: {
          src: Images?.ControlValuesHero,
          alt: "",
        },
        shortDescription:
          "Our range of control valves include pneumatic type actuator, electrical type actuator, start and stop valve, relief valves, flow control valves, non-return valve, and pressure regulators.",
        heroData: {
          image: { src: Images?.ControlValuesHero, alt: "" },
          title: "CONTROL VALVES",
        },
        layerTwoProducts: [
          {
            id: "pneumatic-operated-valve",
            Component: AerospaceComponentsProductDetailPage,
            title: "Pneumatic Operated Valve",
            shortDescription:
              "A pneumatic Operated valve also known as Pneumatic valve, the compressed gas starts to push against the piston or diaphragm walls which causes the valve to actuate.",
            heroData: {
              image: {
                src: Images?.POV,
                alt: "",
              },
              title: "Pneumatic Operated Valve",
            },
            additionalData: [
              {
                title: "Features",
                subData: [],
              },
              {
                title: "Specifications",
                subData: [
                  {
                    Icon: (props) => <AirVent {...props} />,
                    title: "Type",
                    subTitle: "Pneumatically Operated",
                  },
                  {
                    Icon: (props) => <Cloud {...props} />,
                    title: "Fluid Media",
                    subTitle: "GH₂, GN2",
                  },
                  {
                    Icon: (props) => <Gauge {...props} />,
                    title: "Working Pressure",
                    subTitle: "320⁺¹⁰ bar(a)",
                  },
                  {
                    Icon: (props) => <Ruler {...props} />,
                    title: "Nominal Port dia",
                    subTitle: "4 mm",
                  },
                  {
                    Icon: (props) => <Weight {...props} />,
                    title: "weight",
                    subTitle: "0.5 kg",
                  },
                  {
                    Icon: (props) => <Wind {...props} />,
                    title: "Pneumatic Command Pr",
                    subTitle: "24⁺¹ bar, 20⁺¹ bar",
                  },
                  {
                    Icon: (props) => <Waves {...props} />,
                    title: "Vibration Levels",
                    subTitle: "16.5, 9.0 g",
                  },
                ],
              },
              {
                title: "EV-Spec",
                subData: [
                  {
                    Icon: (props) => <Thermometer {...props} />,
                    title: "Operating Temperature",
                    subTitle: "70",
                    description: "°C",
                  },
                  {
                    Icon: (props) => <Timer {...props} />,
                    title: "Maximum Continuous Operating Time",
                    subTitle: "30",
                    description: "Minutes",
                  },
                  {
                    Icon: (props) => <Waves {...props} />,
                    title: "Vibration Level",
                    subTitle: "30",
                    description: "-g-random 20-2000 Hz",
                  },
                  {
                    Icon: (props) => <ZapOff {...props} />,
                    title: "Shock Level",
                    subTitle: "50",
                    description: "-g, 100 m/sec",
                  },
                  { title: "Operation", subTitle: "Intermittent" },
                  {
                    Icon: (props) => <Activity {...props} />,
                    title: "Operational Life",
                    subTitle: "100",
                    description: "hrs",
                  },
                  {
                    Icon: (props) => <Mountain {...props} />,
                    title: "Operating Altitude",
                    subTitle: "52",
                    description: "k",
                  },
                ],
              },
            ],
          },
          {
            id: "electrical-type-actuator-valve",
            Component: AerospaceComponentsProductDetailPage,
            title: "Electrical Type Actuator",
            shortDescription:
              "A Rare Earth Permanent Magnet DC motor fitted with a planetary gear head unit consists of 5 stage 0.2 & 0.3 modules of gears with a Linear output.",
            heroData: {
              image: {
                src: Images?.ETA,
                alt: "",
              },
              title: "Electrical Type Actuator",
            },
            additionalData: [
              {
                title: "Features",
                subData: [],
              },
              {
                title: "Specifications",
                subData: [
                  {
                    Icon: (props) => <Cpu {...props} />,
                    title: "Type",
                    subTitle: "Motor Operated spool type valve",
                  },
                  {
                    Icon: (props) => <Cloud {...props} />,
                    title: "Fluid Media",
                    subTitle: "GN2 at ambient",
                  },
                  {
                    Icon: (props) => <Gauge {...props} />,
                    title: "Working Pressure",
                    subTitle: "320⁺¹⁰ bar(a) max",
                  },
                  {
                    Icon: (props) => <Bolt {...props} />,
                    title: "Supply Voltage",
                    subTitle: "28⁺⁴ VDC",
                  },
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Valve Current(opening / closing)",
                    subTitle: "160⁻⁶⁰ mA",
                  },
                  {
                    Icon: (props) => <Timer {...props} />,
                    title: "Time for Opening / Closing",
                    subTitle: "5⁻² sec",
                  },
                  {
                    Icon: (props) => <Ruler {...props} />,
                    title: "Nominal Port dia",
                    subTitle: "8 mm",
                  },
                  {
                    Icon: (props) => <Waves {...props} />,
                    title: "Vibration Levels",
                    subTitle: "9 g",
                  },
                ],
              },
              {
                title: "EV-Spec",
                subData: [
                  {
                    Icon: (props) => <Thermometer {...props} />,
                    title: "Operating Temperature",
                    subTitle: "70",
                    description: "°C",
                  },
                  {
                    Icon: (props) => <Timer {...props} />,
                    title: "Maximum Continuous Operating Time",
                    subTitle: "30",
                    description: "Minutes",
                  },
                  {
                    Icon: (props) => <Waves {...props} />,
                    title: "Vibration Level",
                    subTitle: "30",
                    description: "-g-random 20-2000 Hz",
                  },
                  {
                    Icon: (props) => <ZapOff {...props} />,
                    title: "Shock Level",
                    subTitle: "50",
                    description: "-g, 100 m/sec",
                  },
                  {
                    Icon: (props) => <Activity {...props} />,
                    title: "Operationa",
                    subTitle: "Intermittent",
                  },

                  {
                    Icon: (props) => <Clock {...props} />,
                    title: "Operational Life",
                    subTitle: "100",
                    description: "hrs",
                  },
                  {
                    Icon: (props) => <Mountain {...props} />,
                    title: "Operating Altitude",
                    subTitle: "52",
                    description: "k",
                  },
                ],
              },
            ],
          },
          {
            id: "start-stop-valve",
            Component: AerospaceComponentsProductDetailPage,
            title: "Start & Stop Valve",
            shortDescription:
              "These are typically two solenoid coil wounded in a bobbin at the different winding directions of one after another. It has two power sources, one is for the open coil & another one is for the close coil. If the open coil is energized, the valve gets open, and it remains open even the electrical supply is removed. This because of the latching effect of the magnets. The valve can get closed while giving the electrical supply to the closed coil. The operating pressure may vary since these are customized ones.",
            heroData: {
              image: {
                src: Images?.SSV,
                alt: "",
              },
              title: "Start & Stop Valve",
            },
            additionalData: [
              {
                title: "Features",
                subData: [],
              },
              {
                title: "Specifications",
                subData: [
                  {
                    Icon: (props) => <Settings {...props} />,
                    title: "Type",
                    subTitle: "3 Way Solenoid Operated Latch Valve",
                  },
                  {
                    Icon: (props) => <Cloud {...props} />,
                    title: "Fluid Media",
                    subTitle: "GN2 & GH₂ at ambient",
                  },
                  {
                    Icon: (props) => <Gauge {...props} />,
                    title: "Working Pressure",
                    subTitle: "25 bar(a) max",
                  },
                  {
                    Icon: (props) => <Timer {...props} />,
                    title: "Time for Opening / Closing",
                    subTitle: "10 Seconds",
                  },
                  {
                    Icon: (props) => <Bolt {...props} />,
                    title: "Operating Voltage",
                    subTitle: "28 VDC",
                  },
                  {
                    Icon: (props) => <Weight {...props} />,
                    title: "Weight",
                    subTitle: "0.6 kg",
                  },
                ],
              },
              {
                title: "EV-Spec",
                subData: [
                  {
                    Icon: (props) => <Thermometer {...props} />,
                    title: "Operating Temperature",
                    subTitle: "-40 to 70",
                    description: "°C",
                  },
                  {
                    Icon: (props) => <Timer {...props} />,
                    title: "Maximum Continuous Operating Time",
                    subTitle: "30",
                    description: "Minutes",
                  },
                  {
                    Icon: (props) => <Waves {...props} />,
                    title: "Vibration Level",
                    subTitle: "30",
                    description: "-g-random 20-2000 Hz",
                  },
                  {
                    Icon: (props) => <ZapOff {...props} />,
                    title: "Shock Level",
                    subTitle: "50",
                    description: "-g, 100 m/sec",
                  },
                  {
                    Icon: (props) => <Activity {...props} />,
                    title: "Operationa",
                    subTitle: "Intermittent",
                  },
                  {
                    Icon: (props) => <Clock {...props} />,
                    title: "Operational Life",
                    subTitle: "100",
                    description: "hrs",
                  },
                  {
                    Icon: (props) => <Mountain {...props} />,
                    title: "Operating Altitude",
                    subTitle: "52",
                    description: "k",
                  },
                ],
              },
            ],
          },
          {
            id: "relief-valves",
            Component: AerospaceComponentsProductDetailPage,
            title: "Relief Valves",
            shortDescription:
              "A 3 port valve and the inlet & outlet port vent port are introduced to release the excess pressure. The function of this valve is to limit or control the pressure until the set pressure is reached. In further, the safety valve removes the extra pressure. The operating pressure may vary since these are customized ones.",
            heroData: {
              image: {
                src: Images?.ReliefValves,
                alt: "",
              },
              title: "Relief Valves",
            },
            additionalData: [
              {
                title: "Features",
                subData: [],
              },
              {
                title: "Specifications",
                subData: [
                  {
                    Icon: (props) => <Settings {...props} />,
                    title: "Type",
                    subTitle: "3 Way Solenoid Operated Latch Valve",
                  },
                  {
                    Icon: (props) => <Cloud {...props} />,
                    title: "Fluid Media",
                    subTitle: "GN2 & GH₂ at ambient",
                  },
                  {
                    Icon: (props) => <Gauge {...props} />,
                    title: "Working Pressure",
                    subTitle: "25 bar(a) max",
                  },
                  {
                    Icon: (props) => <Timer {...props} />,
                    title: "Time for Opening / Closing",
                    subTitle: "10 Seconds",
                  },
                  {
                    Icon: (props) => <Bolt {...props} />,
                    title: "Operating Voltage",
                    subTitle: "28 VDC",
                  },
                  {
                    Icon: (props) => <Weight {...props} />,
                    title: "Weight",
                    subTitle: "0.6 kg",
                  },
                ],
              },
              {
                title: "EV-Spec",
                subData: [
                  {
                    Icon: (props) => <Thermometer {...props} />,
                    title: "Operating Temperature",
                    subTitle: "-40 to 70",
                    description: "°C",
                  },
                  {
                    Icon: (props) => <Timer {...props} />,
                    title: "Maximum Continuous Operating Time",
                    subTitle: "30",
                    description: "Minutes",
                  },
                  {
                    Icon: (props) => <Waves {...props} />,
                    title: "Vibration Level",
                    subTitle: "30",
                    description: "-g-random 20-2000 Hz",
                  },
                  {
                    Icon: (props) => <ZapOff {...props} />,
                    title: "Shock Level",
                    subTitle: "50",
                    description: "-g, 100 m/sec",
                  },
                  {
                    Icon: (props) => <Activity {...props} />,
                    title: "Operationa",
                    subTitle: "Intermittent",
                  },
                  {
                    Icon: (props) => <Clock {...props} />,
                    title: "Operational Life",
                    subTitle: "100",
                    description: "hrs",
                  },
                  {
                    Icon: (props) => <Mountain {...props} />,
                    title: "Operating Altitude",
                    subTitle: "52",
                    description: "k",
                  },
                ],
              },
            ],
          },
          {
            id: "flow-control-valves",
            Component: AerospaceComponentsProductDetailPage,
            title: "Flow Control Valves",
            shortDescription:
              "These are electromechanical valves that allow the pressure to outlet port based on the electrical input. These kinds of the valve remain open condition until we remove the electrical input. The operating pressure may vary since these are customized ones.",
            heroData: {
              image: {
                src: Images?.FlowControlValves,
                alt: "",
              },
              title: "Flow Control Valves",
            },
            additionalData: [
              {
                title: "Features",
                subData: [],
              },
              {
                title: "Specifications",
                subData: [
                  {
                    Icon: (props) => <Power {...props} />,
                    title: "Type",
                    subTitle: "Electrically Operated",
                  },
                  {
                    Icon: (props) => <Cloud {...props} />,
                    title: "Fluid Media",
                    subTitle: "GH₂, GN2 & IPA",
                  },
                  {
                    Icon: (props) => <Ruler {...props} />,
                    title: "Port dia",
                    subTitle: "6 mm",
                  },
                  {
                    Icon: (props) => <Gauge {...props} />,
                    title: "Operating Pressure",
                    subTitle: "88⁺⁵ bar(g)",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title: "Proof Pressure",
                    subTitle: "132 bar(g)",
                  },
                  {
                    Icon: (props) => <Wind {...props} />,
                    title: "Flow rate",
                    subTitle: "Upto 128cc/sec",
                  },
                  {
                    Icon: (props) => <Weight {...props} />,
                    title: "Weight",
                    subTitle: "2 kg",
                  },
                ],
              },
              {
                title: "EV-Spec",
                subData: [
                  {
                    Icon: (props) => <Thermometer {...props} />,
                    title: "Operating Temperature",
                    subTitle: "-40 to 70°C",
                  },
                  {
                    Icon: (props) => <Timer {...props} />,
                    title: "Maximum Continuous Operating Time",
                    subTitle: "30 Minutes",
                  },
                  {
                    Icon: (props) => <Waves {...props} />,
                    title: "Vibration Level",
                    subTitle: "30 g-random 20-2000 Hz",
                  },
                  {
                    Icon: (props) => <ZapOff {...props} />,
                    title: "Shock Level",
                    subTitle: "50 g, 100 m/sec",
                  },
                  {
                    Icon: (props) => <Activity {...props} />,
                    title: "Operationa",
                    subTitle: "Intermittent",
                  },
                  {
                    Icon: (props) => <Clock {...props} />,
                    title: "Operational Life",
                    subTitle: "50 hrs",
                  },
                  {
                    Icon: (props) => <Mountain {...props} />,
                    title: "Operating Altitude",
                    subTitle: "52",
                    description: "k",
                  },
                ],
              },
            ],
          },
          {
            id: "non-return-valve",
            Component: AerospaceComponentsProductDetailPage,
            title: "Non-Return Valve",
            shortDescription:
              "It is a two-port valve, one for pressure inlet and another one is pressure outlet. This kind of valve is also known as a one-way valve reflux valve, a retention valve. The operating pressure may vary since these are customized ones.",
            heroData: {
              image: {
                src: Images?.NonReturnValve,
                alt: "",
              },
              title: "Non-Return Valve",
            },
            additionalData: [
              {
                title: "Features",
                subData: [],
              },
              {
                title: "Specifications",
                subData: [
                  {
                    Icon: (props) => <Sliders {...props} />,
                    title: "Type",
                    subTitle: "Spring Loaded, PoppetType",
                  },
                  {
                    Icon: (props) => <Droplets {...props} />,
                    title: "Fluid Media",
                    subTitle: "GN2",
                  },
                  {
                    Icon: (props) => <Ruler {...props} />,
                    title: "Port dia",
                    subTitle: "6 mm",
                  },
                  {
                    Icon: (props) => <Gauge {...props} />,
                    title: "Operating Pressure",
                    subTitle: "88⁺⁵ bar(g)",
                  },
                  {
                    Icon: (props) => <ShieldCheck {...props} />,
                    title: "Proof Pressure",
                    subTitle: "63 bar(g)",
                  },
                  {
                    Icon: (props) => <Activity {...props} />,
                    title: "Cracking Pressure",
                    subTitle: "1.5 bar",
                  },
                  {
                    Icon: (props) => <Weight {...props} />,
                    title: "Weight",
                    subTitle: "0.2 kg",
                  },
                ],
              },
              {
                title: "EV-Spec",
                subData: [
                  {
                    Icon: (props) => <Thermometer {...props} />,
                    title: "Operating Temperature",
                    subTitle: "-40 to 70",
                    description: "°C",
                  },
                  {
                    Icon: (props) => <Timer {...props} />,
                    title: "Maximum Continuous Operating Time",
                    subTitle: "30",
                    description: "Minutes",
                  },
                  {
                    Icon: (props) => <Vibrate {...props} />,
                    title: "Vibration Level",
                    subTitle: "16.5",
                    description: "g-random 20-2000 Hz",
                  },
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Shock Level",
                    subTitle: "40",
                    description: "g, 100 m/sec",
                  },
                  {
                    Icon: (props) => <Activity {...props} />,
                    title: "Operationa",
                    subTitle: "Intermittent",
                  },
                  {
                    Icon: (props) => <Mountain {...props} />,
                    title: "Operating Altitude",
                    subTitle: "52",
                    description: "k",
                  },
                ],
              },
            ],
          },
          {
            id: "pressure-regulators",
            Component: AerospaceComponentsProductDetailPage,
            title: "Pressure Regulators",
            shortDescription:
              "A valve controls the pressure gases by reducing a high input pressure to control lower output pressure. Thus, they maintain a constant output pressure when there are inlet pressure fluctuations. However, the operating pressure may vary since these are customized ones.",
            heroData: {
              image: {
                src: Images?.PressureRegulators,
                alt: "",
              },
              title: "Pressure Regulators",
            },
            additionalData: [
              {
                title: "Features",
                subData: [],
              },
              {
                title: "Specifications",
                subData: [
                  {
                    Icon: (props) => <SlidersHorizontal {...props} />,
                    title: "Type",
                    subTitle: "Regulator",
                  },
                  {
                    Icon: (props) => <Droplets {...props} />,
                    title: "Fluid Media",
                    subTitle: "GN2 & GH₂",
                  },
                  {
                    Icon: (props) => <Gauge {...props} />,
                    title: "Inlet Pressure",
                    subTitle: "330 Bar",
                  },
                  {
                    Icon: (props) => <GaugeCircle {...props} />,
                    title: "Outlet Pressure",
                    subTitle: "35 Bar",
                  },
                  {
                    Icon: (props) => <Target {...props} />,
                    title: "Set Pressure",
                    subTitle: "40 Bar",
                  },
                  {
                    Icon: (props) => <Weight {...props} />,
                    title: "Weight",
                    subTitle: "1.5 kg",
                  },
                ],
              },
              {
                title: "EV-Spec",
                subData: [
                  {
                    Icon: (props) => <Thermometer {...props} />,
                    title: "Operating Temperature",
                    subTitle: "-40 to 70",
                    description: "°C",
                  },
                  {
                    Icon: (props) => <Timer {...props} />,
                    title: "Maximum Continuous Operating Time",
                    subTitle: "30",
                    description: "Minutes",
                  },
                  {
                    Icon: (props) => <Vibrate {...props} />,
                    title: "Vibration Level",
                    subTitle: "16.5",
                    description: "g-random 20-2000 Hz",
                  },
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Shock Level",
                    subTitle: "40",
                    description: "g, 100 m/sec",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "sensors",
        Component: AerospaceComponentsDetailPage,
        title: "Sensors",
        image: {
          src: Images?.Sensors,
          alt: "",
        },
        shortDescription:
          "Our aerospace design solutions include piezoresistive transducers, differential pressure transducer, conventional-type transducer, and accelerometer.",
        heroData: {
          image: { src: Images?.Sensors, alt: "" },
          title: "SENSORS",
        },
        layerTwoProducts: [
          {
            id: "piezoresistive-transducer",
            Component: AerospaceComponentsProductDetailPage,
            title: "Piezoresistive Transducer",
            shortDescription:
              "MEMS-based Piezoresistive pressure transducer encompassing built-in temperature compensation and output amplification; CACPL Aerospace MEMS pressure transducers are smaller with higher reliability.  A typical MEMS pressure transducer operates in 5VDC and has 2.5VDC output at nominal pressure. CACPL Aerospace produced a wide range of pressure transducers starting from 1 bar to 150 bar.",
            heroData: {
              image: {
                src: Images?.PiezoresistiveTransducer,
                alt: "",
              },
              title: "Piezoresistive Transducer",
            },
            additionalData: [
              {
                title: "Features",
                subData: [],
              },
              {
                title: "Specifications",
                subData: [
                  {
                    Icon: (props) => <Cpu {...props} />,
                    title: "Sensor type",
                    subTitle: "MEMS",
                  },
                  {
                    Icon: (props) => <Microchip {...props} />,
                    title: "Basic sensing element",
                    subTitle: "Absolute MEMS chip",
                  },
                  {
                    Icon: (props) => <Gauge {...props} />,
                    title: "Pressure range",
                    subTitle: "0.02 MPa to 20.0 MPa",
                  },
                  {
                    Icon: (props) => <ShieldCheck {...props} />,
                    title: "Proof pressure",
                    subTitle: "Two times operating pressure",
                  },
                  {
                    Icon: (props) => <Droplets {...props} />,
                    title: "Pressure medium",
                    subTitle: "Gas / Liquid",
                  },
                  {
                    Icon: (props) => <Weight {...props} />,
                    title: "Weight",
                    subTitle: "< 75 grams",
                  },
                  {
                    Icon: (props) => <Ruler {...props} />,
                    title: "Dimensions",
                    subTitle: "24 mm × 54 mm",
                  },
                  {
                    Icon: (props) => <Settings {...props} />,
                    title: "Pressure interface",
                    subTitle: "M8 × 1.0 H / M14 × 1.5 pressure port",
                  },
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Excitation voltage",
                    subTitle: "+5 ±0.1 VDC",
                  },
                  {
                    Icon: (props) => <Activity {...props} />,
                    title: "Full scale output",
                    subTitle: "2.4 V ±0.05 VDC",
                  },
                  {
                    Icon: (props) => <TrendingDown {...props} />,
                    title: "Output impedance",
                    subTitle: "< 10 ohms",
                  },
                  {
                    Icon: (props) => <Cable {...props} />,
                    title: "Electrical interface",
                    subTitle: "Electrical connector 6 pin or 8 pin",
                  },
                ],
              },
              {
                title: "EV-Spec",
                subData: [
                  {
                    Icon: (props) => <Thermometer {...props} />,
                    title: "Operating Temperature",
                    subTitle: "-55 to +125",
                    description: "°C",
                  },
                  {
                    Icon: (props) => <Waves {...props} />,
                    title: "Vibration Level",
                    subTitle: "16.5",
                    description: "g-random 20-2000 Hz",
                  },
                  {
                    Icon: (props) => <ZapOff {...props} />,
                    title: "Shock Level",
                    subTitle: "40",
                    description: "g, 100 m/sec",
                  },
                  { title: "Operation", subTitle: "Intermittent" },
                  {
                    Icon: (props) => <Mountain {...props} />,
                    title: "Operating Altitude",
                    subTitle: "52",
                    description: "k",
                  },
                ],
              },
            ],
          },
          {
            id: "differential-pressure-transducer",
            Component: AerospaceComponentsProductDetailPage,
            title: "Differential Pressure Transducer",
            shortDescription:
              "CACPL Aerospace differential pressure transducers are conventional type strain gauge-based transducers. The main application of this pressure transducer is to find the pressure difference between 2 different pressures. It operates at 10VDC and produces an output of 10mVdc at maximum pressure.  CACPL has a wide range of pressure transducers starting from +/-3 bar, +/-5bar & +/-15 bars.",
            heroData: {
              image: {
                src: Images?.DifferentialPressureTransducer,
                alt: "",
              },
              title: "Differential Pressure Transducer",
            },
            additionalData: [
              {
                title: "Features",
                subData: [],
              },
              {
                title: "Specifications",
                subData: [
                  {
                    Icon: (props) => <Gauge {...props} />,
                    title: "Diifferential Pressure Range",
                    subTitle: "± 3, ± 5, ± 15, and -1 + 5 bar",
                  },
                  {
                    Icon: (props) => <ArrowUpDown {...props} />,
                    title: "Line Pressure",
                    subTitle: "≤ 63 bar / 942 psi",
                  },
                  {
                    Icon: (props) => <ShieldCheck {...props} />,
                    title: "Safe Overload",
                    subTitle: "75 bar / 1088 psi",
                  },
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Excitation Voltage (FSO)",
                    subTitle: "10 mV ± 5 mV",
                  },
                  {
                    Icon: (props) => <Activity {...props} />,
                    title: "Output",
                    subTitle: "10 mV ± 1 mV",
                  },
                  {
                    Icon: (props) => <Thermometer {...props} />,
                    title: "Compensated Temperature Range",
                    subTitle: "-20° C to +70° C",
                  },
                  {
                    Icon: (props) => <TrendingDown {...props} />,
                    title: "Non Linearity + Hysteresis",
                    subTitle: "≤ 0.5% FSO",
                  },
                  {
                    Icon: (props) => <SlidersHorizontal {...props} />,
                    title: "Sensitivity",
                    subTitle: "± 1 mV / V ± 0.1 mV",
                  },
                  {
                    Icon: (props) => <RotateCw {...props} />,
                    title: "Zero & FSO Drift in Temperature",
                    subTitle: "± 3x 10⁻⁴ / FSO / ° C",
                  },
                  {
                    Icon: (props) => <Target {...props} />,
                    title: "Zero Offset",
                    subTitle: "± 1 mV",
                  },
                  {
                    Icon: (props) => <CircuitBoard {...props} />,
                    title: "Output Resistance",
                    subTitle: "351 ± 5 Ω",
                  },
                  {
                    Icon: (props) => <SquareSigma {...props} />,
                    title: "Input Resistance",
                    subTitle: "350 to 600 Ω",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title: "Insulation Resistance",
                    subTitle: "> 100 MΩ @ 45 VDC",
                  },
                  {
                    Icon: (props) => <Waves {...props} />,
                    title: "Noise Due to Vibration",
                    subTitle: "≤ 1% FSO",
                  },
                  {
                    Icon: (props) => <Weight {...props} />,
                    title: "Weight",
                    subTitle: "≤ 950 g",
                  },
                  {
                    Icon: (props) => <BatteryCharging {...props} />,
                    title: "Maximum Current",
                    subTitle: "28 mA @ 10 VDC",
                  },
                  {
                    Icon: (props) => <Settings {...props} />,
                    title: "Pressure Interface",
                    subTitle: "M14 X 1.5-6 h",
                  },
                  {
                    Icon: (props) => <Layers {...props} />,
                    title: "Wetted Parts",
                    subTitle: "Stainless Steel, 316 L/304 L",
                  },
                  {
                    Icon: (props) => <Cable {...props} />,
                    title: "Electrical Interface",
                    subTitle: "7 pin Deutsch circular connector",
                  },
                ],
              },
              {
                title: "EV-Spec",
                subData: [
                  {
                    Icon: (props) => <ThermometerSnowflake {...props} />,
                    title: "Operating Temperature",
                    subTitle: "-55° to +120",
                    description: "°C",
                  },
                  {
                    Icon: (props) => <Waves {...props} />,
                    title: "Vibration Level",
                    subTitle: "16.5",
                    description: "g-random 20-2000 Hz",
                  },
                  {
                    Icon: (props) => <Clock {...props} />,
                    title: "Shock Level",
                    subTitle: "40",
                    description: "g, 100 m/sec",
                  },
                  { title: "Operation", subTitle: "Intermittent" },
                  {
                    Icon: (props) => <Mountain {...props} />,
                    title: "Operating Altitude",
                    subTitle: "52",
                    description: "k",
                  },
                ],
              },
            ],
          },
          {
            id: "conventional-pressure-transducer",
            Component: AerospaceComponentsProductDetailPage,
            title: "Conventional Type Transducer",
            shortDescription:
              "It is a conventional strain gauge type high accuracy pressure transducer. It operates at 5VDC and produces 10 mV as output. This type of pressure transducer is specially made for space applications. CACPL Aerospace produced a wide range of pressure transducers starting from 3 bars to 400 bars.",
            heroData: {
              image: {
                src: Images?.ConventionalTransducer,
                alt: "",
              },
              title: "Conventional Type Transducer",
            },
            additionalData: [
              {
                title: "Features",
                subData: [],
              },
              {
                title: "Specifications",
                subData: [
                  {
                    Icon: (props) => <Gauge {...props} />,
                    title: "Measuring Ranges",
                    subTitle:
                      "0-2, 0-5, 0-7, 0-10, 0-20, 0-35, 0-70, 0-200 & 0-330 bar (0 - 4785 psi)",
                  },
                  {
                    Icon: (props) => <ArrowUpDown {...props} />,
                    title: "Mode of Measurement",
                    subTitle: "Absolute and Gauge",
                  },
                  {
                    Icon: (props) => <ShieldCheck {...props} />,
                    title: "Safe Overload (Proof Pressure)",
                    subTitle: "1.5 times of working pressure",
                  },
                  {
                    Icon: (props) => <TrendingUp {...props} />,
                    title: "For 0-3 bar to 0-200 bar",
                    subTitle: "2x Nominal pressure",
                  },
                  {
                    Icon: (props) => <GaugeCircle {...props} />,
                    title: "For 0-300-0330 bar",
                    subTitle: "500 bar / 7250 psi",
                  },
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Nominal Excitation",
                    subTitle: "10V DC ± 5mV",
                  },
                  {
                    Icon: (props) => <Activity {...props} />,
                    title: "Full Scale Output",
                    subTitle: "20 to 21 mV @ 10 volts excitation",
                  },
                  {
                    Icon: (props) => <Thermometer {...props} />,
                    title: "Compensated Temperature Range",
                    subTitle: "-40°C to +120°C",
                  },
                  {
                    Icon: (props) => <SlidersHorizontal {...props} />,
                    title: "Sensitivity",
                    subTitle: "2-0.1 mV/V",
                  },
                  {
                    Icon: (props) => <TrendingDown {...props} />,
                    title: "Nonlinearity + Hysteresis",
                    subTitle:
                      "For 0-3 to 0-300 bar - < .3% FSO For 0-330 bar - < .85% FSO",
                  },
                  {
                    Icon: (props) => <Repeat {...props} />,
                    title: "Hysteresis",
                    subTitle: "≤ 0.5% FSO",
                  },
                  {
                    Icon: (props) => <Target {...props} />,
                    title: "Zero Imbalance",
                    subTitle: "± 0.50 mV -0",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title: "Insulation Resistance",
                    subTitle: "> 100 Mega Ohms at 45 VDC",
                  },
                  {
                    Icon: (props) => <Waves {...props} />,
                    title: "Noise Due to Vibration",
                    subTitle: "Mass < 2 Ohms at 10 mA",
                  },
                  {
                    Icon: (props) => <Cable {...props} />,
                    title: "Pin To Pin",
                    subTitle: "< 20 m Ohms at 10 mA",
                  },
                  {
                    Icon: (props) => <RotateCw {...props} />,
                    title: "Zero Drift & Sensitivity Drift",
                    subTitle: "≤ 0.5% FSO",
                  },
                  {
                    Icon: (props) => <VolumeX {...props} />,
                    title: "Noise due to Vibration",
                    subTitle: "≤ 0.1% FSO",
                  },
                  {
                    Icon: (props) => <Settings {...props} />,
                    title: "Pressure Inlet",
                    subTitle: "Male M14 x 1.5-6 h Thread",
                  },
                ],
              },
              {
                title: "EV-Spec",
                subData: [
                  {
                    Icon: (props) => <ThermometerSnowflake {...props} />,
                    title: "Operating Temperature",
                    subTitle: "-55° to +120",
                    description: "°C",
                  },
                  {
                    Icon: (props) => <Waves {...props} />,
                    title: "Vibration Level",
                    subTitle: "16.5",
                    description: "g-random 20-2000 Hz",
                  },
                  {
                    Icon: (props) => <ZapOff {...props} />,
                    title: "Shock Level",
                    subTitle: "40",
                    description: "g, 100 m/sec",
                  },
                  { title: "Operation", subTitle: "Intermittent" },
                  {
                    Icon: (props) => <Clock {...props} />,
                    title: "Operating Altitude",
                    subTitle: "52",
                    description: "k",
                  },
                ],
              },
            ],
          },
          {
            id: "accelerometer",
            Component: AerospaceComponentsProductDetailPage,
            title: "Accelerometer",
            shortDescription:
              "Piezoelectric accelerometers for vibration measurement on engine for safety of flight",
            heroData: {
              image: {
                src: Images?.Accelerometer,
                alt: "",
              },
              title: "Accelerometer",
            },
            additionalData: [
              {
                title: "Features",
                subData: [],
              },
              {
                title: "Specifications",
                subData: [
                  {
                    Icon: (props) => <Gauge {...props} />,
                    title: "Accelerometer",
                    subTitle: "Piezoelectric type",
                  },
                  {
                    Icon: (props) => <Weight {...props} />,
                    title: "Weight",
                    subTitle: "8 g",
                  },
                  {
                    Icon: (props) => <Layers {...props} />,
                    title: "Material (Housing)",
                    subTitle: "TI - 6 AI - 4 V",
                  },
                  {
                    Icon: (props) => <Atom {...props} />,
                    title: "Material (Sensing)",
                    subTitle: "PZT",
                  },
                  {
                    Icon: (props) => <Factory {...props} />,
                    title: "Microdot Connector",
                    subTitle: "In build (Indigenously developed)",
                  },
                  {
                    Icon: (props) => <TrendingUp {...props} />,
                    title: "Vibration",
                    subTitle: "100 g",
                  },
                  {
                    Icon: (props) => <Activity {...props} />,
                    title: "Output",
                    subTitle: "8 pC/g",
                  },
                  {
                    Icon: (props) => <AudioWaveform {...props} />,
                    title: "Frequency",
                    subTitle: "6000 Hz",
                  },
                  {
                    Icon: (props) => <Rocket {...props} />,
                    title: "Application",
                    subTitle:
                      "Vibration testing in Rocket Engines during launch and ground testing",
                  },
                  {
                    Icon: (props) => <Vibrate {...props} />,
                    title: "Vibration Levels",
                    subTitle: "13.5 g",
                  },
                ],
              },
              {
                title: "EV-Spec",
                subData: [
                  {
                    Icon: (props) => <Thermometer {...props} />,
                    title: "Operating Temperature",
                    subTitle: "-40 to +120",
                    description: "°C",
                  },
                  {
                    Icon: (props) => <Shuffle {...props} />,
                    title: "Random Vibration - Survival Design",
                    subTitle: "1000",
                    description: "g-random 20-2000 Hz",
                  },
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Shock Level - Survival Design",
                    subTitle: "1000",
                    description: "g, 100 m/sec",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "solenoid",
        Component: AerospaceComponentsDetailPage,
        title: "Solenoid",
        image: {
          src: Images?.Solenoid,
          alt: "",
        },
        shortDescription:
          "We build high-speed and custom-specific solenoids critical in aerospace applications that operate in less than one millisecond response time.",
        heroData: {
          image: { src: Images?.Solenoid, alt: "" },
          title: "SOLENOID",
        },
        layerTwoProducts: [
          {
            id: "solenoids-2-way",
            Component: AerospaceComponentsProductDetailPage,
            title: "Solenoids - 2 Way",
            shortDescription:
              "CACPL Aerospace is one of the major manufacturers of various types of solenoid valves for aircraft applications which are build to print as per the customer specifications and Special process requirements.",
            heroData: {
              image: {
                src: Images?.Solenoid2Way,
                alt: "",
              },
              title: "Solenoids - 2 Way",
            },
            additionalData: [
              {
                title: "Features",
                subData: [],
              },
              {
                title: "Specifications",
                subData: [
                  {
                    Icon: (props) => <CircuitBoard {...props} />,
                    title: "Coil Resistance",
                    subTitle: "27.9 TO 34.1 Ohms",
                  },
                  {
                    Icon: (props) => <Shield {...props} />,
                    title: "Dielectric strength",
                    subTitle:
                      "no arc over or max Current drain 0.500 mA @ 1050 Vrms at 60 HZ",
                  },
                  {
                    Icon: (props) => <ShieldCheck {...props} />,
                    title: "Insulation Resistance",
                    subTitle: "> 10 MΩ 500 ± 50Vdc",
                  },
                  {
                    Icon: (props) => <Gauge {...props} />,
                    title: "Operational check",
                    subTitle: "Inlet pressure 90 psi g at 10.0 Vdc max",
                  },
                  {
                    Icon: (props) => <TrendingDown {...props} />,
                    title: "Drop-out current check",
                    subTitle: "Max 350 mA",
                  },
                  {
                    Icon: (props) => <Droplet {...props} />,
                    title: "Port Leakage at 110 psig",
                    subTitle:
                      "A) Leak Rate at Energized condition: 0.005 Lb per minute maximum. B) Leak Rate at De- Energized condition: 0.005 Lb per minute maximum.",
                  },
                  {
                    Icon: (props) => <Wind {...props} />,
                    title: "Airflow at 110 psig",
                    subTitle:
                      "A) Air flow at Energized condition 0.55 Lb per minute minimum. B) Air flow at De- energized condition 0.55 Lb per minute minimum.",
                  },
                ],
              },
              {
                title: "EV-Spec",
                subData: [],
              },
            ],
          },
          {
            id: "high-speed-solenoids",
            Component: AerospaceComponentsProductDetailPage,
            title: "High Speed Solenoids",
            shortDescription:
              " CACPL Aerospace is involved in developing high speed solenoids for Critical aerospace applications which are built to spec to operate less than 1 millisecond response time.",
            heroData: {
              image: {
                src: Images?.HighSpeedSolenoids,
                alt: "",
              },
              title: "High Speed Solenoids",
            },
            additionalData: [
              {
                title: "Features",
                subData: [],
              },
              {
                title: "Specifications",
                subData: [
                  {
                    Icon: (props) => <Wind {...props} />,
                    title: "Operating Medium",
                    subTitle: "Helium",
                  },
                  {
                    Icon: (props) => <Gauge {...props} />,
                    title: "Max Operating Pressure",
                    subTitle: "100 kg/cm² / 1450 psi",
                  },
                  {
                    Icon: (props) => <ZapOff {...props} />,
                    title: "Burst Pressure",
                    subTitle: "200 kg/cm² / 2900 psi",
                  },
                  {
                    Icon: (props) => <SlidersHorizontal {...props} />,
                    title: "Type Of Valve",
                    subTitle: "Two port ,Two Position",
                  },
                  {
                    Icon: (props) => <Ruler {...props} />,
                    title: "Maximum size of Valve",
                    subTitle: "Dia 25 x 50 mm",
                  },
                  {
                    Icon: (props) => <Bolt {...props} />,
                    title: "Operating Voltage",
                    subTitle: "7 VDC Nominal",
                  },
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Current Holding",
                    subTitle: "1 amp",
                  },
                  {
                    Icon: (props) => <TrendingUp {...props} />,
                    title: "Peak Current",
                    subTitle: "4 amps",
                  },
                  {
                    Icon: (props) => <Timer {...props} />,
                    title: "Response of the Valve",
                    subTitle: "1 ms",
                  },
                  {
                    Icon: (props) => <MoveHorizontal {...props} />,
                    title: "Port Size",
                    subTitle:
                      ".6 mm for one outlet (To actuator) 1.5 mm for the other outlet to atmosphere",
                  },
                  {
                    Icon: (props) => <Droplet {...props} />,
                    title: "Leakage",
                    subTitle: "< 0.01 gm/sec at 100 bar",
                  },
                  {
                    Icon: (props) => <Repeat {...props} />,
                    title: "Operation Life Cycles",
                    subTitle: "180,000/ 30 minutes operations",
                  },
                ],
              },
              {
                title: "EV-Spec",
                subData: [
                  {
                    Icon: (props) => <Waves {...props} />,
                    title: "Random Vibration",
                    subTitle: "0.1",
                    description:
                      "g2/Hz , 20-2000 Hz, duration 500 secs in all three axes",
                  },
                  {
                    Icon: (props) => <Zap {...props} />,
                    title: "Shock",
                    subTitle: "100",
                    description:
                      "g, 4/6 ms, Half sine wave, 3 Shocks along each axis and directions",
                  },
                  {
                    Icon: (props) => <CloudRain {...props} />,
                    title: "Dump Heat",
                    subTitle: "100°",
                    description: "c, RH greater than 85% for 6 hrs",
                  },
                  {
                    Icon: (props) => <Activity {...props} />,
                    title: "Bumps",
                    subTitle: "4000",
                    description: "bumps, 60g each of 4 m/sec",
                  },
                  {
                    Icon: (props) => <TrendingUp {...props} />,
                    title: "Acceleration",
                    subTitle: "60",
                    description: "g in all three axes",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    additionalData: [
      {
        title: "Why Choose Highcon for Aerospace Components?",
        subData: [
          {
            title: "Extreme Precision Engineering",
            description:
              "State-of-the-art manufacturing processes ensure components meet the tightest tolerances and specifications.",
          },
          {
            title: "Rigorous Quality Control",
            description:
              "100% inspection and testing protocols ensure every component meets aerospace industry standards.",
          },
          {
            title: "Advanced Materials Expertise",
            description:
              "Experience working with titanium, Inconel, aluminum alloys, and other aerospace-grade materials.",
          },
          {
            title: "On-Time Delivery",
            description:
              "Proven track record of meeting critical deadlines without compromising on quality or precision.",
          },
        ],
      },
    ],
  },
  {
    id: "tower-cranes",
    Component: TowerCranesPage,
    title: "Tower Cranes",
    heroData: {
      image: {
        src: Images?.TowerCrane,
        alt: "tower-cranes",
      },
      title: "Heavy-Duty Cranes Engineered for Strength & Reliability",
      description:
        "Highcon delivers precision-built EOT and Tower Cranes designed to handle demanding industrial environments with safety, stability, and long-term performance.",
    },
    layerOneProducts: [
      {
        id: "mobile-tower-crane-2418",
        Component: TowerCraneDetailPage,
        title: "Mobile Tower Crane",
        image: {
          src: Images?.MobileTowerCrane,
          alt: "Mobile Tower Crane MTC 2418",
        },
        shortDescription:
          "Highcon Mobile Tower Cranes are used for civil construction and erection jobs, these are self-erecting / self-folding machines. These have provisions for built-in generators to provide electricity needed to operate the machines. The Company currently manufactures Mobile Tower Cranes, which can work on 6 to 12 storeyed buildings.",
        heroData: {
          image: { src: Images?.MobileTowerCrane1, alt: "" },
          title: "Mobile Tower Crane",
          subtitle: "MTC 2418",
        },
        technicalSpecifications: {
          standardFeatures: [
            { heading: "Jib Length", value: "18m" },
            { heading: "Max Height", value: "24m" },
            { heading: "Lifting Capacity", value: "1.6t" },
            { heading: "Tip Load", value: "550 kg" },
          ],
        },
        additionalData: [
          {
            title: "Key Features",
            subData: [
              {
                title:
                  "Self-erecting and self-folding design for easy setup and transport",
              },
              {
                title:
                  "Built-in generator provisions for independent power supply",
              },
              { title: "Suitable for 6 to 12 storeyed buildings" },
              { title: "Ideal for civil construction and erection jobs" },
              { title: "Compact footprint for congested construction sites" },
              { title: "Advanced safety systems and controls" },
              { title: "Durable construction for long-term reliability" },
              { title: "Efficient material handling capabilities" },
            ],
          },
          {
            title: "Ideal Applications",
            subData: [
              {
                title: "Mid-Rise Buildings",
                description:
                  "Perfect for 6 to 12 storeyed residential and commercial buildings with efficient vertical material handling.",
                Icon: (props) => <Hotel {...props} />,
              },
              {
                title: "Civil Construction",
                description:
                  "Ideal for general civil construction projects requiring reliable lifting and material handling capabilities.",
                Icon: (props) => <House {...props} />,
              },
              {
                title: "Erection Projects",
                description:
                  "Specifically designed for erection jobs with self-folding capabilities for easy deployment.",
                Icon: (props) => <Map {...props} />,
              },
              {
                title: "Urban Sites",
                description:
                  "Compact design suitable for congested urban construction sites with limited space.",
                Icon: (props) => <Landmark {...props} />,
              },
              {
                title: "Remote Locations",
                description:
                  "Built-in generator provisions make it ideal for sites with limited or no power infrastructure.",
                Icon: (props) => <MapPinHouse {...props} />,
              },
              {
                title: "Quick Setup Projects",
                description:
                  "Self-erecting design enables rapid deployment for time-sensitive construction projects.",
                Icon: (props) => <Zap {...props} />,
              },
            ],
          },
        ],
      },
      {
        id: "mobile-tower-crane-3625",
        Component: TowerCraneDetailPage,
        title: "Mobile Tower Crane",
        image: {
          src: Images?.TowerCrane1,
          alt: "",
        },
        shortDescription:
          "Highcon Mobile Tower Cranes are used for civil construction and erection jobs, these are self-erecting / self-folding machines. These have provisions for built-in generators to provide electricity needed to operate the machines. The Company currently manufactures Mobile Tower Cranes, which can work on 6 to 12 storeyed buildings.",
        heroData: {
          image: { src: Images?.TowerCrane, alt: "" },
          title: "Mobile Tower Crane",
          subtitle: "MTC 3625",
        },
        technicalSpecifications: {
          standardFeatures: [
            { heading: "Jib Length", value: "25m" },
            { heading: "Max Height", value: "36m" },
            { heading: "Lifting Capacity", value: "2.5t" },
            { heading: "Tip Load", value: "800 kg" },
          ],
        },
        additionalData: [
          {
            title: "Key Features",
            subData: [
              {
                title:
                  "Self-erecting and self-folding design for easy setup and transport",
              },
              {
                title:
                  "Built-in generator provisions for independent power supply",
              },
              { title: "Suitable for 6 to 12 storeyed buildings" },
              { title: "Ideal for civil construction and erection jobs" },
              { title: "Compact footprint for congested construction sites" },
              { title: "Advanced safety systems and controls" },
              { title: "Durable construction for long-term reliability" },
              { title: "Efficient material handling capabilities" },
              { title: "Enhanced lifting capacity for heavier loads" },
              { title: "Extended jib length for wider coverage area" },
            ],
          },
          {
            title: "Ideal Applications",
            description:
              "The Mobile Tower Crane MTC 3625 is versatile and designed for various construction scenarios",
            subData: [
              {
                title: "Mid-Rise Buildings",
                description:
                  "Perfect for 6 to 12 storeyed residential and commercial buildings with efficient vertical material handling.",
                Icon: (props) => <Hotel {...props} />,
              },
              {
                title: "Civil Construction",
                description:
                  "Ideal for general civil construction projects requiring reliable lifting and material handling capabilities.",
                Icon: (props) => <House {...props} />,
              },
              {
                title: "Erection Projects",
                description:
                  "Specifically designed for erection jobs with self-folding capabilities for easy deployment.",
                Icon: (props) => <Map {...props} />,
              },
              {
                title: "Urban Sites",
                description:
                  "Compact design suitable for congested urban construction sites with limited space.",
                Icon: (props) => <Landmark {...props} />,
              },
              {
                title: "Remote Locations",
                description:
                  "Built-in generator provisions make it ideal for sites with limited or no power infrastructure.",
                Icon: (props) => <MapPinHouse {...props} />,
              },
              {
                title: "Quick Setup Projects",
                description:
                  "Self-erecting design enables rapid deployment for time-sensitive construction projects.",
                Icon: (props) => <Zap {...props} />,
              },
            ],
          },
        ],
      },
    ],
    additionalData: [
      {
        title: "Tower Crane Specifications",
        subData: [
          {
            Icon: (props) => <Ruler {...props} />,
            title: "Maximum Height",
            subTitle: "Up to 80 meters",
            description: "Customizable based on project requirements",
          },
          {
            Icon: (props) => <MoveHorizontal {...props} />,
            title: "Max Reach",
            subTitle: "Up to 70 meters",
            description: "Extended jib configurations available",
          },
          {
            Icon: (props) => <Scale {...props} />,
            title: "Lifting Capacity",
            subTitle: "Up to 20 tons",
            description: "Variable capacities based on model",
          },
          {
            Icon: (props) => <Zap {...props} />,
            title: "Power Supply",
            subTitle: "380V/50Hz",
            description: "Adaptable to local power standards",
          },
        ],
      },
      {
        title: "Ideal Applications",
        description:
          "Our tower cranes are designed for versatility and reliability across various construction projects",
        subData: [
          {
            title: "Mid-Rise Buildings",
            description:
              "Perfect for 6 to 12 storeyed residential and commercial buildings with efficient vertical material handling.",
            Icon: (props) => <Hotel {...props} />,
          },
          {
            title: "Civil Construction",
            description:
              "Ideal for general civil construction projects requiring reliable lifting and material handling capabilities.",
            Icon: (props) => <House {...props} />,
          },
          {
            title: "Erection Projects",
            description:
              "Specifically designed for erection jobs with self-folding capabilities for easy deployment.",
            Icon: (props) => <Map {...props} />,
          },
          {
            title: "Urban Sites",
            description:
              "Compact design suitable for congested urban construction sites with limited space.",
            Icon: (props) => <Landmark {...props} />,
          },
          {
            title: "Remote Locations",
            description:
              "Built-in generator provisions make it ideal for sites with limited or no power infrastructure.",
            Icon: (props) => <MapPinHouse {...props} />,
          },
          {
            title: "Quick Setup Projects",
            description:
              "Self-erecting design enables rapid deployment for time-sensitive construction projects.",
            Icon: (props) => <Zap {...props} />,
          },
        ],
      },
    ],
  },
  {
    id: "eot-crane-manufacturers-coimbatore",
    Component: CranesPage,
    title: "EOT Cranes",
    meta_title: "Best EOT Crane Manufacturers in Coimbatore | Highcon",
    meta_description: "Highcon is among the best EOT crane manufacturers in Coimbatore, delivering reliable overhead cranes built to strict quality and safety standards.",
    meta_keywords: "eot crane manufacturers in coimbatore, overhead crane manufacturers coimbatore, eot crane suppliers coimbatore, industrial crane manufacturers in coimbatore, bridge crane manufacturers coimbatore, eot cranes for manufacturing industries, heavy duty overhead cranes india, custom eot crane manufacturer",
    heroData: {
      image: {
        src: Images?.highconEotCranesHero,
        alt: "EOT Cranes",
      },
      title:
        "Overhead cranes and industrial cranes, strength and versatility in movement",
      description:
        "Bridge cranes, like all our standard and special lifting and handling equipment, guarantee high performance in terms of quantity and quality, as they use the best technology available. They are built to last, ensuring excellent operating results in daily and non-daily use, characterised by high standards of safety and reliability.",
    },
    layerOneProducts: [
      {
        id: "single-girder-eot-crane-coimbatore",
        Component: CraneProductDetailPage,
        meta_title: "Single Girder EOT Crane in Coimbatore | Highcon",
        meta_description: "Highcon manufactures single girder EOT cranes in Coimbatore with proven quality, safety standards, and smooth performance for industrial applications.",
        meta_keywords: "single girder eot crane in coimbatore, single girder overhead crane coimbatore, eot crane manufacturers in coimbatore, single girder eot crane supplier, industrial overhead cranes coimbatore,light duty eot crane manufacturer, custom single girder crane india",
        title: "Single-girder overhead crane",
        shortDescription:
          "The most versatile, compact and fast-acting overhead crane, a safe, simple solution for everyday use. It is ideal for production and assembly lines.",
        label: "BRIDGE CRANES",
        heroData: {
          image: {
            src: Images?.highconSingleGridPicture,
            alt: "Single-girder overhead crane",
          },
          title: "Single-girder overhead crane",
          subtitle: "Maximum strength and simple operation anywhere",
        },
        keyPerformanceHighlights: [
          {
            title: "12.5",
            unit: "t",
            value: "Maximum capacity",
          },
          {
            title: "32",
            unit: "m",
            value: "Maximum span",
          },
          {
            title: "A5/M5",
            value: "Class",
          },
        ],
        detailedDescription: {
          title: "Single-girder overhead crane with capacity up to 12.5 t",
          subtitle:
            "The single-girder overhead crane is a solid, reliable, lightweight system, ideal for everyday use in production and assembly lines and suitable for many other applications throughout the manufacturing sector. It performs best when integrated with an OMIS H-Series hoist, which allows hook strokes of up to 20 metres, among other things.",
          description: [
            "It is a compact and safe overhead crane, offering smooth movements and reduced maintenance on all mechanical and electro-mechanical parts, thanks to the inverter control of the three movements. Even in low buildings, these single-girder overhead cranes allow intelligent solutions: their adaptability to different spatial and environmental conditions ensures maximum installation flexibility. The choice of the most suitable configuration adapts to specific lifting height requirements. Optional components, different height configurations and modifications on request make them universal tools, ready to perform their task with precision, manoeuvrability and a long working life.",
          ],
        },
        keyAdvantages: {
          heading: "Advantages of the single-girder overhead crane",
          items: [
            {
              description: "Maximum solidity with low weight",
            },
            {
              description: "Agile even in tight spaces",
            },
            {
              description: "Wide range of configurations and accessories",
            },
            {
              description: "Maximum versatility and solidity",
            },
            {
              description: "Easy maintenance",
            },
          ],
        },
        advantagesImage: [Images?.highconSingleGirderCrane],
        productConfigurations: [
          {
            image: Images?.highconSingleGrigerFront,
            alt: "Single-girder overhead crane configuration 1",
            name: "Front view",
          },
          {
            image: Images?.highconSingleGrigerTop,
            alt: "Single-girder overhead crane configuration 2",
            name: "Top view",
          },
          {
            image: Images?.highconSingleGrigerProspect,
            alt: "Single-girder overhead crane configuration 3",
            name: "Prospect",
          },
        ],
        technicalSpecifications: {
          standardFeatures: [
            { heading: "Capacity", value: "up to 12.5 t" },
            {
              heading: "Sliding speed",
              value: "From 10 to 60 m/min - More on request",
            },
            {
              heading: "Lifting speed",
              value: "Up to 10 m/min with OMIS H-Series hoist",
            },
            {
              heading: "Lifting height",
              value: "From 6 to 20 m with OMIS H-Series hoist",
            },
            {
              heading: "Control",
              value: "Inverter in the three movements",
            },
          ],
          optionalFeatures: [
            {
              heading: "Span",
              value: "Up to 32 m - More on request",
            },
            {
              heading: "Travel speed",
              value: "From 5 to 30 m/min - More on request",
            },
            {
              heading: "Classification",
              value: "- A5/M5- A6/M6 on request",
            },
            { heading: "Protection", value: "IP55" },
          ],
        },
        pictureGallery: [
          {
            image: Images?.highconSingleGrigerPicture1,
            alt: "Single-girder overhead crane in industrial facility",
          },
          {
            image: Images?.highconSingleGrigerPicture2,
            alt: "Single-girder overhead crane with yellow beam",
          },
          {
            image: Images?.highconSingleGrigerPicture3,
            alt: "Single-girder overhead crane installation view",
          },
          {
            image: Images?.highconSingleGrigerPicture4,
            alt: "Single-girder overhead crane gallery image 4",
          },
          {
            image: Images?.highconSingleGrigerPicture5,
            alt: "Single-girder overhead crane gallery image 5",
          },
          {
            image: Images?.highconSingleGrigerPicture6,
            alt: "Single-girder overhead crane gallery image 6",
          },
          {
            image: Images?.highconSingleGrigerPicture7,
            alt: "Single-girder overhead crane gallery image 7",
          },
          {
            image: Images?.highconSingleGrigerPicture8,
            alt: "Single-girder overhead crane gallery image 8",
          },
        ],
      },
      {
        id: "double-girder-eot-crane-coimbatore",
        Component: CraneProductDetailPage,
        title: "Double-girder overhead crane",
        label: "BRIDGE CRANES",
        meta_title: "Double Girder EOT Crane in Coimbatore | Highcon",
        meta_description: "Highcon manufactures double girder EOT cranes in Coimbatore for heavy-duty applications, ensuring high quality, safety standards, and reliable performance.",
        meta_keywords: "double girder eot crane in coimbatore, double girder eot crane manufacturer in coimbatore, double girder eot crane, double girder overhead crane, eot crane manufacturers in coimbatore, heavy duty overhead crane manufacturer, industrial eot cranes coimbatore, custom double girder crane indiadouble girder eot crane manufacturer, double girder eot crane supplier",
        shortDescription:
          "The overhead crane that meets all requirements in terms of load capacity, span and speed, in every environment and sector, up to 150 tonnes. A wide range of accessories and configurations enables the bridge crane to optimise the handling process, meeting even the most demanding requirements, in terms of both structure and performance.",
        heroData: {
          image: { src: Images?.highconDoubleGrigerHero, alt: "" },
          title: "Double-girder overhead crane",
          subtitle:
            "The first choice for transporting medium, heavy and very heavy loads.",
        },
        keyPerformanceHighlights: [
          {
            title: "150",
            unit: "t",
            value: "Maximum capacity",
          },
          {
            title: "32",
            unit: "m",
            value: "Maximum span",
          },
          {
            title: "A8/M8",
            value: "Class",
          },
        ],
        detailedDescription: {
          title: "Double-girder overhead crane with capacity up to 150 t",
          subtitle:
            "The double-girder overhead crane is designed for heavy-duty applications requiring high load capacities and extensive spans. Perfect for industrial environments demanding reliability and performance.",
          description: [
            "The standard double-girder overhead cranes have a load capacity of up to 150 tons and a span of up to 32 m. For a load capacity of up to 12.5 tons, OMIS double-girder overhead cranes can be fitted with a hoist or open barrel hoist. The cranes use inverters, though double-speed motors are also made available on request. OMIS is the first company of its kind in Italy to make extensive use of inverter technology, as it ensures smooth movement and minimal maintenance of all the mechanical and electromechanical parts. For special requirements, the girders can be supplied with bolted joints, which makes it possible to transport them by land and sea in containers. Standard double-girder overhead cranes are A5/M5 classified according to the FEM standards, but are also available with A6/M6 classification, or higher on request.In larger cranes, used in industries such as steel mills, generator production, power plants, forges, mould making, redundant components are frequently integrated to prevent unplanned downtime. At the same time, appropriate maintenance programmes are agreed with the customer to ensure optimum performance.",
          ],
        },
        keyAdvantages: {
          heading: "Advantages of the double-girder overhead crane",
          items: [
            {
              description: "Wide range of configurations and accessories",
            },
            {
              description: "Maximum versatility and solidity",
            },
            {
              description: "Greater customisation",
            },
            {
              description: "Suitable for large capacities and special services",
            },
            {
              description: "Easy maintenance",
            },
          ],
        },
        advantagesImage: [
          Images?.highconDoubleGriger1,
          Images?.highconDoubleGriger2,
          Images?.highconDoubleGriger3,
          Images?.highconDoubleGriger4,
          Images?.highconDoubleGriger5,
          Images?.highconDoubleGriger6,
        ],
        productConfigurations: [
          {
            image: Images?.highconHoist,
            alt: "Double-girder overhead crane configuration 1",
            name: "Hoist",
          },
          {
            image: Images?.highconOpenBarrel,
            alt: "Double-girder overhead crane configuration 2",
            name: "Open barrel hoist",
          },
          {
            image: Images?.highconDoubleFitting,
            alt: "Double-girder overhead crane configuration 3",
            name: "Double lifting",
          },
          {
            image: Images?.highconLargeCapacity,
            alt: "Double-girder overhead crane configuration 4",
            name: "Large capacity",
          },
          {
            image: Images?.highconDoubleGrigertop,
            alt: "Double-girder overhead crane configuration 5",
            name: "Top view",
          },
          {
            image: Images?.highconAutomatic,
            alt: "Double-girder overhead crane configuration 6",
            name: "Automatic",
          },
          {
            image: Images?.highconAutomatic2,
            alt: "Double-girder overhead crane configuration 7",
            name: "Automatic",
          },
        ],
        technicalSpecifications: {
          standardFeatures: [
            {
              heading: "Capacity",
              value: "Up to 150 t - More on request",
            },
            {
              heading: "Sliding speed",
              value: "From 10 to 60 m/min - More on request",
            },
            {
              heading: "Lifting speed",
              value: "Up to 35 m/min",
            },
            {
              heading: "Lifting height",
              value: "20 m - More on request",
            },
            {
              heading: "Control",
              value: "Inverter in the three movements",
            },
          ],
          optionalFeatures: [
            {
              heading: "Span",
              value: "Up to 32 m - More on request",
            },
            {
              heading: "Travel speed",
              value: "From 5 to 40 m/min",
            },
            {
              heading: "Classification",
              value:
                "- A5/M5- A6/M6 on request- A7/M7 on request- A8/M8 on request",
            },
            {
              heading: "Protection",
              value: "IP55",
            },
          ],
        },
        pictureGallery: [
          {
            image: Images?.highconDoublePic1,
            alt: "Double-girder overhead crane view 1",
          },
          {
            image: Images?.highconDoublePic2,
            alt: "Double-girder overhead crane view 2",
          },
          {
            image: Images?.highconDoublePic3,
            alt: "Double-girder overhead crane view 3",
          },
          {
            image: Images?.highconDoublePic4,
            alt: "Double-girder overhead crane view 4",
          },
          {
            image: Images?.highconDoublePic5,
            alt: "Double-girder overhead crane view 5",
          },
          {
            image: Images?.highconDoublePic6,
            alt: "Double-girder overhead crane view 6",
          },
          {
            image: Images?.highconDoublePic7,
            alt: "Double-girder overhead crane view 7",
          },
          {
            image: Images?.highconDoublePic8,
            alt: "Double-girder overhead crane view 8",
          },
          {
            image: Images?.highconDoublePic9,
            alt: "Double-girder overhead crane view 9",
          },
          {
            image: Images?.highconDoublePic10,
            alt: "Double-girder overhead crane view 10",
          },
          {
            image: Images?.highconDoublePic11,
            alt: "Double-girder overhead crane view 11",
          },
          {
            image: Images?.highconDoublePic12,
            alt: "Double-girder overhead crane view 12",
          },
          {
            image: Images?.highconDoublePic13,
            alt: "Double-girder overhead crane view 13",
          },
          {
            image: Images?.highconDoublePic14,
            alt: "Double-girder overhead crane view 14",
          },
        ],
      },
      {
        id: "suspended-electric-crane",
        Component: CraneProductDetailPage,
        title: "Suspended electric crane",
        shortDescription:
          "The single-girder suspended bridge crane with powered sliding is designed to move light and medium-heavy loads in a constant and safe manner, without the operator having to bear any load and leaving the ground completely free.",
        label: "BRIDGE CRANES",
        heroData: {
          image: { src: Images?.highconSuspendedHero, alt: "" },
          title: "Suspended electric crane",
          subtitle: "The winning solution for medium-heavy loads",
        },
        keyPerformanceHighlights: [
          {
            title: "10",
            unit: "t",
            value: "Maximum capacity",
          },
          {
            title: "18",
            unit: "m",
            value: "Maximum span",
          },
          {
            title: "A5/M5",
            value: "Class",
          },
        ],
        detailedDescription: {
          title: "Suspended overhead crane with capacity up to 10 t",
          subtitle:
            "Suspended overhead cranes leave the entire workshop area available for production. The cranes are either hooked to the existing roof structure or anchored to a suitable support structure. This design saves time and costs and offers the optimal solution for lifting and handling light loads even in sheds with relatively small spans.",
          description: [
            "With the strategic arrangement of the workplaces and completely clear ground, they ensure fast and coordinated handling of materials, maximising productivity. The single-girder suspended bridge crane with powered sliding is designed to move light and medium-heavy loads in a constant and safe manner, without the operator having to make any effort. This system is ideal for workstations and production lines that require lifting up to 10000 kg and constant safe handling of materials between workstations. In addition, the versatility, ease of use and quick installation of suspended systems make them the best choice for handling that requires specific approaches. The motors used are of the highest quality and guarantee smooth and even handling of loads.",
          ],
        },
        keyAdvantages: {
          heading: "Advantages of the suspended electric crane",
          items: [
            {
              description: "Better approach than a placed crane",
            },
            {
              description: "Ground free from obstructions",
            },
            {
              description: "Smaller footprint",
            },
            {
              description: "Operational versatility",
            },
            {
              description: "Excellent performance/cost/function/use ratio",
            },
            {
              description: "Increased productivity and safety",
            },
          ],
        },
        advantagesImage: [Images?.highconSuspended1],
        productConfigurations: [
          {
            image: Images?.highconSuspended1,
            alt: "Suspended electric crane configuration 1",
            name: "Front view",
          },
          {
            image: Images?.highconSusTop,
            alt: "Suspended electric crane configuration 2",
            name: "Top view",
          },
          {
            image: Images?.highconSusProspect,
            alt: "Suspended electric crane configuration 3",
            name: "Prospect",
          },
          {
            image: Images?.highconSusDetail,
            alt: "Suspended electric crane configuration 4",
            name: "Detail",
          },
        ],
        technicalSpecifications: {
          standardFeatures: [
            {
              heading: "Capacity",
              value: "From 500 kg to 10 t - More on request",
            },
            { heading: "Class", value: "A5/M5" },
            {
              heading: "Lifting speed",
              value: "From 4 m/min",
            },
            {
              heading: "Structure",
              value:
                "Single-girder - A double-girder structure can be provided on request",
            },
          ],
          optionalFeatures: [
            {
              heading: "Span",
              value: "Up to 18 m - More on request",
            },
            {
              heading: "Sliding speed",
              value: "Up to 40 m/min",
            },
            { heading: "Protection", value: "IP55" },
            {
              heading: "Side cantilevers",
              value: "On request - maximum 1 m per side, more on request",
            },
          ],
        },
        pictureGallery: [
          {
            image: Images?.highconSusPic1,
            alt: "Suspended electric crane view 1",
          },
          {
            image: Images?.highconSusPic2,
            alt: "Suspended electric crane view 2",
          },
          {
            image: Images?.highconSusPic3,
            alt: "Suspended electric crane view 3",
          },
          {
            image: Images?.highconSusPic4,
            alt: "Suspended electric crane view 4",
          },
        ],
      },
      {
        id: "wall-travelling-crane",
        Component: CraneProductDetailPage,
        title: "Wall travelling crane",
        label: "BRIDGE CRANES",
        shortDescription:
          "The bridge crane, structured like a sliding bracket, efficiently serves several workstations located next to each other, quickly and safely.",
        heroData: {
          image: { src: Images?.highconWallTravelling, alt: "" },
          title: "Wall travelling crane",
          subtitle:
            "Ideal for managing several consecutive work stations within a long shed",
        },
        keyPerformanceHighlights: [
          {
            title: "4",
            unit: "t",
            value: "Maximum capacity",
          },
          {
            title: "9",
            unit: "m",
            value: "Maximum span",
          },
          {
            title: "A5/M5",
            value: "Class",
          },
        ],
        detailedDescription: {
          title: "Wall travelling crane with capacity up to 4 t",
          subtitle:
            "Wall travelling cranes are the ideal solution for workstations arranged next to each other. They are used for transporting materials to individual workstations and at the same time to position the material by bringing it to the assembly stations.",
          description: [
            "These cranes are equipped with a cantilever boom and a lengthwise sliding mechanism, moving below the level of the main overhead crane, on runway rails arranged in an overlapping position along the wall of the building. These are therefore systems that actually operate one level below the large overhead cranes, enabling a consistent flow of materials to other production areas. The structure is optimised for the use of the OMIS H-Series rope hoist. The main advantage of wall travelling cranes is that there are no additional physical obstacles at floor level, such as a column or the base of a semi-gantry crane.",
          ],
        },
        keyAdvantages: {
          heading: "Advantages of the wall travelling crane",
          items: [
            {
              description: "Greater cover",
            },
            {
              description: "Operational versatility",
            },
            {
              description: "Also suitable for large lengths",
            },
            {
              description: "Increased productivity and safety",
            },
          ],
        },
        advantagesImage: [Images?.highconwall1],
        productConfigurations: [
          {
            image: Images?.highconWallFront,
            alt: "Wall travelling crane configuration 1",
            name: "Front view",
          },
          {
            image: Images?.highconWallTop,
            alt: "Wall travelling crane configuration 2",
            name: "Top view",
          },
          {
            image: Images?.highconWallProspect,
            alt: "Wall travelling crane configuration 3",
            name: "Prospect",
          },
        ],
        technicalSpecifications: {
          standardFeatures: [
            { heading: "Capacity", value: "Up to 4 t" },
            {
              heading: "Class",
              value: "A5/M5",
            },
            {
              heading: "Sliding speed",
              value: "From 20 m/min",
            },
            {
              heading: "Lifting speed",
              value: "From 4 m/min",
            },
            {
              heading: "Control",
              value: "Inverter in the three movements",
            },
          ],
          optionalFeatures: [
            {
              heading: "Extension",
              value: "Up to 9 m depending on capacity",
            },
            {
              heading: "Maximum under-beam height",
              value: "6 m (adaptable to operational requirements)",
            },
            { heading: "Travel speed", value: "From 20 m/min" },
            { heading: "Protection", value: "IP55" },
          ],
        },
        pictureGallery: [
          {
            image: Images?.highconWallPic1,
            alt: "Wall travelling crane view 1",
          },
          {
            image: Images?.highconWallPic2,
            alt: "Wall travelling crane view 2",
          },
          {
            image: Images?.highconWallPic3,
            alt: "Wall travelling crane view 3",
          },
        ],
      },
      {
        id: "semi-gantry-crane-manufacturers-coimbatore",
        Component: CraneProductDetailPage,
        title: "Semi-gantry cranes",
        label: "BRIDGE CRANES",
        meta_title: "Semi Gantry Crane Manufacturers in Coimbatore | Highcon",
        meta_description: "Highcon is a reliable semi gantry crane manufacturer in Coimbatore, offering safe, high-quality cranes for indoor and outdoor industrial applications.",
        meta_keywords: "semi gantry crane manufacturers in coimbatore, semi gantry crane coimbatore, semi gantry overhead crane, industrial semi gantry crane, single girder semi gantry crane, double girder semi gantry crane, eot semi gantry crane, heavy duty semi gantry crane india, custom semi gantry crane manufacturer",
        shortDescription:
          "The semi-gantry crane, with single or double girder, is decisive in areas below a large overhead crane system. Robust and versatile, it frees up floor space and safeguards operator safety.",
        heroData: {
          image: {
            src: Images?.highconsemiHero,
            alt: "",
          },
          title: "Semi-gantry cranes",
          subtitle: "Free ground and versatility, indoors and out",
        },
        keyPerformanceHighlights: [
          {
            title: "10",
            unit: "t",
            value: "Maximum capacity",
          },
          {
            title: "15",
            unit: "m",
            value: "Maximum span",
          },
          {
            title: "A4/M4",
            value: "Class",
          },
        ],
        detailedDescription: {
          title: "Semi-gantry crane with capacity up to 10 t",
          subtitle:
            "Ideal for activities in areas below a large overhead crane system, as it leaves the ground completely free. It is an effective multi-purpose tool for indoor or outdoor use. In single-girder configuration, with a capacity of up to 5 tonnes, or double-girder up to 10 tonnes, it operates on its own rail, placed at an intermediate level with respect to that of the main overhead crane, and can also be used as a crane to make different workstations autonomous.",
          description: [
            "The structure of our semi-gantry cranes consists of a powered end carriage sliding along the overhead runways, connected to a vertical support structure linked to a second powered end carriage sliding on the ground. These cranes are not only an economically advantageous solution, especially in situations where the installation of overhead cranes would be complex or impractical for structural reasons, but are also an ideal complement to indoor logistics solutions, being suitable for both outdoor and indoor use. Our cranes offer high performance, even in limited spaces, thanks to their design focused on simplicity, modularity and maximum usability. The specially designed structure gives adaptability to different types of industrial fields and work areas, ensuring efficient optimisation of internal load handling. The best performance is achieved using the OMIS H-Series hoist. The free movement of personnel and material is ensured by the use of rubberised wheels (single-girder version), which eliminate limitations caused by interfering edges and tracks in the floor. On request, an obstacle detection device, indicator lights at operator level and LED lamps to illuminate the working area or displays indicating the weight of the load being handled can be installed. These options increase safety in the surrounding area, creating a reliable and protected working environment.",
          ],
        },
        keyAdvantages: {
          heading: "Advantages of semi-gantry cranes",
          items: [
            {
              description: "Optimal functionality in different environments",
            },
            {
              description: "Operational versatility",
            },
            {
              description: "Greater customisation",
            },
            {
              description: "Limited maintenance",
            },
            {
              description: "Increased productivity and safety",
            },
          ],
        },
        advantagesImage: [Images?.highconsemi1, Images?.highconsemi2],
        productConfigurations: [
          {
            image: Images?.highconsemiSingle,
            alt: "Semi-gantry crane configuration 1",
            name: "Single girder",
          },
          {
            image: Images?.highconsemiTop,
            alt: "Semi-gantry crane configuration 2",
            name: "Top view",
          },
          {
            image: Images?.highconsemiProspect,
            alt: "Semi-gantry crane configuration 3",
            name: "Prospect",
          },
          {
            image: Images?.highconsemiDouble,
            alt: "Semi-gantry crane configuration 4",
            name: "Double girder",
          },
          {
            image: Images?.highconsemiTop2,
            alt: "Semi-gantry crane configuration 5",
            name: "Top view",
          },
          {
            image: Images?.highconsemiProspect2,
            alt: "Semi-gantry crane configuration 6",
            name: "Prospect",
          },
          {
            image: Images?.highconsemiDetail,
            alt: "Semi-gantry crane configuration 7",
            name: "Detail",
          },
        ],
        technicalSpecifications: {
          standardFeatures: [
            {
              heading: "Capacity",
              value:
                "Single-girder: up to 5 t - More on requestDouble-girder: up to 10 t - More on request",
            },
            { heading: "Class", value: "A4/M4" },
            { heading: "Sliding speed", value: "Up to 40 m/min" },
            {
              heading: "Lifting speed",
              value:
                "Up to 10 m/min with OMIS H-Series hoistUp to 12m/min with OMIS open barrel hoist",
            },
            {
              heading: "Control",
              value: "Inverter in the three movements",
            },
          ],
          optionalFeatures: [
            { heading: "Span", value: "Up to 15 m" },
            { heading: "Maximum under-beam height", value: "6 m" },
            { heading: "Travel speed", value: "Up to 20 m/min" },
            { heading: "Protection", value: "IP54" },
          ],
        },
        pictureGallery: [
          {
            image: Images?.highconsemiPic1,
            alt: "Semi-gantry crane view 1",
          },
          {
            image: Images?.highconsemiPic2,
            alt: "Semi-gantry crane view 2",
          },
          {
            image: Images?.highconsemiPic3,
            alt: "Semi-gantry crane view 3",
          },
          {
            image: Images?.highconsemiPic4,
            alt: "Semi-gantry crane view 4",
          },
          {
            image: Images?.highconsemiPic5,
            alt: "Semi-gantry crane view 5",
          },
          {
            image: Images?.highconsemiPic6,
            alt: "Semi-gantry crane view 6",
          },
          {
            image: Images?.highconsemiPic7,
            alt: "Semi-gantry crane view 7",
          },
          {
            image: Images?.highconsemiPic8,
            alt: "Semi-gantry crane view 8",
          },
          {
            image: Images?.highconsemiPic9,
            alt: "Semi-gantry crane view 9",
          },
        ],
      },
      {
        id: "gantry-crane-manufacturers-coimbatore",
        Component: CraneProductDetailPage,
        title: "Gantry cranes",
        label: "BRIDGE CRANES",
        meta_title: "Gantry Crane Manufacturers in Coimbatore | Highcon",
        meta_description: "Highcon is a trusted gantry crane manufacturer in Coimbatore, delivering heavy-duty indoor and outdoor cranes built to safety and quality standards.",
        meta_keywords: "gantry crane manufacturers in coimbatore, gantry crane coimbatore, industrial gantry crane manufacturers, gantry crane manufacturers in india, heavy duty gantry crane india, gantry crane manufacturers, single girder gantry crane, double girder gantry crane, portable gantry crane manufacturer, outdoor gantry crane supplier, eot gantry crane manufacturers",
        shortDescription:
          "Single- and double-girder gantry cranes, designed to meet the specific operational needs of companies and sectors. They can be used effectively both inside and outside the facility.",
        heroData: {
          image: { src: Images?.highcongantry, alt: "" },
          title: "Gantry cranes",
          subtitle:
            "Real giants designed for heavy indoor and outdoor movement",
        },
        keyPerformanceHighlights: [
          {
            title: "50",
            unit: "t",
            value: "Maximum capacity",
          },
          {
            title: "30",
            unit: "m",
            value: "Maximum span",
          },
          {
            title: "A4/M4",
            value: "Class",
          },
        ],
        detailedDescription: {
          title: "Gantry crane with capacity up to 50 t",
          subtitle:
            "OMIS has been building excellent mobile gantry cranes, both single- and double-girder, since its foundation.",
          description: [
            "Our cranes are built with the classic system of the hinged portal, next to the flanged one, an optimal solution to avoid misalignments and excessive wear of the sliding mechanisms.",
            "This construction system, combined with the use of production lines specifically designed to build cranes of this type, makes it possible to create gantry cranes with extremely smooth movements, resulting in a significant reduction in maintenance interventions.",
            "Gantry cranes run on rails on the ground, eliminating the need for a runway. Gantry/portable gantry cranes are most commonly used outdoors, in warehouses, storage parks and loading areas, allowing for shorter manoeuvring times than conventional systems. These systems operate similarly to bridge cranes, but their structure does not rest on the surface of the building; instead, it is supported on steel legs equipped with power-driven trolleys. They are designed to meet the needs of industries that require transport systems for heavy or large loads",
            "They can also be used in production lines, helping to maintain the fluidity of the assembly process, and can be installed outdoors without the need for a support structure or inside unsuitable buildings. They are the ideal solution when building large infrastructures and civil works, as well as on prefabrication sites (concrete/wood etc.). They offer flexibility as they can be customised to meet specific needs, such as optimising the area served by the crane or integrating dedicated weighing systems. Sometimes the gantry crane is installed in an existing building, indoors, and slides under a previously installed overhead crane, so that an additional, independent material flow is achieved.",
          ],
        },
        keyAdvantages: {
          heading: "Advantages of gantry cranes",
          items: [
            {
              description: "Optimal functionality in different environments",
            },
            {
              description: "Greater load capacity",
            },
            {
              description: "Greater customisation",
            },
            {
              description: "Limited maintenance",
            },
            {
              description: "Increased productivity and safety",
            },
          ],
        },
        advantagesImage: [Images?.highcongantry1, Images?.highcongantry2],
        productConfigurations: [
          {
            image: Images?.highcongantrySingle,
            alt: "Gantry crane configuration 1",
            name: "Single girder",
          },
          {
            image: Images?.highcongrantryDouble,
            alt: "Gantry crane configuration 2",
            name: "Double girder",
          },
          {
            image: Images?.highcongantryTop,
            alt: "Gantry crane configuration 3",
            name: "Top view",
          },
          {
            image: Images?.highcongantry2,
            alt: "Gantry crane configuration 4",
            name: "Detail",
          },
        ],
        technicalSpecifications: {
          standardFeatures: [
            {
              heading: "Capacity",
              value: "Up to 50 t - More on request",
            },
            { heading: "Class", value: "A4/M4" },
            { heading: "Sliding speed", value: "From 40 m/min" },
            {
              heading: "Protection",
              value: "IP55",
            },
          ],
          optionalFeatures: [
            {
              heading: "Span",
              value: "Up to 30 m - More on request",
            },
            {
              heading: "Under-beam height",
              value: "7 m - More on request",
            },
            { heading: "Side cantilevers", value: "On request" },
            {
              heading: "Control",
              value: "Inverter in the three movements",
            },
          ],
        },
        pictureGallery: [
          {
            image: Images?.highcongantryPic1,
            alt: "Gantry crane view 1",
          },
          {
            image: Images?.highcongantryPic2,
            alt: "Gantry crane view 2",
          },
          {
            image: Images?.highcongantryPic3,
            alt: "Gantry crane view 3",
          },
          {
            image: Images?.highcongantryPic4,
            alt: "Gantry crane view 4",
          },
          {
            image: Images?.highcongantryPic5,
            alt: "Gantry crane view 5",
          },
          {
            image: Images?.highcongantryPic6,
            alt: "Gantry crane view 6",
          },
          {
            image: Images?.highcongantryPic7,
            alt: "Gantry crane view 7",
          },
        ],
      },
      {
        id: "portable-gantry-crane-manufacturers-coimbatore",
        Component: CraneProductDetailPage,
        title: "Portable gantry crane",
        shortDescription:
          "A robust and manoeuvrable mobile system, always available wherever it is needed. Ideal where the characteristics or configuration of the environment do not allow the installation of a bridge crane.",
        label: "BRIDGE CRANES",
        heroData: {
          image: {
            src: Images?.highconPortableGantryHero,
            alt: "Portable gantry crane",
          },
          title: "Portable gantry crane",
          subtitle: "Economical and manoeuvrable across multiple workstation.",
        },
        keyPerformanceHighlights: [
          {
            title: "3200",
            unit: "kg",
            value: "Maximum capacity",
          },
          {
            title: "6",
            unit: "m",
            value: "Maximum span",
          },
          {
            title: "4",
            unit: "m",
            value: "Maximum height",
          },
        ],
        detailedDescription: {
          title: "Versatile, economical, expert in mobility",
          subtitle:
            "The portable gantry crane manufactured by OMIS is a highly robust mobile solution that is extremely easy to manoeuvre thanks to its four steered wheels. This feature allows easy handling of loads within the company, facilitating the connection between the various production departments. The lifting system of the portable gantry crane can be achieved by means of a manual or electric hoist, thus offering considerable operational flexibility.",
          description: [
            "This type of crane is particularly recommended in diverse environments and for carrying out a wide range of operations. For example, in machine shops, where the need to move the crane to different workstations is frequent, the portable gantry crane is an ideal choice. It is also perfect for situations where the installation of a bridge crane would be too complicated or even impossible. Portable gantry cranes are characterised by their versatility: they are robust systems that are extremely adaptable to the company’s operational requirements. Overall, the portable gantry crane is an ideal solution for handling loads efficiently and safely, improving productivity and operational flexibility in companies.",
          ],
        },
        keyAdvantages: {
          heading: "Advantages of the portable gantry crane",
          items: [
            {
              description: "Operational versatility",
            },
            {
              description: "Handling even over long distances",
            },
            {
              description: "Easy to use",
            },
            {
              description: "Adaptability to loads of various sizes",
            },
            {
              description: "Simplified maintenance",
            },
            {
              description: "Increased productivity and safety",
            },
          ],
        },
        advantagesImage: [Images?.highconPortableGantry],
        productConfigurations: [
          {
            image: Images?.highconPortableGantryFront,
            alt: "Portable Gantry crane configuration 1",
            name: "Front view",
          },
          {
            image: Images?.highconPortableGantryTop,
            alt: "Portable Gantry crane configuration 2",
            name: "Top view",
          },
          {
            image: Images?.highconPortableGantryProspect,
            alt: "Portable Gantry crane configuration 3",
            name: "Prospect",
          },
        ],
        technicalSpecifications: {
          standardFeatures: [
            {
              heading: "Capacity",
              value: "125 kg - 3200 kg - More on request",
            },
            {
              heading: "Span",
              value: "Up to 6 m",
            },
            {
              heading: "Height",
              value: "Up to 5 m",
            },
            {
              heading: "Wheels",
              value: "4, steered and swivelling, with foot brake",
            },
            {
              heading: "Side profile",
              value: "Square tubular profile",
            },
            {
              heading: "Girder profile",
              value: "IPE profile",
            },
            {
              heading: "Power line",
              value: "Festoon or Blindo Atollo 40A",
            },
            {
              heading: "Control",
              value: "Push-button strip hanging from hoist",
            },
          ],
          optionalFeatures: [
            {
              heading: "Custom paintwork",
              value:
                "The paint colour can be customised to meet specific needs, design or branding requirements.",
            },
            {
              heading: "Radio control for the hoist trolley",
              value:
                "On request, it is possible to integrate the radio remote control for the hoist trolley, improving performance, versatility and safety in handling operations. This advanced system allows precise and intuitive remote control, optimising efficiency and reducing operational risks.",
            },
          ],
        },
        pictureGallery: [
          {
            image: Images?.highconPortablegantryPic1,
            alt: "Portable Gantry crane in industrial facility",
          },
          {
            image: Images?.highconPortablegantryPic2,
            alt: "Portable Gantry crane working in a company",
          },
          {
            image: Images?.highconPortablegantryPic3,
            alt: "Portable Gantry crane side view",
          },
          {
            image: Images?.highconPortablegantryPic4,
            alt: "Portable Gantry crane gallery image 4",
          },
          {
            image: Images?.highconPortablegantryPic5,
            alt: "Portable Gantry crane gallery image 5",
          },
          {
            image: Images?.highconPortablegantryPic6,
            alt: "Portable Gantry crane gallery image 6",
          },
        ],
      },
      {
        id: "jib-crane-manufacturers-coimbatore",
        Component: CraneDetailPage,
        title: "Jib Cranes",
        shortDescription:
          "Robust, versatile, economical. The manual or powered jib crane is the most functional, practical and cost-effective solution for making a work station independent and efficient.",
        image: {
          src: Images?.highconJibCrane,
          alt: "Jib Cranes",
        },
        heroData: {
          image: { src: Images?.highconJibCraneHero, alt: "" },
          title: "Jib Cranes",
          subtitle: "",
        },
        detailPageContent: [
          {
            type: "white-bordered",
            title: "Practical and versatile jib cranes for all light loads",
            paragraphs: [
              "Versatility and ease of use: the jib crane is the most practical and cost-effective solution for the handling of loads at the workstation in most industries. It can be with self-supporting column, bracket or mobile. Manual or motorised rotation of the boom is typically 270° or 360°, but can be adjusted to suit specific requirements dictated by architectural obstructions or machinery in the work area.",
            ],
          },
          {
            type: "dark",
            title: "",
            paragraphs: [
              "A wide range of jib cranes with various configurations is available: easy to install, they are used practically everywhere, from crafts workshops to large industries, from small machine shops to large assembly lines and food production plants or wine cellars. OMIS’s technical knowledge and long experience in the design of lifting and handling systems for light loads enables it to respond very effectively and quickly to the needs of many different applications around the world.",
            ],
          },
        ],
        layerTwoProducts: [
          {
            id: "pillar-jib-cranes",
            Component: CraneDetailPage,
            title: "Pillar",
            shortDescription:
              "Excellent for use in confined spaces, the pillar jib crane is a practical lifting and handling system, allowing independent work at a workstation.",
            image: {
              src: Images?.highconJibCranePillar,
              alt: "Pillar Jib Cranes",
            },
            heroData: {
              title: "Pillar",
              image: {
                src: Images?.highconJibCranePillarHero,
                alt: "Pillar Jib Cranes Hero Image",
              },
            },
            detailPageContent: [
              {
                type: "white-bordered",
                title: "Low cost and practicality in small spaces",
                paragraphs: [
                  "The pillar jib crane, designed and built by OMIS, is one of the most practical and economical solutions for handling loads. This system makes workstations autonomous for which otherwise overhead cranes or forklifts would be required.",
                ],
              },
              {
                type: "dark",
                title: "",
                paragraphs: [
                  "Moreover, this type of system solves the issues connected with the handling of loads in confined spaces, where other lifting equipment would not be able to operate. It is produced in several versions, which meet different space and performance requirements: with single or double boom, with a cantilever or anchored girder, with articulated boom, with rotation on a slew ring. The boom is rotated by manually or electrically pushing the load along the boom’s radius of rotation. The pillar jib crane is often used to move manufactured goods in machine shops, for loading and unloading at the service of CNC machines or in the assembly departments of large industries.Pillar jib cranes with larger dimensions than the standard products are available on request.",
                ],
              },
            ],
            layerThreeProducts: [
              {
                id: "pillar-jib-crane-with-channel-shaped-profile-boom",
                Component: CraneProductDetailPage,
                title: "Pillar Jib Crane with Channel Shaped Profile Boom",
                shortDescription:
                  "A simple pillar jib crane with low cost, low maintenance, ease of use, instant handling.",
                image: {
                  src: Images?.highconPillarJibCraneWithChannelShapedProfileBoom,
                  alt: "Pillar Jib Crane with Channel Shaped Profile Boom",
                },
                heroData: {
                  title: "Pillar Jib Crane with Channel Shaped Profile Boom",
                  subtitle: "Easy and economical instant handling",
                  image: {
                    src: Images?.highconPillarJibCraneWithChannelShapedProfileBoomHero,
                    alt: "",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "1000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with channel-shaped profile boom with capacity up to 1000 kg",
                  subtitle:
                    "The jib crane is the most practical and cost-effective solution for the handling of loads. It makes a workstation independent, which would otherwise require the use of an overhead crane or a forklift truck. Moreover, the jib crane solves the issues connected with the handling of loads in confined spaces, where other lifting equipment would not be able to operate.",
                  description: [
                    "The boom is rotated by manually pushing the load along the boom’s radius of rotation. It is widely used to move manufactured goods in machine shops, for loading and unloading at the service of CNC machines or in assembly departments.",
                    "Larger jib cranes are available on request.",
                    "The system is characterised by extremely light handling due to its low inertia. The bearings of the rotation assembly ensure natural seamless rotation. The crane is available with a manual push trolley, each one is supplied complete with a power line and in most cases an electric hoist is installed. The jib crane is characterised by low maintenance requirements, ease of use, instant handling and low cost.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with channel-shaped profile boom",
                  items: [
                    {
                      description: "Excellent manoeuvrability",
                    },
                    {
                      description: "Instant handling",
                    },
                    {
                      description: "Limited maintenance",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.highconPillarJibCraneWithChannelShapedProfileBoom,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.highconPillarJibCraneWithChannelShapedProfileBoomFront,
                    alt: "Pillar Jib Crane with Channel Shaped Profile Boom",
                    name: "Front view",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithChannelShapedProfileBoomTop,
                    alt: "Pillar Jib Crane with Channel Shaped Profile Boom",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithChannelShapedProfileBoomProspect,
                    alt: "Pillar Jib Crane with Channel Shaped Profile Boom",
                    name: "Prospect",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 1000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Omega-shaped press-folded profile",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Rotation",
                      value: "Manual",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with push trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
                pictureGallery: [
                  {
                    image: Images?.highconPillarJibCraneWithChannelShapedProfileBoom1,
                    alt: "Gallery image 1",
                  },
                  {
                    image: Images?.highconPillarJibCraneWithChannelShapedProfileBoom2,
                    alt: "Gallery image 2",
                  },
                  {
                    image: Images?.highconPillarJibCraneWithChannelShapedProfileBoom3,
                    alt: "Gallery image 3",
                  },
                  {
                    image: Images?.highconPillarJibCraneWithChannelShapedProfileBoom4,
                    alt: "Gallery image 4",
                  },
                  {
                    image: Images?.highconPillarJibCraneWithChannelShapedProfileBoom5,
                    alt: "Gallery image 5",
                  },
                  {
                    image: Images?.highconPillarJibCraneWithChannelShapedProfileBoom6,
                    alt: "Gallery image 6",
                  },
                  {
                    image: Images?.highconPillarJibCraneWithChannelShapedProfileBoom7,
                    alt: "Gallery image 7",
                  },
                  {
                    image: Images?.highconPillarJibCraneWithChannelShapedProfileBoom8,
                    alt: "Gallery image 8",
                  },

                  {
                    image: Images?.highconPillarJibCraneWithChannelShapedProfileBoom9,
                    alt: "Gallery image 9",
                  },
                  {
                    image: Images?.highconPillarJibCraneWithChannelShapedProfileBoom10,
                    alt: "Gallery image 10",
                  },
                ],
              },
              {
                id: "pillar-jib-crane-with-cantilever-girder-boom",
                Component: CraneProductDetailPage,
                title: "Pillar Jib Crane with Cantilever Girder Boom",
                shortDescription:
                  "The most suitable pillar jib crane when you need to make full use of vertical space, stable and capable of lifting heavy loads",
                image: {
                  src: Images?.highconPillarJibCraneWithCantileverGirderBoom,
                  alt: "",
                },
                heroData: {
                  title: "Pillar Jib Crane with Cantilever Girder Boom",
                  subtitle: "Optimised load capacity, stability and height.",
                  image: {
                    src: Images?.highconPillarJibCraneWithCantileverGirderBoomHero,
                    alt: "Pillar Jib Crane with Cantilever Girder Boom Hero Image",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "2000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with cantilever girder boom with capacity up to 2000 kg",
                  subtitle:
                    "The jib crane provides autonomy for a workstation without the need for an overhead crane or forklift truck, thus providing a practical and economical solution for handling loads. The crane also provides an answer to the issues associated with handling loads in confined spaces that are impractical for lifting equipment.",
                  description: [
                    "The jib crane with cantilever boom is the optimal solution when maximum utilisation of the available space in height is required, resulting in an increase in hook stroke. The rigid structure of the pillar ensures trolley stability in any boom position, while the bearings mounted on the rotation unit allow for smooth rotation. It is available in versions with manual push, mechanical or electric trolley, and each model comes complete with a power line. In addition to the increased capacity and optimised height, the pillar jib crane with cantilever girder boom also proves to be an excellent choice for use because it provides for future motorisation of the boom and trolley.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with cantilever girder boom",
                  items: [
                    {
                      description: "Smooth rotation",
                    },
                    {
                      description: "Excellent manoeuvrability",
                    },
                    {
                      description: "Instant handling",
                    },
                    {
                      description: "Limited maintenance",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.highconPillarJibCraneWithCantileverGirderBoom,
                ],
                productConfigurations: [
                  {
                    image: Images?.highconPillarJibCraneWithCantileverGirderBoomFront,
                    alt: "Configuration 1",
                    name: "Front view",
                  },
                  {
                    image: Images?.highconPillarJibCraneWithCantileverGirderBoomTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 2000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beams without tie rods",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Rotation",
                      value: "Manual",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with manual push or mechanical electric trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
                pictureGallery: [
                  {
                    image: Images?.highconPillarJibCraneWithCantileverGirderBoom1,
                    alt: "Pillar Jib Crane with Cantilever Girder Boom 1",
                  },
                  {
                    image: Images?.highconPillarJibCraneWithCantileverGirderBoom2,
                    alt: "Gallery Image 2",
                  },
                  {
                    image: Images?.highconPillarJibCraneWithCantileverGirderBoom3,
                    alt: "Gallery Image 3",
                  },
                  {
                    image: Images?.highconPillarJibCraneWithCantileverGirderBoom4,
                    alt: "Gallery image 4",
                  },
                  {
                    image: Images?.highconPillarJibCraneWithCantileverGirderBoom5,
                    alt: "Gallery image 5",
                  },
                  {
                    image: Images?.highconPillarJibCraneWithCantileverGirderBoom6,
                    alt: "Gallery image 6",
                  },
                ],
              },
              {
                id: "pillar-jib-crane-with-girder-boom-with-tie-rods",
                Component: CraneProductDetailPage,
                title: "Pillar Jib Crane with Girder Boom with tie rods",
                shortDescription:
                  "The stable and easy-to-use pillar jib crane, even with considerable capacities and extensions",
                image: {
                  src: Images?.highconPillarJibCraneWithGirderBoomWithTieRods,
                  alt: "",
                },
                heroData: {
                  title: "Pillar Jib Crane with Girder Boom with tie rods",
                  subtitle:
                    "Stability and power concentrated in the right space.",
                  image: {
                    src: Images?.highconPillarJibCraneWithGirderBoomWithTieRodsHero,
                    alt: "Pillar Jib Crane with Girder Boom with tie rods Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "2000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with girder boom with tie rods, with capacity up to 2000 kg",
                  subtitle:
                    "Pillar jib cranes with girder boom with one or two tie rods ensure easy tilting and trolley stability, even in case of significant load capacity requirements and extensions. Cost-effective purchase, installation and maximum practicality of use make it an optimal answer to many load handling needs in manufacturing facilities and construction sites, where it makes workstations autonomous that would otherwise have to be served by overhead cranes or forklift trucks.",
                  description: [
                    "The bearings mounted in each case on the rotating assembly allow for a smooth rotational movement. The jib crane is available with manual push, mechanical or electric trolley and all versions are supplied complete with power line. The cantilever girder boom gives the pillar jib crane a great specific advantage: compared to models with a channel girder, in fact, in this case it is possible to power the trolley and thus handle higher capacities/extensions.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with girder boom with tie rods",
                  items: [
                    {
                      description: "Sensitive tilting",
                    },
                    {
                      description: "Smooth rotation",
                    },
                    {
                      description: "Excellent manoeuvrability",
                    },
                    {
                      description: "Limited maintenance",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.highconPillarJibCraneWithGirderBoomWithTieRods,
                ],
                productConfigurations: [
                  {
                    image: Images?.highconPillarJibCraneWithGirderBoomWithTieRodsFront,
                    alt: "Configuration 1",
                    name: "Front view",
                  },
                  {
                    image: Images?.highconPillarJibCraneWithGirderBoomWithTieRodsTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithGirderBoomWithTieRodsProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 2000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beams with tie rods",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Rotation",
                      value: "Manual",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with manual push or mechanical electric trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
                pictureGallery: [
                  {
                    image: Images?.highconPillarJibCraneWithGirderBoomWithTieRods1,
                    alt: "Gallery Image 1",
                  },
                  {
                    image: Images?.highconPillarJibCraneWithGirderBoomWithTieRods2,
                    alt: "Gallery Image 2",
                  },
                  {
                    image: Images?.highconPillarJibCraneWithGirderBoomWithTieRods3,
                    alt: "Gallery Image 3",
                  },
                  {
                    image: Images?.highconPillarJibCraneWithGirderBoomWithTieRods4,
                    alt: "Gallery image 4",
                  },
                ],
              },
              {
                id: "pillar-jib-crane-with-articulated-boom",
                Component: CraneProductDetailPage,
                title: "Pillar Jib Crane with Articulated Boom",
                shortDescription:
                  "Pillar jib crane, equipped with a fixed hoist at the tip or on a sliding trolley, thanks to its articulated boom it allows operation in environments where there are obstacles and physical obstructions.",
                image: {
                  src: Images?.highconPillarJibCraneWithArticulatedBoom,
                  alt: "Pillar Jib Crane with Articulated Boom",
                },
                heroData: {
                  title: "Pillar Jib Crane with Articulated Boom",
                  subtitle: "Handling that overcomes obstacles.",
                  image: {
                    src: Images?.highconPillarJibCraneWithArticulatedBoomHero,
                    alt: "Pillar Jib Crane with Articulated Boom Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "1000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "+",
                    value: "Maximum extension",
                  },
                  {
                    title: "240° - 300°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with articulated boom with capacity up to 1000 kg",
                  subtitle:
                    "Jib cranes with articulated boom can reach those positions of the working area which due to obstacles would be impossible to reach with a fixed boom. They are designed to facilitate the movement of goods within the facility, avoiding fixed obstacles that could restrict the free rotation of the boom.",
                  description: [
                    "In this case the boom consists of two segments on bearings, capable of turning independently from each other. The bearing of the rotation assembly ensure seamless rotation and there are no tie rods above the boom, so that the full height can be utilised. The hoist is normally supplied mounted in a fixed configuration, at the tip of the boom. On request, however, it can be mounted on a sliding trolley along the outermost boom. This pillar jib crane is therefore optimised for use within confined areas and zones, and guarantees great versatility of use and installation.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with articulated boom",
                  items: [
                    {
                      description: "Limited footprint",
                    },
                    {
                      description: "Excellent manoeuvrability",
                    },
                    {
                      description: "Ideal for confined environments",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [Images?.highconPillarJibCraneWithArticulatedBoom],
                productConfigurations: [
                  {
                    image: Images?.highconPillarJibCraneWithArticulatedBoomFront,
                    alt: "Configuration 1",
                    name: "Front view",
                  },
                  {
                    image: Images?.highconPillarJibCraneWithArticulatedBoomTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image: Images?.highconPillarJibCraneWithArticulatedBoomProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 1000 kg" },
                    {
                      heading: "Ranges",
                      value: "Up to 4 +4 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value:
                        "The first close to the pillar is made of tubular profile, the second in I beam",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "240° the first segment of the boom close to the pillar - 300° the second boom",
                    },
                    {
                      heading: "Rotation",
                      value: "Manual",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist, fixed mounted at the tip of the boom, for lifting the load, with one or two lifting speeds. On request it can be fitted with an electric or push trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
                pictureGallery: [
                  {
                    image: Images?.highconPillarJibCraneWithArticulatedBoom1,
                    alt: "Gallery image 1",
                  },
                  {
                    image: Images?.highconPillarJibCraneWithArticulatedBoom2,
                    alt: "Gallery image 2",
                  },
                  {
                    image: Images?.highconPillarJibCraneWithArticulatedBoom3,
                    alt: "Gallery image 3",
                  },
                  {
                    image: Images?.highconPillarJibCraneWithArticulatedBoom4,
                    alt: "Gallery image 4",
                  },
                  {
                    image: Images?.highconPillarJibCraneWithArticulatedBoom5,
                    alt: "Gallery image 5",
                  },
                ],
              },
              {
                id: "pillar-jib-crane-with-cantilever-girder-boom-and-360°-manual-rotation",
                Component: CraneProductDetailPage,
                title:
                  "Pillar jib crane with cantilever girder boom and 360° manual rotation",
                shortDescription:
                  "The pillar jib crane can handle heavy loads in spaces where electrical rotation is not permitted and the device must cover a circular working area.",

                image: {
                  src: Images?.highconPillarJibCraneWithCantileverGirderBoomAnd360ManualRotation,
                  alt: "Pillar jib crane with cantilever girder boom and 360° manual rotation",
                },
                heroData: {
                  title:
                    "Pillar jib crane with cantilever girder boom and 360° manual rotation",
                  subtitle: "The widest rotation with manual action.",
                  image: {
                    src: Images?.highconPillarJibCraneWithCantileverGirderBoomAnd360ManualRotationHero,
                    alt: "Pillar jib crane with cantilever girder boom and 360° manual rotation Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "2000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "360°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with cantilever girder boom and 360° manual rotation",
                  subtitle:
                    "The jib crane that allows the widest and most complete rotation, so that the entire reachable area can be utilised. Continuous 360° manual rotation is the solution for shifting loads across the whole field of action of the crane, in those cases when the use of standard 270° rotation cranes is not satisfactory, and, for various reasons, the use of electricity is not permitted.",
                  description: [
                    "It is also an excellent choice for handling large loads. Practical and economical, jib cranes perform the fundamental function of providing operational independence to workstations that cannot be or are not reached by overhead cranes or forklift trucks. Extremely easy to use, they are among the most commonly used solutions in construction sites, factories and workshops where the safe and precise handling of parts and materials is an essential daily requirement. In particular, this manually rotating jib crane guarantees maximum autonomy of the working area and at the same time the highest level of user-friendliness and safety, with considerable capacity, extension and operational performance.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with cantilever girder boom and 360° manual rotation",
                  items: [
                    {
                      description: " 360° operability",
                    },
                    {
                      description: "Excellent manoeuvrability",
                    },
                    {
                      description: "Ideal for confined environments",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.highconPillarJibCraneWithCantileverGirderBoomAnd360ManualRotation,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAnd360ManualRotationFront,
                    alt: "Configuration 1",
                    name: "Front view",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAnd360ManualRotationTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAnd360ManualRotationProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 2000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beams",
                    },
                    {
                      heading: "Rotation",
                      value: "360° continuous",
                    },
                    {
                      heading: "Rotation",
                      value: "Manual",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with manual push or mechanical electric trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
                pictureGallery: [
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAnd360ManualRotation1,
                    alt: "Gallery image 1",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAnd360ManualRotation2,
                    alt: "Gallery image 2",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAnd360ManualRotation3,
                    alt: "Gallery image 3",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAnd360ManualRotation4,
                    alt: "Gallery image 4",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAnd360ManualRotation5,
                    alt: "Gallery image 5",
                  },
                ],
              },
              {
                id: "pillar-jib-cranes-with-channel-shaped-profile-double-boom",
                Component: CraneProductDetailPage,
                title:
                  "Pillar Jib Crane with Channel shaped profile double boom",
                shortDescription:
                  "The pillar jib crane with double boom is the most practical and cost-effective solution for making a workplace independent that would otherwise require the use of 2 standard jib cranes.",
                image: {
                  src: Images?.highconPillarJibCranesWithChannelShapedProfileDoubleBoom,
                  alt: "Pillar jib crane with channel shaped profile double boom",
                },
                heroData: {
                  title:
                    "Pillar Jib Crane with Channel shaped profile double boom",
                  subtitle: "Two booms, more operational autonomy.",
                  image: {
                    src: Images?.highconPillarJibCranesWithChannelShapedProfileDoubleBoomHero,
                    alt: "Pillar jib crane with channel shaped profile double boom Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "1000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with channel-shaped profile double boom with capacity up to 1000 kg + 1000 kg",
                  subtitle:
                    "The jib crane with double boom is the most practical and cost-effective solution for making one or more workplaces independent that would otherwise require the use of two standard jib cranes. Moreover, it solves the issues connected with the handling of loads in confined spaces, where other lifting equipment would not be able to operate.",
                  description: [
                    "The use of the boom with a special press-folded channel profile ensures the lightest possible handling. The sliding trolley moves inside the boom itself, with a smooth, fluid motion that makes the pillar jib crane easy to manoeuvre. Slightly inclined sliding surfaces and the use of special materials with a smooth surface and minimal weight reduce the friction caused by the travel wheels of the hoist trolleys. The lower weight to be handled also reduces the effort the operator has to exert manually to rotate the boom of the jib crane. This results in smooth and quiet running of the wheels and high loading capacity. The jib crane with double boom in channel girder is only available with a manual push trolley.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with channel-shaped profile double boom",
                  items: [
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Excellent manoeuvrability",
                    },
                    {
                      description: "Easy installation",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.highconPillarJibCranesWithChannelShapedProfileDoubleBoom,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.highconPillarJibCranesWithChannelShapedProfileDoubleBoomFront,
                    alt: "Configuration 1",
                    name: "Front view",
                  },
                  {
                    image:
                      Images?.highconPillarJibCranesWithChannelShapedProfileDoubleBoomTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.highconPillarJibCranesWithChannelShapedProfileDoubleBoomProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                  {
                    image:
                      Images?.highconPillarJibCranesWithChannelShapedProfileDoubleBoomDetail,
                    alt: "Configuration 4",
                    name: "Detail",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 1000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Omega-shaped press-folded profile",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Rotation",
                      value: "Manual",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with manual push or mechanical electric trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
                pictureGallery: [
                  {
                    image:
                      Images?.highconPillarJibCranesWithChannelShapedProfileDoubleBoom1,
                    alt: "Gallery image 1",
                  },
                  {
                    image:
                      Images?.highconPillarJibCranesWithChannelShapedProfileDoubleBoom2,
                    alt: "Gallery image 2",
                  },
                  {
                    image:
                      Images?.highconPillarJibCranesWithChannelShapedProfileDoubleBoom3,
                    alt: "Gallery image 3",
                  },
                ],
              },
              {
                id: "pillar-jib-crane-with-cantilever-girder-double-boom",
                Component: CraneProductDetailPage,
                title: "Pillar jib crane with cantilever girder double boom",
                shortDescription:
                  "The pillar jib crane with double boom is designed to exploit vertical space to the full, increasing the available hook stroke and making the workstation independent.",
                image: {
                  src: Images?.highconPillarJibCranesWithCantileverGirderDoubleBoom,
                  alt: "Pillar jib crane with cantilever girder double boom",
                },
                heroData: {
                  title: "Pillar jib crane with cantilever girder double boom",
                  subtitle: "Working autonomy and maximum hook stroke.",
                  image: {
                    src: Images?.highconPillarJibCranesWithCantileverGirderDoubleBoomHero,
                    alt: "Pillar jib crane with cantilever girder double boom Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "1000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with cantilever girder double boom with capacity up to 1000 kg + 1000 kg",
                  subtitle:
                    "The jib crane with double boom is a practical and cost-effective solution for making a workplace independent that would otherwise require the use of two separate jib cranes. This type of crane is ideal for handling loads in confined spaces where other lifting devices would be impractical.",
                  description: [
                    "A further advantage of this crane is its ability to maximise the use of vertical space, thus increasing the available hook stroke. These features make it an extremely versatile tool, as well as being easy to manoeuvre and very cost-effective in both installation and day-to-day workplace management. The jib crane, which incorporates a self-supporting cantilever boom and does not require supporting tie rods, is particularly suitable for handling light loads in a wide range of industries, from small workshops to large assembly lines and production plants, including the food industry and wine cellars.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with double cantilever girder boom",
                  items: [
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Excellent manoeuvrability",
                    },
                    {
                      description: "Easy installation",
                    },
                    {
                      description: "Maximum utilisation of height space",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.highconPillarJibCranesWithCantileverGirderDoubleBoom,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.highconPillarJibCranesWithCantileverGirderDoubleBoomFront,
                    alt: "Configuration 1",
                    name: "Front view",
                  },
                  {
                    image:
                      Images?.highconPillarJibCranesWithCantileverGirderDoubleBoomTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.highconPillarJibCranesWithCantileverGirderDoubleBoomProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                  {
                    image:
                      Images?.highconPillarJibCranesWithCantileverGirderDoubleBoomDetail,
                    alt: "Configuration 4",
                    name: "Detail view",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 1000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beams with tie rods",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Rotation",
                      value: "Manual",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with manual push or mechanical electric trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },

              },
              {
                id: "pillar-jib-crane-with-girder-double-boom-with-tie-rods",
                Component: CraneProductDetailPage,
                title: "Pillar jib crane with girder double boom with tie rods",
                shortDescription:
                  "The jib crane with double boom in the version with tie rods is particularly suitable for higher capacities and extensions, compared to the cantilever girder version.",
                image: {
                  src: Images?.highconPillarJibCraneWithGirderDoubleBoomWithTieRods,
                  alt: "Pillar jib crane with girder double boom with tie rods",
                },
                heroData: {
                  title:
                    "Pillar jib crane with girder double boom with tie rods",
                  subtitle: "Maximum autonomy for high loads and extensions.",
                  image: {
                    src: Images?.highconPillarJibCraneWithGirderDoubleBoomWithTieRodsHero,
                    alt: "Pillar jib crane with girder double boom with tie rods Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "1000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with girder double boom with tie rods with capacity up to 1000 kg + 1000 kg",
                  subtitle:
                    "The jib crane with double boom is a convenient and functional option for making a workplace independent that would otherwise require the use of two standard jib cranes. This solution effectively eliminates the difficulties of handling loads in confined spaces where other lifting systems would not be usable.",
                  description: [
                    "Pillar jib cranes, equipped with girder booms with one or two tie rods, offer excellent manoeuvrability and solid trolley stability, even when handling heavy loads and extending over long distances. Affordability, both in terms of purchase and installation, and ease of use make these cranes an ideal solution for handling needs in industrial environments and construction sites, facilitating the autonomy of workstations that would otherwise depend on overhead cranes or forklifts. The bearings installed on the rotation mechanism ensure smooth and jolt-free movement. The jib crane is available with manual push, mechanical or electric trolley options, and all versions are supplied complete with power line. The cantilever boom on a pillar jib crane offers a clear advantage over channel models, allowing the powering of the trolley and the handling of heavier loads and longer booms.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with double girder boom with tie rods",
                  items: [
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Excellent manoeuvrability",
                    },
                    {
                      description: "Easy installation",
                    },
                    {
                      description:
                        "Suitable for high capacities and extensions",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.highconPillarJibCraneWithGirderDoubleBoomWithTieRods,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.highconPillarJibCraneWithGirderDoubleBoomWithTieRodsFront,
                    alt: "Configuration 1",
                    name: "Front view",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithGirderDoubleBoomWithTieRodsTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithGirderDoubleBoomWithTieRodsProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithGirderDoubleBoomWithTieRodsDetail,
                    alt: "Configuration 4",
                    name: "Detail",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 1000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Omega-shaped press-folded profile",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Rotation",
                      value: "Manual",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with manual push or mechanical electric trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },

              },
              {
                id: "pillar-jib-crane-with-cantilever-girder-boom-and-270°-electric-rotation",
                Component: CraneProductDetailPage,
                title:
                  "Pillar jib crane with cantilever girder boom and 270° electric rotation",
                shortDescription:
                  "The pillar jib crane handles loads of up to 2 tonnes, optimally utilising space at height thanks to the self-supporting cantilever girders of its structure.",
                image: {
                  src: Images?.highconPillarJibCraneWithCantileverGirderBoomAnd270ElectricRotation,
                  alt: "Pillar jib crane with cantilever girder boom and 270° electric rotation",
                },
                heroData: {
                  title:
                    "Pillar jib crane with cantilever girder boom and 270° electric rotation",
                  subtitle: "Maximum hook stroke for loads of up to 2 tonnes.",
                  image: {
                    src: Images?.highconPillarJibCraneWithCantileverGirderBoomAnd270ElectricRotationHero,
                    alt: "Pillar jib crane with cantilever girder boom and 270° electric rotation Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "2000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with cantilever girder boom and 270° electric rotation",
                  subtitle:
                    "When the weight of the load or the thrust forces are difficult for a classic crane with manual rotation, the best solution is to resort to the jib crane with 270° electric rotation. The jib crane with cantilever girder boom, in particular, makes it possible to utilise the available space in height with a consequent increase in the available hook stroke. The cantilever girder is self-supporting, without using tie rods.",
                  description: [
                    "The boom is rotated by means of a gear motor/joint system, coupled directly to the rotation pin, and is controlled by an inverter. The gear motor is of the planetary type, driven by a self-braking electric motor with soft start.",
                    "The hoist trolley power line consists of self-extinguishing flexible cables installed in sliding cable track systems under the boom.",
                    "The push-button strip may be hanging from the hoist, or sliding and independent, as required. Rotation limit switches are installed in case it is necessary to limit the boom tilting range.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with cantilever girder boom and 270° electric rotation",
                  items: [
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Easy to use",
                    },
                    {
                      description: "Maximum utilisation of height space",
                    },
                    {
                      description: "Limited maintenance",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.highconPillarJibCraneWithCantileverGirderBoomAnd270ElectricRotation,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAnd270ElectricRotationFront,
                    alt: "Configuration 1",
                    name: "Front view",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAnd270ElectricRotationTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAnd270ElectricRotationProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 2000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beams without tie rods",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Rotation",
                      value: "Electric",
                    },
                    {
                      heading: "Peripheral speed",
                      value: "~18 m/min",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with manual push or mechanical electric trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
                pictureGallery: [
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAnd270ElectricRotation1,
                    alt: "Gallery image 1",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAnd270ElectricRotation2,
                    alt: "Gallery image 2",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAnd270ElectricRotation3,
                    alt: "Gallery image 3",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAnd270ElectricRotation4,
                    alt: "Gallery image 4",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAnd270ElectricRotation5,
                    alt: "Gallery image 5",
                  },
                ],
              },
              {
                id: "pillar-jib-crane-with-girder-boom-with-tie-rods-and-270°-electric-rotation",
                Component: CraneProductDetailPage,
                title:
                  "Pillar jib crane with girder boom with tie rods and 270° electric rotation",
                shortDescription:
                  "The pillar jib crane can lift and move loads of up to 2,000 kg thanks to the use of tie rods and electric rotation, even with considerable extensions.",
                image: {
                  src: Images?.highconPillarJibCraneWithGirderBoomWithTieRodsAnd270ElectricRotation,
                  alt: "Pillar jib crane with girder boom with tie rods and 270° electric rotation",
                },
                heroData: {
                  title:
                    "Pillar jib crane with girder boom with tie rods and 270° electric rotation",
                  subtitle:
                    "Power and versatility for large loads and wide extensions.",
                  image: {
                    src: Images?.highconPillarJibCraneWithGirderBoomWithTieRodsAnd270ElectricRotationHero,
                    alt: "Pillar jib crane with girder boom with tie rods and 270° electric rotation Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "2000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with girder boom with tie rods and 270° electric rotation",
                  subtitle:
                    "The pillar jib crane with girder boom with tie rods and 270° electric rotation is an excellent solution for handling loads when the thrust forces or the size of the load are too heavy for a crane with manual rotation. This type of crane is designed to overcome obstructions along the floor and ensure safe and efficient handling even in workplaces that are difficult to access.",
                  description: [
                    "The boom rotation system is provided by a gear motor coupled directly to the rotation pin and controlled by an inverter. The planetary gear motor is driven by a self-braking electric motor with soft start, which ensures a smooth and controlled movement of the boom. The electrical line supplying the hoist trolley consists of flexible cables suspended on trolleys sliding under the boom, thus ensuring maximum operational safety. The push-button strip, which can be supplied either hanging from the hoist or sliding independently, allows precise and convenient control of lifting and handling operations. To limit the boom tilting range, rotation limit switches can be installed, further increasing the safety of the system. In OMIS jib cranes with electric rotation, the use of tie rods makes this version particularly robust and reliable, ideal for applications with higher capacities and extensions than cantilever girder versions.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with girder boom with tie rods and 270° electric rotation",
                  items: [
                    {
                      description:
                        "Suitable for high capacities and extensions",
                    },
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Easy to use",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.highconPillarJibCraneWithGirderBoomWithTieRodsAnd270ElectricRotation,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.highconPillarJibCraneWithGirderBoomWithTieRodsAnd270ElectricRotationFront,
                    alt: "Configuration 1",
                    name: "Front view",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithGirderBoomWithTieRodsAnd270ElectricRotationTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithGirderBoomWithTieRodsAnd270ElectricRotationProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 2000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beams with tie rods",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Rotation",
                      value: "Electric",
                    },
                    {
                      heading: "Peripheral speed",
                      value: "~18 m/min",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with manual push or mechanical electric trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
                pictureGallery: [
                  {
                    image:
                      Images?.highconPillarJibCraneWithGirderBoomWithTieRodsAnd270ElectricRotation1,
                    alt: "Gallery image 1",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithGirderBoomWithTieRodsAnd270ElectricRotation2,
                    alt: "Gallery image 2",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithGirderBoomWithTieRodsAnd270ElectricRotation3,
                    alt: "Gallery image 3",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithGirderBoomWithTieRodsAnd270ElectricRotation4,
                    alt: "Gallery image 4",
                  },
                ],
              },
              {
                id: "pillar-jib-crane-with-cantilever-girder-boom-and-360°-electric-rotation",
                Component: CraneProductDetailPage,
                title:
                  "Pillar jib crane with cantilever girder boom and 360° electric rotation",
                shortDescription:
                  "The jib crane with 360° electric rotation lifts and moves heavy loads while ensuring continuity of movement and torsional stability thanks to its cantilever girder boom and rotating power manifold.",
                image: {
                  src: Images?.highconPillarJibCraneWithCantileverGirderBoomAnd360ElectricRotation,
                  alt: "Pillar jib crane with cantilever girder boom and 360° electric rotation",
                },
                heroData: {
                  title:
                    "Pillar jib crane with cantilever girder boom and 360° electric rotation",
                  subtitle:
                    "Continuous electric rotation, maximum torsional stability.",
                  image: {
                    src: Images?.highconPillarJibCraneWithCantileverGirderBoomAnd360ElectricRotationHero,
                    alt: "Pillar jib crane with cantilever girder boom and 360° electric rotation Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "2000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with cantilever girder boom and 360° electric rotation",
                  subtitle:
                    "The jib crane with 360° continuous electric rotation, cantilever or box girder, is a technologically advanced and highly efficient solution for handling heavy loads, greatly improving operational flexibility compared to traditional cranes that offer a rotation limited to 270°.",
                  description: [
                    "Equipped with a robust boom with I-beam profile, this crane is designed to precisely perform lifting, travel and handling movements of objects and materials in a variety of industrial settings.",
                    "The innovative design includes an electric rotation system that allows the boom to rotate continuously and without interruption, an essential feature for complex operations and for optimising handling times. The rotation mechanism is facilitated by a rotating power supply manifold that not only supports uninterrupted movement, but also ensures the reliability and safety of the operation, preventing common problems such as tangling of power cables.",
                    "The ability to rotate continuously through 360° makes this crane particularly suitable for working environments where space is limited and the need to move loads quickly and safely is crucial. In addition, the operational autonomy offered by this crane reduces dependence on other lifting systems, such as bridge cranes or forklifts, which are not only more expensive to maintain, but also less versatile in terms of handling in work areas.",
                    "The use of the jib crane with 360° electric rotation can lead to significant reductions in operating costs, especially in saving time and reducing the number of personnel required to handle lifting operations. This reduction in manpower does not compromise productivity; on the contrary, it increases it thanks to the crane’s efficiency and speed of operation. The operators can rely on an intuitive control mechanism that facilitates safe operation of the machine, reducing the risk of accidents and improving overall efficiency.",
                    "The installation of this crane not only improves lifting operations but also contributes to a better organisation of the work space, allowing better planning and utilisation of production areas. With this solution, companies can optimise their logistics and production processes, while guaranteeing the safety and satisfaction of their operators.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with cantilever girder boom and slew ring 360° electric rotation",
                  items: [
                    {
                      description: "360° operability",
                    },
                    {
                      description: "Maximum torsional stability",
                    },
                    {
                      description: "Continuous boom rotation",
                    },
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Easy to use",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.highconPillarJibCraneWithCantileverGirderBoomAnd360ElectricRotation,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAnd360ElectricRotationFront,
                    alt: "Configuration 1",
                    name: "Front view",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAnd360ElectricRotationTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAnd360ElectricRotationProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 10000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 10 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beam or box girder",
                    },
                    {
                      heading: "Rotation",
                      value: "360° continuous",
                    },
                    {
                      heading: "Rotation",
                      value: "Electric",
                    },
                    {
                      heading: "Peripheral speed",
                      value: "~18 m/min",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain or rope electric hoist for lifting the load, with one or two lifting speeds, with electric or push trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
                pictureGallery: [
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAnd360ElectricRotation1,
                    alt: "Gallery image 1",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAnd360ElectricRotation2,
                    alt: "Gallery image 2",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAnd360ElectricRotation3,
                    alt: "Gallery image 3",
                  },
                ],
              },
            ],
          },
          {
            id: "wall-mounted-jib-cranes",
            Component: CraneDetailPage,
            title: "Wall Mounted",
            shortDescription:
              "When the work area can rely on a load-bearing pillar to become fully autonomous, without the need for an overhead crane or forklift truck. Even in non-standard dimensions",
            image: {
              src: Images?.highconJibCraneWallMounted,
              alt: "Wall Mounted Jib Cranes",
            },
            heroData: {
              title: "Wall Mounted",
              image: {
                src: Images?.highconJibCraneWallMountedHero,
                alt: "Wall Mounted Jib Cranes Hero Image",
              },
            },
            detailPageContent: [
              {
                type: "white-bordered",
                title:
                  "Economical and functional, fixed to a pillar in the shed",
                paragraphs: [
                  "The wall-mounted jib crane is a practical, low-cost solution for making an independent workstation, which would otherwise require the use of an overhead crane or a forklift truck. Moreover, the jib crane solves the issues connected with the handling of loads in confined spaces, where other lifting equipment would not be able to operate.",
                ],
              },
              {
                type: "dark",
                title: "",
                paragraphs: [
                  "It is a simple, practical and cost-effective solution for the manual handling of loads at workstations that do not permit use of the pillar but can make use of a load-bearing pillar for fixing the boom with a system of brackets and tie-rods.",
                  "The types of fixing vary from tie-rod with counter-brace, C-sling (using chemical dowels), to frontal attachment (using chemical dowels) and angled sling (using chemical dowels). The boom is turned by pushing the load manually. The range of rotation is within 270°, in relation to the pillar.Jib cranes larger than standard solutions are available on request.",
                ],
              },
            ],
            layerThreeProducts: [
              {
                id: "wall-mounted-jib-crane-channel-shaped-profile",
                Component: CraneProductDetailPage,
                title:
                  "Wall-Mounted Jib Crane with Channel-Shaped Profile Boom",
                shortDescription:
                  "Wall-mounted jib crane with channel-shaped profile boom.",
                image: {
                  src: Images?.highconWallMountedJibCraneWithChannelShapedProfileBoom,
                  alt: "Wall-Mounted Jib Crane with Channel-Shaped Profile Boom",
                },
                heroData: {
                  title:
                    "Wall-Mounted Jib Crane with Channel Shaped Profile Boom",
                  subtitle:
                    "Robust and lightweight, effective in all operating contexts.",
                  image: {
                    src: Images?.highconWallMountedJibCraneWithChannelShapedProfileBoomHero,
                    alt: "Wall-Mounted Jib Crane with Channel-Shaped Profile Boom Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "1000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Wall-mounted jib crane with channel-shaped boom with capacity up to 1000 kg",
                  subtitle:
                    "Our wall-mounted jib crane with channel-shaped profile boom is the ideal solution for anyone looking for an efficient, versatile and safe lifting system. Designed to serve a variety of industrial applications, this crane combines robustness and lightness to ensure excellent performance in any operating environment.",
                  description: [
                    "With an extension of up to 8 metres and a rotation of 270°, it can cover a large working area. It requires no floor space and allows for the recovery of centimetres of space thanks to the crane’s action and slinging on an existing structure or pillar. This makes it possible to utilise the depth of the column as a radius of action and to use the space already present in the pillar, avoiding clutter caused by the base plate.",
                    "Equipped with a boom made of a special channel-shaped press-folded profile, it is optimised for the best trolley tilting and sliding sensitivity. The boom design ensures smooth and precise movements, reducing operator fatigue.",
                    "The wall-mounted jib crane is ideal for machine shops, warehouses, production lines and many other industrial applications. Designed for quick and easy assembly, it offers the possibility of special configurations for complex operational requirements. The crane is supplied complete with power line and is available with a manual push trolley.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the wall-mounted jib crane with channel-shaped profile boom",
                  items: [
                    {
                      description: "No floor space required",
                    },
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Easy to use",
                    },
                    {
                      description: "Limited footprint",
                    },
                    {
                      description: "Increased hook stroke",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.highconWallMountedJibCraneWithChannelShapedProfileBoom,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithChannelShapedProfileBoomWideConnection,
                    alt: "Configuration 1",
                    name: "Wide Connection",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithChannelShapedProfileBoomTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithChannelShapedProfileBoomProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithChannelShapedProfileBoomDoubleBoom,
                    alt: "Configuration 4",
                    name: "Double Boom",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithChannelShapedProfileBoomNarrowConnection,
                    alt: "Configuration 5",
                    name: "Narrow Connection",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithChannelShapedProfileBoomDoubleBoom,
                    alt: "Configuration 6",
                    name: "Double Boom",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 1000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Omega-shaped press-folded profile",
                    },
                    {
                      heading: "Rotation",
                      value: "180° - 270° depending on the pillar support",
                    },
                    {
                      heading: "Rotation",
                      value: "Manual",
                    },
                    {
                      heading: "Wall bracket",
                      value:
                        "The support bracket, tie rods and counter-braces are constructed according to the required dimensions of the pillar.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with push trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
              },
              {
                id: "wall-mounted-jib-crane-with-cantilever-girder-boom",
                Component: CraneProductDetailPage,
                title: "Wall-mounted jib crane with cantilever girder boom",
                shortDescription:
                  "The wall-mounted jib crane with cantilever girder boom is optimal when maximum utilisation of the available vertical space is required, resulting in an increased hook capacity.",
                image: {
                  src: Images?.highconWallMountedJibCraneWithCantileverGirderBoomHero,
                  alt: "Wall-mounted jib crane with cantilever girder boom",
                },
                heroData: {
                  title: "Wall-mounted jib crane with cantilever girder boom",
                  subtitle:
                    "To make the best use of the available vertical space.",
                  image: {
                    src: Images?.highconWallMountedJibCraneWithCantileverGirderBoomHero,
                    alt: "Wall-mounted jib crane with cantilever girder boom Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "2000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Wall-mounted jib crane with cantilever girder boom with capacity up to 2000 kg",
                  subtitle:
                    "The wall-mounted crane is a highly efficient solution for optimising the available vertical space, while at the same time allowing greater flexibility in trolley movement. It uses a rotation unit mounted on bearings and offers great versatility in terms of configurations, with several trolley options available.",
                  description: [
                    "In each case, this model is complete with an integrated power line to maximise operational efficiency. There is the possibility of installing two cranes opposite each other if needed. For situations where a sturdier or larger solution is required, customised jib cranes are available, offering an even greater lifting capacity. The wall-mounted crane is therefore a pragmatic and cost-effective choice for making a work area independent, effectively solving the problem of handling loads in confined spaces, thanks to its versatility, flexibility and ability to adapt to the specific needs of the operating environment.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the wall-mounted jib crane with cantilever girder boom",
                  items: [
                    {
                      description: "No floor space required",
                    },
                    {
                      description: "Excellent manoeuvrability",
                    },
                    {
                      description: "Easy to use",
                    },
                    {
                      description: "Limited footprint",
                    },
                    {
                      description: "Increased hook stroke",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.highconWallMountedJibCraneWithCantileverGirderBoom,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithCantileverGirderBoomWideConnection,
                    alt: "Configuration 1",
                    name: "Wide Connection",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithCantileverGirderBoomTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithCantileverGirderBoomProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithCantileverGirderBoomDoubleBoom,
                    alt: "Configuration 4",
                    name: "Double Boom",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithCantileverGirderBoomNarrow,
                    alt: "Configuration 5",
                    name: "Narrow",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithCantileverGirderBoomDoubleBoom2,
                    alt: "Configuration 6",
                    name: "Double Boom",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 2000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beams without tie rods",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Rotation",
                      value: "Manual",
                    },
                    {
                      heading: "Wall bracket",
                      value:
                        "The support bracket, tie rods and counter-braces are constructed according to the required dimensions of the pillar.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with manual push or mechanical electric trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
                pictureGallery: [
                  {
                    image: Images?.highconWallMountedJibCraneWithCantileverGirderBoom1,
                    alt: "Gallery image 1",
                  },
                  {
                    image: Images?.highconWallMountedJibCraneWithCantileverGirderBoom2,
                    alt: "Gallery image 2",
                  },
                  {
                    image: Images?.highconWallMountedJibCraneWithCantileverGirderBoom3,
                    alt: "Gallery image 3",
                  },
                ],
              },
              {
                id: "wall-mounted-jib-crane-with-girder-boom-with-tie-rods",
                Component: CraneProductDetailPage,
                title: "Wall-mounted jib crane with girder boom with tie rods",
                shortDescription:
                  "The wall-mounted jib crane with girder boom with one or two tie rods ensures easy tilting and trolley stability, even in case of significant load capacity requirements and booms.",
                image: {
                  src: Images?.highconWallMountedJibCraneWithGirderBoomWithTieRods,
                  alt: "Wall-mounted jib crane with girder boom with tie rods",
                },
                heroData: {
                  title:
                    "Wall-mounted jib crane with girder boom with tie rods",
                  subtitle: "Agile and powerful in confined spaces.",
                  image: {
                    src: Images?.highconWallMountedJibCraneWithGirderBoomWithTieRodsHero,
                    alt: "Wall-mounted jib crane with girder boom with tie rods Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "2000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Wall-mounted jib crane with girder boom with tie rods, with capacity up to 2000 kg",
                  subtitle:
                    "The OMIS wall-mounted jib crane with cantilever girder boom, with one or two tie rods, ensure versatile handling and increased trolley stability even with heavy loads and extensions The rotation assembly is also on high-quality bearings. The wall-mounted crane is available with manual push, mechanical or electric trolley and is supplied complete with power line.",
                  description: [
                    "In the case of customer-specific operational requirements, jib cranes can be installed in positions opposite each other or can be designed with larger dimensions.",
                    "This type of jib crane is the most practical and economical solution for ensuring operational autonomy in a work area that would otherwise require the use of overhead cranes, forklifts or other lifting equipment.",
                    "Moreover, it efficiently solves the issues connected with the handling of loads in confined spaces, where other lifting equipment would not be suitable.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the wall-mounted jib crane with girder boom with tie rods",
                  items: [
                    {
                      description: "No floor space required",
                    },
                    {
                      description: "Easy tilting",
                    },
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Easy to use",
                    },
                    {
                      description: "Limited footprint",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.highconWallMountedJibCraneWithGirderBoomWithTieRods,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithGirderBoomWithTieRodsWide,
                    alt: "Configuration 1",
                    name: "Wide connection",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithGirderBoomWithTieRodsTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithGirderBoomWithTieRodsProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithGirderBoomWithTieRodsDouble,
                    alt: "Configuration 4",
                    name: "Double Boom",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithGirderBoomWithTieRodsNarrow,
                    alt: "Configuration 5",
                    name: "Narrow connection",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithGirderBoomWithTieRodsDoubleBoom,
                    alt: "Configuration 6",
                    name: "Double Boom",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 2000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beams with tie rods",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Rotation",
                      value: "Manual",
                    },
                    {
                      heading: "Wall bracket",
                      value:
                        "The support bracket, tie rods and counter-braces are constructed according to the required dimensions of the pillar.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with manual push or mechanical electric trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
              },
              {
                id: "wall-mounted-jib-crane-with-articulated-boom",
                Component: CraneProductDetailPage,
                title: "Wall-mounted jib crane with articulated boom",
                shortDescription:
                  "The wall-mounted crane with articulated boom allows access to parts of the work area that would otherwise be inaccessible due to obstacles, overcoming the limitations of traditional rigid booms.",
                image: {
                  src: Images?.highconWallMountedJibCraneWithArticulatedBoom,
                  alt: "Wall-mounted jib crane with articulated boom",
                },
                heroData: {
                  title: "Wall-mounted jib crane with articulated boom",
                  subtitle: "Superior precision and versatility of movement.",
                  image: {
                    src: Images?.highconWallMountedJibCraneWithArticulatedBoomHero,
                    alt: "Wall-mounted jib crane with articulated boom Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "1000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "4",
                    unit: "+",
                    value: "Maximum extension",
                  },
                  {
                    title: "240° - 300°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Wall-mounted jib crane with articulated boom with capacity up to 1000 kg",
                  subtitle:
                    "Wall-mounted jib cranes with articulated boom offer access to parts of the work area that would otherwise be inaccessible due to obstacles, thanks to the flexibility of their articulated boom. The latter consists of two segments rotating on bearings that can turn independently of each other. Without tie rods above the boom, the maximum available height can be utilised.",
                  description: [
                    "The hoist is usually attached at the tip of the boom, but it can be mounted on a trolley on request. This type of crane is the most practical and economic solution for an independent workstation, which would otherwise require the use of an overhead crane or a forklift truck. Moreover, it efficiently solves the issues connected with the handling of loads in confined spaces, where other lifting equipment would not be suitable. Larger jib cranes can be obtained on request. This practical and cost-effective solution is ideal for the manual handling of loads at workstations that do not permit use of the pillar but make use of a load-bearing pillar for fixing the boom with a system of brackets and tie rods.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the wall-mounted jib crane with articulated boom",
                  items: [
                    {
                      description: "Boom with independently rotating segments",
                    },
                    {
                      description: "Maximum utilisation of available space",
                    },
                    {
                      description: "Easy to use",
                    },
                    {
                      description: "Reduced footprint",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.highconWallMountedJibCraneWithArticulatedBoom,
                ],
                productConfigurations: [
                  {
                    image: Images?.highconWallMountedJibCraneWithArticulatedBoomWide,
                    alt: "Configuration 1",
                    name: "Wide Connection",
                  },
                  {
                    image: Images?.highconWallMountedJibCraneWithArticulatedBoomTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithArticulatedBoomProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                  {
                    image: Images?.highconWallMountedJibCraneWithArticulatedBoomDouble,
                    alt: "Configuration 4",
                    name: "Double Boom",
                  },
                  {
                    image: Images?.highconWallMountedJibCraneWithArticulatedBoomNarrow,
                    alt: "Configuration 5",
                    name: "Narrow Connection",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithArticulatedBoomDoubleBoom,
                    alt: "Configuration 6",
                    name: "Double Boom",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 1000 kg" },
                    {
                      heading: "Ranges",
                      value: "Up to 4 +4 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value:
                        "The first close to the pillar is made of tubular profile, the second in I beam",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "240° the first segment of the boom close to the pillar - 300° the second boom",
                    },
                    {
                      heading: "Rotation",
                      value: "Manual",
                    },
                    {
                      heading: "Wall bracket",
                      value:
                        "The support bracket, tie rods and counter-braces are constructed according to the required dimensions of the pillar.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist, fixed mounted at the tip of the boom, for lifting the load, with one or two lifting speeds. On request it can be fitted with an electric or push trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
              },
              {
                id: "wall-mounted-jib-crane-with-girder-boom-with-tie-rods-and-electric-rotation",
                Component: CraneProductDetailPage,
                title:
                  "Wall-mounted jib crane with girder boom with tie rods and electric rotation",
                shortDescription:
                  "The wall-mounted crane with electric rotation which, thanks to the use of tie rods, easily copes with large extensions and loads.",
                image: {
                  src: Images?.highconWallMountedJibCraneWithGirderBoomWithTieRodsAndElectricRotation,
                  alt: "Wall-mounted jib crane with girder boom with tie rods and electric rotation",
                },
                heroData: {
                  title:
                    "Wall-mounted jib crane with girder boom with tie rods and electric rotation",
                  subtitle:
                    "Superior performance for high loads and extensions.",
                  image: {
                    src: Images?.highconWallMountedJibCraneWithGirderBoomWithTieRodsAndElectricRotationHero,
                    alt: "Wall-mounted jib crane with girder boom with tie rods and electric rotation Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "2000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Wall-mounted jib crane with girder boom with tie rods and electric rotation, with capacity up to 2000 kg",
                  subtitle:
                    "Challenges related to heavy loads or considerable thrusts, or the presence of obstructions on the floor can be effectively handled by using the standard wall-mounted jib crane with girder boom, equipped with tie rods and electric rotation. The girder boom of this jib crane is equipped with supporting tie rods, ensuring an efficient and stable system even with heavy loads and large extensions.",
                  description: [
                    "Boom rotation is managed by a gear motor/coupling system, connected to the rotation pin and is regulated by an inverter. The planetary gear is driven by a self-braking electric motor with soft start. Flame-resistant flexible cables, suspended on trolleys sliding under the boom, form the electrical line to power the hoist trolley. The wall-mounted jib crane, with 270° electrical rotation, is supplied complete with a push-button strip hanging from the hoist or sliding independently, as required. On request, rotation limit switches can be installed to limit the range of movement of the boom.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the standard wall-mounted jib cranes with girder boom with tie rods and electric rotation",
                  items: [
                    {
                      description: " No floor space required",
                    },
                    {
                      description: "Greater capacities and extensions",
                    },
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Precise control",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.highconWallMountedJibCraneWithGirderBoomWithTieRodsAndElectricRotation,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithGirderBoomWithTieRodsAndElectricRotationWide,
                    alt: "Configuration 1",
                    name: "Wide Connection",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithGirderBoomWithTieRodsAndElectricRotationTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithCantileverGirderBoom,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithGirderBoomWithTieRodsAndElectricRotationDouble,
                    alt: "Configuration 4",
                    name: "Double Boom",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithGirderBoomWithTieRodsAndElectricRotationNarrow,
                    alt: "Configuration 5",
                    name: "Narrow Connection",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithGirderBoomWithTieRodsAndElectricRotationDoubleBoom,
                    alt: "Configuration 3",
                    name: "Double Boom",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 2000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beams with tie rods",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Rotation",
                      value: "Electric",
                    },
                    {
                      heading: "Peripheral speed",
                      value: "~18 m/min",
                    },
                    {
                      heading: "Wall bracket",
                      value:
                        "The support bracket, tie rods and counter-braces are constructed according to the required dimensions of the pillar.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with manual push or mechanical electric trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
              },
              {
                id: "wall-mounted-jib-crane-with-cantilever-girder-boom-with-tie-rods-and-electric-rotation",
                Component: CraneProductDetailPage,
                title:
                  "Wall-mounted jib crane with cantilever girder boom with tie rods and electric rotation",
                shortDescription:
                  "The electric wall-mounted crane for use where a column cannot be used, when the load is heavy and maximum utilisation of space at height is required.",
                image: {
                  src: Images?.highconWallMountedJibCraneWithCantileverGirderBoomAndElectricRotation,
                  alt: "Wall-mounted jib crane with cantilever girder boom with tie rods and electric rotation",
                },
                heroData: {
                  title:
                    "Wall-mounted jib crane with cantilever girder boom with tie rods and electric rotation",
                  subtitle: "Large capacity and optimal use of space.",
                  image: {
                    src: Images?.highconWallMountedJibCraneWithCantileverGirderBoomAndElectricRotationHero,
                    alt: "Wall-mounted jib crane with cantilever girder boom with tie rods and electric rotation Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "1000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Wall-mounted jib crane with cantilever girder boom with tie rods and electric rotation, with capacity up to 2000 kg",
                  subtitle:
                    "The wall-mounted jib crane with 270° electrical rotation meets the needs of industrial applications or operations where the consistency of loads or thrust forces cannot be coped with by conventional cranes with manual rotation.",
                  description: [
                    "The girder of this jib crane is self-supporting and cantilevered, without using tie rods. Boom rotation depends on a gear motor/coupling system connected to the rotation pin and is regulated by an inverter. The planetary gear is driven by a self-braking electric motor with soft start. Flame-resistant flexible cables, suspended on trolleys sliding under the boom, form the electrical line that powers the hoist trolley. The wall-mounted jib crane, with 270° electrical rotation, is supplied complete with a push-button strip hanging from the hoist or sliding independently, as required.",
                    "Rotation limit switches can be installed if the boom tilting range needs to be limited.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the standard wall-mounted jib crane with cantilever girder boom with electric rotation",
                  items: [
                    {
                      description: "No floor space required",
                    },
                    {
                      description: "Increase of the available hook stroke",
                    },
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Precise control",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.highconWallMountedJibCraneWithCantileverGirderBoomAndElectricRotation,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithCantileverGirderBoomAndElectricRotationWide,
                    alt: "Configuration 1",
                    name: "Wide Connection",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithCantileverGirderBoomAndElectricRotationTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithCantileverGirderBoomAndElectricRotationProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithCantileverGirderBoomAndElectricRotationDouble,
                    alt: "Configuration 4",
                    name: "Double Boom",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithCantileverGirderBoomAndElectricRotationNarrow,
                    alt: "Configuration 4",
                    name: "Narrow Connection",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithCantileverGirderBoomAndElectricRotationDoubleBoom,
                    alt: "Configuration 5",
                    name: "Double Boom",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 2000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beams without tie rods",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Rotation",
                      value: "Electric",
                    },
                    {
                      heading: "Peripheral speed",
                      value: "~18 m/min",
                    },
                    {
                      heading: "Wall bracket",
                      value:
                        "The support bracket, tie rods and counter-braces are constructed according to the required dimensions of the pillar.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with manual push or mechanical electric trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
              },
            ],
          },
          {
            id: "mobile-jib-cranes",
            Component: CraneDetailPage,
            title: "Mobile",
            shortDescription:
              "Thanks to the movable plinth, the jib crane can serve workplaces located in different parts of the same production area. Without fixed anchorage to the ground, it can be transported by forklift or overhead crane.",
            image: {
              src: Images?.highconSusProspect,
              alt: "Mobile Jib Cranes",
            },
            heroData: {
              title: "Mobile",
              image: {
                src: Images?.highconSusProspect,
                alt: "Mobile Jib Cranes Hero Image",
              },
            },
            detailPageContent: [
              {
                type: "white-bordered",
                title: "Without position limits in the facility",
                paragraphs: [
                  "The mobile jib crane is an efficient solution for lifting and handling materials, with such versatility that it can be moved and placed wherever it is needed, within the facility and at different workstations, using a forklift or overhead crane.",
                  "Mobile jib cranes are special solutions for moving loads between workstations.",
                ],
              },
              {
                type: "dark",
                title: "",
                paragraphs: [
                  "They are not tied to a permanent anchorage on the ground and do not need to be dismantled in order to be moved. Their plinth, in fact, is a heavy base that stabilises the system during lifting operations. This base can be moved to adapt to the specific needs of the workplace. Mobile jib cranes can be used for a wide range of applications, from lifting construction materials to industrial machinery.",
                  "They are designed to be installed and ready for use quickly, reducing downtime on construction sites or in industrial plants.",
                ],
              },
            ],
            layerThreeProducts: [
              {
                id: "pillar-jib-crane-with-channel-shaped-boom-and-movable-plinth",
                Component: CraneProductDetailPage,
                title:
                  "Pillar jib crane with channel-shaped boom and movable plinth",
                shortDescription:
                  "The ideal mobile jib crane to be moved around the work area by forklift or overhead crane, thanks to the movable plinth without the constraint of a permanent anchorage to the ground.",
                image: {
                  src: Images?.highconPillarJibCraneWithChannelShapedBoomAndMovablePlinth,
                  alt: "Pillar jib crane with channel-shaped boom and movable plinth",
                },
                heroData: {
                  title:
                    "Pillar jib crane with channel-shaped boom and movable plinth",
                  subtitle: "Stable, sliding and able to handle large loads.",
                  image: {
                    src: Images?.highconPillarJibCraneWithChannelShapedBoomAndMovablePlinthHero,
                    alt: "Pillar jib crane with channel-shaped boom and movable plinth Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "500",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "6",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with channel-shaped boom and movable plinth with capacity up to 500 kg",
                  subtitle:
                    "The pillar jib crane with channel-shaped profile boom and movable plinth is the perfect tool for working environments and operational needs that require the crane to be moved, which therefore does not have to be constrained by a permanent anchorage to the ground.",
                  description: [
                    "The boom, which has a special press-folded channel profile, ensures lightness of handling. The sliding trolley moves inside the boom itself, with a smooth, fluid motion that makes the pillar jib crane easy to manoeuvre. Slightly inclined sliding surfaces and the use of special materials with a smooth surface and minimal weight reduce the friction caused by the travel wheels of the hoist trolleys. The lower weight reduces the effort the operator has to exert manually to rotate the boom of the jib crane. This results in greater smoothness, quietness and vertical loading capacity. The jib crane with channel-shaped profile boom and movable plinth is only available with a manual push trolley.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the wall-mounted jib crane with channel-shaped profile boom",
                  items: [
                    {
                      description: "Ease of movement",
                    },
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Easy to use",
                    },
                    {
                      description: "Precise control",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.highconPillarJibCraneWithChannelShapedBoomAndMovablePlinth,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.highconPillarJibCraneWithChannelShapedBoomAndMovablePlinthConcrete,
                    alt: "Portable Gantry crane configuration 1",
                    name: "Front view",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithChannelShapedBoomAndMovablePlinthTop,
                    alt: "Portable Gantry crane configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithChannelShapedBoomAndMovablePlinthProspect,
                    alt: "Portable Gantry crane configuration 3",
                    name: "Prospect",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithChannelShapedBoomAndMovablePlinthSteel,
                    alt: "Portable Gantry crane configuration 3",
                    name: "Prospect",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 500 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 6 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Omega-shaped press-folded profile",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Plinth",
                      value:
                        "Movable round plinth in concrete or steel formwork with concrete filling",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain or rope electric hoist for lifting the load, with one or two lifting speeds, with electric or push trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
              },
              {
                id: "pillar-jib-crane-with-cantilever-girder-boom-and-movable-plinth",
                Component: CraneProductDetailPage,
                title:
                  "Pillar jib crane with cantilever girder boom and movable plinth",
                shortDescription:
                  "The self-supporting mobile cantilever jib crane, which can make the most of space at height by increasing the available hook stroke.",
                image: {
                  src: Images?.highconPillarJibCraneWithCantileverGirderBoomAndMovablePlinth,
                  alt: "",
                },
                heroData: {
                  title:
                    "Pillar jib crane with cantilever girder boom and movable plinth",
                  subtitle: "It moves easily and height is not an issue.",
                  image: {
                    src: Images?.highconPillarJibCraneWithCantileverGirderBoomAndMovablePlinthHero,
                    alt: "",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "500",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "6",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with cantilever girder boom and movable plinth with capacity up to 500 kg",
                  subtitle:
                    "The pillar jib crane with cantilever girder boom and movable plinth is ideal for handling anywhere in the work area using a forklift or overhead crane. It is a special solution that is not constrained by a permanent anchorage to the ground. A second specific advantage of this jib crane is the possibility of ensuring maximum use of the available height, with consequent increase of the available hook stroke.",
                  description: [
                    "All these features make it a highly versatile tool, as well as being easy to handle and highly economical, both in installation and in the day-to-day operation of the work area served The mobile jib crane, with self-supporting cantilever girder boom and without tie rods, is used for handling light loads in a variety of industrial applications, from small workshops to large assembly lines, food production plants or wine cellars.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with cantilever girder boom and movable plinth",
                  items: [
                    {
                      description: "Ease of movement",
                    },
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Increase of the available hook stroke",
                    },
                    {
                      description: "Easy to use",
                    },
                    {
                      description: "Precise control",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.highconPillarJibCraneWithCantileverGirderBoomAndMovablePlinth,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAndMovablePlinthConcrete,
                    alt: "Portable Gantry crane configuration 1",
                    name: "Front view",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAndMovablePlinthTop,
                    alt: "Portable Gantry crane configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAndMovablePlinthProspect,
                    alt: "Portable Gantry crane configuration 3",
                    name: "Prospect",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithCantileverGirderBoomAndMovablePlinthSteel,
                    alt: "Portable Gantry crane configuration 3",
                    name: "Prospect",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 500 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 6 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beams without tie rods",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Plinth",
                      value:
                        "Movable round plinth in concrete or steel formwork with concrete filling",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain or rope electric hoist for lifting the load, with one or two lifting speeds, with electric or push trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
              },
              {
                id: "pillar-jib-crane-with-girder-boom-and-tie-rods-and-movable-plinth",
                Component: CraneProductDetailPage,
                title:
                  "Pillar jib crane with girder boom and tie rods and movable plinth",
                shortDescription:
                  "The mobile jib crane with tie rods, easy to handle and transport, designed to cope with the largest capacities and extensions.",
                image: {
                  src: Images?.highconPillarJibCraneWithGirderBoomAndTieRodsAndMovablePlinth,
                  alt: "",
                },
                heroData: {
                  title:
                    "Pillar jib crane with girder boom and tie rods and movable plinth",
                  subtitle:
                    "Mobility and maximum capacity without anchorage to the ground.",
                  image: {
                    src: Images?.highconPillarJibCraneWithGirderBoomAndTieRodsAndMovablePlinthHero,
                    alt: "",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "500",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "6",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with girder boom and tie rods with capacity up to 500 kg",
                  subtitle:
                    "The jib crane on a movable plinth allows operators to shift the crane, using suitable lifting equipment, to more than one location in the factory or construction site, without the constraint of a permanent anchorage to the ground. Extremely versatile, this type of jib crane combines ease of movement and positioning wherever needed in the working environment with the practicality and economy of use that are the added value of the entire category.",
                  description: [
                    "The pillar jib crane with girder boom with tie rods and movable plinth is a solution that, thanks to the use of tie rods, is particularly suitable for higher capacities and extensions, compared to the version with a cantilever girder. Easy to install, it is used for handling light loads in a great many industrial applications, from small workshops to large assembly lines, food production plants or wine cellars.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with girder boom with tie rods and movable plinth",
                  items: [
                    {
                      description: "Ease of movement",
                    },
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Easy to use",
                    },
                    {
                      description: "Precise control",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.highconPillarJibCraneWithGirderBoomAndTieRodsAndMovablePlinth,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.highconPillarJibCraneWithGirderBoomAndTieRodsAndMovablePlinthConcrete,
                    alt: "Portable Gantry crane configuration 1",
                    name: "Front view",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithGirderBoomAndTieRodsAndMovablePlinthTop,
                    alt: "Portable Gantry crane configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithGirderBoomAndTieRodsAndMovablePlinthProspect,
                    alt: "Portable Gantry crane configuration 3",
                    name: "Prospect",
                  },
                  {
                    image:
                      Images?.highconPillarJibCraneWithGirderBoomAndTieRodsAndMovablePlinthSteel,
                    alt: "Portable Gantry crane configuration 3",
                    name: "Prospect",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 500 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 6 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beams with tie rods",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Plinth",
                      value:
                        "Movable round plinth in concrete or steel formwork with concrete filling",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain or rope electric hoist for lifting the load, with one or two lifting speeds, with electric or push trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
    additionalData: [
      {
        title: "Why Choose Our Cranes?",
        subData: [
          {
            Icon: (props) => <ShieldCheck {...props} />,
            title: "Safety First",
            description:
              "Advanced safety features including overload protection, emergency braking systems, and anti-collision technology.",
          },
          {
            Icon: (props) => <Weight {...props} />,
            title: "High Load Capacity",
            description:
              "Engineered to handle extreme loads with precision and stability, suitable for the most demanding applications.",
          },
          {
            Icon: (props) => <Crosshair {...props} />,
            title: "Precision Control",
            description:
              "State-of-the-art control systems ensure smooth operation and precise positioning for maximum efficiency.",
          },
          {
            Icon: (props) => <HardHat {...props} />,
            title: "Robust Construction",
            description:
              "Built with high-grade steel and components designed to withstand harsh industrial environments.",
          },
          {
            Icon: (props) => <Settings {...props} />,
            title: "Low Maintenance",
            description:
              "Designed for minimal downtime with easy-to-maintain components and long service intervals.",
          },
          {
            Icon: (props) => <SlidersHorizontal {...props} />,
            title: "Customizable",
            description:
              "Tailored solutions to meet your specific operational requirements and facility constraints.",
          },
        ],
      },
    ],
  },
  {
    id: "winch-car",
    title: "Winch Car",
    Component: WinchCarPage,
    heroData: {
      image: {
        src: Images?.WinCarHero,
        alt: "winch car",
      },
      title: "Winch Cars Built for Heavy-Duty Performance",
      description:
        "Highcon's winch cars deliver exceptional pulling power and reliability for demanding industrial applications, mining operations, and material handling systems.",
    },
    detailPageContent: [
      {
        type: "white-bordered",
        paragraphPairs: [
          {
            title: "Top ride comfort on rails",
            paragraphs: [
              "Funiculars master curves, large differences in elevation and changes in gradient without any problem. This rope-propelled system that runs on rails is equally popular in cities, in the country, or in mountain regions. Its low profile ensures optimal availability in all weather conditions. In addition, this system impresses with a long service life and moderate maintenance costs.",
            ],
          },
          {
            title: "Funicular facts",
            list: [
              "Ideal for carrying passengers and freight, and for combined transport",
              "Top ride comfort",
              "Long service life and high operational efficiency",
              "New economic perspectives with fully automatic funiculars",
            ],
          },
        ],
      },
    ],
  },


  // partners

  {
    id: "eot-crane-manufacturers-coimbatore-omis",
    isPartner: true,
    Component: CranesPage,
    title: "EOT Cranes",
    meta_title: "Best EOT Crane Manufacturers in Coimbatore | Highcon",
    meta_description: "Highcon is among the best EOT crane manufacturers in Coimbatore, delivering reliable overhead cranes built to strict quality and safety standards.",
    meta_keywords: "eot crane manufacturers in coimbatore, overhead crane manufacturers coimbatore, eot crane suppliers coimbatore, industrial crane manufacturers in coimbatore, bridge crane manufacturers coimbatore, eot cranes for manufacturing industries, heavy duty overhead cranes india, custom eot crane manufacturer",
    heroData: {
      image: {
        src: Images?.EotCranesHero,
        alt: "EOT Cranes",
      },
      title:
        "Overhead cranes and industrial cranes, strength and versatility in movement",
      description:
        "Bridge cranes, like all our standard and special lifting and handling equipment, guarantee high performance in terms of quantity and quality, as they use the best technology available. They are built to last, ensuring excellent operating results in daily and non-daily use, characterised by high standards of safety and reliability.",
    },
    layerOneProducts: [
      {
        id: "single-girder-eot-crane-coimbatore-omis",
        isPartner: true,
        Component: CraneProductDetailPage,
        meta_title: "Single Girder EOT Crane in Coimbatore | Highcon",
        meta_description: "Highcon manufactures single girder EOT cranes in Coimbatore with proven quality, safety standards, and smooth performance for industrial applications.",
        meta_keywords: "single girder eot crane in coimbatore, single girder overhead crane coimbatore, eot crane manufacturers in coimbatore, single girder eot crane supplier, industrial overhead cranes coimbatore,light duty eot crane manufacturer, custom single girder crane india",
        title: "Single-girder overhead crane",
        shortDescription:
          "The most versatile, compact and fast-acting overhead crane, a safe, simple solution for everyday use. It is ideal for production and assembly lines.",
        label: "BRIDGE CRANES",
        heroData: {
          image: {
            src: Images?.SingleGridPicture,
            alt: "Single-girder overhead crane",
          },
          title: "Single-girder overhead crane",
          subtitle: "Maximum strength and simple operation anywhere",
        },
        keyPerformanceHighlights: [
          {
            title: "12.5",
            unit: "t",
            value: "Maximum capacity",
          },
          {
            title: "32",
            unit: "m",
            value: "Maximum span",
          },
          {
            title: "A5/M5",
            value: "Class",
          },
        ],
        detailedDescription: {
          title: "Single-girder overhead crane with capacity up to 12.5 t",
          subtitle:
            "The single-girder overhead crane is a solid, reliable, lightweight system, ideal for everyday use in production and assembly lines and suitable for many other applications throughout the manufacturing sector. It performs best when integrated with an OMIS H-Series hoist, which allows hook strokes of up to 20 metres, among other things.",
          description: [
            "It is a compact and safe overhead crane, offering smooth movements and reduced maintenance on all mechanical and electro-mechanical parts, thanks to the inverter control of the three movements. Even in low buildings, these single-girder overhead cranes allow intelligent solutions: their adaptability to different spatial and environmental conditions ensures maximum installation flexibility. The choice of the most suitable configuration adapts to specific lifting height requirements. Optional components, different height configurations and modifications on request make them universal tools, ready to perform their task with precision, manoeuvrability and a long working life.",
          ],
        },
        keyAdvantages: {
          heading: "Advantages of the single-girder overhead crane",
          items: [
            {
              description: "Maximum solidity with low weight",
            },
            {
              description: "Agile even in tight spaces",
            },
            {
              description: "Wide range of configurations and accessories",
            },
            {
              description: "Maximum versatility and solidity",
            },
            {
              description: "Easy maintenance",
            },
          ],
        },
        advantagesImage: [Images?.SingleGirderCrane],
        productConfigurations: [
          {
            image: Images?.SingleGrigerFront,
            alt: "Single-girder overhead crane configuration 1",
            name: "Front view",
          },
          {
            image: Images?.SingleGrigerTop,
            alt: "Single-girder overhead crane configuration 2",
            name: "Top view",
          },
          {
            image: Images?.SingleGrigerProspect,
            alt: "Single-girder overhead crane configuration 3",
            name: "Prospect",
          },
        ],
        technicalSpecifications: {
          standardFeatures: [
            { heading: "Capacity", value: "up to 12.5 t" },
            {
              heading: "Sliding speed",
              value: "From 10 to 60 m/min - More on request",
            },
            {
              heading: "Lifting speed",
              value: "Up to 10 m/min with OMIS H-Series hoist",
            },
            {
              heading: "Lifting height",
              value: "From 6 to 20 m with OMIS H-Series hoist",
            },
            {
              heading: "Control",
              value: "Inverter in the three movements",
            },
          ],
          optionalFeatures: [
            {
              heading: "Span",
              value: "Up to 32 m - More on request",
            },
            {
              heading: "Travel speed",
              value: "From 5 to 30 m/min - More on request",
            },
            {
              heading: "Classification",
              value: "- A5/M5- A6/M6 on request",
            },
            { heading: "Protection", value: "IP55" },
          ],
        },
        pictureGallery: [
          {
            image: Images?.SingleGrigerPicture1,
            alt: "Single-girder overhead crane in industrial facility",
          },
          {
            image: Images?.SingleGrigerPicture2,
            alt: "Single-girder overhead crane with yellow beam",
          },
          {
            image: Images?.SingleGrigerPicture3,
            alt: "Single-girder overhead crane installation view",
          },
          {
            image: Images?.SingleGrigerPicture4,
            alt: "Single-girder overhead crane gallery image 4",
          },
          {
            image: Images?.SingleGrigerPicture5,
            alt: "Single-girder overhead crane gallery image 5",
          },
          {
            image: Images?.SingleGrigerPicture6,
            alt: "Single-girder overhead crane gallery image 6",
          },
          {
            image: Images?.SingleGrigerPicture7,
            alt: "Single-girder overhead crane gallery image 7",
          },
          {
            image: Images?.SingleGrigerPicture8,
            alt: "Single-girder overhead crane gallery image 8",
          },
        ],
      },
      {
        id: "double-girder-eot-crane-coimbatore-omis",
        isPartner: true,
        Component: CraneProductDetailPage,
        title: "Double-girder overhead crane",
        label: "BRIDGE CRANES",
        meta_title: "Double Girder EOT Crane in Coimbatore | Highcon",
        meta_description: "Highcon manufactures double girder EOT cranes in Coimbatore for heavy-duty applications, ensuring high quality, safety standards, and reliable performance.",
        meta_keywords: "double girder eot crane in coimbatore, double girder eot crane manufacturer in coimbatore, double girder eot crane, double girder overhead crane, eot crane manufacturers in coimbatore, heavy duty overhead crane manufacturer, industrial eot cranes coimbatore, custom double girder crane indiadouble girder eot crane manufacturer, double girder eot crane supplier",
        shortDescription:
          "The overhead crane that meets all requirements in terms of load capacity, span and speed, in every environment and sector, up to 150 tonnes. A wide range of accessories and configurations enables the bridge crane to optimise the handling process, meeting even the most demanding requirements, in terms of both structure and performance.",
        heroData: {
          image: { src: Images?.DoubleGrigerHero, alt: "" },
          title: "Double-girder overhead crane",
          subtitle:
            "The first choice for transporting medium, heavy and very heavy loads.",
        },
        keyPerformanceHighlights: [
          {
            title: "150",
            unit: "t",
            value: "Maximum capacity",
          },
          {
            title: "32",
            unit: "m",
            value: "Maximum span",
          },
          {
            title: "A8/M8",
            value: "Class",
          },
        ],
        detailedDescription: {
          title: "Double-girder overhead crane with capacity up to 150 t",
          subtitle:
            "The double-girder overhead crane is designed for heavy-duty applications requiring high load capacities and extensive spans. Perfect for industrial environments demanding reliability and performance.",
          description: [
            "The standard double-girder overhead cranes have a load capacity of up to 150 tons and a span of up to 32 m. For a load capacity of up to 12.5 tons, OMIS double-girder overhead cranes can be fitted with a hoist or open barrel hoist. The cranes use inverters, though double-speed motors are also made available on request. OMIS is the first company of its kind in Italy to make extensive use of inverter technology, as it ensures smooth movement and minimal maintenance of all the mechanical and electromechanical parts. For special requirements, the girders can be supplied with bolted joints, which makes it possible to transport them by land and sea in containers. Standard double-girder overhead cranes are A5/M5 classified according to the FEM standards, but are also available with A6/M6 classification, or higher on request.In larger cranes, used in industries such as steel mills, generator production, power plants, forges, mould making, redundant components are frequently integrated to prevent unplanned downtime. At the same time, appropriate maintenance programmes are agreed with the customer to ensure optimum performance.",
          ],
        },
        keyAdvantages: {
          heading: "Advantages of the double-girder overhead crane",
          items: [
            {
              description: "Wide range of configurations and accessories",
            },
            {
              description: "Maximum versatility and solidity",
            },
            {
              description: "Greater customisation",
            },
            {
              description: "Suitable for large capacities and special services",
            },
            {
              description: "Easy maintenance",
            },
          ],
        },
        advantagesImage: [
          Images?.DoubleGriger1,
          Images?.DoubleGriger2,
          Images?.DoubleGriger3,
          Images?.DoubleGriger4,
          Images?.DoubleGriger5,
          Images?.DoubleGriger6,
        ],
        productConfigurations: [
          {
            image: Images?.Hoist,
            alt: "Double-girder overhead crane configuration 1",
            name: "Hoist",
          },
          {
            image: Images?.OpenBarrel,
            alt: "Double-girder overhead crane configuration 2",
            name: "Open barrel hoist",
          },
          {
            image: Images?.DoubleFitting,
            alt: "Double-girder overhead crane configuration 3",
            name: "Double lifting",
          },
          {
            image: Images?.LargeCapacity,
            alt: "Double-girder overhead crane configuration 4",
            name: "Large capacity",
          },
          {
            image: Images?.DoubleGrigertop,
            alt: "Double-girder overhead crane configuration 5",
            name: "Top view",
          },
          {
            image: Images?.Automatic,
            alt: "Double-girder overhead crane configuration 6",
            name: "Automatic",
          },
          {
            image: Images?.Automatic2,
            alt: "Double-girder overhead crane configuration 7",
            name: "Automatic",
          },
        ],
        technicalSpecifications: {
          standardFeatures: [
            {
              heading: "Capacity",
              value: "Up to 150 t - More on request",
            },
            {
              heading: "Sliding speed",
              value: "From 10 to 60 m/min - More on request",
            },
            {
              heading: "Lifting speed",
              value: "Up to 35 m/min",
            },
            {
              heading: "Lifting height",
              value: "20 m - More on request",
            },
            {
              heading: "Control",
              value: "Inverter in the three movements",
            },
          ],
          optionalFeatures: [
            {
              heading: "Span",
              value: "Up to 32 m - More on request",
            },
            {
              heading: "Travel speed",
              value: "From 5 to 40 m/min",
            },
            {
              heading: "Classification",
              value:
                "- A5/M5- A6/M6 on request- A7/M7 on request- A8/M8 on request",
            },
            {
              heading: "Protection",
              value: "IP55",
            },
          ],
        },
        pictureGallery: [
          {
            image: Images?.DoublePic1,
            alt: "Double-girder overhead crane view 1",
          },
          {
            image: Images?.DoublePic2,
            alt: "Double-girder overhead crane view 2",
          },
          {
            image: Images?.DoublePic3,
            alt: "Double-girder overhead crane view 3",
          },
          {
            image: Images?.DoublePic4,
            alt: "Double-girder overhead crane view 4",
          },
          {
            image: Images?.DoublePic5,
            alt: "Double-girder overhead crane view 5",
          },
          {
            image: Images?.DoublePic6,
            alt: "Double-girder overhead crane view 6",
          },
          {
            image: Images?.DoublePic7,
            alt: "Double-girder overhead crane view 7",
          },
          {
            image: Images?.DoublePic8,
            alt: "Double-girder overhead crane view 8",
          },
          {
            image: Images?.DoublePic9,
            alt: "Double-girder overhead crane view 9",
          },
          {
            image: Images?.DoublePic10,
            alt: "Double-girder overhead crane view 10",
          },
          {
            image: Images?.DoublePic11,
            alt: "Double-girder overhead crane view 11",
          },
          {
            image: Images?.DoublePic12,
            alt: "Double-girder overhead crane view 12",
          },
          {
            image: Images?.DoublePic13,
            alt: "Double-girder overhead crane view 13",
          },
          {
            image: Images?.DoublePic14,
            alt: "Double-girder overhead crane view 14",
          },
        ],
      },
      {
        id: "suspended-electric-crane-omis",
        isPartner: true,
        Component: CraneProductDetailPage,
        title: "Suspended electric crane",
        shortDescription:
          "The single-girder suspended bridge crane with powered sliding is designed to move light and medium-heavy loads in a constant and safe manner, without the operator having to bear any load and leaving the ground completely free.",
        label: "BRIDGE CRANES",
        heroData: {
          image: { src: Images?.SuspendedHero, alt: "" },
          title: "Suspended electric crane",
          subtitle: "The winning solution for medium-heavy loads",
        },
        keyPerformanceHighlights: [
          {
            title: "10",
            unit: "t",
            value: "Maximum capacity",
          },
          {
            title: "18",
            unit: "m",
            value: "Maximum span",
          },
          {
            title: "A5/M5",
            value: "Class",
          },
        ],
        detailedDescription: {
          title: "Suspended overhead crane with capacity up to 10 t",
          subtitle:
            "Suspended overhead cranes leave the entire workshop area available for production. The cranes are either hooked to the existing roof structure or anchored to a suitable support structure. This design saves time and costs and offers the optimal solution for lifting and handling light loads even in sheds with relatively small spans.",
          description: [
            "With the strategic arrangement of the workplaces and completely clear ground, they ensure fast and coordinated handling of materials, maximising productivity. The single-girder suspended bridge crane with powered sliding is designed to move light and medium-heavy loads in a constant and safe manner, without the operator having to make any effort. This system is ideal for workstations and production lines that require lifting up to 10000 kg and constant safe handling of materials between workstations. In addition, the versatility, ease of use and quick installation of suspended systems make them the best choice for handling that requires specific approaches. The motors used are of the highest quality and guarantee smooth and even handling of loads.",
          ],
        },
        keyAdvantages: {
          heading: "Advantages of the suspended electric crane",
          items: [
            {
              description: "Better approach than a placed crane",
            },
            {
              description: "Ground free from obstructions",
            },
            {
              description: "Smaller footprint",
            },
            {
              description: "Operational versatility",
            },
            {
              description: "Excellent performance/cost/function/use ratio",
            },
            {
              description: "Increased productivity and safety",
            },
          ],
        },
        advantagesImage: [Images?.Suspended1],
        productConfigurations: [
          {
            image: Images?.Suspended1,
            alt: "Suspended electric crane configuration 1",
            name: "Front view",
          },
          {
            image: Images?.Suspended1,
            alt: "Suspended electric crane configuration 2",
            name: "Top view",
          },
          {
            image: Images?.SusProspect,
            alt: "Suspended electric crane configuration 3",
            name: "Prospect",
          },
          {
            image: Images?.SusDetail,
            alt: "Suspended electric crane configuration 4",
            name: "Detail",
          },
        ],
        technicalSpecifications: {
          standardFeatures: [
            {
              heading: "Capacity",
              value: "From 500 kg to 10 t - More on request",
            },
            { heading: "Class", value: "A5/M5" },
            {
              heading: "Lifting speed",
              value: "From 4 m/min",
            },
            {
              heading: "Structure",
              value:
                "Single-girder - A double-girder structure can be provided on request",
            },
          ],
          optionalFeatures: [
            {
              heading: "Span",
              value: "Up to 18 m - More on request",
            },
            {
              heading: "Sliding speed",
              value: "Up to 40 m/min",
            },
            { heading: "Protection", value: "IP55" },
            {
              heading: "Side cantilevers",
              value: "On request - maximum 1 m per side, more on request",
            },
          ],
        },
        pictureGallery: [
          {
            image: Images?.SusPic1,
            alt: "Suspended electric crane view 1",
          },
          {
            image: Images?.SusPic2,
            alt: "Suspended electric crane view 2",
          },
          {
            image: Images?.SusPic3,
            alt: "Suspended electric crane view 3",
          },
          {
            image: Images?.SusPic4,
            alt: "Suspended electric crane view 4",
          },
        ],
      },
      {
        id: "wall-travelling-crane-omis",
        isPartner: true,
        Component: CraneProductDetailPage,
        title: "Wall travelling crane",
        label: "BRIDGE CRANES",
        shortDescription:
          "The bridge crane, structured like a sliding bracket, efficiently serves several workstations located next to each other, quickly and safely.",
        heroData: {
          image: { src: Images?.WallTravelling, alt: "" },
          title: "Wall travelling crane",
          subtitle:
            "Ideal for managing several consecutive work stations within a long shed",
        },
        keyPerformanceHighlights: [
          {
            title: "4",
            unit: "t",
            value: "Maximum capacity",
          },
          {
            title: "9",
            unit: "m",
            value: "Maximum span",
          },
          {
            title: "A5/M5",
            value: "Class",
          },
        ],
        detailedDescription: {
          title: "Wall travelling crane with capacity up to 4 t",
          subtitle:
            "Wall travelling cranes are the ideal solution for workstations arranged next to each other. They are used for transporting materials to individual workstations and at the same time to position the material by bringing it to the assembly stations.",
          description: [
            "These cranes are equipped with a cantilever boom and a lengthwise sliding mechanism, moving below the level of the main overhead crane, on runway rails arranged in an overlapping position along the wall of the building. These are therefore systems that actually operate one level below the large overhead cranes, enabling a consistent flow of materials to other production areas. The structure is optimised for the use of the OMIS H-Series rope hoist. The main advantage of wall travelling cranes is that there are no additional physical obstacles at floor level, such as a column or the base of a semi-gantry crane.",
          ],
        },
        keyAdvantages: {
          heading: "Advantages of the wall travelling crane",
          items: [
            {
              description: "Greater cover",
            },
            {
              description: "Operational versatility",
            },
            {
              description: "Also suitable for large lengths",
            },
            {
              description: "Increased productivity and safety",
            },
          ],
        },
        advantagesImage: [Images?.wall1],
        productConfigurations: [
          {
            image: Images?.WallFront,
            alt: "Wall travelling crane configuration 1",
            name: "Front view",
          },
          {
            image: Images?.WallTop,
            alt: "Wall travelling crane configuration 2",
            name: "Top view",
          },
          {
            image: Images?.WallProspect,
            alt: "Wall travelling crane configuration 3",
            name: "Prospect",
          },
        ],
        technicalSpecifications: {
          standardFeatures: [
            { heading: "Capacity", value: "Up to 4 t" },
            {
              heading: "Class",
              value: "A5/M5",
            },
            {
              heading: "Sliding speed",
              value: "From 20 m/min",
            },
            {
              heading: "Lifting speed",
              value: "From 4 m/min",
            },
            {
              heading: "Control",
              value: "Inverter in the three movements",
            },
          ],
          optionalFeatures: [
            {
              heading: "Extension",
              value: "Up to 9 m depending on capacity",
            },
            {
              heading: "Maximum under-beam height",
              value: "6 m (adaptable to operational requirements)",
            },
            { heading: "Travel speed", value: "From 20 m/min" },
            { heading: "Protection", value: "IP55" },
          ],
        },
        pictureGallery: [
          {
            image: Images?.WallPic1,
            alt: "Wall travelling crane view 1",
          },
          {
            image: Images?.WallPic2,
            alt: "Wall travelling crane view 2",
          },
          {
            image: Images?.WallPic3,
            alt: "Wall travelling crane view 3",
          },
        ],
      },
      {
        id: "semi-gantry-crane-manufacturers-coimbatore-omis",
        isPartner: true,
        Component: CraneProductDetailPage,
        title: "Semi-gantry cranes",
        label: "BRIDGE CRANES",
        meta_title: "Semi Gantry Crane Manufacturers in Coimbatore | Highcon",
        meta_description: "Highcon is a reliable semi gantry crane manufacturer in Coimbatore, offering safe, high-quality cranes for indoor and outdoor industrial applications.",
        meta_keywords: "semi gantry crane manufacturers in coimbatore, semi gantry crane coimbatore, semi gantry overhead crane, industrial semi gantry crane, single girder semi gantry crane, double girder semi gantry crane, eot semi gantry crane, heavy duty semi gantry crane india, custom semi gantry crane manufacturer",
        shortDescription:
          "The semi-gantry crane, with single or double girder, is decisive in areas below a large overhead crane system. Robust and versatile, it frees up floor space and safeguards operator safety.",
        heroData: {
          image: {
            src: Images?.semiHero,
            alt: "",
          },
          title: "Semi-gantry cranes",
          subtitle: "Free ground and versatility, indoors and out",
        },
        keyPerformanceHighlights: [
          {
            title: "10",
            unit: "t",
            value: "Maximum capacity",
          },
          {
            title: "15",
            unit: "m",
            value: "Maximum span",
          },
          {
            title: "A4/M4",
            value: "Class",
          },
        ],
        detailedDescription: {
          title: "Semi-gantry crane with capacity up to 10 t",
          subtitle:
            "Ideal for activities in areas below a large overhead crane system, as it leaves the ground completely free. It is an effective multi-purpose tool for indoor or outdoor use. In single-girder configuration, with a capacity of up to 5 tonnes, or double-girder up to 10 tonnes, it operates on its own rail, placed at an intermediate level with respect to that of the main overhead crane, and can also be used as a crane to make different workstations autonomous.",
          description: [
            "The structure of our semi-gantry cranes consists of a powered end carriage sliding along the overhead runways, connected to a vertical support structure linked to a second powered end carriage sliding on the ground. These cranes are not only an economically advantageous solution, especially in situations where the installation of overhead cranes would be complex or impractical for structural reasons, but are also an ideal complement to indoor logistics solutions, being suitable for both outdoor and indoor use. Our cranes offer high performance, even in limited spaces, thanks to their design focused on simplicity, modularity and maximum usability. The specially designed structure gives adaptability to different types of industrial fields and work areas, ensuring efficient optimisation of internal load handling. The best performance is achieved using the OMIS H-Series hoist. The free movement of personnel and material is ensured by the use of rubberised wheels (single-girder version), which eliminate limitations caused by interfering edges and tracks in the floor. On request, an obstacle detection device, indicator lights at operator level and LED lamps to illuminate the working area or displays indicating the weight of the load being handled can be installed. These options increase safety in the surrounding area, creating a reliable and protected working environment.",
          ],
        },
        keyAdvantages: {
          heading: "Advantages of semi-gantry cranes",
          items: [
            {
              description: "Optimal functionality in different environments",
            },
            {
              description: "Operational versatility",
            },
            {
              description: "Greater customisation",
            },
            {
              description: "Limited maintenance",
            },
            {
              description: "Increased productivity and safety",
            },
          ],
        },
        advantagesImage: [Images?.semi1, Images?.semi2],
        productConfigurations: [
          {
            image: Images?.semiSingle,
            alt: "Semi-gantry crane configuration 1",
            name: "Single girder",
          },
          {
            image: Images?.semiTop,
            alt: "Semi-gantry crane configuration 2",
            name: "Top view",
          },
          {
            image: Images?.semiProspect,
            alt: "Semi-gantry crane configuration 3",
            name: "Prospect",
          },
          {
            image: Images?.semiDouble,
            alt: "Semi-gantry crane configuration 4",
            name: "Double girder",
          },
          {
            image: Images?.semiTop2,
            alt: "Semi-gantry crane configuration 5",
            name: "Top view",
          },
          {
            image: Images?.semiProspect2,
            alt: "Semi-gantry crane configuration 6",
            name: "Prospect",
          },
          {
            image: Images?.semiDetail,
            alt: "Semi-gantry crane configuration 7",
            name: "Detail",
          },
        ],
        technicalSpecifications: {
          standardFeatures: [
            {
              heading: "Capacity",
              value:
                "Single-girder: up to 5 t - More on requestDouble-girder: up to 10 t - More on request",
            },
            { heading: "Class", value: "A4/M4" },
            { heading: "Sliding speed", value: "Up to 40 m/min" },
            {
              heading: "Lifting speed",
              value:
                "Up to 10 m/min with OMIS H-Series hoistUp to 12m/min with OMIS open barrel hoist",
            },
            {
              heading: "Control",
              value: "Inverter in the three movements",
            },
          ],
          optionalFeatures: [
            { heading: "Span", value: "Up to 15 m" },
            { heading: "Maximum under-beam height", value: "6 m" },
            { heading: "Travel speed", value: "Up to 20 m/min" },
            { heading: "Protection", value: "IP54" },
          ],
        },
        pictureGallery: [
          {
            image: Images?.semiPic1,
            alt: "Semi-gantry crane view 1",
          },
          {
            image: Images?.semiPic2,
            alt: "Semi-gantry crane view 2",
          },
          {
            image: Images?.semiPic3,
            alt: "Semi-gantry crane view 3",
          },
          {
            image: Images?.semiPic4,
            alt: "Semi-gantry crane view 4",
          },
          {
            image: Images?.semiPic5,
            alt: "Semi-gantry crane view 5",
          },
          {
            image: Images?.semiPic6,
            alt: "Semi-gantry crane view 6",
          },
          {
            image: Images?.semiPic7,
            alt: "Semi-gantry crane view 7",
          },
          {
            image: Images?.semiPic8,
            alt: "Semi-gantry crane view 8",
          },
          {
            image: Images?.semiPic9,
            alt: "Semi-gantry crane view 9",
          },
        ],
      },
      {
        id: "gantry-crane-manufacturers-coimbatore-omis",
        isPartner: true,
        Component: CraneProductDetailPage,
        title: "Gantry cranes",
        label: "BRIDGE CRANES",
        meta_title: "Gantry Crane Manufacturers in Coimbatore | Highcon",
        meta_description: "Highcon is a trusted gantry crane manufacturer in Coimbatore, delivering heavy-duty indoor and outdoor cranes built to safety and quality standards.",
        meta_keywords: "gantry crane manufacturers in coimbatore, gantry crane coimbatore, industrial gantry crane manufacturers, gantry crane manufacturers in india, heavy duty gantry crane india, gantry crane manufacturers, single girder gantry crane, double girder gantry crane, portable gantry crane manufacturer, outdoor gantry crane supplier, eot gantry crane manufacturers",
        shortDescription:
          "Single- and double-girder gantry cranes, designed to meet the specific operational needs of companies and sectors. They can be used effectively both inside and outside the facility.",
        heroData: {
          image: { src: Images?.gantry, alt: "" },
          title: "Gantry cranes",
          subtitle:
            "Real giants designed for heavy indoor and outdoor movement",
        },
        keyPerformanceHighlights: [
          {
            title: "50",
            unit: "t",
            value: "Maximum capacity",
          },
          {
            title: "30",
            unit: "m",
            value: "Maximum span",
          },
          {
            title: "A4/M4",
            value: "Class",
          },
        ],
        detailedDescription: {
          title: "Gantry crane with capacity up to 50 t",
          subtitle:
            "OMIS has been building excellent mobile gantry cranes, both single- and double-girder, since its foundation.",
          description: [
            "Our cranes are built with the classic system of the hinged portal, next to the flanged one, an optimal solution to avoid misalignments and excessive wear of the sliding mechanisms.",
            "This construction system, combined with the use of production lines specifically designed to build cranes of this type, makes it possible to create gantry cranes with extremely smooth movements, resulting in a significant reduction in maintenance interventions.",
            "Gantry cranes run on rails on the ground, eliminating the need for a runway. Gantry/portable gantry cranes are most commonly used outdoors, in warehouses, storage parks and loading areas, allowing for shorter manoeuvring times than conventional systems. These systems operate similarly to bridge cranes, but their structure does not rest on the surface of the building; instead, it is supported on steel legs equipped with power-driven trolleys. They are designed to meet the needs of industries that require transport systems for heavy or large loads",
            "They can also be used in production lines, helping to maintain the fluidity of the assembly process, and can be installed outdoors without the need for a support structure or inside unsuitable buildings. They are the ideal solution when building large infrastructures and civil works, as well as on prefabrication sites (concrete/wood etc.). They offer flexibility as they can be customised to meet specific needs, such as optimising the area served by the crane or integrating dedicated weighing systems. Sometimes the gantry crane is installed in an existing building, indoors, and slides under a previously installed overhead crane, so that an additional, independent material flow is achieved.",
          ],
        },
        keyAdvantages: {
          heading: "Advantages of gantry cranes",
          items: [
            {
              description: "Optimal functionality in different environments",
            },
            {
              description: "Greater load capacity",
            },
            {
              description: "Greater customisation",
            },
            {
              description: "Limited maintenance",
            },
            {
              description: "Increased productivity and safety",
            },
          ],
        },
        advantagesImage: [Images?.gantry1, Images?.gantry2],
        productConfigurations: [
          {
            image: Images?.gantrySingle,
            alt: "Gantry crane configuration 1",
            name: "Single girder",
          },
          {
            image: Images?.grantryDouble,
            alt: "Gantry crane configuration 2",
            name: "Double girder",
          },
          {
            image: Images?.gantryTop,
            alt: "Gantry crane configuration 3",
            name: "Top view",
          },
          {
            image: Images?.gantry2,
            alt: "Gantry crane configuration 4",
            name: "Detail",
          },
        ],
        technicalSpecifications: {
          standardFeatures: [
            {
              heading: "Capacity",
              value: "Up to 50 t - More on request",
            },
            { heading: "Class", value: "A4/M4" },
            { heading: "Sliding speed", value: "From 40 m/min" },
            {
              heading: "Protection",
              value: "IP55",
            },
          ],
          optionalFeatures: [
            {
              heading: "Span",
              value: "Up to 30 m - More on request",
            },
            {
              heading: "Under-beam height",
              value: "7 m - More on request",
            },
            { heading: "Side cantilevers", value: "On request" },
            {
              heading: "Control",
              value: "Inverter in the three movements",
            },
          ],
        },
        pictureGallery: [
          {
            image: Images?.gantryPic1,
            alt: "Gantry crane view 1",
          },
          {
            image: Images?.gantryPic2,
            alt: "Gantry crane view 2",
          },
          {
            image: Images?.gantryPic3,
            alt: "Gantry crane view 3",
          },
          {
            image: Images?.gantryPic4,
            alt: "Gantry crane view 4",
          },
          {
            image: Images?.gantryPic5,
            alt: "Gantry crane view 5",
          },
          {
            image: Images?.gantryPic6,
            alt: "Gantry crane view 6",
          },
          {
            image: Images?.gantryPic6,
            alt: "Gantry crane view 7",
          },
        ],
      },
      {
        id: "portable-gantry-crane-omis",
        isPartner: true,
        Component: CraneProductDetailPage,
        title: "Portable gantry crane",
        shortDescription:
          "A robust and manoeuvrable mobile system, always available wherever it is needed. Ideal where the characteristics or configuration of the environment do not allow the installation of a bridge crane.",
        label: "BRIDGE CRANES",
        heroData: {
          image: {
            src: Images?.PortableGantryHero,
            alt: "Portable gantry crane",
          },
          title: "Portable gantry crane",
          subtitle: "Economical and manoeuvrable across multiple workstation.",
        },
        keyPerformanceHighlights: [
          {
            title: "3200",
            unit: "kg",
            value: "Maximum capacity",
          },
          {
            title: "6",
            unit: "m",
            value: "Maximum span",
          },
          {
            title: "4",
            unit: "m",
            value: "Maximum height",
          },
        ],
        detailedDescription: {
          title: "Versatile, economical, expert in mobility",
          subtitle:
            "The portable gantry crane manufactured by OMIS is a highly robust mobile solution that is extremely easy to manoeuvre thanks to its four steered wheels. This feature allows easy handling of loads within the company, facilitating the connection between the various production departments. The lifting system of the portable gantry crane can be achieved by means of a manual or electric hoist, thus offering considerable operational flexibility.",
          description: [
            "This type of crane is particularly recommended in diverse environments and for carrying out a wide range of operations. For example, in machine shops, where the need to move the crane to different workstations is frequent, the portable gantry crane is an ideal choice. It is also perfect for situations where the installation of a bridge crane would be too complicated or even impossible. Portable gantry cranes are characterised by their versatility: they are robust systems that are extremely adaptable to the company’s operational requirements. Overall, the portable gantry crane is an ideal solution for handling loads efficiently and safely, improving productivity and operational flexibility in companies.",
          ],
        },
        keyAdvantages: {
          heading: "Advantages of the portable gantry crane",
          items: [
            {
              description: "Operational versatility",
            },
            {
              description: "Handling even over long distances",
            },
            {
              description: "Easy to use",
            },
            {
              description: "Adaptability to loads of various sizes",
            },
            {
              description: "Simplified maintenance",
            },
            {
              description: "Increased productivity and safety",
            },
          ],
        },
        advantagesImage: [Images?.PortableGantry],
        productConfigurations: [
          {
            image: Images?.PortableGantryFront,
            alt: "Portable Gantry crane configuration 1",
            name: "Front view",
          },
          {
            image: Images?.PortableGantryTop,
            alt: "Portable Gantry crane configuration 2",
            name: "Top view",
          },
          {
            image: Images?.PortableGantryProspect,
            alt: "Portable Gantry crane configuration 3",
            name: "Prospect",
          },
        ],
        technicalSpecifications: {
          standardFeatures: [
            {
              heading: "Capacity",
              value: "125 kg - 3200 kg - More on request",
            },
            {
              heading: "Span",
              value: "Up to 6 m",
            },
            {
              heading: "Height",
              value: "Up to 5 m",
            },
            {
              heading: "Wheels",
              value: "4, steered and swivelling, with foot brake",
            },
            {
              heading: "Side profile",
              value: "Square tubular profile",
            },
            {
              heading: "Girder profile",
              value: "IPE profile",
            },
            {
              heading: "Power line",
              value: "Festoon or Blindo Atollo 40A",
            },
            {
              heading: "Control",
              value: "Push-button strip hanging from hoist",
            },
          ],
          optionalFeatures: [
            {
              heading: "Custom paintwork",
              value:
                "The paint colour can be customised to meet specific needs, design or branding requirements.",
            },
            {
              heading: "Radio control for the hoist trolley",
              value:
                "On request, it is possible to integrate the radio remote control for the hoist trolley, improving performance, versatility and safety in handling operations. This advanced system allows precise and intuitive remote control, optimising efficiency and reducing operational risks.",
            },
          ],
        },
        pictureGallery: [
          {
            image: Images?.PortablegantryPic1,
            alt: "Portable Gantry crane in industrial facility",
          },
          {
            image: Images?.PortablegantryPic2,
            alt: "Portable Gantry crane working in a company",
          },
          {
            image: Images?.PortablegantryPic3,
            alt: "Portable Gantry crane side view",
          },
          {
            image: Images?.PortablegantryPic4,
            alt: "Portable Gantry crane gallery image 4",
          },
          {
            image: Images?.PortablegantryPic5,
            alt: "Portable Gantry crane gallery image 5",
          },
          {
            image: Images?.PortablegantryPic6,
            alt: "Portable Gantry crane gallery image 6",
          },
        ],
      },
      {
        id: "jib-cranes-omis",
        isPartner: true,
        Component: CraneDetailPage,
        title: "Jib Cranes",
        shortDescription:
          "Robust, versatile, economical. The manual or powered jib crane is the most functional, practical and cost-effective solution for making a work station independent and efficient.",
        image: {
          src: Images?.JibCranePillar,
          alt: "Jib Cranes",
        },
        heroData: {
          image: { src: Images?.JibCranePillarHero, alt: "" },
          title: "Jib Cranes",
          subtitle: "",
        },
        detailPageContent: [
          {
            type: "white-bordered",
            title: "Practical and versatile jib cranes for all light loads",
            paragraphs: [
              "Versatility and ease of use: the jib crane is the most practical and cost-effective solution for the handling of loads at the workstation in most industries. It can be with self-supporting column, bracket or mobile. Manual or motorised rotation of the boom is typically 270° or 360°, but can be adjusted to suit specific requirements dictated by architectural obstructions or machinery in the work area.",
            ],
          },
          {
            type: "dark",
            title: "",
            paragraphs: [
              "A wide range of jib cranes with various configurations is available: easy to install, they are used practically everywhere, from crafts workshops to large industries, from small machine shops to large assembly lines and food production plants or wine cellars. OMIS’s technical knowledge and long experience in the design of lifting and handling systems for light loads enables it to respond very effectively and quickly to the needs of many different applications around the world.",
            ],
          },
        ],
        layerTwoProducts: [
          {
            id: "pillar-jib-cranes-omis",
            isPartner: true,
            Component: CraneDetailPage,
            title: "Pillar",
            shortDescription:
              "Excellent for use in confined spaces, the pillar jib crane is a practical lifting and handling system, allowing independent work at a workstation.",
            image: {
              src: Images?.JibCranePillar,
              alt: "Pillar Jib Cranes",
            },
            heroData: {
              title: "Pillar",
              image: {
                src: Images?.JibCranePillarHero,
                alt: "Pillar Jib Cranes Hero Image",
              },
            },
            detailPageContent: [
              {
                type: "white-bordered",
                title: "Low cost and practicality in small spaces",
                paragraphs: [
                  "The pillar jib crane, designed and built by OMIS, is one of the most practical and economical solutions for handling loads. This system makes workstations autonomous for which otherwise overhead cranes or forklifts would be required.",
                ],
              },
              {
                type: "dark",
                title: "",
                paragraphs: [
                  "Moreover, this type of system solves the issues connected with the handling of loads in confined spaces, where other lifting equipment would not be able to operate. It is produced in several versions, which meet different space and performance requirements: with single or double boom, with a cantilever or anchored girder, with articulated boom, with rotation on a slew ring. The boom is rotated by manually or electrically pushing the load along the boom’s radius of rotation. The pillar jib crane is often used to move manufactured goods in machine shops, for loading and unloading at the service of CNC machines or in the assembly departments of large industries.Pillar jib cranes with larger dimensions than the standard products are available on request.",
                ],
              },
            ],
            layerThreeProducts: [
              {
                id: "pillar-jib-crane-with-channel-shaped-profile-boom-omis",
                isPartner: true,
                Component: CraneProductDetailPage,
                title: "Pillar Jib Crane with Channel Shaped Profile Boom",
                shortDescription:
                  "A simple pillar jib crane with low cost, low maintenance, ease of use, instant handling.",
                image: {
                  src: Images?.PillarJibCraneWithChannelShapedProfileBoom,
                  alt: "Pillar Jib Crane with Channel Shaped Profile Boom",
                },
                heroData: {
                  title: "Pillar Jib Crane with Channel Shaped Profile Boom",
                  subtitle: "Easy and economical instant handling",
                  image: {
                    src: Images?.PillarJibCraneWithChannelShapedProfileBoomHero,
                    alt: "",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "1000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with channel-shaped profile boom with capacity up to 1000 kg",
                  subtitle:
                    "The jib crane is the most practical and cost-effective solution for the handling of loads. It makes a workstation independent, which would otherwise require the use of an overhead crane or a forklift truck. Moreover, the jib crane solves the issues connected with the handling of loads in confined spaces, where other lifting equipment would not be able to operate.",
                  description: [
                    "The boom is rotated by manually pushing the load along the boom’s radius of rotation. It is widely used to move manufactured goods in machine shops, for loading and unloading at the service of CNC machines or in assembly departments.",
                    "Larger jib cranes are available on request.",
                    "The system is characterised by extremely light handling due to its low inertia. The bearings of the rotation assembly ensure natural seamless rotation. The crane is available with a manual push trolley, each one is supplied complete with a power line and in most cases an electric hoist is installed. The jib crane is characterised by low maintenance requirements, ease of use, instant handling and low cost.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with channel-shaped profile boom",
                  items: [
                    {
                      description: "Excellent manoeuvrability",
                    },
                    {
                      description: "Instant handling",
                    },
                    {
                      description: "Limited maintenance",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.PillarJibCraneWithChannelShapedProfileBoom,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.PillarJibCraneWithChannelShapedProfileBoomFront,
                    alt: "Pillar Jib Crane with Channel Shaped Profile Boom",
                    name: "Front view",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithChannelShapedProfileBoomTop,
                    alt: "Pillar Jib Crane with Channel Shaped Profile Boom",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithChannelShapedProfileBoomProspect,
                    alt: "Pillar Jib Crane with Channel Shaped Profile Boom",
                    name: "Prospect",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 1000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Omega-shaped press-folded profile",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Rotation",
                      value: "Manual",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with push trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
                pictureGallery: [
                  {
                    image: Images?.PillarJibCraneWithChannelShapedProfileBoom1,
                    alt: "Gallery image 1",
                  },
                  {
                    image: Images?.PillarJibCraneWithChannelShapedProfileBoom2,
                    alt: "Gallery image 2",
                  },
                  {
                    image: Images?.PillarJibCraneWithChannelShapedProfileBoom3,
                    alt: "Gallery image 3",
                  },
                  {
                    image: Images?.PillarJibCraneWithChannelShapedProfileBoom4,
                    alt: "Gallery image 4",
                  },
                  {
                    image: Images?.PillarJibCraneWithChannelShapedProfileBoom5,
                    alt: "Gallery image 5",
                  },
                  {
                    image: Images?.PillarJibCraneWithChannelShapedProfileBoom6,
                    alt: "Gallery image 6",
                  },
                  {
                    image: Images?.PillarJibCraneWithChannelShapedProfileBoom7,
                    alt: "Gallery image 7",
                  },
                  {
                    image: Images?.PillarJibCraneWithChannelShapedProfileBoom8,
                    alt: "Gallery image 8",
                  },

                  {
                    image: Images?.PillarJibCraneWithChannelShapedProfileBoom9,
                    alt: "Gallery image 9",
                  },
                  {
                    image: Images?.PillarJibCraneWithChannelShapedProfileBoom10,
                    alt: "Gallery image 10",
                  },
                ],
              },
              {
                id: "pillar-jib-crane-with-cantilever-girder-boom-omis",
                isPartner: true,
                Component: CraneProductDetailPage,
                title: "Pillar Jib Crane with Cantilever Girder Boom",
                shortDescription:
                  "The most suitable pillar jib crane when you need to make full use of vertical space, stable and capable of lifting heavy loads",
                image: {
                  src: Images?.PillarJibCraneWithCantileverGirderBoom,
                  alt: "",
                },
                heroData: {
                  title: "Pillar Jib Crane with Cantilever Girder Boom",
                  subtitle: "Optimised load capacity, stability and height.",
                  image: {
                    src: Images?.PillarJibCraneWithCantileverGirderBoomHero,
                    alt: "Pillar Jib Crane with Cantilever Girder Boom Hero Image",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "2000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with cantilever girder boom with capacity up to 2000 kg",
                  subtitle:
                    "The jib crane provides autonomy for a workstation without the need for an overhead crane or forklift truck, thus providing a practical and economical solution for handling loads. The crane also provides an answer to the issues associated with handling loads in confined spaces that are impractical for lifting equipment.",
                  description: [
                    "The jib crane with cantilever boom is the optimal solution when maximum utilisation of the available space in height is required, resulting in an increase in hook stroke. The rigid structure of the pillar ensures trolley stability in any boom position, while the bearings mounted on the rotation unit allow for smooth rotation. It is available in versions with manual push, mechanical or electric trolley, and each model comes complete with a power line. In addition to the increased capacity and optimised height, the pillar jib crane with cantilever girder boom also proves to be an excellent choice for use because it provides for future motorisation of the boom and trolley.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with cantilever girder boom",
                  items: [
                    {
                      description: "Smooth rotation",
                    },
                    {
                      description: "Excellent manoeuvrability",
                    },
                    {
                      description: "Instant handling",
                    },
                    {
                      description: "Limited maintenance",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.PillarJibCraneWithCantileverGirderBoom,
                ],
                productConfigurations: [
                  {
                    image: Images?.PillarJibCraneWithCantileverGirderBoomFront,
                    alt: "Configuration 1",
                    name: "Front view",
                  },
                  {
                    image: Images?.PillarJibCraneWithCantileverGirderBoomTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 2000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beams without tie rods",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Rotation",
                      value: "Manual",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with manual push or mechanical electric trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
                pictureGallery: [
                  {
                    image: Images?.PillarJibCraneWithCantileverGirderBoom1,
                    alt: "Pillar Jib Crane with Cantilever Girder Boom 1",
                  },
                  {
                    image: Images?.PillarJibCraneWithCantileverGirderBoom2,
                    alt: "Gallery Image 2",
                  },
                  {
                    image: Images?.PillarJibCraneWithCantileverGirderBoom3,
                    alt: "Gallery Image 3",
                  },
                  {
                    image: Images?.PillarJibCraneWithCantileverGirderBoom4,
                    alt: "Gallery image 4",
                  },
                  {
                    image: Images?.PillarJibCraneWithCantileverGirderBoom5,
                    alt: "Gallery image 5",
                  },
                  {
                    image: Images?.PillarJibCraneWithCantileverGirderBoom6,
                    alt: "Gallery image 6",
                  },
                ],
              },
              {
                id: "pillar-jib-crane-with-girder-boom-with-tie-rods-omis",
                isPartner: true,
                Component: CraneProductDetailPage,
                title: "Pillar Jib Crane with Girder Boom with tie rods",
                shortDescription:
                  "The stable and easy-to-use pillar jib crane, even with considerable capacities and extensions",
                image: {
                  src: Images?.PillarJibCraneWithGirderBoomWithTieRods,
                  alt: "",
                },
                heroData: {
                  title: "Pillar Jib Crane with Girder Boom with tie rods",
                  subtitle:
                    "Stability and power concentrated in the right space.",
                  image: {
                    src: Images?.PillarJibCraneWithGirderBoomWithTieRodsHero,
                    alt: "Pillar Jib Crane with Girder Boom with tie rods Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "2000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with girder boom with tie rods, with capacity up to 2000 kg",
                  subtitle:
                    "Pillar jib cranes with girder boom with one or two tie rods ensure easy tilting and trolley stability, even in case of significant load capacity requirements and extensions. Cost-effective purchase, installation and maximum practicality of use make it an optimal answer to many load handling needs in manufacturing facilities and construction sites, where it makes workstations autonomous that would otherwise have to be served by overhead cranes or forklift trucks.",
                  description: [
                    "The bearings mounted in each case on the rotating assembly allow for a smooth rotational movement. The jib crane is available with manual push, mechanical or electric trolley and all versions are supplied complete with power line. The cantilever girder boom gives the pillar jib crane a great specific advantage: compared to models with a channel girder, in fact, in this case it is possible to power the trolley and thus handle higher capacities/extensions.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with girder boom with tie rods",
                  items: [
                    {
                      description: "Sensitive tilting",
                    },
                    {
                      description: "Smooth rotation",
                    },
                    {
                      description: "Excellent manoeuvrability",
                    },
                    {
                      description: "Limited maintenance",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.PillarJibCraneWithGirderBoomWithTieRods,
                ],
                productConfigurations: [
                  {
                    image: Images?.PillarJibCraneWithGirderBoomWithTieRodsFront,
                    alt: "Configuration 1",
                    name: "Front view",
                  },
                  {
                    image: Images?.PillarJibCraneWithGirderBoomWithTieRodsTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithGirderBoomWithTieRodsProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 2000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beams with tie rods",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Rotation",
                      value: "Manual",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with manual push or mechanical electric trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
                pictureGallery: [
                  {
                    image: Images?.PillarJibCraneWithGirderBoomWithTieRods1,
                    alt: "Gallery Image 1",
                  },
                  {
                    image: Images?.PillarJibCraneWithGirderBoomWithTieRods2,
                    alt: "Gallery Image 2",
                  },
                  {
                    image: Images?.PillarJibCraneWithGirderBoomWithTieRods3,
                    alt: "Gallery Image 3",
                  },
                  {
                    image: Images?.PillarJibCraneWithGirderBoomWithTieRods4,
                    alt: "Gallery image 4",
                  },
                ],
              },
              {
                id: "pillar-jib-crane-with-articulated-boom-omis",
                isPartner: true,
                Component: CraneProductDetailPage,
                title: "Pillar Jib Crane with Articulated Boom",
                shortDescription:
                  "Pillar jib crane, equipped with a fixed hoist at the tip or on a sliding trolley, thanks to its articulated boom it allows operation in environments where there are obstacles and physical obstructions.",
                image: {
                  src: Images?.PillarJibCraneWithArticulatedBoom,
                  alt: "Pillar Jib Crane with Articulated Boom",
                },
                heroData: {
                  title: "Pillar Jib Crane with Articulated Boom",
                  subtitle: "Handling that overcomes obstacles.",
                  image: {
                    src: Images?.PillarJibCraneWithArticulatedBoomHero,
                    alt: "Pillar Jib Crane with Articulated Boom Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "1000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "+",
                    value: "Maximum extension",
                  },
                  {
                    title: "240° - 300°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with articulated boom with capacity up to 1000 kg",
                  subtitle:
                    "Jib cranes with articulated boom can reach those positions of the working area which due to obstacles would be impossible to reach with a fixed boom. They are designed to facilitate the movement of goods within the facility, avoiding fixed obstacles that could restrict the free rotation of the boom.",
                  description: [
                    "In this case the boom consists of two segments on bearings, capable of turning independently from each other. The bearing of the rotation assembly ensure seamless rotation and there are no tie rods above the boom, so that the full height can be utilised. The hoist is normally supplied mounted in a fixed configuration, at the tip of the boom. On request, however, it can be mounted on a sliding trolley along the outermost boom. This pillar jib crane is therefore optimised for use within confined areas and zones, and guarantees great versatility of use and installation.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with articulated boom",
                  items: [
                    {
                      description: "Limited footprint",
                    },
                    {
                      description: "Excellent manoeuvrability",
                    },
                    {
                      description: "Ideal for confined environments",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [Images?.PillarJibCraneWithArticulatedBoom],
                productConfigurations: [
                  {
                    image: Images?.PillarJibCraneWithArticulatedBoomFront,
                    alt: "Configuration 1",
                    name: "Front view",
                  },
                  {
                    image: Images?.PillarJibCraneWithArticulatedBoomTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image: Images?.PillarJibCraneWithArticulatedBoomProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 1000 kg" },
                    {
                      heading: "Ranges",
                      value: "Up to 4 +4 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value:
                        "The first close to the pillar is made of tubular profile, the second in I beam",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "240° the first segment of the boom close to the pillar - 300° the second boom",
                    },
                    {
                      heading: "Rotation",
                      value: "Manual",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist, fixed mounted at the tip of the boom, for lifting the load, with one or two lifting speeds. On request it can be fitted with an electric or push trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
                pictureGallery: [
                  {
                    image: Images?.PillarJibCraneWithArticulatedBoom1,
                    alt: "Gallery image 1",
                  },
                  {
                    image: Images?.PillarJibCraneWithArticulatedBoom2,
                    alt: "Gallery image 2",
                  },
                  {
                    image: Images?.PillarJibCraneWithArticulatedBoom3,
                    alt: "Gallery image 3",
                  },
                  {
                    image: Images?.PillarJibCraneWithArticulatedBoom4,
                    alt: "Gallery image 4",
                  },
                  {
                    image: Images?.PillarJibCraneWithArticulatedBoom5,
                    alt: "Gallery image 5",
                  },
                ],
              },
              {
                id: "pillar-jib-crane-with-cantilever-girder-boom-and-360°-manual-rotation-omis",
                isPartner: true,
                Component: CraneProductDetailPage,
                title:
                  "Pillar jib crane with cantilever girder boom and 360° manual rotation",
                shortDescription:
                  "The pillar jib crane can handle heavy loads in spaces where electrical rotation is not permitted and the device must cover a circular working area.",

                image: {
                  src: Images?.PillarJibCraneWithCantileverGirderBoomAnd360ManualRotation,
                  alt: "Pillar jib crane with cantilever girder boom and 360° manual rotation",
                },
                heroData: {
                  title:
                    "Pillar jib crane with cantilever girder boom and 360° manual rotation",
                  subtitle: "The widest rotation with manual action.",
                  image: {
                    src: Images?.PillarJibCraneWithCantileverGirderBoomAnd360ManualRotationHero,
                    alt: "Pillar jib crane with cantilever girder boom and 360° manual rotation Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "2000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "360°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with cantilever girder boom and 360° manual rotation",
                  subtitle:
                    "The jib crane that allows the widest and most complete rotation, so that the entire reachable area can be utilised. Continuous 360° manual rotation is the solution for shifting loads across the whole field of action of the crane, in those cases when the use of standard 270° rotation cranes is not satisfactory, and, for various reasons, the use of electricity is not permitted.",
                  description: [
                    "It is also an excellent choice for handling large loads. Practical and economical, jib cranes perform the fundamental function of providing operational independence to workstations that cannot be or are not reached by overhead cranes or forklift trucks. Extremely easy to use, they are among the most commonly used solutions in construction sites, factories and workshops where the safe and precise handling of parts and materials is an essential daily requirement. In particular, this manually rotating jib crane guarantees maximum autonomy of the working area and at the same time the highest level of user-friendliness and safety, with considerable capacity, extension and operational performance.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with cantilever girder boom and 360° manual rotation",
                  items: [
                    {
                      description: " 360° operability",
                    },
                    {
                      description: "Excellent manoeuvrability",
                    },
                    {
                      description: "Ideal for confined environments",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.PillarJibCraneWithCantileverGirderBoomAnd360ManualRotation,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAnd360ManualRotationFront,
                    alt: "Configuration 1",
                    name: "Front view",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAnd360ManualRotationTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAnd360ManualRotationProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 2000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beams",
                    },
                    {
                      heading: "Rotation",
                      value: "360° continuous",
                    },
                    {
                      heading: "Rotation",
                      value: "Manual",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with manual push or mechanical electric trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
                pictureGallery: [
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAnd360ManualRotation1,
                    alt: "Gallery image 1",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAnd360ManualRotation2,
                    alt: "Gallery image 2",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAnd360ManualRotation3,
                    alt: "Gallery image 3",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAnd360ManualRotation4,
                    alt: "Gallery image 4",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAnd360ManualRotation5,
                    alt: "Gallery image 5",
                  },
                ],
              },
              {
                id: "pillar-jib-cranes-with-channel-shaped-profile-double-boom-omis",
                isPartner: true,
                Component: CraneProductDetailPage,
                title:
                  "Pillar Jib Crane with Channel shaped profile double boom",
                shortDescription:
                  "The pillar jib crane with double boom is the most practical and cost-effective solution for making a workplace independent that would otherwise require the use of 2 standard jib cranes.",
                image: {
                  src: Images?.PillarJibCranesWithChannelShapedProfileDoubleBoom,
                  alt: "Pillar jib crane with channel shaped profile double boom",
                },
                heroData: {
                  title:
                    "Pillar Jib Crane with Channel shaped profile double boom",
                  subtitle: "Two booms, more operational autonomy.",
                  image: {
                    src: Images?.PillarJibCranesWithChannelShapedProfileDoubleBoomHero,
                    alt: "Pillar jib crane with channel shaped profile double boom Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "1000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with channel-shaped profile double boom with capacity up to 1000 kg + 1000 kg",
                  subtitle:
                    "The jib crane with double boom is the most practical and cost-effective solution for making one or more workplaces independent that would otherwise require the use of two standard jib cranes. Moreover, it solves the issues connected with the handling of loads in confined spaces, where other lifting equipment would not be able to operate.",
                  description: [
                    "The use of the boom with a special press-folded channel profile ensures the lightest possible handling. The sliding trolley moves inside the boom itself, with a smooth, fluid motion that makes the pillar jib crane easy to manoeuvre. Slightly inclined sliding surfaces and the use of special materials with a smooth surface and minimal weight reduce the friction caused by the travel wheels of the hoist trolleys. The lower weight to be handled also reduces the effort the operator has to exert manually to rotate the boom of the jib crane. This results in smooth and quiet running of the wheels and high loading capacity. The jib crane with double boom in channel girder is only available with a manual push trolley.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with channel-shaped profile double boom",
                  items: [
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Excellent manoeuvrability",
                    },
                    {
                      description: "Easy installation",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.PillarJibCranesWithChannelShapedProfileDoubleBoom,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.PillarJibCranesWithChannelShapedProfileDoubleBoomFront,
                    alt: "Configuration 1",
                    name: "Front view",
                  },
                  {
                    image:
                      Images?.PillarJibCranesWithChannelShapedProfileDoubleBoomTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.PillarJibCranesWithChannelShapedProfileDoubleBoomProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                  {
                    image:
                      Images?.PillarJibCranesWithChannelShapedProfileDoubleBoomDetail,
                    alt: "Configuration 4",
                    name: "Detail",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 1000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Omega-shaped press-folded profile",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Rotation",
                      value: "Manual",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with manual push or mechanical electric trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
                pictureGallery: [
                  {
                    image:
                      Images?.PillarJibCranesWithChannelShapedProfileDoubleBoom1,
                    alt: "Gallery image 1",
                  },
                  {
                    image:
                      Images?.PillarJibCranesWithChannelShapedProfileDoubleBoom2,
                    alt: "Gallery image 2",
                  },
                  {
                    image:
                      Images?.PillarJibCranesWithChannelShapedProfileDoubleBoom3,
                    alt: "Gallery image 3",
                  },
                ],
              },
              {
                id: "pillar-jib-crane-with-cantilever-girder-double-boom-omis",
                isPartner: true,
                Component: CraneProductDetailPage,
                title: "Pillar jib crane with cantilever girder double boom",
                shortDescription:
                  "The pillar jib crane with double boom is designed to exploit vertical space to the full, increasing the available hook stroke and making the workstation independent.",
                image: {
                  src: Images?.PillarJibCranesWithCantileverGirderDoubleBoom,
                  alt: "Pillar jib crane with cantilever girder double boom",
                },
                heroData: {
                  title: "Pillar jib crane with cantilever girder double boom",
                  subtitle: "Working autonomy and maximum hook stroke.",
                  image: {
                    src: Images?.PillarJibCranesWithCantileverGirderDoubleBoomHero,
                    alt: "Pillar jib crane with cantilever girder double boom Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "1000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with cantilever girder double boom with capacity up to 1000 kg + 1000 kg",
                  subtitle:
                    "The jib crane with double boom is a practical and cost-effective solution for making a workplace independent that would otherwise require the use of two separate jib cranes. This type of crane is ideal for handling loads in confined spaces where other lifting devices would be impractical.",
                  description: [
                    "A further advantage of this crane is its ability to maximise the use of vertical space, thus increasing the available hook stroke. These features make it an extremely versatile tool, as well as being easy to manoeuvre and very cost-effective in both installation and day-to-day workplace management. The jib crane, which incorporates a self-supporting cantilever boom and does not require supporting tie rods, is particularly suitable for handling light loads in a wide range of industries, from small workshops to large assembly lines and production plants, including the food industry and wine cellars.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with double cantilever girder boom",
                  items: [
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Excellent manoeuvrability",
                    },
                    {
                      description: "Easy installation",
                    },
                    {
                      description: "Maximum utilisation of height space",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.PillarJibCranesWithCantileverGirderDoubleBoom,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.PillarJibCranesWithCantileverGirderDoubleBoomFront,
                    alt: "Configuration 1",
                    name: "Front view",
                  },
                  {
                    image:
                      Images?.PillarJibCranesWithCantileverGirderDoubleBoomTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.PillarJibCranesWithCantileverGirderDoubleBoomProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                  {
                    image:
                      Images?.PillarJibCranesWithCantileverGirderDoubleBoomDetail,
                    alt: "Configuration 4",
                    name: "Detail view",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 1000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beams with tie rods",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Rotation",
                      value: "Manual",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with manual push or mechanical electric trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },

              },
              {
                id: "pillar-jib-crane-with-girder-double-boom-with-tie-rods-omis",
                isPartner: true,
                Component: CraneProductDetailPage,
                title: "Pillar jib crane with girder double boom with tie rods",
                shortDescription:
                  "The jib crane with double boom in the version with tie rods is particularly suitable for higher capacities and extensions, compared to the cantilever girder version.",
                image: {
                  src: Images?.PillarJibCraneWithGirderDoubleBoomWithTieRods,
                  alt: "Pillar jib crane with girder double boom with tie rods",
                },
                heroData: {
                  title:
                    "Pillar jib crane with girder double boom with tie rods",
                  subtitle: "Maximum autonomy for high loads and extensions.",
                  image: {
                    src: Images?.PillarJibCraneWithGirderDoubleBoomWithTieRodsHero,
                    alt: "Pillar jib crane with girder double boom with tie rods Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "1000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with girder double boom with tie rods with capacity up to 1000 kg + 1000 kg",
                  subtitle:
                    "The jib crane with double boom is a convenient and functional option for making a workplace independent that would otherwise require the use of two standard jib cranes. This solution effectively eliminates the difficulties of handling loads in confined spaces where other lifting systems would not be usable.",
                  description: [
                    "Pillar jib cranes, equipped with girder booms with one or two tie rods, offer excellent manoeuvrability and solid trolley stability, even when handling heavy loads and extending over long distances. Affordability, both in terms of purchase and installation, and ease of use make these cranes an ideal solution for handling needs in industrial environments and construction sites, facilitating the autonomy of workstations that would otherwise depend on overhead cranes or forklifts. The bearings installed on the rotation mechanism ensure smooth and jolt-free movement. The jib crane is available with manual push, mechanical or electric trolley options, and all versions are supplied complete with power line. The cantilever boom on a pillar jib crane offers a clear advantage over channel models, allowing the powering of the trolley and the handling of heavier loads and longer booms.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with double girder boom with tie rods",
                  items: [
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Excellent manoeuvrability",
                    },
                    {
                      description: "Easy installation",
                    },
                    {
                      description:
                        "Suitable for high capacities and extensions",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.PillarJibCraneWithGirderDoubleBoomWithTieRods,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.PillarJibCraneWithGirderDoubleBoomWithTieRodsFront,
                    alt: "Configuration 1",
                    name: "Front view",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithGirderDoubleBoomWithTieRodsTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithGirderDoubleBoomWithTieRodsProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithGirderDoubleBoomWithTieRodsDetail,
                    alt: "Configuration 4",
                    name: "Detail",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 1000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Omega-shaped press-folded profile",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Rotation",
                      value: "Manual",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with manual push or mechanical electric trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },

              },
              {
                id: "pillar-jib-crane-with-cantilever-girder-boom-and-270°-electric-rotation-omis",
                isPartner: true,
                Component: CraneProductDetailPage,
                title:
                  "Pillar jib crane with cantilever girder boom and 270° electric rotation",
                shortDescription:
                  "The pillar jib crane handles loads of up to 2 tonnes, optimally utilising space at height thanks to the self-supporting cantilever girders of its structure.",
                image: {
                  src: Images?.PillarJibCraneWithCantileverGirderBoomAnd270ElectricRotation,
                  alt: "Pillar jib crane with cantilever girder boom and 270° electric rotation",
                },
                heroData: {
                  title:
                    "Pillar jib crane with cantilever girder boom and 270° electric rotation",
                  subtitle: "Maximum hook stroke for loads of up to 2 tonnes.",
                  image: {
                    src: Images?.PillarJibCraneWithCantileverGirderBoomAnd270ElectricRotationHero,
                    alt: "Pillar jib crane with cantilever girder boom and 270° electric rotation Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "2000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with cantilever girder boom and 270° electric rotation",
                  subtitle:
                    "When the weight of the load or the thrust forces are difficult for a classic crane with manual rotation, the best solution is to resort to the jib crane with 270° electric rotation. The jib crane with cantilever girder boom, in particular, makes it possible to utilise the available space in height with a consequent increase in the available hook stroke. The cantilever girder is self-supporting, without using tie rods.",
                  description: [
                    "The boom is rotated by means of a gear motor/joint system, coupled directly to the rotation pin, and is controlled by an inverter. The gear motor is of the planetary type, driven by a self-braking electric motor with soft start.",
                    "The hoist trolley power line consists of self-extinguishing flexible cables installed in sliding cable track systems under the boom.",
                    "The push-button strip may be hanging from the hoist, or sliding and independent, as required. Rotation limit switches are installed in case it is necessary to limit the boom tilting range.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with cantilever girder boom and 270° electric rotation",
                  items: [
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Easy to use",
                    },
                    {
                      description: "Maximum utilisation of height space",
                    },
                    {
                      description: "Limited maintenance",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.PillarJibCraneWithCantileverGirderBoomAnd270ElectricRotation,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAnd270ElectricRotationFront,
                    alt: "Configuration 1",
                    name: "Front view",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAnd270ElectricRotationTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAnd270ElectricRotationProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 2000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beams without tie rods",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Rotation",
                      value: "Electric",
                    },
                    {
                      heading: "Peripheral speed",
                      value: "~18 m/min",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with manual push or mechanical electric trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
                pictureGallery: [
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAnd270ElectricRotation1,
                    alt: "Gallery image 1",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAnd270ElectricRotation2,
                    alt: "Gallery image 2",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAnd270ElectricRotation3,
                    alt: "Gallery image 3",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAnd270ElectricRotation4,
                    alt: "Gallery image 4",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAnd270ElectricRotation5,
                    alt: "Gallery image 5",
                  },
                ],
              },
              {
                id: "pillar-jib-crane-with-girder-boom-with-tie-rods-and-270°-electric-rotation-omis",
                isPartner: true,
                Component: CraneProductDetailPage,
                title:
                  "Pillar jib crane with girder boom with tie rods and 270° electric rotation",
                shortDescription:
                  "The pillar jib crane can lift and move loads of up to 2,000 kg thanks to the use of tie rods and electric rotation, even with considerable extensions.",
                image: {
                  src: Images?.PillarJibCraneWithGirderBoomWithTieRodsAnd270ElectricRotation,
                  alt: "Pillar jib crane with girder boom with tie rods and 270° electric rotation",
                },
                heroData: {
                  title:
                    "Pillar jib crane with girder boom with tie rods and 270° electric rotation",
                  subtitle:
                    "Power and versatility for large loads and wide extensions.",
                  image: {
                    src: Images?.PillarJibCraneWithGirderBoomWithTieRodsAnd270ElectricRotationHero,
                    alt: "Pillar jib crane with girder boom with tie rods and 270° electric rotation Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "2000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with girder boom with tie rods and 270° electric rotation",
                  subtitle:
                    "The pillar jib crane with girder boom with tie rods and 270° electric rotation is an excellent solution for handling loads when the thrust forces or the size of the load are too heavy for a crane with manual rotation. This type of crane is designed to overcome obstructions along the floor and ensure safe and efficient handling even in workplaces that are difficult to access.",
                  description: [
                    "The boom rotation system is provided by a gear motor coupled directly to the rotation pin and controlled by an inverter. The planetary gear motor is driven by a self-braking electric motor with soft start, which ensures a smooth and controlled movement of the boom. The electrical line supplying the hoist trolley consists of flexible cables suspended on trolleys sliding under the boom, thus ensuring maximum operational safety. The push-button strip, which can be supplied either hanging from the hoist or sliding independently, allows precise and convenient control of lifting and handling operations. To limit the boom tilting range, rotation limit switches can be installed, further increasing the safety of the system. In OMIS jib cranes with electric rotation, the use of tie rods makes this version particularly robust and reliable, ideal for applications with higher capacities and extensions than cantilever girder versions.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with girder boom with tie rods and 270° electric rotation",
                  items: [
                    {
                      description:
                        "Suitable for high capacities and extensions",
                    },
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Easy to use",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.PillarJibCraneWithGirderBoomWithTieRodsAnd270ElectricRotation,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.PillarJibCraneWithGirderBoomWithTieRodsAnd270ElectricRotationFront,
                    alt: "Configuration 1",
                    name: "Front view",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithGirderBoomWithTieRodsAnd270ElectricRotationTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithGirderBoomWithTieRodsAnd270ElectricRotationProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 2000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beams with tie rods",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Rotation",
                      value: "Electric",
                    },
                    {
                      heading: "Peripheral speed",
                      value: "~18 m/min",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with manual push or mechanical electric trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
                pictureGallery: [
                  {
                    image:
                      Images?.PillarJibCraneWithGirderBoomWithTieRodsAnd270ElectricRotation1,
                    alt: "Gallery image 1",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithGirderBoomWithTieRodsAnd270ElectricRotation2,
                    alt: "Gallery image 2",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithGirderBoomWithTieRodsAnd270ElectricRotation3,
                    alt: "Gallery image 3",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithGirderBoomWithTieRodsAnd270ElectricRotation4,
                    alt: "Gallery image 4",
                  },
                ],
              },
              {
                id: "pillar-jib-crane-with-cantilever-girder-boom-and-360°-electric-rotation-omis",
                isPartner: true,
                Component: CraneProductDetailPage,
                title:
                  "Pillar jib crane with cantilever girder boom and 360° electric rotation",
                shortDescription:
                  "The jib crane with 360° electric rotation lifts and moves heavy loads while ensuring continuity of movement and torsional stability thanks to its cantilever girder boom and rotating power manifold.",
                image: {
                  src: Images?.PillarJibCraneWithCantileverGirderBoomAnd360ElectricRotation,
                  alt: "Pillar jib crane with cantilever girder boom and 360° electric rotation",
                },
                heroData: {
                  title:
                    "Pillar jib crane with cantilever girder boom and 360° electric rotation",
                  subtitle:
                    "Continuous electric rotation, maximum torsional stability.",
                  image: {
                    src: Images?.PillarJibCraneWithCantileverGirderBoomAnd360ElectricRotationHero,
                    alt: "Pillar jib crane with cantilever girder boom and 360° electric rotation Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "2000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with cantilever girder boom and 360° electric rotation",
                  subtitle:
                    "The jib crane with 360° continuous electric rotation, cantilever or box girder, is a technologically advanced and highly efficient solution for handling heavy loads, greatly improving operational flexibility compared to traditional cranes that offer a rotation limited to 270°.",
                  description: [
                    "Equipped with a robust boom with I-beam profile, this crane is designed to precisely perform lifting, travel and handling movements of objects and materials in a variety of industrial settings.",
                    "The innovative design includes an electric rotation system that allows the boom to rotate continuously and without interruption, an essential feature for complex operations and for optimising handling times. The rotation mechanism is facilitated by a rotating power supply manifold that not only supports uninterrupted movement, but also ensures the reliability and safety of the operation, preventing common problems such as tangling of power cables.",
                    "The ability to rotate continuously through 360° makes this crane particularly suitable for working environments where space is limited and the need to move loads quickly and safely is crucial. In addition, the operational autonomy offered by this crane reduces dependence on other lifting systems, such as bridge cranes or forklifts, which are not only more expensive to maintain, but also less versatile in terms of handling in work areas.",
                    "The use of the jib crane with 360° electric rotation can lead to significant reductions in operating costs, especially in saving time and reducing the number of personnel required to handle lifting operations. This reduction in manpower does not compromise productivity; on the contrary, it increases it thanks to the crane’s efficiency and speed of operation. The operators can rely on an intuitive control mechanism that facilitates safe operation of the machine, reducing the risk of accidents and improving overall efficiency.",
                    "The installation of this crane not only improves lifting operations but also contributes to a better organisation of the work space, allowing better planning and utilisation of production areas. With this solution, companies can optimise their logistics and production processes, while guaranteeing the safety and satisfaction of their operators.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with cantilever girder boom and slew ring 360° electric rotation",
                  items: [
                    {
                      description: "360° operability",
                    },
                    {
                      description: "Maximum torsional stability",
                    },
                    {
                      description: "Continuous boom rotation",
                    },
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Easy to use",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.PillarJibCraneWithCantileverGirderBoomAnd360ElectricRotation,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAnd360ElectricRotationFront,
                    alt: "Configuration 1",
                    name: "Front view",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAnd360ElectricRotationTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAnd360ElectricRotationProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 10000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 10 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beam or box girder",
                    },
                    {
                      heading: "Rotation",
                      value: "360° continuous",
                    },
                    {
                      heading: "Rotation",
                      value: "Electric",
                    },
                    {
                      heading: "Peripheral speed",
                      value: "~18 m/min",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain or rope electric hoist for lifting the load, with one or two lifting speeds, with electric or push trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
                pictureGallery: [
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAnd360ElectricRotation1,
                    alt: "Gallery image 1",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAnd360ElectricRotation2,
                    alt: "Gallery image 2",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAnd360ElectricRotation3,
                    alt: "Gallery image 3",
                  },
                ],
              },
            ],
          },
          {
            id: "wall-mounted-jib-cranes-omis",
            isPartner: true,
            Component: CraneDetailPage,
            title: "Wall Mounted",
            shortDescription:
              "When the work area can rely on a load-bearing pillar to become fully autonomous, without the need for an overhead crane or forklift truck. Even in non-standard dimensions",
            image: {
              src: Images?.JibCraneWallMounted,
              alt: "Wall Mounted Jib Cranes",
            },
            heroData: {
              title: "Wall Mounted",
              image: {
                src: Images?.JibCraneWallMountedHero,
                alt: "Wall Mounted Jib Cranes Hero Image",
              },
            },
            detailPageContent: [
              {
                type: "white-bordered",
                title:
                  "Economical and functional, fixed to a pillar in the shed",
                paragraphs: [
                  "The wall-mounted jib crane is a practical, low-cost solution for making an independent workstation, which would otherwise require the use of an overhead crane or a forklift truck. Moreover, the jib crane solves the issues connected with the handling of loads in confined spaces, where other lifting equipment would not be able to operate.",
                ],
              },
              {
                type: "dark",
                title: "",
                paragraphs: [
                  "It is a simple, practical and cost-effective solution for the manual handling of loads at workstations that do not permit use of the pillar but can make use of a load-bearing pillar for fixing the boom with a system of brackets and tie-rods.",
                  "The types of fixing vary from tie-rod with counter-brace, C-sling (using chemical dowels), to frontal attachment (using chemical dowels) and angled sling (using chemical dowels). The boom is turned by pushing the load manually. The range of rotation is within 270°, in relation to the pillar.Jib cranes larger than standard solutions are available on request.",
                ],
              },
            ],
            layerThreeProducts: [
              {
                id: "wall-mounted-jib-crane-channel-shaped-profile-omis",
                isPartner: true,
                Component: CraneProductDetailPage,
                title:
                  "Wall-Mounted Jib Crane with Channel-Shaped Profile Boom",
                shortDescription:
                  "Wall-mounted jib crane with channel-shaped profile boom.",
                image: {
                  src: Images?.WallMountedJibCraneWithChannelShapedProfileBoom,
                  alt: "Wall-Mounted Jib Crane with Channel-Shaped Profile Boom",
                },
                heroData: {
                  title:
                    "Wall-Mounted Jib Crane with Channel Shaped Profile Boom",
                  subtitle:
                    "Robust and lightweight, effective in all operating contexts.",
                  image: {
                    src: Images?.WallMountedJibCraneWithChannelShapedProfileBoomHero,
                    alt: "Wall-Mounted Jib Crane with Channel-Shaped Profile Boom Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "1000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Wall-mounted jib crane with channel-shaped boom with capacity up to 1000 kg",
                  subtitle:
                    "Our wall-mounted jib crane with channel-shaped profile boom is the ideal solution for anyone looking for an efficient, versatile and safe lifting system. Designed to serve a variety of industrial applications, this crane combines robustness and lightness to ensure excellent performance in any operating environment.",
                  description: [
                    "With an extension of up to 8 metres and a rotation of 270°, it can cover a large working area. It requires no floor space and allows for the recovery of centimetres of space thanks to the crane’s action and slinging on an existing structure or pillar. This makes it possible to utilise the depth of the column as a radius of action and to use the space already present in the pillar, avoiding clutter caused by the base plate.",
                    "Equipped with a boom made of a special channel-shaped press-folded profile, it is optimised for the best trolley tilting and sliding sensitivity. The boom design ensures smooth and precise movements, reducing operator fatigue.",
                    "The wall-mounted jib crane is ideal for machine shops, warehouses, production lines and many other industrial applications. Designed for quick and easy assembly, it offers the possibility of special configurations for complex operational requirements. The crane is supplied complete with power line and is available with a manual push trolley.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the wall-mounted jib crane with channel-shaped profile boom",
                  items: [
                    {
                      description: "No floor space required",
                    },
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Easy to use",
                    },
                    {
                      description: "Limited footprint",
                    },
                    {
                      description: "Increased hook stroke",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.WallMountedJibCraneWithChannelShapedProfileBoom,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.WallMountedJibCraneWithChannelShapedProfileBoomWideConnection,
                    alt: "Configuration 1",
                    name: "Wide Connection",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithChannelShapedProfileBoomTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithChannelShapedProfileBoomProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithChannelShapedProfileBoomDoubleBoom,
                    alt: "Configuration 4",
                    name: "Double Boom",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithChannelShapedProfileBoomNarrowConnection,
                    alt: "Configuration 5",
                    name: "Narrow Connection",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithChannelShapedProfileBoomDoubleBoom,
                    alt: "Configuration 6",
                    name: "Double Boom",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 1000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Omega-shaped press-folded profile",
                    },
                    {
                      heading: "Rotation",
                      value: "180° - 270° depending on the pillar support",
                    },
                    {
                      heading: "Rotation",
                      value: "Manual",
                    },
                    {
                      heading: "Wall bracket",
                      value:
                        "The support bracket, tie rods and counter-braces are constructed according to the required dimensions of the pillar.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with push trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
              },
              {
                id: "wall-mounted-jib-crane-with-cantilever-girder-boom-omis",
                isPartner: true,
                Component: CraneProductDetailPage,
                title: "Wall-mounted jib crane with cantilever girder boom",
                shortDescription:
                  "The wall-mounted jib crane with cantilever girder boom is optimal when maximum utilisation of the available vertical space is required, resulting in an increased hook capacity.",
                image: {
                  src: Images?.WallMountedJibCraneWithCantileverGirderBoomHero,
                  alt: "Wall-mounted jib crane with cantilever girder boom",
                },
                heroData: {
                  title: "Wall-mounted jib crane with cantilever girder boom",
                  subtitle:
                    "To make the best use of the available vertical space.",
                  image: {
                    src: Images?.WallMountedJibCraneWithCantileverGirderBoomHero,
                    alt: "Wall-mounted jib crane with cantilever girder boom Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "2000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Wall-mounted jib crane with cantilever girder boom with capacity up to 2000 kg",
                  subtitle:
                    "The wall-mounted crane is a highly efficient solution for optimising the available vertical space, while at the same time allowing greater flexibility in trolley movement. It uses a rotation unit mounted on bearings and offers great versatility in terms of configurations, with several trolley options available.",
                  description: [
                    "In each case, this model is complete with an integrated power line to maximise operational efficiency. There is the possibility of installing two cranes opposite each other if needed. For situations where a sturdier or larger solution is required, customised jib cranes are available, offering an even greater lifting capacity. The wall-mounted crane is therefore a pragmatic and cost-effective choice for making a work area independent, effectively solving the problem of handling loads in confined spaces, thanks to its versatility, flexibility and ability to adapt to the specific needs of the operating environment.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the wall-mounted jib crane with cantilever girder boom",
                  items: [
                    {
                      description: "No floor space required",
                    },
                    {
                      description: "Excellent manoeuvrability",
                    },
                    {
                      description: "Easy to use",
                    },
                    {
                      description: "Limited footprint",
                    },
                    {
                      description: "Increased hook stroke",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.WallMountedJibCraneWithCantileverGirderBoomWideConnection,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.WallMountedJibCraneWithCantileverGirderBoomWideConnection,
                    alt: "Configuration 1",
                    name: "Wide Connection",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithCantileverGirderBoomTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithCantileverGirderBoomProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithCantileverGirderBoomDoubleBoom,
                    alt: "Configuration 4",
                    name: "Double Boom",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithCantileverGirderBoomNarrow,
                    alt: "Configuration 5",
                    name: "Narrow",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithCantileverGirderBoomDoubleBoom2,
                    alt: "Configuration 6",
                    name: "Double Boom",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 2000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beams without tie rods",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Rotation",
                      value: "Manual",
                    },
                    {
                      heading: "Wall bracket",
                      value:
                        "The support bracket, tie rods and counter-braces are constructed according to the required dimensions of the pillar.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with manual push or mechanical electric trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
                pictureGallery: [
                  {
                    image: Images?.WallMountedJibCraneWithCantileverGirderBoom1,
                    alt: "Gallery image 1",
                  },
                  {
                    image: Images?.WallMountedJibCraneWithCantileverGirderBoom2,
                    alt: "Gallery image 2",
                  },
                  {
                    image: Images?.WallMountedJibCraneWithCantileverGirderBoom3,
                    alt: "Gallery image 3",
                  },
                ],
              },
              {
                id: "wall-mounted-jib-crane-with-girder-boom-with-tie-rods-omis",
                isPartner: true,
                Component: CraneProductDetailPage,
                title: "Wall-mounted jib crane with girder boom with tie rods",
                shortDescription:
                  "The wall-mounted jib crane with girder boom with one or two tie rods ensures easy tilting and trolley stability, even in case of significant load capacity requirements and booms.",
                image: {
                  src: Images?.WallMountedJibCraneWithGirderBoomWithTieRods,
                  alt: "Wall-mounted jib crane with girder boom with tie rods",
                },
                heroData: {
                  title:
                    "Wall-mounted jib crane with girder boom with tie rods",
                  subtitle: "Agile and powerful in confined spaces.",
                  image: {
                    src: Images?.WallMountedJibCraneWithGirderBoomWithTieRodsHero,
                    alt: "Wall-mounted jib crane with girder boom with tie rods Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "2000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Wall-mounted jib crane with girder boom with tie rods, with capacity up to 2000 kg",
                  subtitle:
                    "The OMIS wall-mounted jib crane with cantilever girder boom, with one or two tie rods, ensure versatile handling and increased trolley stability even with heavy loads and extensions The rotation assembly is also on high-quality bearings. The wall-mounted crane is available with manual push, mechanical or electric trolley and is supplied complete with power line.",
                  description: [
                    "In the case of customer-specific operational requirements, jib cranes can be installed in positions opposite each other or can be designed with larger dimensions.",
                    "This type of jib crane is the most practical and economical solution for ensuring operational autonomy in a work area that would otherwise require the use of overhead cranes, forklifts or other lifting equipment.",
                    "Moreover, it efficiently solves the issues connected with the handling of loads in confined spaces, where other lifting equipment would not be suitable.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the wall-mounted jib crane with girder boom with tie rods",
                  items: [
                    {
                      description: "No floor space required",
                    },
                    {
                      description: "Easy tilting",
                    },
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Easy to use",
                    },
                    {
                      description: "Limited footprint",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.WallMountedJibCraneWithGirderBoomWithTieRods,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.WallMountedJibCraneWithGirderBoomWithTieRodsWide,
                    alt: "Configuration 1",
                    name: "Wide connection",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithGirderBoomWithTieRodsTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithGirderBoomWithTieRodsProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithGirderBoomWithTieRodsDouble,
                    alt: "Configuration 4",
                    name: "Double Boom",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithGirderBoomWithTieRodsNarrow,
                    alt: "Configuration 5",
                    name: "Narrow connection",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithGirderBoomWithTieRodsDoubleBoom,
                    alt: "Configuration 6",
                    name: "Double Boom",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 2000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beams with tie rods",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Rotation",
                      value: "Manual",
                    },
                    {
                      heading: "Wall bracket",
                      value:
                        "The support bracket, tie rods and counter-braces are constructed according to the required dimensions of the pillar.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with manual push or mechanical electric trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
              },
              {
                id: "wall-mounted-jib-crane-with-articulated-boom-omis",
                isPartner: true,
                Component: CraneProductDetailPage,
                title: "Wall-mounted jib crane with articulated boom",
                shortDescription:
                  "The wall-mounted crane with articulated boom allows access to parts of the work area that would otherwise be inaccessible due to obstacles, overcoming the limitations of traditional rigid booms.",
                image: {
                  src: Images?.WallMountedJibCraneWithArticulatedBoom,
                  alt: "Wall-mounted jib crane with articulated boom",
                },
                heroData: {
                  title: "Wall-mounted jib crane with articulated boom",
                  subtitle: "Superior precision and versatility of movement.",
                  image: {
                    src: Images?.WallMountedJibCraneWithArticulatedBoomHero,
                    alt: "Wall-mounted jib crane with articulated boom Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "1000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "4",
                    unit: "+",
                    value: "Maximum extension",
                  },
                  {
                    title: "240° - 300°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Wall-mounted jib crane with articulated boom with capacity up to 1000 kg",
                  subtitle:
                    "Wall-mounted jib cranes with articulated boom offer access to parts of the work area that would otherwise be inaccessible due to obstacles, thanks to the flexibility of their articulated boom. The latter consists of two segments rotating on bearings that can turn independently of each other. Without tie rods above the boom, the maximum available height can be utilised.",
                  description: [
                    "The hoist is usually attached at the tip of the boom, but it can be mounted on a trolley on request. This type of crane is the most practical and economic solution for an independent workstation, which would otherwise require the use of an overhead crane or a forklift truck. Moreover, it efficiently solves the issues connected with the handling of loads in confined spaces, where other lifting equipment would not be suitable. Larger jib cranes can be obtained on request. This practical and cost-effective solution is ideal for the manual handling of loads at workstations that do not permit use of the pillar but make use of a load-bearing pillar for fixing the boom with a system of brackets and tie rods.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the wall-mounted jib crane with articulated boom",
                  items: [
                    {
                      description: "Boom with independently rotating segments",
                    },
                    {
                      description: "Maximum utilisation of available space",
                    },
                    {
                      description: "Easy to use",
                    },
                    {
                      description: "Reduced footprint",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.WallMountedJibCraneWithArticulatedBoom,
                ],
                productConfigurations: [
                  {
                    image: Images?.WallMountedJibCraneWithArticulatedBoomWide,
                    alt: "Configuration 1",
                    name: "Wide Connection",
                  },
                  {
                    image: Images?.WallMountedJibCraneWithArticulatedBoomTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithArticulatedBoomProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                  {
                    image: Images?.WallMountedJibCraneWithArticulatedBoomDouble,
                    alt: "Configuration 4",
                    name: "Double Boom",
                  },
                  {
                    image: Images?.WallMountedJibCraneWithArticulatedBoomNarrow,
                    alt: "Configuration 5",
                    name: "Narrow Connection",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithArticulatedBoomDoubleBoom,
                    alt: "Configuration 6",
                    name: "Double Boom",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 1000 kg" },
                    {
                      heading: "Ranges",
                      value: "Up to 4 +4 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value:
                        "The first close to the pillar is made of tubular profile, the second in I beam",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "240° the first segment of the boom close to the pillar - 300° the second boom",
                    },
                    {
                      heading: "Rotation",
                      value: "Manual",
                    },
                    {
                      heading: "Wall bracket",
                      value:
                        "The support bracket, tie rods and counter-braces are constructed according to the required dimensions of the pillar.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist, fixed mounted at the tip of the boom, for lifting the load, with one or two lifting speeds. On request it can be fitted with an electric or push trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
              },
              {
                id: "wall-mounted-jib-crane-with-girder-boom-with-tie-rods-and-electric-rotation-omis",
                isPartner: true,
                Component: CraneProductDetailPage,
                title:
                  "Wall-mounted jib crane with girder boom with tie rods and electric rotation",
                shortDescription:
                  "The wall-mounted crane with electric rotation which, thanks to the use of tie rods, easily copes with large extensions and loads.",
                image: {
                  src: Images?.WallMountedJibCraneWithGirderBoomWithTieRodsAndElectricRotation,
                  alt: "Wall-mounted jib crane with girder boom with tie rods and electric rotation",
                },
                heroData: {
                  title:
                    "Wall-mounted jib crane with girder boom with tie rods and electric rotation",
                  subtitle:
                    "Superior performance for high loads and extensions.",
                  image: {
                    src: Images?.WallMountedJibCraneWithGirderBoomWithTieRodsAndElectricRotationHero,
                    alt: "Wall-mounted jib crane with girder boom with tie rods and electric rotation Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "2000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Wall-mounted jib crane with girder boom with tie rods and electric rotation, with capacity up to 2000 kg",
                  subtitle:
                    "Challenges related to heavy loads or considerable thrusts, or the presence of obstructions on the floor can be effectively handled by using the standard wall-mounted jib crane with girder boom, equipped with tie rods and electric rotation. The girder boom of this jib crane is equipped with supporting tie rods, ensuring an efficient and stable system even with heavy loads and large extensions.",
                  description: [
                    "Boom rotation is managed by a gear motor/coupling system, connected to the rotation pin and is regulated by an inverter. The planetary gear is driven by a self-braking electric motor with soft start. Flame-resistant flexible cables, suspended on trolleys sliding under the boom, form the electrical line to power the hoist trolley. The wall-mounted jib crane, with 270° electrical rotation, is supplied complete with a push-button strip hanging from the hoist or sliding independently, as required. On request, rotation limit switches can be installed to limit the range of movement of the boom.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the standard wall-mounted jib cranes with girder boom with tie rods and electric rotation",
                  items: [
                    {
                      description: " No floor space required",
                    },
                    {
                      description: "Greater capacities and extensions",
                    },
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Precise control",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.WallMountedJibCraneWithGirderBoomWithTieRodsAndElectricRotation,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.WallMountedJibCraneWithGirderBoomWithTieRodsAndElectricRotationWide,
                    alt: "Configuration 1",
                    name: "Wide Connection",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithGirderBoomWithTieRodsAndElectricRotationTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.highconWallMountedJibCraneWithGirderBoomWithTieRodsAndElectricRotationProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithGirderBoomWithTieRodsAndElectricRotationDouble,
                    alt: "Configuration 4",
                    name: "Double Boom",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithGirderBoomWithTieRodsAndElectricRotationNarrow,
                    alt: "Configuration 5",
                    name: "Narrow Connection",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithGirderBoomWithTieRodsAndElectricRotationDoubleBoom,
                    alt: "Configuration 3",
                    name: "Double Boom",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 2000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beams with tie rods",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Rotation",
                      value: "Electric",
                    },
                    {
                      heading: "Peripheral speed",
                      value: "~18 m/min",
                    },
                    {
                      heading: "Wall bracket",
                      value:
                        "The support bracket, tie rods and counter-braces are constructed according to the required dimensions of the pillar.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with manual push or mechanical electric trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
              },
              {
                id: "wall-mounted-jib-crane-with-cantilever-girder-boom-with-tie-rods-and-electric-rotation-omis",
                isPartner: true,
                Component: CraneProductDetailPage,
                title:
                  "Wall-mounted jib crane with cantilever girder boom with tie rods and electric rotation",
                shortDescription:
                  "The electric wall-mounted crane for use where a column cannot be used, when the load is heavy and maximum utilisation of space at height is required.",
                image: {
                  src: Images?.WallMountedJibCraneWithCantileverGirderBoomAndElectricRotation,
                  alt: "Wall-mounted jib crane with cantilever girder boom with tie rods and electric rotation",
                },
                heroData: {
                  title:
                    "Wall-mounted jib crane with cantilever girder boom with tie rods and electric rotation",
                  subtitle: "Large capacity and optimal use of space.",
                  image: {
                    src: Images?.WallMountedJibCraneWithCantileverGirderBoomAndElectricRotationHero,
                    alt: "Wall-mounted jib crane with cantilever girder boom with tie rods and electric rotation Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "1000",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "8",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Wall-mounted jib crane with cantilever girder boom with tie rods and electric rotation, with capacity up to 2000 kg",
                  subtitle:
                    "The wall-mounted jib crane with 270° electrical rotation meets the needs of industrial applications or operations where the consistency of loads or thrust forces cannot be coped with by conventional cranes with manual rotation.",
                  description: [
                    "The girder of this jib crane is self-supporting and cantilevered, without using tie rods. Boom rotation depends on a gear motor/coupling system connected to the rotation pin and is regulated by an inverter. The planetary gear is driven by a self-braking electric motor with soft start. Flame-resistant flexible cables, suspended on trolleys sliding under the boom, form the electrical line that powers the hoist trolley. The wall-mounted jib crane, with 270° electrical rotation, is supplied complete with a push-button strip hanging from the hoist or sliding independently, as required.",
                    "Rotation limit switches can be installed if the boom tilting range needs to be limited.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the standard wall-mounted jib crane with cantilever girder boom with electric rotation",
                  items: [
                    {
                      description: "No floor space required",
                    },
                    {
                      description: "Increase of the available hook stroke",
                    },
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Precise control",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.WallMountedJibCraneWithCantileverGirderBoomAndElectricRotation,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.WallMountedJibCraneWithCantileverGirderBoomAndElectricRotationWide,
                    alt: "Configuration 1",
                    name: "Wide Connection",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithCantileverGirderBoomAndElectricRotationTop,
                    alt: "Configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithCantileverGirderBoomAndElectricRotationProspect,
                    alt: "Configuration 3",
                    name: "Prospect",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithCantileverGirderBoomAndElectricRotationDouble,
                    alt: "Configuration 4",
                    name: "Double Boom",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithCantileverGirderBoomAndElectricRotationNarrow,
                    alt: "Configuration 4",
                    name: "Narrow Connection",
                  },
                  {
                    image:
                      Images?.WallMountedJibCraneWithCantileverGirderBoomAndElectricRotationDoubleBoom,
                    alt: "Configuration 5",
                    name: "Double Boom",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 2000 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 8 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beams without tie rods",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Rotation",
                      value: "Electric",
                    },
                    {
                      heading: "Peripheral speed",
                      value: "~18 m/min",
                    },
                    {
                      heading: "Wall bracket",
                      value:
                        "The support bracket, tie rods and counter-braces are constructed according to the required dimensions of the pillar.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain electric hoist for lifting the load, with one or two lifting speeds, with manual push or mechanical electric trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
              },
            ],
          },
          {
            id: "mobile-jib-cranes-omis",
            isPartner: true,
            Component: CraneDetailPage,
            title: "Mobile",
            shortDescription:
              "Thanks to the movable plinth, the jib crane can serve workplaces located in different parts of the same production area. Without fixed anchorage to the ground, it can be transported by forklift or overhead crane.",
            image: {
              src: Images?.highconJibCraneMobile,
              alt: "Mobile Jib Cranes",
            },
            heroData: {
              title: "Mobile",
              image: {
                src: Images?.highconJibCraneMobileHero,
                alt: "Mobile Jib Cranes Hero Image",
              },
            },
            detailPageContent: [
              {
                type: "white-bordered",
                title: "Without position limits in the facility",
                paragraphs: [
                  "The mobile jib crane is an efficient solution for lifting and handling materials, with such versatility that it can be moved and placed wherever it is needed, within the facility and at different workstations, using a forklift or overhead crane.",
                  "Mobile jib cranes are special solutions for moving loads between workstations.",
                ],
              },
              {
                type: "dark",
                title: "",
                paragraphs: [
                  "They are not tied to a permanent anchorage on the ground and do not need to be dismantled in order to be moved. Their plinth, in fact, is a heavy base that stabilises the system during lifting operations. This base can be moved to adapt to the specific needs of the workplace. Mobile jib cranes can be used for a wide range of applications, from lifting construction materials to industrial machinery.",
                  "They are designed to be installed and ready for use quickly, reducing downtime on construction sites or in industrial plants.",
                ],
              },
            ],
            layerThreeProducts: [
              {
                id: "pillar-jib-crane-with-channel-shaped-boom-and-movable-plinth-omis",
                isPartner: true,
                Component: CraneProductDetailPage,
                title:
                  "Pillar jib crane with channel-shaped boom and movable plinth",
                shortDescription:
                  "The ideal mobile jib crane to be moved around the work area by forklift or overhead crane, thanks to the movable plinth without the constraint of a permanent anchorage to the ground.",
                image: {
                  src: Images?.PillarJibCraneWithChannelShapedBoomAndMovablePlinth,
                  alt: "Pillar jib crane with channel-shaped boom and movable plinth",
                },
                heroData: {
                  title:
                    "Pillar jib crane with channel-shaped boom and movable plinth",
                  subtitle: "Stable, sliding and able to handle large loads.",
                  image: {
                    src: Images?.PillarJibCraneWithChannelShapedBoomAndMovablePlinthHero,
                    alt: "Pillar jib crane with channel-shaped boom and movable plinth Hero",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "500",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "6",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with channel-shaped boom and movable plinth with capacity up to 500 kg",
                  subtitle:
                    "The pillar jib crane with channel-shaped profile boom and movable plinth is the perfect tool for working environments and operational needs that require the crane to be moved, which therefore does not have to be constrained by a permanent anchorage to the ground.",
                  description: [
                    "The boom, which has a special press-folded channel profile, ensures lightness of handling. The sliding trolley moves inside the boom itself, with a smooth, fluid motion that makes the pillar jib crane easy to manoeuvre. Slightly inclined sliding surfaces and the use of special materials with a smooth surface and minimal weight reduce the friction caused by the travel wheels of the hoist trolleys. The lower weight reduces the effort the operator has to exert manually to rotate the boom of the jib crane. This results in greater smoothness, quietness and vertical loading capacity. The jib crane with channel-shaped profile boom and movable plinth is only available with a manual push trolley.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the wall-mounted jib crane with channel-shaped profile boom",
                  items: [
                    {
                      description: "Ease of movement",
                    },
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Easy to use",
                    },
                    {
                      description: "Precise control",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.PillarJibCraneWithChannelShapedBoomAndMovablePlinth,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.PillarJibCraneWithChannelShapedBoomAndMovablePlinthConcrete,
                    alt: "Portable Gantry crane configuration 1",
                    name: "Front view",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithChannelShapedBoomAndMovablePlinthTop,
                    alt: "Portable Gantry crane configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithChannelShapedBoomAndMovablePlinthProspect,
                    alt: "Portable Gantry crane configuration 3",
                    name: "Prospect",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithChannelShapedBoomAndMovablePlinthSteel,
                    alt: "Portable Gantry crane configuration 3",
                    name: "Prospect",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 500 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 6 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Omega-shaped press-folded profile",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Plinth",
                      value:
                        "Movable round plinth in concrete or steel formwork with concrete filling",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain or rope electric hoist for lifting the load, with one or two lifting speeds, with electric or push trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
              },
              {
                id: "pillar-jib-crane-with-cantilever-girder-boom-and-movable-plinth-omis",
                isPartner: true,
                Component: CraneProductDetailPage,
                title:
                  "Pillar jib crane with cantilever girder boom and movable plinth",
                shortDescription:
                  "The self-supporting mobile cantilever jib crane, which can make the most of space at height by increasing the available hook stroke.",
                image: {
                  src: Images?.PillarJibCraneWithCantileverGirderBoomAndMovablePlinth,
                  alt: "",
                },
                heroData: {
                  title:
                    "Pillar jib crane with cantilever girder boom and movable plinth",
                  subtitle: "It moves easily and height is not an issue.",
                  image: {
                    src: Images?.PillarJibCraneWithCantileverGirderBoomAndMovablePlinthHero,
                    alt: "",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "500",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "6",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with cantilever girder boom and movable plinth with capacity up to 500 kg",
                  subtitle:
                    "The pillar jib crane with cantilever girder boom and movable plinth is ideal for handling anywhere in the work area using a forklift or overhead crane. It is a special solution that is not constrained by a permanent anchorage to the ground. A second specific advantage of this jib crane is the possibility of ensuring maximum use of the available height, with consequent increase of the available hook stroke.",
                  description: [
                    "All these features make it a highly versatile tool, as well as being easy to handle and highly economical, both in installation and in the day-to-day operation of the work area served The mobile jib crane, with self-supporting cantilever girder boom and without tie rods, is used for handling light loads in a variety of industrial applications, from small workshops to large assembly lines, food production plants or wine cellars.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with cantilever girder boom and movable plinth",
                  items: [
                    {
                      description: "Ease of movement",
                    },
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Increase of the available hook stroke",
                    },
                    {
                      description: "Easy to use",
                    },
                    {
                      description: "Precise control",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.PillarJibCraneWithCantileverGirderBoomAndMovablePlinth,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAndMovablePlinthConcrete,
                    alt: "Portable Gantry crane configuration 1",
                    name: "Front view",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAndMovablePlinthTop,
                    alt: "Portable Gantry crane configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAndMovablePlinthProspect,
                    alt: "Portable Gantry crane configuration 3",
                    name: "Prospect",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithCantileverGirderBoomAndMovablePlinthSteel,
                    alt: "Portable Gantry crane configuration 3",
                    name: "Prospect",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 500 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 6 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beams without tie rods",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Plinth",
                      value:
                        "Movable round plinth in concrete or steel formwork with concrete filling",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain or rope electric hoist for lifting the load, with one or two lifting speeds, with electric or push trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
              },
              {
                id: "pillar-jib-crane-with-girder-boom-and-tie-rods-and-movable-plinth-omis",
                isPartner: true,
                Component: CraneProductDetailPage,
                title:
                  "Pillar jib crane with girder boom and tie rods and movable plinth",
                shortDescription:
                  "The mobile jib crane with tie rods, easy to handle and transport, designed to cope with the largest capacities and extensions.",
                image: {
                  src: Images?.PillarJibCraneWithGirderBoomAndTieRodsAndMovablePlinth,
                  alt: "",
                },
                heroData: {
                  title:
                    "Pillar jib crane with girder boom and tie rods and movable plinth",
                  subtitle:
                    "Mobility and maximum capacity without anchorage to the ground.",
                  image: {
                    src: Images?.PillarJibCraneWithGirderBoomAndTieRodsAndMovablePlinthHero,
                    alt: "",
                  },
                },
                keyPerformanceHighlights: [
                  {
                    title: "500",
                    unit: "kg",
                    value: "Maximum capacity",
                  },
                  {
                    title: "6",
                    unit: "m",
                    value: "Maximum extension",
                  },
                  {
                    title: "270°",
                    unit: "",
                    value: "Rotation",
                  },
                ],
                detailedDescription: {
                  title:
                    "Pillar jib crane with girder boom and tie rods with capacity up to 500 kg",
                  subtitle:
                    "The jib crane on a movable plinth allows operators to shift the crane, using suitable lifting equipment, to more than one location in the factory or construction site, without the constraint of a permanent anchorage to the ground. Extremely versatile, this type of jib crane combines ease of movement and positioning wherever needed in the working environment with the practicality and economy of use that are the added value of the entire category.",
                  description: [
                    "The pillar jib crane with girder boom with tie rods and movable plinth is a solution that, thanks to the use of tie rods, is particularly suitable for higher capacities and extensions, compared to the version with a cantilever girder. Easy to install, it is used for handling light loads in a great many industrial applications, from small workshops to large assembly lines, food production plants or wine cellars.",
                  ],
                },
                keyAdvantages: {
                  heading:
                    "Advantages of the pillar jib crane with girder boom with tie rods and movable plinth",
                  items: [
                    {
                      description: "Ease of movement",
                    },
                    {
                      description: "Operational versatility",
                    },
                    {
                      description: "Easy to use",
                    },
                    {
                      description: "Precise control",
                    },
                    {
                      description: "Increased productivity and safety",
                    },
                  ],
                },
                advantagesImage: [
                  Images?.PillarJibCraneWithGirderBoomAndTieRodsAndMovablePlinth,
                ],
                productConfigurations: [
                  {
                    image:
                      Images?.PillarJibCraneWithGirderBoomAndTieRodsAndMovablePlinthConcrete,
                    alt: "Portable Gantry crane configuration 1",
                    name: "Front view",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithGirderBoomAndTieRodsAndMovablePlinthTop,
                    alt: "Portable Gantry crane configuration 2",
                    name: "Top view",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithGirderBoomAndTieRodsAndMovablePlinthProspect,
                    alt: "Portable Gantry crane configuration 3",
                    name: "Prospect",
                  },
                  {
                    image:
                      Images?.PillarJibCraneWithGirderBoomAndTieRodsAndMovablePlinthSteel,
                    alt: "Portable Gantry crane configuration 3",
                    name: "Prospect",
                  },
                ],
                technicalSpecifications: {
                  standardFeatures: [
                    { heading: "Capacity", value: "125 kg - 500 kg" },
                    {
                      heading: "Extension",
                      value: "Up to 6 m depending on capacity",
                    },
                    {
                      heading: "Extension profile",
                      value: "Profile with I beams with tie rods",
                    },
                    {
                      heading: "Rotation",
                      value:
                        "270° with stop adjustable on site depending on architectural dimensions",
                    },
                    {
                      heading: "Plinth",
                      value:
                        "Movable round plinth in concrete or steel formwork with concrete filling",
                    },
                    {
                      heading: "Pillar",
                      value:
                        "Circular-section tubular steel. At one end it has a perforated base plate for anchoring to the base using chemical anchors or anchor rods, and at the other end two plates, a head plate and an intermediate plate, for supporting the boom.",
                    },
                    {
                      heading: "Hoist",
                      value:
                        "Chain or rope electric hoist for lifting the load, with one or two lifting speeds, with electric or push trolley.",
                    },
                    {
                      heading: "Braking device",
                      value:
                        "This consists of a screw-adjustable clutch for the adjustment of the boom rotation effort and for ensuring its positioning stability.",
                    },
                  ],
                  optionalFeatures: [
                    {
                      heading: "Custom paintwork",
                      value:
                        "The paint colour can be customised to meet specific needs, design or branding requirements.",
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
    additionalData: [
      {
        title: "Why Choose Our Cranes?",
        subData: [
          {
            Icon: (props) => <ShieldCheck {...props} />,
            title: "Safety First",
            description:
              "Advanced safety features including overload protection, emergency braking systems, and anti-collision technology.",
          },
          {
            Icon: (props) => <Weight {...props} />,
            title: "High Load Capacity",
            description:
              "Engineered to handle extreme loads with precision and stability, suitable for the most demanding applications.",
          },
          {
            Icon: (props) => <Crosshair {...props} />,
            title: "Precision Control",
            description:
              "State-of-the-art control systems ensure smooth operation and precise positioning for maximum efficiency.",
          },
          {
            Icon: (props) => <HardHat {...props} />,
            title: "Robust Construction",
            description:
              "Built with high-grade steel and components designed to withstand harsh industrial environments.",
          },
          {
            Icon: (props) => <Settings {...props} />,
            title: "Low Maintenance",
            description:
              "Designed for minimal downtime with easy-to-maintain components and long service intervals.",
          },
          {
            Icon: (props) => <SlidersHorizontal {...props} />,
            title: "Customizable",
            description:
              "Tailored solutions to meet your specific operational requirements and facility constraints.",
          },
        ],
      },
    ],
  },

];

export const productButtons = productsData?.filter((p) => !p?.isPartner)?.map((p) => ({
  id: p?.id || "",
  label: p?.title?.toUpperCase() || "",
  to: `${p?.id || ""}`,
}));

export default productsData;
