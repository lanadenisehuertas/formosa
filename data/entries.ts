/**
 * Every word of entry content on the site comes from this file.
 * Adding, editing or reordering entries is a content change, never a code change.
 *
 * Optional fields simply don’t render when absent — an entry with no PEST
 * analysis or business model just shows fewer sections on its brief page.
 */

export type TaiwanProduct = {
  /** Product name as listed by Taiwan Excellence. */
  name: string;
  /** taiwanexcellence.org award page. Omit for companies without a product listing. */
  url?: string;
  /** What this product does in the concept. */
  role?: string;
};

export type TaiwanPartner = {
  /** Company or institution name. */
  name: string;
  /** Why they’re the right partner. */
  role: string;
};

export type Pest = {
  political: string;
  economic: string;
  social: string;
  technological: string;
};

export type Entry = {
  slug: string;
  name: string;
  /** Chinese name, shown alongside the wordmark where one exists. */
  nameZh?: string;
  /** Full proposal title as submitted. */
  proposalTitle: string;
  tagline: string;
  /** Muted field colour for the card. Keep these desaturated. */
  accent: string;
  /** Competition industry taxonomy — max 3. */
  industries: string[];
  /** Competition issue-category taxonomy — max 3. */
  issues: string[];
  proposalType?: string;

  /** Shown when the card expands. */
  problem: string;
  coreIdea: string;

  products: TaiwanProduct[];
  partners?: TaiwanPartner[];

  /** Everything below renders on /entries/[slug] only. */
  brief?: {
    feasibility?: string[];
    patentability?: string[];
    situation?: string;
    pest?: Pest;
    tasks?: string[];
    businessModel?: string;
    taiwanSolutions?: string;
    ecosystem?: string;
    outcomes?: string;
    risks?: string[];
    fundAllocation?: string;
    milestones?: string[];
    facts?: { label: string; value: string }[];
  };
};

export const entries: Entry[] = [
  {
    slug: "pedalprint",
    name: "PedalPrint",
    proposalTitle:
      "PedalPrint: A Kinetic Chain Fusion System Pairing Taiwan’s Crank and Insole Engineering for Predictive Cycling Injury Prevention",
    tagline:
      "Fusing crank torque and foot pressure to catch cycling injuries months before they hurt.",
    accent: "#A6E6A2",
    industries: ["Cycling", "Sportech", "Smart Healthcare"],
    issues: [
      "Sports Injury Prevention & Recovery",
      "Health & Fitness Performance Enhancement",
      "Rehabilitation & Assistive Living Support",
    ],
    proposalType: "Technological Cooperation with Taiwan Enterprises",
    problem: `Two of the richest data sources in cycling are never measured together: the pressure map inside the shoe, where power enters the body, and the torque and vibration signature at the crank spindle, where power leaves it. Every current product measures one or the other in isolation — power meters read crank output only, smart insoles read foot pressure only. Nobody correlates the two in real time. The mismatch between foot pressure timing and crank torque phase is exactly what reveals a compensation pattern — early knee valgus, hip drop, muscle imbalance, misaligned cleats — before it becomes a diagnosed injury. Neither sensor alone can see it.`,
    coreIdea: `PedalPrint is a sensorized pedal and crank-spindle module paired with a smart insole insert, fused by a phase-locked correlation algorithm. It delivers real-time haptic correction during the ride and builds a longitudinal “kinetic chain signature” for riders, coaches and rehabilitation clinicians. The cross-sensor phase correlation — not the sensors themselves — is the patentable core.`,
    products: [
      {
        name: "SPIRIT Commercial SBC Indoor Cycle",
        url: "https://www.taiwanexcellence.org/en/award/product/1150552",
        role: "Indoor validation rig for the correlation algorithm",
      },
      {
        name: "EBR Cycling Trainer",
        url: "https://www.taiwanexcellence.org/en/award/product/1150498",
        role: "Controlled-load trainer for clinic and pilot testing",
      },
    ],
    partners: [
      {
        name: "Giant Manufacturing Co., Ltd. / Merida Industry Co., Ltd.",
        role: "Bike and crank/pedal-interface OEM integration partners.",
      },
      {
        name: "Dr. Foot",
        role: "Taiwan Excellence award winner for patented recycled carbon-fibre insoles; manufacturing partner for the smart insole layer.",
      },
      {
        name: "KMC Chain Industrial Co., Ltd. / Sun Race Sturmey-Archer Inc.",
        role: "Precision drivetrain and spindle component manufacturers, positioned to produce the sensorized spindle at production scale.",
      },
      {
        name: "Cycling & Health Tech Industry R&D Center (CHC)",
        role: "Runs the Cycling Common Protocol Alliance, the standard connecting motor, controller, battery and suspension across Taiwanese e-bikes. Adopting CCPA means PedalPrint works with the existing ecosystem rather than a proprietary protocol.",
      },
      {
        name: "WiseChip",
        role: "Taiwan Excellence-recognised PMOLED display maker; ultra-low-power handlebar readout consistent with the energy-harvesting power budget.",
      },
    ],
    brief: {
      feasibility: [
        "Power meters, IMUs and pressure-sensing insoles are all mature, already-manufactured components. We are not inventing new sensor physics; we are inventing the fusion.",
        "Piezoelectric energy harvesting from the pedalling motion itself can power the spindle sensor node, removing the single biggest adoption barrier for wearables: charging.",
        "Taiwan manufactures the majority of the world’s bicycle components and already has every partner this product needs.",
      ],
      situation: `Recreational and competitive cyclists routinely develop knee, hip and lower-back injuries from pedalling asymmetries that stay invisible until pain appears, often months after the underlying imbalance began. Bike fitters and physiotherapists rely on one-time video gait analysis or static pressure mats — snapshots that miss how a rider’s mechanics change over hundreds of kilometres as fatigue, muscle imbalance or worn components creep in. Post-operative knee and hip patients are frequently prescribed stationary cycling for rehabilitation, yet clinicians have no continuous, objective way to verify the prescribed motion is actually being performed correctly at home. Existing “smart” cycling products focus almost entirely on power, speed and heart rate, none of which detect the subtle joint-loading asymmetries that predict injury or slow recovery.`,
      pest: {
        political: `Taiwan’s Ministry of Economic Affairs and the CHC already fund smart-cycling interoperability standards through the Cycling Common Protocol Alliance, which lowers regulatory and integration friction for any device adopting the shared protocol. Most jurisdictions classify wellness and fitness sensors well below medical-device thresholds, allowing faster go-to-market before pursuing formal clinical certification, and public and private insurers are gradually beginning to reimburse remote rehabilitation monitoring.`,
        economic: `The addressable market spans the global cycling components market, the sports-wearables market and the orthotic-insole market. The realistically serviceable segment is amateur racing clubs, bike-fit studios and physiotherapy clinics, with an initial obtainable segment of a few thousand riders and a handful of clinic partners in year one. Existing competitors — Garmin, Wahoo, Stages, Moticon — each own only one half of the sensor picture, leaving the cross-sensor correlation as a defensible advantage.`,
        social: `An aging population wanting to stay active, the growth of cycling tourism and rehabilitation cycling, and rising awareness of overuse injury among endurance athletes all create genuine demand for an affordable preventive tool. Taiwan-made cycling equipment already carries strong trust and brand equity among this audience.`,
        technological: `Power meters, IMUs, plantar-pressure insoles and piezoelectric energy harvesting are all mature and mass-manufactured. The real technical challenge is synchronisation, power budget and the fusion algorithm — and Taiwan’s CCPA protocol already solves the interoperability layer, reducing the R&D burden to algorithm design rather than hardware invention.`,
      },
      tasks: [
        "Build a working prototype — sensorized pedal spindle plus smart insole insert — and validate the phase-correlation algorithm against motion-capture ground truth.",
        "Secure a hardware co-development and pilot-supply agreement with a Taiwan crank/spindle and insole manufacturer.",
        "Run a 100-rider pilot spanning one amateur cycling club and one physiotherapy clinic to validate injury-prediction accuracy and rehab-compliance monitoring.",
        "File a provisional patent covering the sensor-fusion assembly and the phase-locked correlation method.",
        "Build the companion analytics platform — rider app, clinician dashboard, optional low-power handlebar readout — and the real-time haptic feedback loop.",
      ],
      businessModel: `PedalPrint uses a hardware-plus-subscription model. The hardware is sold as a one-time purchase at a modest margin to fund manufacturing scale-up; recurring revenue comes from a monthly analytics subscription unlocking longitudinal trend tracking, injury-risk scoring and a clinician dashboard. Two channels run in parallel: direct-to-consumer for competitive and enthusiast cyclists, and B2B2C through physiotherapy clinics, bike-fit studios and cycling clubs who resell or bundle the device as part of a fitting or rehab programme. The clinic channel carries lower acquisition cost and higher lifetime value, since one clinic relationship brings recurring patient volume rather than one-off consumer purchases. Indicative unit economics: hardware retail around USD 249 per kit at roughly 45% gross margin once produced at scale through Taiwan manufacturing partners; subscription around USD 9 per month at roughly 80% margin, since marginal cost is cloud compute rather than physical goods. Long-term social sustainability comes from two directions — preventing injuries reduces downstream healthcare costs for partner clinics and insurers, and the recycled-material insole component keeps the product aligned with the circular-manufacturing goals already prioritised across Taiwan’s cycling industry. Financial viability does not depend on winning over every recreational cyclist; a modest base of clinic and club partnerships is sufficient, with the hardware line near breakeven by design because the software is the durable revenue engine.`,
      taiwanSolutions: `We are seeking co-development and manufacturing partnerships with Giant Manufacturing or Merida Industry for crank and pedal-interface integration, with Dr. Foot for the smart insole layer building on their patented recycled carbon-fibre insole technology, and with KMC Chain Industrial or Sun Race Sturmey-Archer for precision manufacture of the sensorized spindle at production scale. We would also integrate with the Cycling & Health Tech Industry R&D Center’s Cycling Common Protocol Alliance so PedalPrint communicates natively with existing Taiwanese e-bike motor, controller and suspension systems rather than requiring a proprietary protocol, and would explore WiseChip’s ultra-low-power PMOLED technology for an optional handlebar readout. These partnerships give us mass-production-grade component manufacturing and quality control from day one, embed PedalPrint into a device ecosystem riders and bike shops already trust, and lend the credibility of established Taiwan Excellence brands to a first-time hardware company entering a health-adjacent category.`,
      ecosystem: `By adopting the CCPA protocol, PedalPrint becomes interoperable with any Taiwan-made e-bike or smart component already using that standard, so a rider who buys a Giant or Merida e-bike can add PedalPrint without a separate app or hub. Bike shops selling Taiwan-made frames can bundle PedalPrint as an add-on fitting and injury-prevention service, and Dr. Foot can offer PedalPrint’s smart insole as a premium tier of its existing line. Retention comes from the subscription’s longitudinal data — a rider’s multi-month kinetic chain history becomes more valuable the longer they stay, and switching means losing it. Over time, aggregated de-identified kinetic-chain data becomes a licensable dataset for bike-fit research and component R&D.`,
      outcomes: `With Taiwan manufacturing partners we expect to move from prototype to a production-ready sensorized spindle and insole within 12 to 18 months, versus a considerably longer timeline building relationships with unfamiliar overseas suppliers. Component costs should fall meaningfully once produced through existing Taiwan Excellence-grade manufacturing lines. Interoperability with CCPA means PedalPrint launches already compatible with Taiwan’s installed e-bike base, shortening the sales cycle with bike shops and clubs. We expect the 100-rider pilot to generate the first independent validation dataset demonstrating that cross-sensor phase correlation predicts pain and compensation patterns better than either sensor alone — the core evidence supporting both the patent filing and future clinical partnerships.`,
      risks: [
        "Regulatory: positioning as a diagnostic medical device could stall launch. Mitigated by launching as a wellness and performance product, pursuing clinical certification only after pilot evidence supports it.",
        "Market: consumers may be price-sensitive toward a new hardware category. Mitigated by prioritising the B2B2C clinic and club channel, where a professional makes the purchase decision.",
        "Technical: the fusion algorithm may need more data than expected to distinguish meaningful asymmetry from normal variation. Mitigated by a staged pilot with motion-capture ground truth before wider rollout.",
        "Supply: production delays are common for first-time hardware companies. Mitigated by working through proven, high-volume Taiwan Excellence component manufacturers.",
      ],
      fundAllocation: `Approximately 40% to R&D covering sensor integration, firmware and the phase-correlation algorithm; 25% to hardware tooling and initial manufacturing setup with Taiwan component partners; 15% to the clinical and pilot validation study; 10% to the software platform; and 10% to partnership development and go-to-market with Taiwan manufacturers, bike shops and clinics. This front-loads validation and manufacturing readiness over marketing spend, reflecting that credibility with clinics and component partners is the primary near-term growth constraint.`,
      milestones: [
        "Months 0–6 — Working prototype (sensorized spindle plus insole); provisional patent filing covering the fusion assembly and correlation method.",
        "Months 6–12 — 100-rider pilot with one cycling club and one physiotherapy clinic; algorithm refinement against motion-capture ground truth.",
        "Months 12–18 — Manufacturing partnership finalised with a Taiwan component manufacturer; first production batch.",
        "Year 2 — Commercial launch through the clinic and club B2B2C channel; CCPA protocol integration completed.",
        "Years 2–3 — Expansion to additional clinics and cycling markets; pursue wellness-device certification; explore licensing de-identified kinetic-chain data as a secondary revenue stream.",
      ],
      facts: [
        { label: "Total budget", value: "USD $100,001 – $500,000" },
        { label: "To Taiwan solutions", value: "51% – 80%" },
        { label: "Timeline", value: "1–3 years" },
        { label: "Beneficiaries", value: "1,001 – 10,000" },
        { label: "Economic impact", value: "USD $500,001 – $1M" },
      ],
    },
  },

  {
    slug: "dermaphase",
    name: "DermaPhase",
    proposalTitle:
      "DermaPhase: A Barrier–Metabolic Fusion Patch That Predicts Skin Flares Before They Surface",
    tagline:
      "A wearable patch that predicts eczema and rosacea flares 24 to 72 hours before they show.",
    accent: "#FFB0C8",
    industries: ["Smart Healthcare", "Aesthetic Services", "Health Check-ups"],
    issues: [
      "Aesthetic Medicine & Anti-Aging",
      "Preventive Health & Disease Prevention",
      "Workplace Health & Environmental Hygiene",
    ],
    proposalType: "Technological Cooperation with Taiwan Enterprises",
    problem: `Transepidermal water loss — the rate at which the skin barrier leaks moisture — is a mature, well-validated measurement. So is localised sweat electrolyte and micro-thermal signal, which reflects inflammatory and metabolic activity at the skin surface. Every current skincare device measures one or the other, once, as a snapshot: a dermatologist’s TEWL probe, a skincare app’s photo analysis. Nobody tracks the two continuously and compares their relative timing. When they drift out of phase — the barrier weakening faster than the skin’s metabolic response can compensate — that mismatch precedes a visible eczema, rosacea or sensitivity flare by roughly 24 to 72 hours, and marks the window where photoaging damage accumulates fastest without visible symptoms.`,
    coreIdea: `DermaPhase is a thin, skin-adhered patch, wearable under normal skincare or makeup, fusing a flexible TEWL and hydration micro-sensor with a sweat-electrolyte and micro-thermal sensor. It is read by the same phase-correlation approach as PedalPrint, tuned to a completely different signal band and timescale — a second patent family under one sensing platform. The phase-mismatch reading also times a specific intervention: applying a barrier-repair active at the moment it matters, rather than on a generic schedule.`,
    products: [],
    partners: [
      {
        name: "TCI Co., Ltd.",
        role: "Taiwan-based postbiotic and probiotic skincare active manufacturer with expanding CDMO capacity; partner for the barrier-repair active DermaPhase’s readings would trigger.",
      },
      {
        name: "DR.WU",
        role: "Dermatologist-founded, clinically oriented Taiwan cosmeceutical brand; partner for calibrating sensor thresholds against real clinical skin conditions.",
      },
      {
        name: "Everest Textile Co., Ltd. / Eclat Textile Co., Ltd.",
        role: "Taiwan Excellence-recognised smart-textile and moisture-management fabric makers; substrate partner for a breathable, skin-conformal patch.",
      },
      {
        name: "Industrial Technology Research Institute (ITRI)",
        role: "Taiwan’s applied-research institute, active in flexible and printed sensor development; R&D collaborator for the flexible TEWL and electrolyte sensor layer.",
      },
    ],
    brief: {
      feasibility: [
        "TEWL sensors, flexible sweat-electrolyte sensors and skin-surface thermal sensors are each mature and already manufactured at scale for medical and cosmetic testing. The innovation is the fusion, not new sensor physics.",
        "A textile-integrated, ultra-thin patch rather than a rigid wearable means it can be worn overnight or under makeup — the actual adoption barrier for continuous skin sensing.",
        "Taiwan is one of the world’s most credentialed hubs for postbiotic and fermentation-derived skincare actives and GMP-certified cosmeceutical manufacturing, plus flexible-sensor research through ITRI.",
      ],
      patentability: [
        "The physical assembly — a flexible, skin-conformal patch co-locating a TEWL/hydration sensor and a sweat-electrolyte/thermal sensor within a single low-profile substrate suitable for continuous cosmetic wear.",
        "The method — a phase-correlation algorithm flagging the relative drift between barrier and metabolic signals as a flare-predictive marker, distinct from either signal’s absolute value.",
        "The preventive-intervention trigger — using the phase-mismatch reading to time a specific skincare active application rather than a generic reminder.",
      ],
      situation: `Skincare and dermatology today rely almost entirely on snapshots: a one-time barrier test at a clinic, a weekly selfie in an app, a visual exam once symptoms already show. None of these catch a flare before it becomes visible, because the two signals that actually predict one — how fast the barrier is losing moisture, and how the skin’s local metabolic and inflammatory activity is responding — are never measured together or continuously. People with eczema, rosacea or chronically sensitive skin typically only learn a flare is starting once redness or breakdown is visible, at which point intervention is reactive. Office and outdoor workers exposed to fluctuating humidity, heat and pollution accumulate barrier damage with no continuous way to know when their skin is under acute stress. Meanwhile skincare brands sell preventive actives with no objective signal for when a user should actually apply them.`,
      pest: {
        political: `Taiwan’s cosmetics and biotech sectors operate under well-established GMP and ISO 22716 manufacturing standards, giving a clear, already-mapped regulatory pathway for a cosmetic-grade rather than medical-diagnostic-grade wearable and avoiding the longer approval timelines of a true medical device. Consumer skincare wearables are generally regulated well below medical-device thresholds in most markets, supporting a faster initial launch with clinical-grade positioning pursued later if warranted.`,
        economic: `The addressable market spans wearable skin diagnostics and smart cosmetics plus the broader sensitive-skin and anti-aging skincare market. The serviceable segment is dermatology and medspa clinics plus skincare brands wanting a data-backed preventive product, with an initial obtainable segment of a handful of clinic and brand partnerships in year one. Competitors are either one-time diagnostic devices or passive photo-based tracking apps, neither of which continuously fuses barrier and metabolic signals.`,
        social: `Rising awareness of skin barrier health, the growth of skinimalism and preventive routines, and increasing rates of self-reported sensitive skin and urban-pollution-related skin stress all support genuine demand. Taiwan’s cosmeceutical and biotech sector already carries strong consumer trust in this category.`,
        technological: `The component sensors are each mature and already manufactured. The real challenge is miniaturising and co-locating them on a single conformal, breathable substrate with a power budget small enough for all-day or overnight wear — an area where Taiwan’s flexible-sensor and smart-textile research base directly reduces our R&D burden.`,
      },
      tasks: [
        "Build a working patch prototype co-locating the TEWL/hydration sensor and sweat-electrolyte/thermal sensor on a single flexible, skin-conformal substrate.",
        "Validate the phase-correlation algorithm against clinically observed flare onset in a small cohort with sensitive skin, eczema or rosacea, benchmarked against dermatologist assessment.",
        "Secure a manufacturing and formulation partnership with a Taiwan cosmeceutical or biotech active maker to pair sensor readings with a specific barrier-repair intervention.",
        "File a provisional patent covering the dual-sensor patch assembly and the phase-mismatch flare-prediction method, as a second application of our phase-correlation platform.",
        "Build the companion app and clinician/brand dashboard for longitudinal skin-health tracking.",
      ],
      businessModel: `DermaPhase follows a hardware-plus-consumable model rather than hardware-plus-subscription. The patch is a low-cost, semi-disposable wearable sold in small multi-packs, since skin patches have a natural wear-and-replace cycle, while recurring revenue comes from a paired skincare active — a barrier-repair serum formulated to be applied when the patch signals a phase mismatch. This ties revenue directly to the moment of most value to the user rather than a flat subscription unrelated to actual skin need. Two channels run in parallel: direct-to-consumer for people who self-identify as having sensitive, eczema-prone or rosacea-prone skin, and B2B2C through dermatology clinics and medspas offering DermaPhase as part of a preventive-care package, plus skincare brands licensing the sensor-triggered-application model for their own actives. Clinic and brand-licensing channels carry higher lifetime value at lower acquisition cost. Patch multi-packs are priced to cover component and manufacturing cost at a modest margin; the paired active carries the higher margin typical of finished cosmeceutical goods, and the companion app and clinic dashboard add a lower-cost, higher-margin recurring line. Long-term social sustainability comes from shifting skincare spend from reactive treatment toward cheaper preventive intervention, reinforced by using Taiwan’s existing postbiotic and fermentation-based actives, which are generally lower-impact to produce than synthetic alternatives.`,
      taiwanSolutions: `We are seeking a formulation and active-ingredient partnership with TCI Co., Ltd. to develop the barrier-repair postbiotic active DermaPhase’s readings would trigger; a clinical calibration partnership with DR.WU to validate sensor thresholds against real diagnosed conditions such as rosacea and eczema; a substrate and manufacturing partnership with a Taiwan smart-textile maker in the Everest or Eclat category for the breathable, skin-conformal patch material; and a flexible-sensor R&D collaboration with ITRI for the co-located TEWL and electrolyte sensor layer. These partnerships give us access to already-GMP-certified cosmeceutical manufacturing rather than building that capability from scratch, pair our sensing platform with actives that already carry clinical credibility across the Taiwanese and broader Asian skincare market, and use Taiwan’s flexible-sensor research base to solve the hardest constraint in the product: putting two different sensor types onto one comfortable, all-day-wearable surface.`,
      ecosystem: `Pairing sensor readings with a specific triggered active creates a recurring cross-sell — the patch data tells the user exactly when to reach for the paired product rather than following a generic routine, increasing both retention and consumption of the active. For a Taiwan active-ingredient maker like TCI, this differentiates a postbiotic serum with an objective usage signal rather than competing purely on ingredient claims. For a clinic or medspa, DermaPhase becomes a recurring diagnostic touchpoint between visits with a natural upsell path to in-clinic treatment when persistent mismatch is detected. Over time, aggregated de-identified phase-mismatch and flare-outcome data becomes a licensable dataset for brands developing new actives.`,
      outcomes: `With a Taiwan formulation partner we expect to move from a generic barrier-repair concept to a specific, clinically credible paired active considerably faster than developing a novel ingredient independently. Clinical calibration support should shorten the path to credible flare-prediction claims, since thresholds can be validated against real diagnosed patients rather than self-reported symptoms. A Taiwan smart-textile substrate partnership should meaningfully improve wearability, which directly affects whether users actually wear the patch continuously — the single biggest adoption risk for any continuous skin-sensing product. We expect the initial clinical pilot to produce the first evidence that barrier–metabolic phase mismatch predicts flare onset ahead of visible symptoms, reinforcing the broader platform story that our phase-correlation method generalises across at least two distinct physiological domains.`,
      risks: [
        "Regulatory: positioning too close to a medical diagnostic could trigger longer approval timelines. Mitigated by launching as a cosmetic-grade wearable under existing GMP/ISO 22716-adjacent frameworks.",
        "Market: consumers may be sceptical of a new sensing category in an already claim-heavy beauty-tech market. Mitigated by prioritising the clinic and dermatologist channel, where clinical credibility drives adoption.",
        "Technical: co-locating two sensor types on one comfortable, all-day-wearable substrate may prove harder than expected. Mitigated by a staged prototype process and direct collaboration with ITRI’s flexible-sensor group.",
        "Adoption: users may not wear a continuous patch consistently. Mitigated by tying the patch to an existing skincare routine rather than requiring a new standalone habit.",
      ],
      fundAllocation: `Approximately 35% to R&D covering sensor co-location, flexible substrate design and the phase-correlation algorithm; 25% to formulation and manufacturing setup with a Taiwan active-ingredient and cosmeceutical partner; 20% to the clinical validation study with a dermatologist-benchmarked flare-tracking cohort; 10% to the companion app and clinic dashboard; and 10% to partnership development. This weighting reflects that clinical credibility and manufacturing partnership, not consumer marketing, are the binding constraints for a first-time entrant into a claim-sensitive category.`,
      milestones: [
        "Months 0–6 — Working patch prototype with co-located TEWL and electrolyte/thermal sensors; provisional patent filing.",
        "Months 6–12 — Small clinical pilot with a dermatology or medspa partner, benchmarking phase-mismatch prediction against dermatologist-confirmed flare onset.",
        "Months 12–18 — Formulation partnership finalised for the paired barrier-repair active; substrate manufacturing partnership finalised.",
        "Year 2 — Commercial launch through the clinic and skincare-brand licensing channel.",
        "Years 2–3 — Expansion to additional clinics and a direct-to-consumer line; explore licensing de-identified flare-outcome data to skincare brands.",
      ],
      facts: [
        { label: "Total budget", value: "USD $100,001 – $500,000" },
        { label: "To Taiwan solutions", value: "51% – 80%" },
        { label: "Timeline", value: "1–3 years" },
        { label: "Beneficiaries", value: "1,001 – 10,000" },
        { label: "Economic impact", value: "USD $500,001 – $1M" },
      ],
    },
  },

  {
    slug: "pulseweave",
    name: "PulseWeave",
    proposalTitle:
      "PulseWeave: A Self-Pumping, Sensor-Actuator Compression Textile for Real-Time Recovery in Cycling and Endurance Sports",
    tagline:
      "Compression fabric that senses fatigue and tightens itself — no pump, no boots, worn mid-ride.",
    accent: "#93D3F7",
    industries: ["Fitness", "Sportech", "Cycling"],
    issues: [
      "Health & Fitness Performance Enhancement",
      "Sports Injury Prevention & Recovery",
      "Rehabilitation & Assistive Living Support",
    ],
    proposalType: "Technological Cooperation with Taiwan Enterprises",
    problem: `Endurance athletes and cyclists who train for extended periods experience progressive muscle fatigue, localised swelling and venous blood pooling in the lower limbs, which slow recovery and raise injury risk. Current recovery tools are either too bulky and immobile to use during activity — pneumatic compression boots — or too static to adapt to the athlete’s changing physiological state, as with fixed-pressure compression garments. Cyclists on multi-hour rides cannot use pneumatic recovery devices mid-activity, and static compression socks apply the same pressure regardless of whether a muscle is actually fatigued, missing exactly the moments when active circulation support matters most.`,
    coreIdea: `PulseWeave is a knit compression sleeve, sock or short that fuses two things into one fabric: flexible bioimpedance and strain-sensing yarn that detects localised muscle swelling, fatigue and venous pooling, and shape-memory-alloy actuator yarn that physically contracts specific zones on command. A tiny embedded microcontroller closes the loop — when a zone shows a fatigue or pooling signature, that zone tightens automatically, mimicking the natural muscle pump that pushes blood back to the heart. No pneumatic pump, no bulky boots, wearable during activity rather than only after it. No existing product fuses textile-integrated physiological sensing with textile-integrated mechanical actuation into one autonomous closed loop.`,
    products: [],
    partners: [
      {
        name: "Industrial Technology Research Institute (ITRI)",
        role: "Demonstrated capability in stretchable, textile-integrated strain and bioimpedance sensors; co-development partner for the sensing-yarn layer.",
      },
      {
        name: "Eclat Textile Co., Ltd.",
        role: "Taiwan Excellence-recognised functional textile manufacturer with deep experience producing technical knitwear at scale for global performance brands; industrialisation partner for the sensor-actuator knit structure.",
      },
    ],
    brief: {
      feasibility: [
        "Taiwan already has the two hardest ingredients solved separately — stretchable sensing textiles via ITRI, and high-volume functional-knit manufacturing via its textile industry. The innovation is the fusion, not new materials.",
        "The garment is manufactured on existing industrial knitting machines rather than bespoke tooling, so unit costs fall meaningfully as volume scales.",
      ],
      situation: `Endurance athletes and cyclists experience progressive fatigue, swelling and venous pooling that slow recovery and raise injury risk. Existing recovery tools are either immobile or unresponsive. This gap disproportionately affects recreational cyclists, endurance athletes, post-operative rehabilitation patients and aging active adults, who need continuous compression that adjusts automatically rather than depending on manual pump cycles or guesswork. The market currently lacks a lightweight, wearable textile that senses localised fatigue and swelling and responds immediately by intensifying compression precisely where and when it is needed, whether mid-ride or post-workout.`,
      pest: {
        political: `Taiwan’s government actively promotes health and sports technology exports through Taiwan Excellence and supports domestic textile innovation through ITRI, while Philippine agencies increasingly back wellness-tech startups. A sensing garment may eventually face device-classification review, which this proposal addresses early by positioning it as a consumer wellness product rather than a medical device.`,
        economic: `The global sports recovery and compression-wear market is in the low billions of US dollars and growing as endurance sports participation rises across Southeast Asia. The total addressable market spans global endurance athletes and cycling communities; the serviceable available market is ASEAN recreational and competitive cyclists and runners; the serviceable obtainable market in year one is Philippine cycling clubs, sports clinics and gyms. Competitors include static compression brands such as CEP and 2XU and bulky pneumatic devices such as Normatec, but none offer real-time, activity-compatible adaptive compression.`,
        social: `Cyclists, runners, post-surgical rehabilitation patients and active older adults increasingly want non-invasive, always-on recovery support. The growing Philippine cycling culture combined with rising health consciousness makes intelligent recovery wear culturally resonant, with the added social benefit of reducing overtraining injuries and lost training time.`,
        technological: `Existing compression solutions rely on either static knit tension or external pneumatic pumps, and no consumer product currently fuses textile-integrated bioimpedance and strain sensing with embedded shape-memory actuation into one closed-loop garment. The required innovation is manufacturing a single knit structure combining sensing and actuator yarns, technically feasible given Taiwan’s advanced stretchable-sensor and functional-textile base, though calibration across body types and long-term actuator durability are constraints to solve during prototyping.`,
      },
      tasks: [
        "Develop and validate the sensing-actuation knit prototype, integrating bioimpedance and strain-sensing yarn with shape-memory-alloy actuator yarn, in partnership with a Taiwan textile R&D institution.",
        "Build the embedded microcontroller and closed-loop firmware that reads localised fatigue and swelling signals and triggers graduated compression responses within roughly one second.",
        "Run field pilot testing with cycling clubs, endurance runners and post-operative rehabilitation patients to calibrate the compression algorithm across different muscle groups and body types.",
        "File patent protection for the sensor-actuator textile architecture and the closed-loop adaptive compression method in Taiwan, the Philippines and key ASEAN markets.",
        "Establish manufacturing and distribution partnerships with a Taiwan Excellence-recognised functional textile manufacturer, ensuring the garment can be produced on existing knitting infrastructure.",
      ],
      businessModel: `PulseWeave operates on a hybrid B2C–B2B model. On the consumer side the garment is sold direct-to-athlete through e-commerce and cycling and running specialty retailers at roughly USD 60–90 per sleeve or sock pair, positioned between premium static compression wear at USD 30–50 and pneumatic recovery systems at USD 600–900. On the B2B side the same hardware is licensed as a recovery-monitoring add-on to physical therapy clinics, sports medicine centres and cycling teams on a subscription basis covering firmware updates, replacement actuator yarns and companion app analytics. Major cost drivers are the sensing and actuator yarn, knitting and assembly labour, the embedded microcontroller and firmware and app development. Estimated gross margins are 45–55% once production exceeds pilot scale, in line with premium technical apparel. Customer acquisition cost is estimated at USD 25–35 through cycling and running community partnerships, ambassador athletes and clinic referrals, while lifetime value is estimated at USD 150–220 per athlete over 18 months, yielding an LTV-to-CAC ratio above 5:1. Long-term social sustainability comes from the preventive-health framing: reducing overuse injuries and recovery downtime, and giving rehabilitation clinics an objective, continuous measure of healing progress instead of relying solely on subjective patient reporting. The model leverages existing resources rather than reinventing them — Taiwan’s mature textile manufacturing base instead of new factories, existing cycling and running community networks instead of costly acquisition, and existing clinic relationships instead of a from-scratch sales force.`,
      taiwanSolutions: `We are seeking technological cooperation with ITRI, which has demonstrated capability in stretchable, textile-integrated strain and bioimpedance sensors, to co-develop the sensing-yarn layer, since building this capability from scratch would be prohibitively slow and costly for an early-stage team. In parallel we are seeking a manufacturing partnership with an established Taiwan Excellence-recognised functional textile and sportswear manufacturer such as Eclat Textile to industrialise the sensor-actuator knit structure once the prototype is validated, ensuring the garment can be produced on proven industrial knitting lines rather than custom tooling. These partnerships compress our development timeline by years and strengthen our patent position, since the resulting architecture would be a genuinely novel combination of Taiwan-origin sensing technology and Taiwan-origin manufacturing capability applied to a use case neither currently addresses. We view this less as buying an off-the-shelf Taiwan product and more as co-creating a new applied use case for Taiwan’s existing strengths.`,
      ecosystem: `Combining ITRI’s sensing technology with an established manufacturer’s production capability creates a two-sided ecosystem rather than a single supply relationship. The sensing partnership opens cross-selling into rehabilitation clinics and sports medicine centres that want objective recovery data, while the manufacturing partnership opens distribution into the partner’s existing global apparel client relationships, potentially positioning the sensor-actuator technology as a licensable component for other sportswear brands. Athletes who buy the garment become recurring users of the companion recovery-tracking app and subscription firmware updates, while clinics that adopt PulseWeave for patient monitoring are unlikely to switch once patient recovery histories are built into the platform. The company becomes a technology-licensing entity with a defensible, patented architecture embeddable into products from cycling apparel to post-surgical rehabilitation garments.`,
      outcomes: `Integrating ITRI’s sensing technology and a Taiwan manufacturing partnership is expected to reduce the prototype-to-production timeline from an estimated 24–30 months to roughly 12–14 months, since both core technical capabilities already exist and require adaptation rather than invention. We expect the knit prototype to achieve fatigue-detection accuracy sufficient for reliable zone-specific actuation within the first six months of co-development, followed by a three-to-four-month field pilot with an estimated 100–150 athletes and rehabilitation patients. We project first-year sales of 3,000–5,000 units generating approximately USD 250,000–400,000 in revenue, scaling toward 10,000+ units annually by year three as clinic subscriptions mature. Successful integration is expected to result in a jointly held or licensed patent, extending Taiwan’s textile export value proposition into a higher-margin, technology-differentiated segment rather than commodity apparel manufacturing.`,
      risks: [
        "Technical: actuator durability under repeated washing and flexing. Mitigated by using SMA actuator yarns already validated in industrial applications and accelerated wear-testing targeting 200+ wash cycles during the ITRI co-development phase.",
        "Market: slower adoption if athletes perceive the price premium over static compression wear as unjustified. Mitigated by a clinic-first go-to-market where objective recovery data builds credibility before scaling to direct consumer sales.",
        "Policy: potential future reclassification of physiological-sensing wearables as regulated medical devices in the Philippines or ASEAN. Mitigated by engaging regulatory counsel early and marketing strictly as a wellness and performance product.",
        "Financial: currency and import cost fluctuations on Taiwan-sourced components. Mitigated by negotiating multi-year fixed-cost supply agreements once the relationship moves past pilot scale.",
      ],
      fundAllocation: `Roughly 35% to R&D, primarily co-development of the sensing and actuator knit with ITRI plus internal firmware and app development; approximately 30% to Taiwan-based manufacturing partnership costs covering pilot-batch production and technical integration with the manufacturer’s existing knitting lines; about 15% to field pilot testing including athlete and clinic recruitment; roughly 10% to patent filing across Taiwan, the Philippines and priority ASEAN markets; and the remaining 10% to go-to-market activities. This prioritises technical validation and IP protection in year one, since the sensor-actuator architecture is the company’s core defensible asset.`,
      milestones: [
        "Months 1–6 — Co-develop and bench-validate the sensing-actuator knit prototype with ITRI, targeting reliable fatigue and swelling detection accuracy.",
        "Months 6–10 — Integrate microcontroller and closed-loop firmware, achieving sub-one-second actuation response time.",
        "Months 10–14 — Field pilot with 100–150 cyclists, runners and rehabilitation patients through partner clinics and cycling clubs.",
        "Months 14–18 — File core patents and finalise the manufacturing agreement for pilot-scale production of 3,000–5,000 units.",
        "Months 18–24 — Launch direct-to-consumer sales and the clinic subscription programme, targeting USD 250,000–400,000 in first commercial-year revenue.",
        "Months 24–36 — Scale toward 10,000+ annual units, expand clinic partnerships into a second ASEAN market, and begin second-generation R&D for elder-care and post-surgical use cases.",
      ],
      facts: [
        { label: "Total budget", value: "USD $100,001 – $500,000" },
        { label: "To Taiwan solutions", value: "31% – 50%" },
        { label: "Timeline", value: "1–3 years" },
        { label: "Beneficiaries", value: "1,001 – 10,000" },
        { label: "Economic impact", value: "USD $500,001 – $1M" },
      ],
    },
  },

  {
    slug: "synapse",
    name: "SYNAPSE",
    proposalTitle:
      "SYNAPSE: A Living Health Intelligence Infrastructure Powered by AI, Digital Twins, and Taiwanese Smart Healthcare Technologies for Predictive Community Health, Preventive Care, and Resilient Smart Cities",
    tagline:
      "Digital twins of neighbourhoods that forecast health risk before hospitals fill up.",
    accent: "#FFD64A",
    industries: ["Smart Healthcare", "Health Check-ups", "Sportech"],
    issues: [
      "Preventive Health & Disease Prevention",
      "Clinical Efficiency & Precision Diagnosis",
      "Health Equity & Accessibility of Resources",
    ],
    proposalType: "Technological Cooperation with Taiwan Enterprises",
    problem: `Modern healthcare remains reactive. Hospitals diagnose illness after symptoms appear, public health agencies detect outbreaks after transmission has already occurred, and wearable devices focus on individual users without considering environmental, behavioural or community-wide influences. Taiwan, despite having one of the world’s most advanced healthcare systems and semiconductor industries, still faces increasing pressure from an aging population, chronic diseases, climate-related health threats and workforce shortages. Existing solutions operate independently and fail to integrate real-time environmental, healthcare, mobility and physiological information into a unified predictive platform, preventing governments and providers from making proactive decisions.`,
    coreIdea: `Every city today reacts to health crises after people become sick. SYNAPSE creates a Living Health Intelligence Infrastructure that continuously predicts emerging health risks across communities before hospitals become overwhelmed. Instead of monitoring only individual patients, it builds dynamic digital twins of neighbourhoods, schools, workplaces and cities by combining wearable data, environmental conditions, mobility patterns, healthcare utilisation and behavioural signals — enabling governments, hospitals, employers, insurers and citizens to intervene earlier.`,
    products: [
      {
        name: "Monitoring and Health Management System",
        url: "https://www.taiwanexcellence.org/en/award/product/1140450",
        role: "Population-level health data collection layer",
      },
      {
        name: "AI Health Care Time-of-Flight 3D Depth Sensing Camera",
        url: "https://www.taiwanexcellence.org/en/award/product/1130482",
        role: "Privacy-preserving facility-level activity sensing",
      },
      {
        name: "Intelligent air quality and air conditioning energy management system in medical centers",
        url: "https://www.taiwanexcellence.org/en/award/product/42250",
        role: "Environmental input for the facility digital twin",
      },
      {
        name: "Air Monitor Pro",
        url: "https://www.taiwanexcellence.org/en/award/product/109150",
        role: "Distributed environmental sensing for community twins",
      },
    ],
    partners: [
      {
        name: "Advantech",
        role: "Industrial IoT gateways, edge computing platforms and smart environmental sensing enabling real-time collection of health-related environmental data.",
      },
      {
        name: "ASUS Healthcare",
        role: "Wearable health devices and remote physiological monitoring that continuously enrich individual and community digital twins.",
      },
      {
        name: "Acer",
        role: "High-performance AI computing infrastructure and cloud integration supporting large-scale predictive analytics and digital twin simulation.",
      },
      {
        name: "BenQ Medical Technology",
        role: "Integration with hospital workflows, medical imaging platforms and clinical decision support systems.",
      },
      {
        name: "Delta Electronics",
        role: "Smart building technologies and environmental monitoring allowing workplaces, hospitals and public facilities to optimise health conditions automatically.",
      },
    ],
    brief: {
      situation: `Despite remarkable advances in medicine and digital technology, healthcare systems across the world remain largely reactive, intervening only after illness has developed. Taiwan and many neighbouring countries are simultaneously experiencing population aging, increasing chronic diseases, mental health challenges, climate-related health risks and shortages of healthcare professionals. While wearable devices, electronic health records and environmental monitoring systems generate enormous volumes of valuable information, these datasets remain fragmented and are rarely transformed into coordinated preventive action. Communities therefore lose opportunities to identify emerging health risks before they escalate into medical emergencies or widespread public health events.`,
      pest: {
        political: `Taiwan continues to invest in digital health transformation, smart hospitals, artificial intelligence and preventive healthcare while maintaining one of the world’s most advanced National Health Insurance systems, creating an enabling environment for scalable predictive healthcare platforms. Similar priorities are emerging across Asia as governments seek cost-effective solutions to aging populations and rising healthcare expenditure.`,
        economic: `The global digital health market exceeds hundreds of billions of dollars and continues to expand rapidly. Initial target customers include governments, hospitals, insurers, universities and large enterprises. SYNAPSE differentiates itself by providing population-level predictive intelligence rather than individual disease monitoring, creating significant barriers through proprietary digital twin algorithms and ecosystem integration.`,
        social: `Citizens increasingly expect personalised healthcare while communities demand equitable access regardless of location. Preventive interventions can improve quality of life, reduce avoidable hospitalisations and enhance resilience against climate-related and infectious disease risks.`,
        technological: `Taiwan possesses world-leading strengths in semiconductors, AI computing, IoT devices, cloud infrastructure and smart healthcare. SYNAPSE combines these with federated learning, multimodal AI, digital twins, geospatial analytics and privacy-preserving computation to create a technically feasible yet highly differentiated platform.`,
      },
      tasks: [
        "Develop the SYNAPSE Digital Twin Engine that continuously integrates anonymised health, environmental, mobility and behavioural information into dynamic community health models.",
        "Build the Predictive Intelligence Platform capable of forecasting disease outbreaks, healthcare demand, climate-related health risks and wellness trends through multimodal AI models.",
        "Integrate Taiwanese smart healthcare technologies, IoT devices, AI computing infrastructure and cloud services into an interoperable preventive healthcare ecosystem.",
        "Deploy interactive dashboards for governments, hospitals, enterprises and citizens that convert predictive analytics into practical preventive interventions.",
        "Conduct pilot implementations with healthcare institutions and local governments, evaluate measurable reductions in healthcare burden, and continuously improve prediction accuracy while maintaining strict privacy protection through federated learning and secure data governance.",
      ],
      businessModel: `SYNAPSE operates as a B2G, B2B and B2H SaaS platform that transforms fragmented health and environmental data into predictive intelligence. Rather than replacing existing healthcare systems, it integrates wearable devices, smart sensors, hospital information systems, environmental monitoring networks and public datasets into a unified infrastructure powered by AI and digital twin technology. Primary customers include national and local governments, healthcare providers, insurers, universities, industrial parks, smart cities and large enterprises; individual citizens receive free access through partner organisations, ensuring broad adoption while maintaining financial sustainability. Revenue comes from annual enterprise subscriptions, implementation and integration services, AI analytics licensing, premium predictive modules, and anonymised population-level insights for approved research institutions under strict privacy governance. Governments and hospitals subscribe based on population size; corporations by employee count. Additional revenue comes from licensing APIs enabling third-party healthcare innovators to build complementary applications. Major cost drivers are AI infrastructure, cloud computing, cybersecurity, software development, regulatory compliance and continuous model improvement — costs that decrease over time through scalable cloud deployment and reusable architecture. Gross margins are projected above 70% after commercialisation. Estimated customer acquisition cost for institutional clients is USD 8,000–12,000, while projected lifetime value exceeds USD 250,000 through multi-year contracts, producing an LTV:CAC ratio above 20:1. Social sustainability is embedded in the model: by preventing disease instead of only treating illness, SYNAPSE reduces healthcare expenditure, improves resource allocation and enables underserved communities to access predictive healthcare services.`,
      taiwanSolutions: `SYNAPSE seeks strategic technological cooperation with leading Taiwanese enterprises to build a globally scalable preventive healthcare ecosystem. Advantech provides Industrial IoT gateways, edge computing platforms and smart environmental sensing. ASUS Healthcare contributes wearable health devices and remote physiological monitoring that continuously enrich individual and community digital twins. Acer provides high-performance AI computing infrastructure and cloud integration. BenQ Medical Technology supports integration with hospital workflows, medical imaging platforms and clinical decision support. Delta Electronics contributes smart building technologies and environmental monitoring. Additional collaboration with Taiwan’s semiconductor ecosystem enables efficient edge AI deployment while reducing computational cost. Rather than functioning as isolated suppliers, these partners become integral components of the SYNAPSE ecosystem — strengthening data quality, increasing predictive accuracy and accelerating commercialisation across Asia, while Taiwan benefits through expanded international deployment of its healthcare technologies.`,
      ecosystem: `SYNAPSE is designed as an open digital health ecosystem rather than a standalone application. Each Taiwanese partner contributes specialised capabilities while sharing value through interoperable services and standardised APIs. Organisations adopting SYNAPSE gain immediate access to wearable technologies, environmental monitoring, AI infrastructure, smart healthcare devices and predictive analytics through a single integrated platform. Hospitals can introduce ASUS remote monitoring, governments can expand smart city infrastructure with Advantech and Delta technologies, and enterprises can deploy workplace wellness programmes supported by BenQ Medical. As additional providers, insurers, universities and technology partners join, network effects continuously increase platform value — producing higher retention, recurring subscription revenue, lower integration costs and faster product expansion.`,
      outcomes: `Within the first three years, pilot deployments are expected to demonstrate a 20–30% reduction in preventable hospital admissions for monitored populations, a 35% improvement in early identification of high-risk individuals, and a 40% reduction in time required for public health decision-making during emerging health events. Healthcare institutions can improve resource planning by forecasting patient demand several days in advance, reducing emergency overcrowding. Enterprises benefit through healthier employees and reduced absenteeism, while local governments gain real-time visibility into environmental and community health risks. Taiwanese technology partners expand international market access by embedding their products into a scalable healthcare intelligence platform deployable across Asia and beyond.`,
      risks: [
        "Data privacy regulation and cybersecurity threats. Mitigated by a privacy-by-design architecture using federated learning, encryption, role-based access control, zero-trust security principles, continuous monitoring and penetration testing.",
        "Interoperability challenges between diverse healthcare systems. Mitigated by open interoperability standards and modular APIs allowing gradual adoption without replacing existing infrastructure.",
        "Institutional resistance to adopting new workflows. Mitigated by beginning with pilot programmes involving hospitals, universities and local governments before expanding nationally.",
        "Varying government policies across international markets. Mitigated by continuous collaboration with Taiwanese technology partners ensuring regulatory readiness and scalable infrastructure.",
      ],
      fundAllocation: `Approximately 35% to software engineering, AI model development, cybersecurity, digital twin simulation and cloud infrastructure; around 25% to procurement and integration of Taiwanese technologies including IoT gateways, wearable health devices, AI computing infrastructure and smart environmental monitoring; 15% to pilot implementations with hospitals, local governments, universities and enterprise partners; approximately 10% to regulatory compliance, cybersecurity certification and privacy governance; and the remaining 15% to commercialisation, customer acquisition, product validation and operational management.`,
      milestones: [
        "Months 0–6 — Complete system architecture, AI model development, digital twin framework design, cybersecurity implementation and integration with selected Taiwanese technologies.",
        "Months 7–12 — Deploy a minimum viable product through pilot collaborations with hospitals, universities, enterprises and local governments to validate prediction accuracy.",
        "Year 2 — Introduce additional predictive models, multilingual support, advanced analytics and enterprise dashboards while expanding deployments across multiple cities.",
        "Year 3 — Achieve commercial readiness through large-scale SaaS deployment, integration with additional healthcare systems, and international expansion into selected Asian markets.",
      ],
      facts: [
        { label: "Total budget", value: "USD $500,001 – $1M" },
        { label: "To Taiwan solutions", value: "51% – 80%" },
        { label: "Timeline", value: "1–3 years" },
        { label: "Beneficiaries", value: "> 10,000" },
        { label: "Economic impact", value: "> USD $1M" },
      ],
    },
  },

  {
    slug: "cyclesync",
    name: "CycleSync",
    proposalTitle:
      "CycleSync: Phase-Adaptive Fitness and Metabolic Wellness for Women, Powered by Taiwan Innovation",
    tagline:
      "Training, nutrition and recovery that adapt to where a woman actually is in her cycle.",
    accent: "#CBBCF8",
    industries: ["Smart Healthcare", "Fitness", "Health Check-ups"],
    issues: [
      "Health & Fitness Performance Enhancement",
      "Preventive Health & Disease Prevention",
      "Mental Health & Sleep Quality",
    ],
    proposalType: "Application of Taiwan’s solutions and products",
    problem: `Most fitness and wellness programmes are built around a fixed daily routine, but women’s bodies operate on a roughly month-long hormonal cycle that shifts insulin sensitivity, energy levels, sleep quality and injury risk from week to week. Generic workout plans and diet trends ignore where a woman is in her cycle, leaving many fatigued, discouraged or injured. Existing period-tracking apps mostly log dates and symptoms passively, without connecting that information to real-time fitness or metabolic guidance — leaving a clear gap between cycle awareness and actual training adaptation.`,
    coreIdea: `CycleSync is a phase-adaptive fitness and metabolic wellness platform that syncs training load, nutrition and recovery guidance to a woman’s actual cycle phase using real physiological data. It integrates a continuous glucose monitor to track metabolic shifts across the cycle, connects to smart fitness equipment that auto-adjusts workout intensity by phase, and uses sleep and temperature tracking to refine ovulation and phase prediction — replacing one-size-fits-all programming with data-driven, cycle-synced guidance.`,
    products: [
      {
        name: "RIGHTEST iFree CGM",
        url: "https://www.taiwanexcellence.org/en/award/product/1140122",
        role: "Continuous glucose monitoring across cycle phases",
      },
      {
        name: "SPIRIT Commercial SBC Indoor Cycle",
        url: "https://www.taiwanexcellence.org/en/award/product/1150552",
        role: "Smart equipment receiving phase-based intensity targets",
      },
      {
        name: "SOLE SB1200 Exercise Bike",
        url: "https://www.taiwanexcellence.org/en/award/product/1140134",
        role: "Home-tier connected equipment integration",
      },
      {
        name: "SleepBank",
        url: "https://www.taiwanexcellence.org/en/award/product/38943",
        role: "Sleep and basal temperature input for phase prediction",
      },
    ],
    brief: {
      situation: `Most fitness and wellness programmes are designed around a fixed daily routine, but women’s bodies operate on a roughly month-long hormonal cycle. Many young women report following generic workout plans or diet trends that leave them fatigued, discouraged or injured because the programmes ignore where they are in their cycle. At the same time, symptoms like severe cramps, mood swings and brain fog are often dismissed as normal instead of tracked and managed with data. Existing period-tracking apps log dates and symptoms passively without connecting that information to real-time fitness or metabolic guidance. As college students balancing academics, work and health, we have personally experienced this gap.`,
      pest: {
        political: `The Philippine government promotes women’s health through DOH programmes and the Magna Carta of Women, and does not currently regulate cycle-adaptive fitness apps as medical devices as long as they avoid diagnostic or contraceptive claims, keeping regulatory entry barriers low.`,
        economic: `The Philippines has around 28 million women aged 15 to 49, and the global femtech market is growing rapidly. Our TAM covers Southeast Asian women aged 18 to 40 interested in fitness, our SAM covers Philippine urban gym and fitness app users at roughly 2 to 3 million, and our SOM targets 10,000 users within three years through university and gym partnerships. Competitors like Flo and Clue track cycles but do not integrate real-time metabolic hardware or adaptive fitness equipment.`,
        social: `Young women, students and working professionals are most affected, particularly those balancing demanding schedules with fitness goals. Cultural stigma around discussing menstrual symptoms openly limits access to accurate self-knowledge; our solution normalises this through private, data-driven guidance.`,
        technological: `Continuous glucose monitors and smart fitness equipment already exist but are not connected to cycle-phase logic. Building this requires integrating CGM data, wearable inputs and a training-adjustment algorithm — technically feasible using existing Taiwan-made hardware paired with our own software layer. The main constraint is calibrating the algorithm with real user data over multiple cycle months.`,
      },
      tasks: [
        "Build a mobile app that lets users log cycle phase and symptoms and connect wearable or CGM data to receive phase-adjusted workout and nutrition recommendations.",
        "Partner with Taiwan hardware providers to integrate glucose monitoring and smart training equipment data into the app for real-time adaptive guidance.",
        "Develop and validate a phase-prediction algorithm using anonymised user data, refining accuracy over multiple test cycles with a pilot group of at least 100 women.",
        "Pilot the programme with university students and local gyms in Metro Manila to gather feedback on usability, accuracy and symptom relief effectiveness.",
        "Build a content and community layer offering evidence-based hormonal health education, reducing stigma and improving retention beyond tracking alone.",
      ],
      businessModel: `CycleSync operates on a freemium subscription model. The base app — cycle tracking, phase prediction, general workout and nutrition guidance — is free, building our user base and gathering anonymised data to improve the algorithm. A premium subscription at around USD 3 to 5 per month unlocks connected-hardware integration, personalised coaching insights and metabolic reports. A B2B channel licenses the phase-adaptive algorithm and dashboard to gyms, university wellness programmes and corporate wellness initiatives for more stable recurring revenue. Major early cost drivers are software development, algorithm training and validation, and hardware partnership integration; as a student-led team we minimise costs initially by using off-the-shelf Taiwan hardware rather than custom manufacturing. Customer acquisition cost is estimated at USD 5 to 8 per user through university partnerships, social media and gym referrals, with a 12-month average premium lifetime giving an estimated lifetime value of USD 36 to 60 per paying user. For long-term social sustainability we plan to reinvest a portion of subscription revenue into free educational content and subsidised access for lower-income students and community health programmes, and see potential grant and research collaboration funding from academic institutions and public health bodies interested in women’s preventive health.`,
      taiwanSolutions: `We are seeking to integrate two categories of Taiwan Excellence certified solutions. First, RIGHTEST iFree CGM, to capture real-time metabolic data reflecting how insulin sensitivity shifts across the menstrual cycle, giving our algorithm objective physiological input rather than relying only on self-reported symptoms. Second, the SPIRIT Commercial SBC Indoor Cycle and SOLE SB1200 Exercise Bike, smart fitness equipment that can receive phase-based intensity and resistance recommendations from our app so the equipment auto-adjusts difficulty by cycle phase. We also intend to incorporate SleepBank to correlate basal temperature and sleep quality shifts with ovulation timing, improving phase-prediction accuracy beyond calendar-based estimates. In return, this partnership offers these manufacturers a new distribution channel into the growing Philippine and Southeast Asian femtech and fitness market, along with real-world usage data from an underserved demographic that can inform their own product development for women-focused features.`,
      ecosystem: `By integrating CGM data, smart fitness equipment and sleep tracking into one platform, we create cross-selling opportunities where a user who starts with basic cycle tracking is gradually introduced to connected hardware, generating referral revenue for Taiwan partners while deepening engagement. Bundling improves retention, since users who invest in connected devices churn less than standalone-app users, and the richer data improves recommendation accuracy over time, creating a reinforcing value loop. For Taiwan partners this opens access to gym and university wellness channels we build in the Philippines, extending market reach without separate market-entry effort.`,
      outcomes: `Integrating Taiwanese hardware is expected to improve prediction accuracy significantly — from calendar-based estimates at roughly 60–70% accuracy to hardware-validated predictions we project could reach 85% or higher once refined with real glucose and sleep data. We target a 12-month retention rate above 40% for premium subscribers, well above typical wellness app benchmarks, and anticipate measurable improvements in reported energy levels, workout consistency and reduced cramping severity among pilot participants versus a generic-training control group. We also expect reduced stigma around discussing menstrual health, since users engage through a private, data-driven interface. For Taiwan partners, integration provides validated use-case data at the underexplored intersection of women’s health and fitness technology.`,
      risks: [
        "Market: low awareness of cycle-adaptive fitness, since generic apps dominate. Mitigated through targeted university and gym partnerships and educational content building trust before pushing subscriptions.",
        "Technological: achieving high prediction accuracy with limited early data. Mitigated by starting with a smaller pilot of 100–300 users, iterating the algorithm, and being transparent that accuracy improves over time.",
        "Policy: potential future regulation of health-adjacent apps handling biometric data. Mitigated by avoiding diagnostic or contraceptive claims and following Philippine Data Privacy Act standards from day one.",
        "Hardware dependency: Taiwan partner supply or distribution delays. Mitigated by designing core software to function with basic wearables as fallback, so hardware integration enhances rather than gates core functionality.",
      ],
      fundAllocation: `Approximately 40% to software and algorithm R&D including app development and phase-prediction model refinement; around 30% to hardware integration and Taiwan partner procurement covering CGM units and smart fitness equipment for pilot testing; about 15% to pilot programme execution including participant incentives and data collection across the 100–300 person pilot group; and the remaining 15% to digital marketing, university and gym partnership development, and operational costs such as cloud hosting and data privacy compliance.`,
      milestones: [
        "Months 0–3 — Complete MVP app with core cycle tracking and basic phase-adjusted recommendations.",
        "Month 6 — Finalise hardware integration partnerships and begin a pilot with 100–150 users across 2–3 university and gym sites in Metro Manila.",
        "Month 9 — Refine the prediction algorithm to at least 80% accuracy using collected data.",
        "Month 12 — Launch the premium subscription publicly, targeting 1,000 registered users at 10% paid conversion.",
        "Years 2–3 — Scale to 10,000+ users across the Philippines, expand hardware partnerships into sleep and recovery categories, and pursue B2B licensing with at least two corporate or university wellness programmes.",
      ],
      facts: [
        { label: "Total budget", value: "< USD $100,001" },
        { label: "To Taiwan solutions", value: "51% – 80%" },
        { label: "Timeline", value: "1–3 years" },
        { label: "Beneficiaries", value: "1,001 – 10,000" },
        { label: "Economic impact", value: "USD $100,001 – $500,000" },
      ],
    },
  },

  {
    slug: "companion-mirror",
    name: "Companion Mirror",
    nameZh: "陪伴鏡",
    proposalTitle:
      "Companion Mirror (陪伴鏡): Dignity-Preserving Passive Health Monitoring for Taiwan’s Solo-Living Elderly, Powered by Taiwan Excellence Companion Robotics",
    tagline:
      "Early warning for families that never puts a camera in an elderly person’s home.",
    accent: "#D6F24E",
    industries: ["Smart Healthcare", "Health Check-ups"],
    issues: [
      "Elderly Care & Independent Living Support",
      "Preventive Health & Disease Prevention",
      "Health Equity & Accessibility of Resources",
    ],
    proposalType: "Application of Taiwan’s solutions and products",
    problem: `Taiwan became a super-aged society in 2025, with over 20 percent of its population aged 65 or older, and a growing share of elderly citizens live alone as family structures shift and adult children relocate for work. Public concern about solitary deaths (孤獨死) has grown alongside this trend. Families want early warning of fall risk, cognitive decline or health emergencies, but constant video monitoring feels invasive, and many elderly users actively resist wearables or feel surveilled by cameras in their own homes — forcing an unnecessary tradeoff between safety and dignity.`,
    coreIdea: `Companion Mirror is a passive, non-camera monitoring system built around companion robotics and smart furniture that learns an individual’s normal daily routine, sleep pattern and movement signature, then flags meaningful deviations to family members and case managers without ever recording video. A service robot handles daily interaction, reminders and routine tracking, while a smart bed captures sleep and nighttime movement as a second, independent data stream — cross-validating alerts to reduce false alarms and giving families real peace of mind while preserving the older person’s privacy and independence.`,
    products: [
      {
        name: "Ayuda Service Robot",
        url: "https://www.taiwanexcellence.org/en/award/product/1150646",
        role: "Daily-routine tracking, reminders and companion interaction",
      },
      {
        name: "AI Vita Bed",
        url: "https://www.taiwanexcellence.org/en/award/product/1150006",
        role: "Sleep quality and nighttime movement as a cross-validating stream",
      },
      {
        name: "GHG-U1",
        url: "https://www.taiwanexcellence.org/en/award/product/1150624",
        role: "Mobility-aid referral pathway when risk is flagged",
      },
      {
        name: "Stairlifts",
        url: "https://www.taiwanexcellence.org/en/award/product/1110144",
        role: "Home-modification referral for flagged fall risk",
      },
    ],
    brief: {
      situation: `Taiwan became a super-aged society in 2025, and a growing share of elderly individuals live alone as traditional multigenerational family structures shift. Public concern about kodokushi-style solitary deaths has grown alongside this demographic shift, particularly for elderly residents whose families cannot check in daily. Families want early warning of fall risk, cognitive decline or health emergencies, but constant video monitoring feels invasive and many elderly users actively resist wearable devices or feel surveilled by cameras in their own homes. Existing elderly monitoring products largely force a tradeoff between meaningful health insight and the older person’s sense of dignity and privacy.`,
      pest: {
        political: `Taiwan’s government has prioritised long-term care policy through its Long-Term Care 2.0 plan and continues to expand support for aging-in-place solutions over institutional care, creating policy tailwind and potential subsidy alignment for non-invasive home monitoring. Data privacy regulation under Taiwan’s Personal Data Protection Act is a relevant constraint we design around from the start.`,
        economic: `Our TAM covers Taiwan’s roughly one million-plus elderly citizens living alone; our SAM covers households with adult children willing to pay for remote peace of mind, a large and growing segment given Taiwan’s low birth rate and family dispersion; our SOM targets several thousand households in year one through partnerships with long-term care case managers and community health centres. Competitors include camera-based monitoring systems and basic wearable panic buttons, neither of which addresses the dignity and privacy concerns driving elderly non-adoption.`,
        social: `This addresses a widely and publicly acknowledged social concern in Taiwan, giving the proposal strong cultural resonance beyond a narrow health-tech audience. The core social value is preserving both safety and dignity simultaneously, rather than trading one for the other.`,
        technological: `Passive activity and sleep sensing through smart furniture and companion robotics are already mature, deployed technology categories. The core technical work is pattern-based anomaly detection tuned to individual baseline routines rather than fixed thresholds, which is feasible using existing Taiwan-made hardware.`,
      },
      tasks: [
        "Build a baseline-learning algorithm that establishes each individual’s normal daily routine, sleep pattern and movement signature over an initial calibration period.",
        "Integrate passive sensor data streams from companion robotics and smart furniture into a single household anomaly-detection dashboard for family members and case managers.",
        "Design a tiered alert system distinguishing minor routine deviations, moderate concern and urgent emergencies, avoiding alert fatigue for families.",
        "Pilot the system with 50–100 households through partnership with community long-term care centres, validating alert accuracy against case manager ground-truth visits.",
        "Build a companion interaction layer providing gentle reminders and conversation directly to the elderly user, so the device offers standalone value beyond passive monitoring.",
      ],
      businessModel: `Companion Mirror uses a hardware-plus-subscription model targeted primarily at the adult children of elderly individuals living alone, since they are typically the paying decision-maker seeking peace of mind, while the elderly user experiences the product as a low-friction home companion rather than a monitoring device. The core hardware bundle is offered as a modest upfront purchase or subsidised lease, with recurring revenue from a monthly family monitoring subscription providing the dashboard, alert system and trend reports. A secondary B2B channel sells the platform to long-term care case management organisations and community health centres, who offer it as part of a supported aging-in-place service package to families they already serve. Major cost drivers are sensor and companion hardware components, cloud infrastructure for continuous pattern analysis, and the anomaly-detection algorithm development that requires real household data over multiple months to tune reliably. Because we integrate existing, already-manufactured Taiwan companion robotics and smart furniture rather than building new sensor hardware, our upfront capital requirement is meaningfully lower than a from-scratch hardware startup. The case-management channel carries lower acquisition cost and higher lifetime value, since one case manager relationship can bring dozens of households that stay subscribed for as long as the elderly family member continues living independently. Long-term social sustainability comes from alignment with Long-Term Care 2.0 priorities, positioning Companion Mirror as a technology delivery layer for an already-funded public policy direction rather than a purely commercial product competing against institutional care budgets.`,
      taiwanSolutions: `We are seeking to build Companion Mirror around the Ayuda Service Robot for passive daily-routine monitoring, medication reminders and gentle companion interaction without requiring cameras in private spaces, directly addressing the dignity and privacy concerns that drive elderly non-adoption. We plan to integrate the AI Vita Bed to capture sleep quality and nighttime movement data, since disrupted sleep patterns are an established early indicator of cognitive decline and fall risk, giving our system a second independent passive stream to cross-validate anomaly detection and reduce false alerts. Where mobility risk is flagged, we would connect families to mobility-aid solutions such as the GHG-U1 or stairlifts as a next-step intervention pathway, turning an early warning into an actionable response rather than just a notification. These partnerships give us access to already-manufactured, trusted Taiwan robotics and smart furniture rather than requiring us to build sensor hardware from scratch as a student team, and lend the credibility of established Taiwan Excellence brands to a trust-dependent use case involving vulnerable elderly users.`,
      ecosystem: `Combining the Ayuda Service Robot’s daily-routine and interaction data with the AI Vita Bed’s sleep and nighttime movement data creates a cross-validated anomaly-detection system more reliable than either sensor alone, reducing the false alerts that would otherwise erode family trust. A household that starts with the companion robot can be offered the smart bed as a sleep-monitoring upgrade, and vice versa, while flagged mobility risk creates a clear referral path to mobility-aid partners. Retention comes from the accumulating routine baseline, since the system’s accuracy and value increase the longer it monitors a specific individual and switching means losing that personalised baseline. For Taiwan partners, this ecosystem opens a structured distribution channel into long-term care case management organisations — a trusted institutional buyer distinct from consumer retail.`,
      outcomes: `Integrating the Ayuda Service Robot and AI Vita Bed allows us to launch on already-manufactured, field-tested hardware rather than spending years developing new sensor devices, which we expect shortens our path to a working pilot to under one year. Cross-validating routine data with sleep and movement data from two independent passive sources is expected to meaningfully reduce false-positive alerts compared to single-sensor systems, which is critical for family trust and multi-year retention. We project the 50–100 household pilot will generate the first structured dataset correlating passive routine-deviation patterns with case-manager-confirmed health events in Taiwan’s solo-living elderly population. Qualitatively, we expect families to report measurably reduced daily worry, while elderly users report the system feels like a companion rather than surveillance — addressing the dignity concern that limits adoption of camera-based alternatives.`,
      risks: [
        "Adoption: elderly users may resist any monitoring technology regardless of framing. Mitigated by emphasising the companion interaction features first and introducing monitoring as a secondary, background benefit.",
        "False alerts: passive sensing may misinterpret normal routine changes as concerning. Mitigated by cross-validating two independent sensor streams and using an individualised baseline-learning period before activating alerts.",
        "Privacy: families and regulators may still have concerns about household data collection despite the non-camera approach. Mitigated by strict compliance with Taiwan’s Personal Data Protection Act and clear, elderly-user-controlled data sharing settings.",
        "Distribution: dependency on long-term care case manager relationships. Mitigated by also maintaining a direct-to-family consumer channel.",
      ],
      fundAllocation: `Approximately 35% to anomaly-detection algorithm development and baseline-learning validation using cross-sensor data from the companion robot and smart bed; 25% to hardware procurement and household deployment for the pilot; 20% to pilot execution and case-manager partnership coordination across 50–100 households; 10% to the family dashboard and alert system platform; and 10% to partnership development with Taiwan robotics and furniture manufacturers and long-term care organisations. This prioritises alert reliability and case-manager trust over consumer marketing spend.`,
      milestones: [
        "Months 0–4 — Integrate Ayuda Service Robot and AI Vita Bed data streams into a combined household monitoring platform and build the baseline-learning algorithm.",
        "Months 4–8 — Partner with community long-term care case management centres and begin household deployment for the pilot.",
        "Months 8–14 — Run the pilot across 50–100 households, validating alert accuracy against case-manager-confirmed events and refining false-positive rates.",
        "Year 2 — Launch the commercial family subscription, targeting 1,000 subscribed households through expanded case-management partnerships.",
        "Years 2–3 — Expand to additional case-management organisations and municipalities, targeting 5,000+ cumulative households, and explore integration with Long-Term Care 2.0 subsidy pathways.",
      ],
      facts: [
        { label: "Total budget", value: "USD $100,001 – $500,000" },
        { label: "To Taiwan solutions", value: "51% – 80%" },
        { label: "Timeline", value: "1–3 years" },
        { label: "Beneficiaries", value: "1,001 – 10,000" },
        { label: "Economic impact", value: "USD $100,001 – $500,000" },
      ],
    },
  },

  {
    slug: "binlang-check",
    name: "BinLang Check",
    nameZh: "檳榔",
    proposalTitle:
      "BinLang Check: AR-Guided Workplace Oral Cancer Screening for Taiwan’s Betel Nut Chewing Workforce, Powered by Taiwan Excellence Health Technology",
    tagline:
      "Oral cancer screening that goes to the worksite, because the workers most at risk never go to the dentist.",
    accent: "#FF9E5E",
    industries: ["Smart Healthcare", "Health Check-ups"],
    issues: [
      "Clinical Efficiency & Precision Diagnosis",
      "Preventive Health & Disease Prevention",
      "Workplace Health & Environmental Hygiene",
    ],
    proposalType: "Application of Taiwan’s solutions and products",
    problem: `Taiwan has one of the highest global rates of oral cancer, closely linked to widespread betel nut (檳榔) chewing, a habit concentrated among blue-collar workers such as truck drivers, construction labourers and fishermen. Early oral lesions are frequently missed because affected workers rarely visit a dentist proactively. Cultural stigma further discourages workers from raising oral health concerns, and existing screening programmes are clinic-based, requiring time off work that many shift-based labourers cannot spare.`,
    coreIdea: `BinLang Check brings guided, non-stigmatising oral cancer self-screening directly into the workplaces and community centres where at-risk workers already gather, using an AR-guided self-exam tool adapted from an existing professional oral health training system. Flagged cases route directly into a telemedicine referral pipeline rather than a leaflet, and the same station bundles cardiovascular risk checks, since betel nut use also elevates stroke risk — giving workers a reason to visit that isn’t only about their mouth.`,
    products: [
      {
        name: "Pvix AR Professional Oral Health Training System",
        url: "https://www.taiwanexcellence.org/en/award/product/1110182",
        role: "AR guidance layer adapted for worker self-examination",
      },
      {
        name: "Health⁺ Telemedicine Platform",
        url: "https://www.taiwanexcellence.org/en/award/product/1150670",
        role: "Referral pipeline from flagged screening to clinician review",
      },
      {
        name: "Bluetooth blood pressure monitor with stroke risk detection",
        url: "https://www.taiwanexcellence.org/en/award/product/109172",
        role: "Bundled cardiovascular risk check at the same station",
      },
    ],
    brief: {
      situation: `Taiwan has one of the highest global rates of oral cancer, closely linked to widespread betel nut (檳榔) chewing, a habit concentrated among blue-collar workers such as truck drivers, construction labourers and fishermen who face long hours, physical fatigue and limited access to routine dental checkups. Government awareness campaigns exist, but early oral lesions are frequently missed because affected workers rarely visit a dentist proactively, often only seeking care once pain or visible symptoms appear — by which point the cancer has progressed. Cultural stigma around betel nut use further discourages workers from raising oral health concerns with a doctor, creating a silent health gap despite Taiwan’s otherwise strong healthcare system. Existing screening programmes are clinic-based and require workers to take time off during work hours, a significant barrier for shift-based or route-based labour.`,
      pest: {
        political: `Taiwan’s Health Promotion Administration already runs a national oral cancer screening subsidy programme for betel nut chewers and smokers, meaning our solution complements an existing reimbursed screening pathway rather than competing with it, lowering regulatory friction. As a screening and triage tool rather than a diagnostic device, it also avoids the stricter medical-device approval pathway.`,
        economic: `Our TAM covers Taiwan’s estimated 1 to 2 million regular betel nut chewers; our SAM covers unionised transport, construction and fishing workforces reachable through employer or cooperative partnerships, several hundred thousand workers; our SOM targets several thousand workers in year one through a handful of employer pilot partnerships. Competitors are limited to clinic-based screening programmes and generic telehealth apps, neither of which is designed around this population’s specific access barriers.`,
        social: `Affected workers are predominantly older, working-class men who may distrust or feel judged by traditional healthcare settings. Our workplace-based, private self-screening approach reduces stigma and meets them where they already are, with meaningful potential to reduce late-stage oral cancer diagnoses.`,
        technological: `AR-guided self-examination and telemedicine referral are both mature, already-deployed technology categories in Taiwan’s health tech sector. The core technical work is adapting an existing professional AR training system for lay self-guided use and building a simple, low-literacy-friendly referral flow — feasible without inventing new hardware.`,
      },
      tasks: [
        "Adapt the AR oral self-exam guidance flow for lay users, simplifying instructions and lesion-flagging criteria validated with dental and ENT specialists.",
        "Partner with transport unions, construction associations and fishing cooperatives to pilot workplace screening stations.",
        "Build a referral pipeline connecting flagged cases directly to telemedicine dental and ENT consults, minimising the step between screening and follow-up care.",
        "Run a pilot across 3–5 workplace sites to validate detection sensitivity against dentist-confirmed diagnoses and measure follow-up consult completion rate.",
        "Develop a stigma-conscious outreach and education campaign co-designed with affected worker communities to drive adoption.",
      ],
      businessModel: `BinLang Check uses a B2B2C model, selling primarily to employers, transport and fishing cooperatives, and workplace insurers as a preventive health benefit rather than to individual workers directly, since the purchase decision and trust relationship sit with the employer or cooperative. Workplace screening stations — AR headset kiosk plus referral software — are provided through an annual site licence priced to workforce size, with a smaller per-worker fee covering telemedicine referral and follow-up consult coordination when a case is flagged. Major cost drivers are AR hardware provisioning, dental and ENT specialist partnership and referral network costs, and ongoing adaptation and validation of the self-exam guidance algorithm against dentist-confirmed outcomes. Because we repurpose an existing, already-manufactured AR training system rather than building new hardware, our upfront capital requirement is significantly lower than a from-scratch medical device. Customer acquisition cost is concentrated at the employer and cooperative level rather than per worker, so one signed partnership can bring hundreds of covered workers at once. Site licences renew annually and referral-coordination revenue scales with actual screening volume, aligning revenue with real health impact rather than seat count. Long-term social sustainability comes from partnering with Taiwan’s existing HPA oral cancer screening subsidy programme, positioning BinLang Check as a delivery channel for an already-funded public health initiative rather than a commercial product competing for healthcare budget.`,
      taiwanSolutions: `We are seeking to build BinLang Check around the Pvix AR Professional Oral Health Training System, repurposing its AR-guided oral examination technology from professional dental training into a simplified, lay-accessible self-screening tool that walks workers through checking their own mouths for early lesions using clear visual and audio prompts. We would integrate the Health⁺ Telemedicine Platform to create a direct referral pathway so any flagged case can be routed to a dentist or ENT specialist for a remote consult without requiring the worker to first secure an in-person appointment. We also plan to incorporate the Bluetooth blood pressure monitor with stroke risk detection at the same stations, since betel nut use is linked to elevated cardiovascular risk, allowing one screening visit to surface multiple preventable risks at once. These partnerships give us access to already-validated, clinically credible AR and telemedicine technology rather than developing diagnostic-adjacent hardware from scratch as a student team, and lend the trust of established Taiwan Excellence brands to a programme targeting a historically underserved and distrustful population. In return, these partners gain a new deployment context and real-world usage data in an occupational health setting distinct from their current clinical and training use cases.`,
      ecosystem: `By connecting the Pvix AR screening tool directly to the Health⁺ Telemedicine Platform, a flagged worker moves from self-exam to specialist consult in a single continuous flow, increasing the likelihood that early findings actually convert into treatment rather than being screened and then ignored. Bundling cardiovascular screening creates a natural cross-sell for a broader occupational health package, giving employers a reason to expand the partnership beyond oral cancer alone. Retention comes from the annual site-licence structure and the accumulating workplace health record, which becomes more valuable to an employer’s insurance negotiations the longer it runs. For the Taiwan technology partners, this opens a distribution channel into occupational health and workplace wellness budgets — a segment distinct from their existing clinical and training customers.`,
      outcomes: `Integrating the Pvix AR system allows us to launch on already-validated, clinically credible screening technology rather than spending years developing new hardware, which we expect shortens our path to a working pilot from roughly two years to under one. Connecting to the Health⁺ Telemedicine Platform is expected to significantly increase the share of flagged cases that actually reach a specialist consult, since removing the need for a separate in-person appointment addresses the single biggest drop-off point in typical referral pathways. We project detection of early-stage lesions in a meaningfully higher share of screened workers compared to the current largely reactive, symptom-triggered pattern of care, though this will need pilot validation against dentist-confirmed outcomes. Over a multi-year horizon we expect this partnership model to generate one of the first structured, technology-assisted screening datasets for this specific occupational population in Taiwan.`,
      risks: [
        "Adoption: workers may distrust a new screening programme due to stigma around betel nut use. Mitigated by co-designing outreach with union and cooperative leaders and framing the programme around general workplace health rather than singling out betel nut use.",
        "Referral completion: flagged workers may still not follow through to a specialist consult despite telemedicine access. Mitigated by integrating consult scheduling directly into the screening flow and following up through the employer partner rather than leaving it to the individual.",
        "Regulatory: if perceived as a diagnostic rather than screening tool it could face stricter medical-device requirements. Mitigated by clear positioning as a triage and referral tool, with diagnosis always occurring through the licensed specialist on the telemedicine platform.",
        "Partnership: dependency on continued employer and cooperative buy-in. Mitigated by aligning pricing to workforce size and demonstrating early pilot results before requesting multi-year commitments.",
      ],
      fundAllocation: `Approximately 35% to adapting and validating the AR self-exam guidance flow with dental and ENT specialists, including lesion-flagging criteria testing; 25% to telemedicine referral pipeline integration and specialist network development; 20% to pilot execution across 3–5 workplace sites including screening station setup and worker outreach; 10% to the stigma-conscious education and outreach campaign; and 10% to partnership development with unions, cooperatives and Taiwan technology partners. This prioritises clinical credibility and referral completion over marketing spend, since trust with both workers and employer partners is the primary constraint on adoption.`,
      milestones: [
        "Months 0–4 — Adapt the AR self-exam guidance flow for lay users and validate flagging criteria with dental and ENT specialist partners.",
        "Months 4–8 — Integrate the Health⁺ telemedicine referral pipeline and Bluetooth blood pressure monitor into a combined workplace screening station.",
        "Months 8–14 — Run the pilot across 3–5 workplace sites in transport, construction and fishing cooperatives, targeting at least 500 screened workers and measuring detection sensitivity and referral completion.",
        "Year 2 — Expand to additional employer and cooperative partnerships targeting 5,000+ cumulative screened workers, and formalise a subsidy pass-through arrangement with Taiwan’s HPA screening programme where possible.",
        "Years 2–3 — Publish pilot outcome data to support public health policy discussions and Taiwan partners’ occupational health market development.",
      ],
      facts: [
        { label: "Total budget", value: "USD $100,001 – $500,000" },
        { label: "To Taiwan solutions", value: "51% – 80%" },
        { label: "Timeline", value: "1–3 years" },
        { label: "Beneficiaries", value: "1,001 – 10,000" },
        { label: "Economic impact", value: "USD $100,001 – $500,000" },
      ],
    },
  },
];

export function getEntry(slug: string): Entry | undefined {
  return entries.find((e) => e.slug === slug);
}
