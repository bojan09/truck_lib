# Truck Library claim and source audit

Audit date: 2026-11-05. This is a traceability inventory, not a certification of the entire library. The source lists below are **candidates**, not proof that every sentence is supported. Only the specifically stated checks in the priority review section were compared with their cited source during this audit. All other claims and all material beyond the stated scope of those checks require claim-level verification. The text includes practical examples and guidance whose applicability depends on equipment, jurisdiction, or contract.

## Priority checks and corrections

- **Fifth Wheel & Coupling**: Checked typical fifth-wheel coupling and inspection steps against Oregon DMV section 6; model-specific procedures remain unverified.
- **Fifth Wheel**: Checked plate, coupling, and inspection concepts against Oregon DMV section 6; individual equipment ratings remain model-specific.
- **Kingpin**: Checked kingpin and fifth-wheel jaw engagement against Oregon DMV section 6.
- **Glad Hand**: Checked service and emergency air-line coupling and seals against Oregon DMV section 6.
- **Landing Gear**: Checked trailer support and uncoupling context against Oregon DMV section 6; load and ground-specific procedures remain unverified.
- **Truck Brake Systems**: Checked spring-brake and air-brake concepts against Oregon DMV section 5; the pictured hardware is not a complete system.
- **Truck Aerodynamic Components**: Checked examples of truck aerodynamic devices against the DOE Alternative Fuels Data Center; individual performance is unverified.
- **Truck Transmission Types**: Checked that I-Shift is an automated manual transmission against Volvo documentation; the full comparison still requires manufacturer-specific verification.
- **Minimum Tread Depth in the U.S.**: Checked the 4/32 and 2/32 inch thresholds and measurement exclusions against 49 CFR 393.75(b)–(c).
- **Warning Devices After a Highway Stop (U.S.)**: Checked general timing and roadway placement against 49 CFR 392.22; exceptions and vehicle-specific requirements remain material.
- **DVIR Repair Loop**: Checked defect reporting, repair, certification and retention against 49 CFR 396.11; corrected an outdated passenger-carrier no-defect statement. Driver review is in 396.13.
- **CVSA Level I vs. II vs. III**: Checked Level I, II and III scope against CVSA’s current inspection-level descriptions.
- **Passive vs. Active vs. Parked Regen**: Checked passive and active regeneration and ash maintenance concepts against the EPA technical bulletin; equipment-specific procedure remains OEM-dependent.
- **Shipper vs. Broker vs. Carrier**: Checked motor-carrier and broker roles against FMCSA definitions; specific contractual obligations remain transaction-dependent.
- **Leading vs. Lagging Indicator**: Checked safety indicator distinctions against OSHA guidance; individual fleet metrics need defined denominators.
- **7-Way Connector: Red Wire**: Checked the red circuit 4 label against the Caltrans SAE J560 comparison table; removed the unverified secondary-power qualifier.
- **BOL / POD**: Checked the existence and scope of the federal bill-of-lading rule for for-hire, non-exempt carriers; proof-of-delivery and contract effects still need source-specific review.

The current rule at [49 CFR 396.11](https://www.ecfr.gov/current/title-49/section-396.11) does not require a report when no defect is discovered or reported, subject to applicability and exceptions. The older 2014 property-carrier rule cited previously predates the 2020 passenger-carrier no-defect rule; the outdated exception was removed. The [Caltrans J560 comparison](https://dot.ca.gov/programs/equipment/electrical/wires-cable-harness) identifies red circuit 4 for stop lamps and antilock devices and documents a Caltrans deviation; it does not by itself establish every vehicle’s wiring.

## Photo and rights checks

All 75 distinct local images are documented in the asset manifest and are used as photographs. Wikimedia Commons API license metadata was queried for 73 source records: 70 resolved on the initial pass, two double-encoded titles were subsequently resolved and their source URLs corrected, and the roll-up latch record was verified separately. Recorded license labels were consistent with the returned labels or the stated public-domain basis. That metadata check is not an independent legal opinion, a reinspection of every image’s subject, or a guarantee that a photographer had authority to grant the license. The Flickr source page links to CC BY 2.0, and the Pexels source page identifies the photo as free and links to the Pexels license; both were rechecked on 2026-11-05. Visual relevance and redundant use across guides require further review; the source and caption inventories below make that work inspectable.

## Validation and remaining evidence gaps

- Catalog, local image existence and decoding, source metadata presence, and related-topic references are checked programmatically; browser checks are documented in the project progress record.
- The detention, reorder point, fuel surcharge, and deadhead examples use explicitly stated assumptions; real terms and definitions are contract- or fleet-specific. Verify sample arithmetic separately.
- Exact truck warning icons and a full trailer roll-up door are not directly pictured; a delivery-truck roll-up latch is shown. Several financial concepts intentionally use operational-context photos rather than pictures of the abstract terms.
- AAR is interpreted as After Action Review; the requester’s intended expansion is unconfirmed. SAE J1939 diagnostics require an OEM-specific procedure.
- No independent qualified practitioner was available through this workspace. No external review has been represented as completed.
- Current primary-source traceability is incomplete for most explanatory sentences, especially product comparisons and business practices. Generic home pages labeled “Context only” do not establish contract-specific claims. Independently verify those sentences and obtain owner-approved documents or primary specifications before representing the reference as professionally certified.

## Guide-by-guide claim and photograph inventory

Each claim is reproduced for review. “Candidate” means the guide links to the source; it does not mean that source has been checked against every claim. Photo records link to the photographer’s source and state what the local caption claims, so a reviewer can check whether each view adds useful evidence.

### Tire positions on a tractor–trailer (`intro-tire-positions`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): A position primer naming steer, drive, and trailer axle groups in order on a tractor–semitrailer.
- Claim (does): Uses a full truck photograph to orient wheel-group locations, then a separate drive tandem photograph to show a closer axle-group view.
- Claim (where): Move from the tractor nose toward the trailer rear: steer → drive → trailer.
- Claim (Read the combination): Start at the front steering axle, then identify tractor drive axles and trailer axles. Axle location is not the same as tire construction; a picture of one tire alone cannot establish which position it serves.

Candidate references:

- [49 CFR § 393.75 — Tires](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-393/subpart-G/section-393.75)
- [Washington DOL — Commercial Driver Guide: inspection, air brakes and coupling](https://dol.wa.gov/driver-licenses-and-permits/commercial-driver-licenses-cdl/cdl-training-and-testing/commercial-driver-guides/commercial-driver-guide-text-only)

Photo evidence (manifest license and caption):

- [TRACTOR + SEMITRAILER SIDE VIEW](https://commons.wikimedia.org/wiki/File:Volvo_VNL_670.jpg) — Use this full side view to orient front-to-rear wheel groups: tractor steer axle, tractor drive axle group, and trailer axle group. This particular photo is not labeled as a five-axle or 18-tire configuration. Rights record: Alex Blokha; CC BY-SA 4.0; attribution and share-alike terms apply..
- [TRACTOR DRIVE TANDEM](https://commons.wikimedia.org/wiki/File:Rear_axles_tandem.jpg) — This shows a tractor drive axle group; count the axle lines, not the number of tire sidewalls, when describing axles. Rights record: Panoha; CC BY-SA 3.0; attribution and share-alike terms apply..

### Truck tractor manufacturers (`intro-tractor-brands`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): Four heavy truck tractor manufacturers represented by photographs.
- Claim (does): Shows real examples without assuming that grille styling alone verifies an exact model.
- Claim (where): Manufacturer names describe the make; model and year are shown only when the source identifies them.
- Claim (Identify the vehicle): Use the manufacturer nameplate, vehicle identification number, and manufacturer records to verify make and model. Grilles, badges, cabs, and paint can be changed, and an engine brand can differ from the truck brand.

Candidate references:

- No non-photo technical source recorded; source verification needed.

Photo evidence (manifest license and caption):

- [VOLVO · VNL 670](https://commons.wikimedia.org/wiki/File:Volvo_VNL_670.jpg) — The Commons source identifies this tractor as a Volvo VNL 670; it does not specify a model year. Rights record: Alex Blokha; CC BY-SA 4.0; attribution and share-alike terms apply..
- [FREIGHTLINER · MODEL NOT VERIFIED](https://commons.wikimedia.org/wiki/File:Bakersfield,_%20(CA)_Truck_Freightliner_at_Flying_J_Travel_Plaza_(en2016)_(2).JPG) — The source identifies the make but not the model, so no model label is inferred from appearance. Rights record: Pierre André Leclercq; CC BY-SA 4.0; attribution and share-alike terms apply..
- [PETERBILT · 379](https://commons.wikimedia.org/wiki/File:Peterbilt_379.JPG) — The Commons source identifies a 1989 Peterbilt 379. This older model is shown as one example, not as a current lineup representative. Rights record: Impale; CC0 1.0; public-domain dedication..
- [KENWORTH · MODEL NOT VERIFIED](https://commons.wikimedia.org/wiki/File:Bakersfield,_%20(CA)_Truck_Kenworth_at_Flying_J_Travel_Plaza_(2012).jpg) — The source identifies the make but does not name the model. Rights record: Pierre André Leclercq; CC BY-SA 4.0; attribution and share-alike terms apply..

### Different Trailer Types (`trailer-types`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): Photographs of seven trailer forms: flatbed, tanker, bottom dump, curtainside, refrigerated, car transporter, and extendable lowbed.
- Claim (does): Contrasts open deck, bulk-liquid, bulk-material, temperature-controlled, vehicle-carrier, and curtainside equipment.
- Claim (where): Trailer body type follows the freight and loading method; names and legal requirements vary by equipment and jurisdiction.
- Claim (Match equipment to the freight): A van encloses freight, a reefer adds temperature control, and a flatbed carries loads on an open deck. Tankers, dump trailers, and vehicle carriers serve different cargo; capacity, securement, and permits depend on the specific equipment and load.

Candidate references:

- No non-photo technical source recorded; source verification needed.

Photo evidence (manifest license and caption):

- [FLATBED SEMITRAILER](https://commons.wikimedia.org/wiki/File:Four-axle_flatbed_container_semi-trailer.jpg) — An open deck gives access to cargo from the sides and above. This photograph shows a flatbed; its exact model is not identified. Rights record: Summit666; CC BY-SA 3.0; attribution and share-alike terms apply..
- [FUEL TANKER](https://commons.wikimedia.org/wiki/File:Rotten_Robbie_tanker_truck_delivering_fuel.jpg) — A tank body carries bulk liquid. This photographed unit is identified as a fuel delivery tanker. Rights record: Grendelkhan; CC BY-SA 4.0; attribution and share-alike terms apply..
- [BOTTOM-DUMP SEMITRAILER](https://commons.wikimedia.org/wiki/File:Semi_trailer_bottom_dump_truck.webp) — The source identifies this as a bottom-dump semitrailer; the image is not used to infer a manufacturer or model. Rights record: Wikideas1; CC0 1.0; public-domain dedication..
- [CURTAINSIDE TRAILERS](https://commons.wikimedia.org/wiki/File:Curtainside_trailers_at_Display_UK,_Sandbeck_Lane,_Wetherby_(24th_March_2019).jpg) — A curtainside is a freight body style with flexible side curtains. This example is photographed in the UK. Rights record: Mtaylor848; CC BY-SA 4.0; attribution and share-alike terms apply..
- [REFRIGERATED SEMITRAILER](https://commons.wikimedia.org/wiki/File:Ets-Jean-Chereau-Avranches-Manche-Normandie-semi-remorque-vue-av-byRundvald.jpg) — The source identifies a Chéreau refrigerated semitrailer; the refrigeration unit is visible at the front. Rights record: Rundvald; CC BY-SA 4.0; attribution and share-alike terms apply..
- [CAR-TRANSPORTER SEMITRAILER](https://commons.wikimedia.org/wiki/File:Double_stack_low-loader,_IAA_2024,_Hanover_(P1190981).jpg) — This photo is identified as a car transporter semitrailer. It shows a low-loader form, not every car-carrier design. Rights record: Matti Blume; CC BY-SA 4.0; attribution and share-alike terms apply..
- [EXTENDABLE LOWBED](https://commons.wikimedia.org/wiki/File:Extendable_3_Axle_Lowbed_-_Extendable_4_Axle_Lowbed_-_STU_TRAILERS_01.jpg) — The source identifies extendable three- and four-axle lowbeds. This is an equipment example; exact dimensions are not inferred. Rights record: Yasintolu; CC BY 4.0; attribution required..

### Truck Cab Types (`cab-types`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): Two broad cab layouts: cab-over-engine and conventional, plus sleeper-equipped examples.
- Claim (does): Shows where the cab sits relative to the engine and whether sleeping space extends behind the seats.
- Claim (where): Cab-over placement puts the cab above the engine; a conventional cab sits behind a forward hood.
- Claim (Cab layout and accommodation): A conventional cab sits behind an engine hood; a cab-over places the cab above or ahead of much of the engine. A sleeper provides a rest compartment, while roof height and interior features vary within each layout.

Candidate references:

- No non-photo technical source recorded; source verification needed.

Photo evidence (manifest license and caption):

- [CAB-OVER-ENGINE TRACTOR](https://commons.wikimedia.org/wiki/File:Kenworth_Cabover_Semi_Truck_%26_Trailer.jpg) — The cab sits above the engine rather than behind a long conventional hood. The source identifies this as a Kenworth cab-over, without a model or year. Rights record: Greg Gjerdingen; CC BY 2.0; attribution required..
- [CONVENTIONAL SLEEPER EXAMPLE](https://commons.wikimedia.org/wiki/File:Peterbilt_379.JPG) — The photo shows a conventional tractor with a sleeper behind the cab; roof-height class is not specified. Rights record: Impale; CC0 1.0; public-domain dedication..
- [CONVENTIONAL SLEEPER · VOLVO VNL 670](https://commons.wikimedia.org/wiki/File:Volvo_VNL_670.jpg) — A second sleeper example from a different manufacturer. The photograph does not establish an official roof-height category. Rights record: Alex Blokha; CC BY-SA 4.0; attribution and share-alike terms apply..

### Fifth Wheel & Coupling (`fifth-wheel-coupling`)

Priority finding: Checked typical fifth-wheel coupling and inspection steps against Oregon DMV section 6; model-specific procedures remain unverified.

- Claim (what): The tractor-mounted coupling that connects a semitrailer to a truck tractor.
- Claim (does): Supports and pivots around the trailer kingpin while allowing articulation.
- Claim (where): The fifth wheel is mounted to the tractor; the kingpin is part of the trailer connection.
- Claim (Coupling sequence): Follow the equipment-specific procedure to position the trailer, connect and test the coupling, connect air and electrical lines, and check that the landing gear and other equipment are ready for travel. A visual reference cannot substitute for a physical lock check.

Candidate references:

- [Washington DOL — Commercial Driver Guide: inspection, air brakes and coupling](https://dol.wa.gov/driver-licenses-and-permits/commercial-driver-licenses-cdl/cdl-training-and-testing/commercial-driver-guides/commercial-driver-guide-text-only)
- [Oregon DMV — Commercial Driver Manual, Combination Vehicles](https://www.oregon.gov/odot/dmv/pages/online_cdl_manual_2/section_6.aspx)

Photo evidence (manifest license and caption):

- [FIFTH WHEEL · TRACTOR](https://commons.wikimedia.org/wiki/File:Saf_Holland_turntable,_fifth_wheel_01.jpg) — A fifth wheel is mounted to the tractor frame and supports the trailer’s kingpin connection. The photo shows a specific SAF-Holland unit. Rights record: Photohelp13; CC BY-SA 4.0; attribution and share-alike terms apply..
- [TOP-PLATE CLOSE VIEW](https://commons.wikimedia.org/wiki/File:Saf_Holland_turntable,_fifth_wheel_02.jpg) — The top plate pivots as the tractor and trailer articulate. This image documents a particular unit rather than every coupling design. Rights record: Photohelp13; CC BY-SA 4.0; attribution and share-alike terms apply..
- [FIFTH WHEEL ON AN INTERNATIONAL CAB-OVER](https://commons.wikimedia.org/wiki/File:Fifth_wheel_IHC_truck_MD1.jpg) — This second truck example shows the fifth wheel’s location relative to the tractor rear axle and chassis. Rights record: Acroterion; CC BY-SA 4.0; attribution and share-alike terms apply..
- [SECOND VIEW OF TRACTOR COUPLING](https://commons.wikimedia.org/wiki/File:Fifth_wheel_IHC_truck_MD2.jpg) — A different angle of the same International tractor illustrates how the plate sits above the rear differential area. Rights record: Acroterion; CC BY-SA 4.0; attribution and share-alike terms apply..
- [TRAILER KINGPIN · UNDERSIDE](https://commons.wikimedia.org/wiki/File:Kingpin.jpg) — The vertical kingpin is fixed to the trailer and is captured by the tractor’s fifth wheel during coupling. This photograph shows one trailer design. Rights record: SterkeBak; CC BY 3.0; attribution required. The source also offers GFDL..

### Fifth Wheel (`fifth-wheel`)

Priority finding: Checked plate, coupling, and inspection concepts against Oregon DMV section 6; individual equipment ratings remain model-specific.

- Claim (what): A tractor-mounted coupling plate for a semitrailer kingpin.
- Claim (does): Carries vertical load and allows the combination to articulate.
- Claim (where): Mounted on the tractor frame, typically over or ahead of the drive axle group.
- Claim (How the coupling works): The trailer kingpin enters the throat of the fifth wheel and is captured by its locking mechanism. The plate carries trailer weight and permits the tractor and trailer to pivot. A successful connection depends on correct trailer height, lock engagement, and the manufacturer’s coupling inspection procedure.
- Claim (What to look for): Look for damage, missing fasteners, worn components, and inadequate lubrication where specified. A visual example cannot establish whether a particular lock is engaged or the coupling is safe.

Candidate references:

- [Washington DOL — Commercial Driver Guide: inspection, air brakes and coupling](https://dol.wa.gov/driver-licenses-and-permits/commercial-driver-licenses-cdl/cdl-training-and-testing/commercial-driver-guides/commercial-driver-guide-text-only)
- [Oregon DMV — Commercial Driver Manual, Combination Vehicles](https://www.oregon.gov/odot/dmv/pages/online_cdl_manual_2/section_6.aspx)

Photo evidence (manifest license and caption):

- [SAF-HOLLAND TOP PLATE](https://commons.wikimedia.org/wiki/File:Saf_Holland_turntable,_fifth_wheel_02.jpg) — Photographed fifth wheel top plate mounted to a tractor chassis. Rights record: Photohelp13; CC BY-SA 4.0; attribution and share-alike terms apply..
- [INTERNATIONAL CAB-OVER EXAMPLE](https://commons.wikimedia.org/wiki/File:Fifth_wheel_IHC_truck_MD1.jpg) — A second installed example shows the fifth wheel behind the cab and above the tractor’s drive axle area. Rights record: Acroterion; CC BY-SA 4.0; attribution and share-alike terms apply..
- [FIFTH WHEEL · TRACTOR](https://commons.wikimedia.org/wiki/File:Saf_Holland_turntable,_fifth_wheel_01.jpg) — A fifth wheel is mounted to the tractor frame and supports the trailer’s kingpin connection. The photo shows a specific SAF-Holland unit. Rights record: Photohelp13; CC BY-SA 4.0; attribution and share-alike terms apply..

### Exhaust Aftertreatment Order (`aftertreatment-order`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): An actual Hino exhaust aftertreatment assembly with particulate reduction and SCR.
- Claim (does): Shows where aftertreatment hardware and a DEF tank may appear on one truck.
- Claim (where): Installed in the exhaust path; exact component combination and order depend on the engine system.
- Claim (Typical path and its limits): A common modern arrangement puts a diesel oxidation catalyst and particulate filter upstream of DEF dosing and an SCR catalyst; some systems combine or rearrange functions. Trace the specific engine’s service diagram instead of identifying order solely by exterior housings.
- Claim (Different jobs): The oxidation catalyst promotes oxidation of certain exhaust pollutants, the DPF traps particulate matter, and SCR uses a reductant derived from DEF to reduce nitrogen oxides. Sensors and controls monitor the system.

Candidate references:

- [EPA — Diesel Technology Verification Application, Appendix: Technology Definitions](https://www.epa.gov/sites/default/files/2016-03/documents/420f12023.pdf)
- [EPA — Diesel Particulate Filter Operation and Maintenance](https://www.epa.gov/sites/default/files/2016-03/documents/420f10027.pdf)

Photo evidence (manifest license and caption):

- [HINO DPR + SCR ASSEMBLY](https://commons.wikimedia.org/wiki/File:Hino_Standardized_SCR_Unit.jpg) — The source identifies this Hino unit as combining a diesel particulate reduction system (a particulate filter with temperature control) and SCR. It is one photographed integrated arrangement, not a universal DOC–DPF–SCR sequence. Rights record: Z22; CC BY-SA 3.0; attribution and share-alike terms apply..
- [TURBO AND EXHAUST BRAKE CONTEXT](https://commons.wikimedia.org/wiki/File:Turbocharger_assembly.jpg) — This shows upstream engine/exhaust hardware; it does not prove a universal aftertreatment sequence. Rights record: Panoha; CC BY-SA 3.0; attribution and share-alike required..

### Truck Fuel & DEF Systems (`fuel-def-systems`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): A real example of the DEF reservoir located next to one truck’s exhaust aftertreatment hardware.
- Claim (does): Shows the separate fluid tank and under-cab exhaust components in a single photograph.
- Claim (where): This Hino example places the DEF reservoir alongside the exhaust treatment assembly.
- Claim (Separate fluids and paths): Diesel fuel supplies the engine. DEF is a urea-and-water solution used by an SCR system and is metered into exhaust downstream of the engine. Their tanks, fillers, and plumbing are separate; verify the labels before filling.
- Claim (Contamination matters): Fuel in a DEF tank or DEF in a fuel tank can damage equipment. Stop filling and follow the manufacturer’s response procedure if the wrong fluid is added.

Candidate references:

- [API — Diesel Exhaust Fluid](https://www.api.org/products-and-services/diesel-exhaust-fluid/)

Photo evidence (manifest license and caption):

- [DEF TANK BESIDE AFTERTREATMENT](https://commons.wikimedia.org/wiki/File:Hino_Standardized_SCR_Unit.jpg) — The photographed tank is explicitly labeled DEF and is beside the Hino exhaust assembly. The diesel fuel tank is a separate system and is not identified in this crop. Rights record: Z22; CC BY-SA 3.0; attribution and share-alike terms apply..
- [ENGINE / EXHAUST COMPONENT CONTEXT](https://commons.wikimedia.org/wiki/File:Turbocharger_assembly.jpg) — This image shows engine/exhaust hardware, not a complete fuel/DEF system or a verified flow order. Rights record: Panoha; CC BY-SA 3.0; attribution and share-alike required..

### Truck Cabin Interior (`cabin-interior`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): A photographed heavy-truck cab dashboard and steering area.
- Claim (does): Provides a real example of the driver’s instrument and control space.
- Claim (where): Inside the cab; this photograph does not show a sleeper bunk or establish a universal control layout.
- Claim (Orientation): The instrument panel displays vehicle information; nearby controls may operate lights, climate, transmission, brakes, and auxiliary equipment. Their location and behavior vary by manufacturer and model year.

Candidate references:

- No non-photo technical source recorded; source verification needed.

Photo evidence (manifest license and caption):

- [FREIGHTLINER CASCADIA DASHBOARD](https://commons.wikimedia.org/wiki/File:Bakersfield,_Dashboard_Truck_Freightliner_cascadia_at_Flying_J_Travel_Plaza.jpg) — The source identifies this photograph as the dashboard of a Freightliner Cascadia. Switch layouts, warning symbols, and controls differ by year and equipment. Rights record: Pierre André Leclercq; CC BY 4.0; attribution required..
- [OLDER TRUCK CABIN INTERIOR](https://commons.wikimedia.org/wiki/File:Old_truck_cabin_shows_steering_wheel_dashboard_and_blue_cloth_placed_on_controls.jpg) — The source identifies the vehicle interior as an older truck. Controls and layout are not representative of every modern cab. Rights record: Shixart1985; CC BY 2.0; attribution required..

### Truck Models by Manufacturer (`models-by-manufacturer`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): Four photographed manufacturer examples: two source-identified models and two make-only examples.
- Claim (does): Distinguishes exact model identification from a make-only photograph.
- Claim (where): Truck model names refer to manufacturer product designations; source gaps are stated on the image label.
- Claim (Verify a model): A badge or photographed appearance is a starting point. Confirm a specific model and year against the vehicle identification number and manufacturer records; the image source may establish only the make.

Candidate references:

- No non-photo technical source recorded; source verification needed.

Photo evidence (manifest license and caption):

- [VOLVO VNL 670 · YEAR NOT LISTED](https://commons.wikimedia.org/wiki/File:Volvo_VNL_670.jpg) — Model identified by the source; no model year is shown in its file description. Rights record: Alex Blokha; CC BY-SA 4.0; attribution and share-alike terms apply..
- [1989 PETERBILT 379](https://commons.wikimedia.org/wiki/File:Peterbilt_379.JPG) — The Commons file description identifies the year and model. It is included as an older model example. Rights record: Impale; CC0 1.0; public-domain dedication..
- [FREIGHTLINER · MODEL UNSPECIFIED](https://commons.wikimedia.org/wiki/File:Bakersfield,_%20(CA)_Truck_Freightliner_at_Flying_J_Travel_Plaza_(en2016)_(2).JPG) — The source identifies the make only. No Cascadia model is inferred from the photograph. Rights record: Pierre André Leclercq; CC BY-SA 4.0; attribution and share-alike terms apply..
- [KENWORTH · MODEL UNSPECIFIED](https://commons.wikimedia.org/wiki/File:Bakersfield,_%20(CA)_Truck_Kenworth_at_Flying_J_Travel_Plaza_(2012).jpg) — The source identifies the manufacturer but does not name the model. Rights record: Pierre André Leclercq; CC BY-SA 4.0; attribution and share-alike terms apply..

### Reefer Trailer Components (`reefer-components`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): A refrigerated trailer, with its front refrigeration unit visible in the first photograph.
- Claim (does): Shows the exterior arrangement of one reefer body and separates the optional tail lift from temperature-control equipment.
- Claim (where): The refrigeration unit is mounted at the trailer nose in this photographed Chéreau example.
- Claim (How temperature control fits): A transport refrigeration unit conditions air in the trailer, while airflow, loading pattern, door openings, and the unit’s settings affect cargo temperature. Setpoint alone does not prove the product stayed within its required temperature range.

Candidate references:

- No non-photo technical source recorded; source verification needed.

Photo evidence (manifest license and caption):

- [FRONT-MOUNTED REFRIGERATION UNIT](https://commons.wikimedia.org/wiki/File:Ets-Jean-Chereau-Avranches-Manche-Normandie-semi-remorque-vue-av-byRundvald.jpg) — The source identifies the trailer as a refrigerated semitrailer. The front unit is visible, while interior evaporator and air chute details are not shown. Rights record: Rundvald; CC BY-SA 4.0; attribution and share-alike terms apply..
- [REAR TAIL LIFT](https://commons.wikimedia.org/wiki/File:Faltbare_Hubladebuehne.jpg) — A tail lift is loading equipment and is separate from the refrigeration system. This source describes it as fitted to a refrigerated trailer. Rights record: Wolfgang Hägele; CC BY-SA 3.0; attribution and share-alike terms apply..

### Trailer Rear Door Types (`trailer-rear-doors`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): Swing doors pivot on side hinges; roll-up doors use linked panels that travel on tracks. A tail lift is separate lifting equipment.
- Claim (does): The photographed swing-door example uses vertical locking bars. Door design affects dock access and overhead clearance.
- Claim (where): Doors close the trailer’s rear cargo opening; a tail lift, when fitted, mounts at the rear.
- Claim (Choosing a door): Swing doors generally require room behind the trailer to open; roll-up doors store overhead inside the opening and can change usable opening height. Exact dimensions and clearances depend on the equipment.
- Claim (Check before opening): Follow site procedures and stand clear of the path of doors and potentially shifted cargo. Inspect hinges, latches, seals, and locking bars for the actual trailer.

Candidate references:

- [Hyundai Translead — Dry Van and Reefer Trailer Owner’s Manual](https://www.hyundaitranslead.com/wp-content/uploads/HT_manual_dry_van_reefer_trailer_opt.pdf)

Photo evidence (manifest license and caption):

- [HINGED REAR DOORS](https://commons.wikimedia.org/wiki/File:Knight_transportation_trailer_-_rear.jpg) — Two closed hinged doors and their vertical locking bars are visible. The photograph does not show their interior or operation. Rights record: Eric Polk; CC BY-SA 4.0; attribution and share-alike required..
- [FOLDABLE TAIL LIFT](https://commons.wikimedia.org/wiki/File:Faltbare_Hubladebuehne.jpg) — A tail lift is mounted at the rear and helps move freight between the trailer floor and ground; it is separate from the door itself. Rights record: Wolfgang Hägele; CC BY-SA 3.0; attribution and share-alike terms apply..
- [ROLL-UP DOOR LATCH](https://commons.wikimedia.org/wiki/File:Whiting_latch.jpg) — The source identifies the latch as part of a delivery-truck roll-up door. The close-up shows the latch and strap, not the full door or a semitrailer. Rights record: Eric Polk; CC BY-SA 4.0; attribution and share-alike required..

### Trailer Connections & Hoses (`trailer-connections`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): A photographed trailer brake-connection panel.
- Claim (does): Shows physical hose and connection hardware on one trailer.
- Claim (where): At the rear connection area of the photographed trailer.
- Claim (Air and electricity): Air hoses connect the tractor and trailer braking systems; a separate electrical jumper carries lighting and other electrical circuits. Connector location, color, and configuration vary, so verify the equipment rather than assuming every photographed connection is the same.

Candidate references:

- [Washington DOL — Commercial Driver Guide: inspection, air brakes and coupling](https://dol.wa.gov/driver-licenses-and-permits/commercial-driver-licenses-cdl/cdl-training-and-testing/commercial-driver-guides/commercial-driver-guide-text-only)
- [Oregon DMV — Commercial Driver Manual, Combination Vehicles](https://www.oregon.gov/odot/dmv/pages/online_cdl_manual_2/section_6.aspx)

Photo evidence (manifest license and caption):

- [TRAILER BRAKE CONNECTIONS](https://commons.wikimedia.org/wiki/File:Anschl%C3%BCsse_Anh%C3%A4nger_08.jpg) — The file description identifies the photographed equipment as trailer brake-system connections. It does not establish a U.S. gladhand color convention or 7-way pinout. Rights record: GeorgHH; Public domain according to Wikimedia Commons file record..
- [GLADHAND · TRAILER CONNECTION](https://commons.wikimedia.org/wiki/File:Glad_Hand.jpg) — A gladhand couples the tractor and trailer air-brake lines. This image shows one connector mounted to a trailer, not a complete paired coupling or line-color standard. Rights record: phot0geek; CC BY-SA 2.0; attribution and share-alike terms apply..

### Truck Brake Systems (`brake-systems`)

Priority finding: Checked spring-brake and air-brake concepts against Oregon DMV section 5; the pictured hardware is not a complete system.

- Claim (what): Photographed truck air disc brake hardware and a spring-brake chamber.
- Claim (does): Shows a wheel-end friction brake and a separate air-actuated brake cylinder.
- Claim (where): The disc brake is at the wheel end; the brake chamber actuates the brake mechanism.
- Claim (Service and parking functions): The service brake slows the vehicle when commanded. In a spring-brake chamber, a mechanical spring can apply parking or emergency braking while air pressure releases it. The exact system and procedures depend on the vehicle.

Candidate references:

- [Washington DOL — Commercial Driver Guide: inspection, air brakes and coupling](https://dol.wa.gov/driver-licenses-and-permits/commercial-driver-licenses-cdl/cdl-training-and-testing/commercial-driver-guides/commercial-driver-guide-text-only)
- [Oregon DMV — Commercial Driver Manual, Air Brakes](https://www.oregon.gov/odot/dmv/pages/online_cdl_manual_2/section_5.aspx)

Photo evidence (manifest license and caption):

- [AIR-ACTUATED DISC BRAKE](https://commons.wikimedia.org/wiki/File:Air_disc_brake.jpg) — The photograph shows a wheel-end air disc brake. The rotor turns with the wheel; the caliper and friction elements slow it when applied. Rights record: Panoha; CC BY-SA 3.0; attribution and share-alike terms apply..
- [SPRING-BRAKE AIR CYLINDER](https://commons.wikimedia.org/wiki/File:Spring_brake_air_cylinder.jpg) — This separate component is a dual air-brake cylinder with an incorporated spring brake. The source identifies the assembly, not a specific truck model. Rights record: Panoha; CC BY-SA 3.0; attribution and share-alike terms apply..

### Truck Engine Components (`engine-components`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): An air compressor, turbocharger, and historic installed engine show three different engine-related views.
- Claim (does): The compressor supplies compressed air for vehicle systems; the turbocharger uses exhaust energy to compress intake air. The historic engine bay illustrates component placement.
- Claim (where): Accessories attach to or connect with the engine; layouts differ by engine and vehicle.
- Claim (Three distinct views): An engine-driven compressor supports the air system; a turbocharger uses exhaust energy to compress intake air. The historic engine bay shows placement on a different gasoline vehicle, so it should not be used as a current diesel layout.

Candidate references:

- No non-photo technical source recorded; source verification needed.

Photo evidence (manifest license and caption):

- [TRUCK AIR COMPRESSOR](https://commons.wikimedia.org/wiki/File:Truck_air_compressor.jpg) — The image source identifies a truck air compressor; the Cummins name is visible on the photographed part. It is a photo of one component, not a complete engine layout. Rights record: Panoha; CC BY-SA 3.0; attribution and share-alike terms apply..
- [TURBOCHARGER AND EXHAUST BRAKE](https://commons.wikimedia.org/wiki/File:Turbocharger_assembly.jpg) — The source identifies a turbocharger and exhaust-brake assembly; individual hoses or internal details are not inferred. Rights record: Panoha; CC BY-SA 3.0; attribution and share-alike required..
- [HISTORIC GASOLINE ENGINE BAY](https://commons.wikimedia.org/wiki/File:ZIL-130-engine-on-ZIL-131-l.jpg) — A historic ZIL gasoline engine installation; the source lists radiator and water-pump components. It is not a current diesel layout. Rights record: Vivan755; CC BY-SA 4.0; attribution and share-alike required..

### Types of Trucking Cargo (`trucking-cargo`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): Photographs of six freight contexts: pallets, boxed goods, logs, liquid fuel, vehicles, and bulk material.
- Claim (does): Shows how cargo and handling needs differ across photographed loads.
- Claim (where): Cargo type shapes the trailer or truck body and the loading method.
- Claim (Cargo changes the equipment): A liquid tanker, a car transporter, and a flatbed address different physical loads. Weight distribution, compatible equipment, securement, and shipment-specific instructions must be checked for the actual freight.

Candidate references:

- No non-photo technical source recorded; source verification needed.

Photo evidence (manifest license and caption):

- [PALLETIZED FREIGHT](https://commons.wikimedia.org/wiki/File:US_Navy_040918-N-1550W-029_Joint_Task_Force_Guantanamo_personnel_load_a_pallet_onto_a_truck_at_Incirlik_Air_Force_Base,_Turkey.jpg) — A public-domain U.S. Navy photo shows a palletized load being transferred to a truck. It illustrates one logistics setting, not a commercial dock workflow. Rights record: U.S. Navy photo by Photographer's Mate 2nd Class Elizabeth A. Williams; Public domain according to the U.S. Navy / Wikimedia Commons file record..
- [BOXED GENERAL GOODS](https://commons.wikimedia.org/wiki/File:Goods_in_the_truck.jpg) — A real delivery truck with boxed goods. The photograph does not identify the specific commodity or freight contract. Rights record: Peachyeung316; CC BY-SA 4.0; attribution and share-alike terms apply..
- [LUMBER / LOGS](https://commons.wikimedia.org/wiki/File:Logs_of_wood_in_truck.jpg) — A photographed open truck carrying logs. Vehicle type and securement practice differ from U.S. tractor–semitrailer freight. Rights record: Livingstone Imonitie; CC BY-SA 4.0; attribution and share-alike terms apply..
- [LIQUID BULK](https://commons.wikimedia.org/wiki/File:Rotten_Robbie_tanker_truck_delivering_fuel.jpg) — A real fuel delivery tanker, a liquid-bulk example. Rights record: Grendelkhan; CC BY-SA 4.0; attribution and share-alike terms apply..
- [VEHICLES](https://commons.wikimedia.org/wiki/File:Double_stack_low-loader,_IAA_2024,_Hanover_(P1190981).jpg) — A car-carrier photograph illustrates vehicle freight. The pictured equipment is one low-loader design. Rights record: Matti Blume; CC BY-SA 4.0; attribution and share-alike terms apply..
- [BULK MATERIAL](https://commons.wikimedia.org/wiki/File:Semi_trailer_bottom_dump_truck.webp) — A bottom-dump semitrailer is a bulk-material example; the source does not name a specific commodity. Rights record: Wikideas1; CC0 1.0; public-domain dedication..

### Shipper vs. Broker vs. Carrier (`shipper-broker-carrier`)

Priority finding: Checked motor-carrier and broker roles against FMCSA definitions; specific contractual obligations remain transaction-dependent.

- Claim (what): A shipper tenders freight, a motor carrier transports it, and a broker arranges transportation by authorized motor carriers for compensation.
- Claim (does): Separates ownership/tender of freight, physical transportation, and arranging the movement.
- Claim (where): These roles meet around pickup, transport, and delivery; one business can perform more than one role only when the applicable rules and contracts allow.
- Claim (Who does what): The shipper tenders goods, the carrier accepts responsibility for transportation, and a broker arranges transportation for compensation using a motor carrier. A business can occupy different roles in different transactions.
- Claim (Check the transaction): Identify contracting parties, operating authority, cargo responsibility, payment terms, and who communicates changes. A broker’s arrangement does not by itself mean the broker physically operates the truck.

Candidate references:

- [FMCSA — Protect Your Move Glossary](https://www.fmcsa.dot.gov/protect-your-move/glossary)
- [FMCSA — Definitions of motor carrier, broker and freight forwarder](https://www.fmcsa.dot.gov/faq/what-are-definitions-motor-carrier-broker-and-freight-forwarder-authorities)

Photo evidence (manifest license and caption):

- [MOTOR CARRIER / TRUCK AT DOCK](https://commons.wikimedia.org/wiki/File:Southeastern_Freight_Lines_truck.jpg) — This photo shows a motor carrier’s tractor and trailer at a dock. It does not depict every service a carrier can provide. Rights record: Indy beetle; CC0 1.0; public-domain dedication..
- [SHIPMENT HANDLING CONTEXT](https://commons.wikimedia.org/wiki/File:US_Navy_040918-N-1550W-029_Joint_Task_Force_Guantanamo_personnel_load_a_pallet_onto_a_truck_at_Incirlik_Air_Force_Base,_Turkey.jpg) — A public-domain military logistics photo shows cargo being transferred to a truck. It illustrates a shipper/receiver handling context, not a commercial broker. Rights record: U.S. Navy photo by Photographer's Mate 2nd Class Elizabeth A. Williams; Public domain according to the U.S. Navy / Wikimedia Commons file record..

### Kingpin (`kingpin`)

Priority finding: Checked kingpin and fifth-wheel jaw engagement against Oregon DMV section 6.

- Claim (what): The trailer-side coupling pin that engages the tractor fifth wheel.
- Claim (does): Transfers towing and articulation forces through the coupled assembly.
- Claim (where): Mounted beneath the front of a semitrailer; the tractor fifth wheel is the mating component.
- Claim (How it connects): The kingpin is fixed beneath the trailer’s upper coupling plate. The fifth-wheel jaws or locking mechanism retain it; the flat surfaces carry vertical load while the combination articulates.
- Claim (Inspection context): Wear, cracks, deformation, and incorrect coupling height require attention under the equipment manufacturer’s inspection criteria. Do not infer serviceability from a photograph.

Candidate references:

- [SAF-HOLLAND — Fifth Wheel Couplings](https://safholland.com/us/en/products/fifth-wheels)
- [Washington DOL — Commercial Driver Guide: inspection, air brakes and coupling](https://dol.wa.gov/driver-licenses-and-permits/commercial-driver-licenses-cdl/cdl-training-and-testing/commercial-driver-guides/commercial-driver-guide-text-only)
- [Oregon DMV — Commercial Driver Manual, Combination Vehicles](https://www.oregon.gov/odot/dmv/pages/online_cdl_manual_2/section_6.aspx)

Photo evidence (manifest license and caption):

- [TRAILER KINGPIN · UNDERSIDE](https://commons.wikimedia.org/wiki/File:Kingpin.jpg) — The vertical kingpin is fixed to the trailer and is captured by the tractor’s fifth wheel during coupling. This photograph shows one trailer design. Rights record: SterkeBak; CC BY 3.0; attribution required. The source also offers GFDL..
- [TRACTOR FIFTH-WHEEL CONTEXT](https://commons.wikimedia.org/wiki/File:Fifth_wheel_IHC_truck_MD1.jpg) — The fifth wheel is on the tractor and mates with the trailer kingpin; this photo shows the tractor-side component. Rights record: Acroterion; CC BY-SA 4.0; attribution and share-alike terms apply..
- [FIFTH WHEEL · TRACTOR](https://commons.wikimedia.org/wiki/File:Saf_Holland_turntable,_fifth_wheel_01.jpg) — A fifth wheel is mounted to the tractor frame and supports the trailer’s kingpin connection. The photo shows a specific SAF-Holland unit. Rights record: Photohelp13; CC BY-SA 4.0; attribution and share-alike terms apply..

### Glad Hand (`gladhand`)

Priority finding: Checked service and emergency air-line coupling and seals against Oregon DMV section 6.

- Claim (what): A quick-connect fitting used to join tractor and trailer air-brake lines.
- Claim (does): Provides the pneumatic connection between the coupled vehicles.
- Claim (where): At the rear of the tractor and front of the trailer, as part of the air-line hookup.
- Claim (Supply and service lines): A typical tractor–trailer air-brake system uses a supply line and a service/control line. The supply line charges trailer reservoirs and supports release of spring brakes; service pressure communicates braking demand. Connections and colors should be checked against the actual equipment.
- Claim (Before coupling): Check seals and mating surfaces for damage, keep dirt out, and follow the carrier’s connection and leak-check procedure. A gladhand is an air coupling; the electrical connector is separate.

Candidate references:

- [FMCSA — North American Standard Inspection Program](https://www.fmcsa.dot.gov/safety/vehicle-inspection)
- [Washington DOL — Commercial Driver Guide: inspection, air brakes and coupling](https://dol.wa.gov/driver-licenses-and-permits/commercial-driver-licenses-cdl/cdl-training-and-testing/commercial-driver-guides/commercial-driver-guide-text-only)
- [Oregon DMV — Commercial Driver Manual, Combination Vehicles](https://www.oregon.gov/odot/dmv/pages/online_cdl_manual_2/section_6.aspx)

Photo evidence (manifest license and caption):

- [GLADHAND · TRAILER CONNECTION](https://commons.wikimedia.org/wiki/File:Glad_Hand.jpg) — A gladhand couples the tractor and trailer air-brake lines. This image shows one connector mounted to a trailer, not a complete paired coupling or line-color standard. Rights record: phot0geek; CC BY-SA 2.0; attribution and share-alike terms apply..
- [AIR-LINE CONNECTION AREA](https://commons.wikimedia.org/wiki/File:Anschl%C3%BCsse_Anh%C3%A4nger_08.jpg) — This is the connection area; the source does not identify every line color or coupling. Rights record: GeorgHH; Public domain according to Wikimedia Commons file record..

### Landing Gear (`landing-gear`)

Priority finding: Checked trailer support and uncoupling context against Oregon DMV section 6; load and ground-specific procedures remain unverified.

- Claim (what): Retractable support legs mounted near the front of a semitrailer.
- Claim (does): Support the trailer when it is disconnected from a tractor.
- Claim (where): Behind the trailer’s kingpin area, typically as a paired assembly.
- Claim (Support and load): The landing gear supports an uncoupled trailer front. Ground condition, trailer load, support surface, and equipment ratings affect stability; use the trailer manufacturer’s and site’s procedures before uncoupling or moving a trailer.

Candidate references:

- [SAF-HOLLAND — Landing Gear](https://safholland.com/us/en/products/landing-gear)
- [Washington DOL — Commercial Driver Guide: inspection, air brakes and coupling](https://dol.wa.gov/driver-licenses-and-permits/commercial-driver-licenses-cdl/cdl-training-and-testing/commercial-driver-guides/commercial-driver-guide-text-only)
- [Oregon DMV — Commercial Driver Manual, Combination Vehicles](https://www.oregon.gov/odot/dmv/pages/online_cdl_manual_2/section_6.aspx)

Photo evidence (manifest license and caption):

- [LANDING-GEAR LEG + CRANK](https://www.flickr.com/photos/toddmccann/15107246922) — The support leg and foot carry the uncoupled trailer’s front end; the crank operates the gear on this photographed trailer. Rights record: Todd McCann; CC BY 2.0; attribution required..
- [LOWBED SEMITRAILER FRONT SUPPORT CONTEXT](https://commons.wikimedia.org/wiki/File:Extendable_3_Axle_Lowbed_-_Extendable_4_Axle_Lowbed_-_STU_TRAILERS_01.jpg) — This image gives trailer-front context, but the landing-gear legs are not a confirmed close-up. Rights record: Yasintolu; CC BY 4.0; attribution required..

### Truck Axle Configurations (`axle-configurations`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): A description of axle count and which axle positions are driven.
- Claim (does): Helps distinguish wheel-end layout from the number of powered axles.
- Claim (where): Read configuration labels with the manufacturer’s specification; visible wheel groups alone do not prove which axles are driven.
- Claim (Read the numbers): In a common notation such as 6×4, the first number describes wheel positions and the second describes driven wheel positions. This notation does not count individual dual tires; lift and auxiliary axle arrangements require additional detail.

Candidate references:

- [Freightliner — Detroit drive axle configurations](https://dtnacontent-dtna.prd.freightliner.com/content/dam/enterprise/documents/9166-detroit_axles_brochure-2020-04-03.pdf)

Photo evidence (manifest license and caption):

- [TATA PRIMA · SOURCE-LABELED 6×4](https://commons.wikimedia.org/wiki/File:Tata_Prima_truck.jpg) — The Commons file identifies the Tata Prima as a 6×4 tractor. This is an Indian-market example; only the sourced configuration is labeled. Rights record: Trucksindiawiki; CC0 1.0; public-domain dedication..
- [REAR TANDEM · SOURCE-LABELED 6×4](https://commons.wikimedia.org/wiki/File:Rear_axles_tandem.jpg) — The photographer identifies this rear tandem truck as a 6×4. The close-up shows the rear group, not all truck axle configurations. Rights record: Panoha; CC BY-SA 3.0; attribution and share-alike terms apply..

### Truck Tire Damage Examples (`tire-damage`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): Photographed examples of visible tire deterioration and failure.
- Claim (does): Shows why wear patterns, casing exposure, and separation need qualified inspection.
- Claim (where): These photos come from different tires and contexts; they are not all the same tire type or axle position.
- Claim (A symptom is not a diagnosis): Exposed cord, a bulge, a cut, or separation can indicate a serious condition, but appearance alone does not prove root cause. Remove unsafe equipment from service and follow applicable inspection and replacement procedures.

Candidate references:

- [49 CFR § 393.75 — Tires](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-393/subpart-G/section-393.75)
- [Washington DOL — Commercial Driver Guide: inspection, air brakes and coupling](https://dol.wa.gov/driver-licenses-and-permits/commercial-driver-licenses-cdl/cdl-training-and-testing/commercial-driver-guides/commercial-driver-guide-text-only)

Photo evidence (manifest license and caption):

- [TRACTOR-TRAILER · TREAD SEPARATION](https://commons.wikimedia.org/wiki/File:Trailer_tire_with_tread_separating.jpg) — The photographer identifies this as tread separation on a tractor-trailer tire while in use. Rights record: Heyyouoverthere; CC BY-SA 4.0; attribution and share-alike terms apply..
- [TRUCK TIRES · EXPOSED CORDS](https://commons.wikimedia.org/wiki/File:Truck_Tyre_Wire.jpg) — The source identifies truck tires; this photograph documents visible cords and deterioration, not the cause. Rights record: Longhair; CC BY 3.0; attribution required..
- [TRUCK TIRES · SKID-RELATED WEAR](https://commons.wikimedia.org/wiki/File:Worn.down.tires.1.jpg) — The photographer attributes the wear to skidding. The image is not a diagnosis of a particular vehicle fault. Rights record: Ahmadrknowledge; CC BY-SA 4.0; attribution and share-alike terms apply..
- [UTILITY-TRAILER TIRE · SIDEWALL CORDS](https://commons.wikimedia.org/wiki/File:Tire_Severe_Under_Inflation_Wear.jpg) — The file identifies severe under-inflation wear on a utility-trailer tire. It is not a tractor drive-tire example. Rights record: CZmarlin — Christopher Ziemnowicz; Author releases all rights; the source requests optional photo credit..
- [TIRE · IMPACT FAILURE](https://commons.wikimedia.org/wiki/File:Tireimpactdamage.jpg) — The photographer says this tire failed after impact with an object; the vehicle type and event details are not identified. Rights record: CapriRacer; Released into the public domain by the author..

### Truck tire tread patterns (`intro-tire-treads`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): Tread is the patterned rubber at the tire’s road-contact surface; photographs show examples from different truck-related applications.
- Claim (does): Grooves and blocks are designed for the tire’s intended service and must be read alongside manufacturer specifications.
- Claim (where): The tire application and axle position are separate from tread shape; neither can be inferred from a close-up alone.
- Claim (Pattern and purpose): Rib and lug patterns have different design features, but a tread photograph alone cannot prove its approved axle position or duty cycle. Confirm tire size, load and speed ratings, application, and manufacturer guidance.

Candidate references:

- [Continental ContiTread product guide](https://www.continental-tires.com/content/dam/conti-tires-cms/continental/market-content/us/truck/literature/catalogs/TT-CT-BK-DATA.pdf)

Photo evidence (manifest license and caption):

- [TRUCK TIRE ASSORTMENT · PATTERN VARIETY](https://commons.wikimedia.org/wiki/File:Truck_tires.JPG) — The photograph shows several real truck-tire tread shapes. The source does not identify the tires’ makers, intended axle positions, or exact service categories. Rights record: Biso; CC BY 3.0; attribution required. The source also offers GFDL..
- [INDUSTRIAL TRUCK · LARGE LUG TREAD](https://www.pexels.com/photo/close-up-photo-of-a-truck-s-tire-5578887/) — A close photograph of large industrial truck tires. The prominent lugs belong to heavy equipment; this image does not represent a highway tractor tire. Rights record: Joseph Fuller via Pexels; Pexels Free Stock Photo License; free website use permitted; attribution is optional and provided here..
- [RACING TRUCK CONTEXT · SLICK TIRE](https://commons.wikimedia.org/wiki/File:Close_up_of_truck_tire_(2266492596).jpg) — The photo shows a smooth racing tire in truck-series context. A racing slick is a specialized competition tire, not a road-going semi-truck tread example. Rights record: tequilamike; CC BY 2.0; attribution required..

### Truck Suspension Systems (`suspension-systems`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): Suspension connects the frame to axles and wheels while supporting load and controlling motion.
- Claim (does): Leaf springs and air suspension are examples of different suspension arrangements; this pair is illustrative, not a complete taxonomy.
- Claim (where): The close-up shows a leaf spring under the frame; the second photograph identifies an air-suspended truck combination.
- Claim (Support and control): Leaf springs and air springs support the vehicle differently; shock absorbers control motion rather than replacing the spring’s load-support function. Configuration and inspection criteria depend on the equipment.

Candidate references:

- [Washington DOL — Commercial Driver Guide: inspection, air brakes and coupling](https://dol.wa.gov/driver-licenses-and-permits/commercial-driver-licenses-cdl/cdl-training-and-testing/commercial-driver-guides/commercial-driver-guide-text-only)

Photo evidence (manifest license and caption):

- [TRUCK LEAF SPRING](https://commons.wikimedia.org/wiki/File:Blattfeder_eines_LKW.JPG) — A source-identified truck leaf spring is shown attached to the chassis. The photo does not establish the truck make or spring rating. Rights record: Mattes; Released into the public domain by the photographer..
- [AIR-SUSPENSION TRUCK COMBINATION](https://commons.wikimedia.org/wiki/File:Careful_Carriers_MAN_truck_(air_suspension)_(16930210686).jpg) — The source identifies this MAN truck and trailer as having air suspension. The photo is a full-vehicle view; it does not isolate or identify an air spring model. Rights record: Bob Adams; CC BY-SA 2.0; attribution and share-alike terms apply..

### Flatbed Load & Equipment Types (`flatbed-equipment`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): Open-deck loads may use straps, chains and binders, edge protection, tarps, stakes, and dunnage depending on cargo and securement requirements.
- Claim (does): The photos distinguish the trailer deck from one real tie-down operation.
- Claim (where): Securement points and methods depend on cargo, equipment, and applicable rules.
- Claim (Secure the actual load): Tie-down selection, working load limits, anchor points, edge protection, and commodity-specific rules depend on the load and applicable regulations. A photograph of a strap shows a device, not a compliant securement plan.

Candidate references:

- [FMCSA Cargo Securement Rules](https://www.fmcsa.dot.gov/regulations/cargo-securement/cargo-securement-rules)
- [Washington DOL — Commercial Driver Guide: inspection, air brakes and coupling](https://dol.wa.gov/driver-licenses-and-permits/commercial-driver-licenses-cdl/cdl-training-and-testing/commercial-driver-guides/commercial-driver-guide-text-only)

Photo evidence (manifest license and caption):

- [OPEN-DECK SEMITRAILER](https://commons.wikimedia.org/wiki/File:Four-axle_flatbed_container_semi-trailer.jpg) — The open deck is accessible from the sides and above. This photograph shows the trailer type, not a loaded or secured shipment. Rights record: Summit666; CC BY-SA 3.0; attribution and share-alike terms apply..
- [RATCHET STRAP SECURING CARGO](https://commons.wikimedia.org/wiki/File:Strap_it_down_150429-A-KX461-994.jpg) — A U.S. Army photograph shows a soldier tightening a strap over cargo during a truck rodeo. It demonstrates a real strap and ratchet in use, but is not a commercial flatbed securement example or a complete securement instruction. Rights record: Edgar Cardenas / U.S. Army; U.S. Army official-duty photograph; public domain in the United States..

### Warning Devices After a Highway Stop (U.S.) (`highway-warning-devices`)

Priority finding: Checked general timing and roadway placement against 49 CFR 392.22; exceptions and vehicle-specific requirements remain material.

- Claim (what): For a U.S. commercial motor vehicle stopped on the traveled portion or shoulder for a reason other than a necessary traffic stop, federal rules require hazard flashers and external warning devices.
- Claim (does): The current rule generally requires the driver to place the required devices as soon as possible and within 10 minutes, at prescribed positions around the vehicle.
- Claim (where): Three warning devices are required; placement depends on roadway type, direction of traffic, and visibility. Check 49 CFR § 392.22 and § 393.95.
- Claim (Placement depends on the road): For common two-way roads, federal rules generally call for one device near the traffic side of the vehicle and devices 100 feet in each direction. On a divided or one-way road, the typical pattern is behind the vehicle at 10, 100, and 200 feet. Curves, hills, hazardous materials, and other conditions can change requirements; consult the current rule.

Candidate references:

- [49 CFR § 392.22 — Emergency signals; stopped commercial motor vehicles](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-392/subpart-C/section-392.22)
- [49 CFR § 393.95 — Emergency equipment on all power units](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-393/subpart-G/section-393.95)

Photo evidence (manifest license and caption):

- [REFLECTIVE EMERGENCY WARNING TRIANGLE](https://commons.wikimedia.org/wiki/File:Red_triangle_of_a_car.jpg) — A real portable warning triangle photographed beside a road. The source photograph is from Finland and illustrates the device itself, not the U.S. placement pattern. Rights record: Santeri Viinamäki; CC BY-SA 4.0; attribution and share-alike terms apply..
- [WHEEL CHOCK PHOTO](https://commons.wikimedia.org/wiki/File:Unterlegkeil-2.JPG) — A wheel chock is separate from the roadside warning devices required after a highway stop. Rights record: UlrichHeither; CC BY-SA 3.0; attribution and share-alike required..

### CVSA Level I vs. II vs. III (`cvsa-inspection-levels`)

Priority finding: Checked Level I, II and III scope against CVSA’s current inspection-level descriptions.

- Claim (what): CVSA Level I covers driver credentials and records plus a detailed vehicle inspection; Level II is a driver-and-vehicle walk-around limited to items that can be checked without physically getting under the vehicle; Level III focuses on driver credentials and administrative items.
- Claim (does): The level describes the scope of an inspection, not a score or a guarantee that every jurisdiction conducts the same encounter.
- Claim (where): Use CVSA’s current North American Standard inspection guidance for the exact checklist and applicable exceptions.
- Claim (Level I): A comprehensive driver and vehicle inspection includes items requiring access under the vehicle as well as driver credentials and operating requirements.
- Claim (Level II): The walk-around driver and vehicle inspection covers items that can be examined without physically getting under the vehicle. It is not simply a shorter Level I with identical coverage.
- Claim (Level III): A driver, credential, and administrative inspection focuses on applicable driver-related requirements. Inspection results and out-of-service decisions depend on the actual findings and current criteria.

Candidate references:

- [CVSA — All Inspection Levels](https://cvsa.org/inspections/all-inspection-levels)

Photo evidence (manifest license and caption):

- [TRUCK AT OREGON PORT OF ENTRY](https://commons.wikimedia.org/wiki/File:Truck_inspection.jpg) — Oregon DOT identifies this photograph as Woodburn Port of Entry. It shows an inspector beneath a Freightliner semitrailer but does not identify the inspection level or result. Rights record: Oregon Department of Transportation; CC BY 2.0; attribution required..
- [ODOT COMMERCIAL TRUCK SAFETY ENFORCEMENT](https://commons.wikimedia.org/wiki/File:Truck_receives_warning_(3698869372).jpg) — The source identifies an enforcement campaign, not a CVSA inspection level. Rights record: Oregon Department of Transportation; CC BY 2.0; attribution required..
- [REFLECTIVE WARNING TRIANGLE](https://commons.wikimedia.org/wiki/File:Red_triangle_of_a_car.jpg) — A real reflective triangle is shown; this specific photo was taken in Finland and does not show U.S. placement distances. Rights record: Santeri Viinamäki; CC BY-SA 4.0; attribution and share-alike terms apply..

### Semi-Truck Engine Manufacturers (`engine-manufacturers`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): A heavy truck’s engine may be supplied by the vehicle maker or another engine manufacturer, depending on model year, market, and configuration.
- Claim (does): These two photographs document one Cummins-powered Volvo FH and one historical Detroit Diesel manufacturer display.
- Claim (where): Check the vehicle build record, engine data plate, and model-year literature to identify an installed engine; badges and current product catalogs do not prove a specific truck configuration.
- Claim (Make and engine are separate): A truck’s badge identifies the vehicle manufacturer, while the engine may be made by another company or by a related brand. Use the engine serial number and manufacturer records for exact identification and service information.

Candidate references:

- No non-photo technical source recorded; source verification needed.

Photo evidence (manifest license and caption):

- [CUMMINS ISX IN A VOLVO FH](https://commons.wikimedia.org/wiki/File:Cummins_ISX_600_engine.jpg) — The Commons source identifies a Cummins ISX installed in a Volvo FH. The installation is one source-documented example; it does not establish which engine options are available for other models or years. Rights record: Panoha; CC BY-SA 3.0; attribution and share-alike terms apply..
- [DETROIT DIESEL DISPLAY · BAUMA 2007](https://commons.wikimedia.org/wiki/File:Detroit_Diesel_bauma_2007.jpg) — A real trade-fair photograph identifies Detroit Diesel and MTU display engines. The exact engine models are not identified by the source page. Rights record: Aconcagua; CC BY-SA 3.0; attribution and share-alike terms apply..

### Wheel & Rim Types (`wheel-rim-types`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): Commercial-vehicle wheels vary by material, mounting system, axle position, and tire arrangement.
- Claim (does): The photographs show a historic Trilex design and a heavy-duty alloy wheel; a Trilex wheel is not a standard disk-wheel example.
- Claim (where): Wheel selection and service depend on vehicle specifications, wheel markings, fasteners, and the wheel-end system.
- Claim (Fitment is specific): Wheel diameter, width, bolt pattern, mounting method, offset, load rating, and tire compatibility matter. Similar-looking wheels are not necessarily interchangeable; use the manufacturer’s specifications and safe servicing procedures.

Candidate references:

- [Washington DOL — Commercial Driver Guide: inspection, air brakes and coupling](https://dol.wa.gov/driver-licenses-and-permits/commercial-driver-licenses-cdl/cdl-training-and-testing/commercial-driver-guides/commercial-driver-guide-text-only)

Photo evidence (manifest license and caption):

- [TRILEX TRUCK WHEEL](https://commons.wikimedia.org/wiki/File:Rad_Felge_Lastkraftwagen_Oldtimer.jpg) — The photographer identifies this as a Trilex rim on an oldtimer truck. It documents a wheel design, not a modern U.S. wheel-end installation or its material specification. Rights record: Erkaha; CC BY-SA 4.0; attribution and share-alike terms apply..
- [ALCOA HEAVY-DUTY ALLOY WHEEL](https://commons.wikimedia.org/wiki/File:Alcoa_alloy_wheel_001.jpg) — The source identifies an Alcoa heavy-duty alloy wheel for buses and trucks. This specific photo does not establish wheel size, weight rating, or compatibility. Rights record: Tennen-Gas; CC BY-SA 3.0; attribution and share-alike terms apply..

### Trailer Axle & Suspension Types (`trailer-axles-suspension`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): Semitrailers use axle groups and suspension assemblies that support the trailer and transfer load to the road.
- Claim (does): Axle count, spacing, slider range, and spring or air suspension depend on trailer design and operating needs.
- Claim (where): Inspect the actual suspension and slider arrangement, and consult the trailer manufacturer documentation before making adjustment or maintenance decisions.
- Claim (Axle group and suspension): The axle supports wheels and transfers load; springs, hangers, dampers, and related parts connect the axle group to the trailer. Sliding tandems and lift axles change how some trailers are configured and loaded.

Candidate references:

- [Washington DOL — Commercial Driver Guide: inspection, air brakes and coupling](https://dol.wa.gov/driver-licenses-and-permits/commercial-driver-licenses-cdl/cdl-training-and-testing/commercial-driver-guides/commercial-driver-guide-text-only)

Photo evidence (manifest license and caption):

- [HEAVY-TRANSPORT SEMITRAILER REAR AXLES](https://commons.wikimedia.org/wiki/File:Semitrailer_rear_axle_(54757063900).jpg) — The photographer identifies the subject as a semitrailer rear axle, photographed at the Overloon War Museum. This is a historic heavy-transport trailer, not a typical highway van or a verified sliding-tandem system. Rights record: Thomas Vogt; CC BY 4.0; attribution required..
- [TRACTOR TANDEM AXLE COMPARISON](https://commons.wikimedia.org/wiki/File:Rear_axles_tandem.jpg) — This is a truck tractor tandem, not a semitrailer axle configuration; it is included as a distinct comparative axle photo. Rights record: Panoha; CC BY-SA 3.0; attribution and share-alike terms apply..

### Truck Transmission Types (`transmission-types`)

Priority finding: Checked that I-Shift is an automated manual transmission against Volvo documentation; the full comparison still requires manufacturer-specific verification.

- Claim (what): A truck transmission changes the relationship between engine speed and drive-wheel speed. Manual, automated manual (AMT), and automatic describe different shift/control strategies and hardware designs.
- Claim (does): The museum cutaway exposes gears; the other image shows a truck gear-shift control mechanism. They are not the same component.
- Claim (where): The gearbox is part of the driveline; a photographed shift mechanism should not be mistaken for a cab-mounted selector. Layout varies by truck.
- Claim (Manual, automated manual, automatic): A manual uses driver-controlled shifts and clutch operation. An automated manual automates clutch and gear selection in a geared transmission. A conventional automatic typically uses a torque converter and planetary gears; design and controls vary.
- Claim (Application matters): Gear selection depends on load, road speed, grade, engine torque, and the transmission’s shift strategy. The photographed shift mechanism alone does not identify the complete transmission or its operating modes.

Candidate references:

- [Volvo Trucks — I-Shift transmission overview](https://www.volvotrucks.us/media/vtna/files/shared/body-builder/manuals/volvo-section-9-vecu4.pdf)

Photo evidence (manifest license and caption):

- [TRUCK GEARBOX CUTAWAY](https://commons.wikimedia.org/wiki/File:Fahrzeuggetriebe.jpg) — A museum display photograph exposes internal gears. It is a physical cutaway object photographed in a museum, not a drawn infographic. Rights record: Stahlkocher; CC BY-SA 3.0 or GNU FDL 1.2+; attribution and share-alike required..
- [ELECTRONIC PNEUMATIC SHIFT UNIT](https://commons.wikimedia.org/wiki/File:I_shift_gear_change_unit.jpg) — The photographer identifies this as a truck semi-automatic electronic pneumatic gear-shift control unit. Its exact installation and model are not stated in the file description. Rights record: Panoha; CC BY-SA 3.0; attribution and share-alike required..

### Truck Drivetrain Components (`drivetrain-components`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): The driveline carries torque from the transmission to the drive axle. A differential lets the left and right drive wheels turn at different speeds while receiving engine torque.
- Claim (does): A universal joint is a shaft connection; the differential is a gear assembly in the drive axle. They are separate components.
- Claim (where): Follow the path from transmission, along the driveshaft, to the drive-axle differential and axle shafts.
- Claim (Torque path): Torque flows from the transmission through driveshafts and joints to the drive axle. The final drive changes speed and torque; the differential allows wheels on the same axle to turn at different speeds in a turn.
- Claim (What an inspection can show): Leaks, damaged boots or guards, loose fittings, and visible joint damage are reasons for inspection. A photograph does not establish internal wear or a diagnosis.

Candidate references:

- [Washington DOL — Commercial Driver Guide: driveline inspection](https://dol.wa.gov/driver-licenses-and-permits/commercial-driver-licenses-cdl/cdl-training-and-testing/commercial-driver-guides/commercial-driver-guide-text-only)

Photo evidence (manifest license and caption):

- [HEAVY-TRUCK DIFFERENTIAL GEAR](https://commons.wikimedia.org/wiki/File:Differential_gear_001.JPG) — The differential is identified for heavy trucks; the source page describes this photographed gear as Mitsubishi Fuso truck equipment. Rights record: Tennen-Gas; CC BY-SA 3.0 or GNU FDL; attribution and share-alike required..
- [DRIVESHAFT UNIVERSAL JOINT](https://commons.wikimedia.org/wiki/File:Universal_joint_MD1.jpg) — A universal joint allows the driveline to transmit torque while accommodating changing angles. This photo is from an International cab-over tractor. Rights record: Acroterion; CC BY-SA 4.0; attribution and share-alike required..

### Truck Dashboard Warning Symbols (`dashboard-warning-symbols`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): Dashboard indicators alert the driver to conditions such as engine, anti-lock braking, air pressure, coolant, DEF, or DPF status.
- Claim (does): Symbol artwork, colors, and exact messages vary by OEM, model year, and instrument cluster. Use the vehicle operator manual for the exact indicator shown.
- Claim (where): Indicators appear in the cab instrument cluster or display.
- Claim (Respond using the manual): Read the actual message, color, and accompanying audible warning in the vehicle-specific operator manual. Warning symbols and required responses vary; an unidentified icon in a generic dashboard photo is not enough for a diagnosis.

Candidate references:

- [FMCSA — Vehicle inspections and maintenance](https://www.fmcsa.dot.gov/regulations/inspection-repair-and-maintenance)

Photo evidence (manifest license and caption):

- [FREIGHTLINER DASHBOARD](https://commons.wikimedia.org/wiki/File:Bakersfield,_Dashboard_Truck_Freightliner_cascadia_at_Flying_J_Travel_Plaza.jpg) — The photo identifies a Freightliner dashboard, but does not establish the meaning of every symbol visible on this model or year. Rights record: Pierre André Leclercq; CC BY 4.0; attribution required..
- [OLDER TRUCK DASHBOARD](https://commons.wikimedia.org/wiki/File:Old_truck_cabin_shows_steering_wheel_dashboard_and_blue_cloth_placed_on_controls.jpg) — A separate dashboard context image. It does not identify an illuminated warning symbol or its meaning. Rights record: Shixart1985; CC BY 2.0; attribution required..

### Truck Exterior Lighting (`exterior-lighting`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): Exterior lighting helps other road users see a commercial vehicle and understand its turns, braking, width, and position.
- Claim (does): Headlamps, turn signals, tail/stop lamps, marker and clearance lamps, identification lamps, and reflectors have distinct functions and locations.
- Claim (where): Vehicle front, sides, and rear; exact requirements depend on vehicle type, size, manufacture date, and applicable rules.
- Claim (Identify by function): Front, rear, side, turn, stop, clearance, and marker lamps serve different visibility and signaling functions. Required placement, color, and operation depend on vehicle configuration and applicable regulations.

Candidate references:

- [49 CFR § 393.11 — Lamps and reflective devices](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-393/subpart-B/section-393.11)

Photo evidence (manifest license and caption):

- [TRAILER TURN SIGNAL](https://commons.wikimedia.org/wiki/File:Trailer%27s_turning_light.jpg) — The source identifies the photographed component as a trailer turning light. Rights record: Santeri Viinamäki; CC BY-SA 4.0; attribution and share-alike required..
- [AMBER SIDE MARKER](https://commons.wikimedia.org/wiki/File:Reflector.jpg) — An amber marker example; the source identifies its photographed location on a tractor-trailer. Rights record: Baytownbert; CC BY-SA 3.0; attribution and share-alike required..
- [REFLECTIVE ROADSIDE TRIANGLE](https://commons.wikimedia.org/wiki/File:Red_triangle_of_a_car.jpg) — This is a portable warning device, not a vehicle-mounted lamp. Rights record: Santeri Viinamäki; CC BY-SA 4.0; attribution and share-alike terms apply..

### Truck Chassis & Frame (`chassis-frame`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): A truck chassis includes longitudinal frame rails and crossmembers that support major vehicle systems and provide mounting points.
- Claim (does): The frame connects cab/body, engine and transmission mounts, suspension, axles, tanks, and fifth-wheel structure where fitted.
- Claim (where): Runs beneath the vehicle from front structure through the rear frame; wheelbase is measured between axle centers, with measurement conventions varying by use.
- Claim (Tractor frame versus trailer chassis): A tractor frame supports the power unit and mounts components such as the fifth wheel. The separate skeletal trailer chassis in the photograph supports an intermodal container; check its locks and structural condition under the relevant procedures.

Candidate references:

- [49 CFR § 393.201 — Frames](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-393/subpart-G/section-393.201)

Photo evidence (manifest license and caption):

- [INTERNATIONAL ROLLING CHASSIS](https://commons.wikimedia.org/wiki/File:International_truck_frame_(4308250626).jpg) — The source identifies an International rolling chassis; the visible structure gives frame context without implying a particular current design. Rights record: dave_7; CC BY 2.0; attribution required..
- [REAR FRAME AND TANDEM CONTEXT](https://commons.wikimedia.org/wiki/File:Rear_axles_tandem.jpg) — The photo shows an axle-group context and does not label every frame member or mounting point. Rights record: Panoha; CC BY-SA 3.0; attribution and share-alike terms apply..
- [EMPTY CONTAINER CHASSIS](https://commons.wikimedia.org/wiki/File:Container_trailer_rear_vierw.jpg) — The empty skeletal trailer chassis reveals its rear structure and underride guard. It is a trailer chassis, distinct from the tractor frame. Rights record: Eric Polk; CC BY-SA 4.0; attribution and share-alike required..

### Different Truck Classes (`truck-classes`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): U.S. truck classes are grouped by gross vehicle weight rating (GVWR). Classes 5–8 span successively heavier rated vehicles; Class 8 begins above 33,000 lb GVWR.
- Claim (does): The class is a rating category, not a visual body style. Similar-looking trucks can have different GVWR and regulatory treatment.
- Claim (where): Check the vehicle certification label and manufacturer documentation for its GVWR.
- Claim (Ratings, not appearance): GVWR is the manufacturer’s rated maximum weight of the individual vehicle, including its load. A combination’s rating and actual scale weights are different concepts. Verify the certification label and applicable definitions before assigning a class.

Candidate references:

- [NHTSA — Vehicle weight classes by GVWR](https://www.nhtsa.gov/document/812159-revsafetyimpactsregulatoryfuelefficiencytechmdhdpdf-review-and-analysis-potential)

Photo evidence (manifest license and caption):

- [LTL FREIGHT TRUCK](https://commons.wikimedia.org/wiki/File:LTL_truck.jpg) — This is an LTL freight-truck example; its class cannot be verified from the photograph alone. Rights record: Omnishipping; CC BY-SA 4.0; attribution and share-alike required..
- [HIGHWAY TRACTOR](https://commons.wikimedia.org/wiki/File:Volvo_VNL_670.jpg) — A tractor-trailer road-unit example; class must be checked from its certified GVWR and vehicle records, not guessed from styling. Rights record: Alex Blokha; CC BY-SA 4.0; attribution and share-alike terms apply..

### Truck Aerodynamic Components (`aerodynamic-components`)

Priority finding: Checked examples of truck aerodynamic devices against the DOE Alternative Fuels Data Center; individual performance is unverified.

- Claim (what): Aerodynamic features manage airflow around the tractor and trailer to reduce drag in applicable conditions.
- Claim (does): Examples include roof fairings, cab extenders, side skirts, and trailer-tail devices. A photo of one device does not prove a fuel-savings result for every route or setup.
- Claim (where): On the tractor cab, along the tractor-trailer gap, under trailer sides, or at the trailer rear.
- Claim (Where devices work): Cab fairings, gap devices, side skirts, and rear devices address airflow in different areas. Their benefit depends on configuration, speed, duty cycle, installation, and maintenance; no single photo proves a fuel-saving percentage.

Candidate references:

- [U.S. DOE Alternative Fuels Data Center — Aerodynamic devices](https://afdc.energy.gov/conserve/equipment)

Photo evidence (manifest license and caption):

- [TRAILERTAIL REAR DEVICE](https://commons.wikimedia.org/wiki/File:TrailerTail_at_the_rear_of_a_semi-trailer.jpg) — The source identifies this photographed unit as a TrailerTail. The device is at the trailer rear. Rights record: Z22; CC BY-SA 3.0; attribution and share-alike required..
- [TRACTOR CAB PROFILE](https://commons.wikimedia.org/wiki/File:Volvo_VNL_670.jpg) — A full vehicle profile shows the tractor and trailer envelope; small features such as roof fairings or cab extenders are model-specific. Rights record: Alex Blokha; CC BY-SA 4.0; attribution and share-alike terms apply..

### Truck Mirrors & Camera Systems (`mirrors-cameras`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): Commercial trucks use main, convex, hood-mounted, and other mirrors to help drivers monitor areas around the vehicle. Camera-monitor systems are a separate technology.
- Claim (does): Mirrors provide direct reflected views. Camera-monitor systems use exterior cameras and interior displays; placement, field of view, and regulatory approval vary by vehicle and jurisdiction.
- Claim (where): Mirrors mount around cab sides and, depending on design, near the hood or front corners.
- Claim (Coverage and limitations): Main and convex mirrors provide different fields of view and apparent object sizes. Camera-monitor systems use an exterior camera and cab display; their configuration and legal approval depend on the vehicle and jurisdiction.

Candidate references:

- [FMCSA — Driver vehicle inspection report / vehicle inspection references](https://www.fmcsa.dot.gov/safety/driver-vehicle-inspection-report)

Photo evidence (manifest license and caption):

- [OLDER TRUCK REARVIEW MIRROR](https://commons.wikimedia.org/wiki/File:Rearview_mirror_of_old_truck_closeup_(49357971608).jpg) — This source identifies a rearview mirror on an older truck. Rights record: Nenad Stojkovic; CC BY 2.0; attribution required..
- [DAY-CAB MIRROR AND TANK](https://commons.wikimedia.org/wiki/File:Truck-driver-mirror_(14550031882).jpg) — A real truck mirror is shown beside the pneumatic tank; the photo does not identify its optical type. Rights record: Ted Gresham; CC BY 2.0; attribution required..
- [CAMERA-MONITOR DISPLAYS](https://commons.wikimedia.org/wiki/File:Truck_digital_mirror_left_and_right.jpg) — The photographer identifies the displays as the left and right screens of a 2021 Mercedes-Benz Actros MirrorCam system. Rights record: KoeppiK; CC BY-SA 4.0; attribution and share-alike required..
- [EXTERIOR CAMERA DETAIL](https://commons.wikimedia.org/wiki/File:Truck_digital_mirror_left_camera_detail.jpg) — The source identifies this as the left camera of the same model family. Camera position and monitor configuration vary by vehicle. Rights record: KoeppiK; CC BY-SA 4.0; attribution and share-alike required..

### Truck & Trailer Dimensions (`truck-trailer-dimensions`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): Vehicle dimensions include tractor wheelbase, overall width and height, and trailer length. Legal limits and permit rules vary by jurisdiction, road, configuration, and load.
- Claim (does): A photograph can show vehicle form but cannot establish a legal measurement. Use a tape/measurement procedure and current jurisdiction-specific rules.
- Claim (where): Wheelbase is a vehicle measurement between axle centers; overall dimensions are measured on the complete equipment configuration.
- Claim (Measure the relevant dimension): Wheelbase, overall length, trailer length, height, and width are different measurements. Verify the actual vehicle, load, state route, and permit requirements; a side-view photograph is not a measurement.

Candidate references:

- [FHWA — Federal size regulations for commercial motor vehicles](https://ops.fhwa.dot.gov/freight/publications/size_regs_final_rpt/index.htm)

Photo evidence (manifest license and caption):

- [TRACTOR–TRAILER SIDE PROFILE](https://commons.wikimedia.org/wiki/File:Volvo_VNL_670.jpg) — Use this photograph to identify the major vehicle sections; no measurement is inferred from the image. Rights record: Alex Blokha; CC BY-SA 4.0; attribution and share-alike terms apply..
- [OPEN-DECK SEMITRAILER PROFILE](https://commons.wikimedia.org/wiki/File:Four-axle_flatbed_container_semi-trailer.jpg) — The trailer’s deck and axle arrangement are visible; the photo is not a measuring reference. Rights record: Summit666; CC BY-SA 3.0; attribution and share-alike terms apply..

### Common Visual Mechanical Defects (`visual-mechanical-defects`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): A visual inspection can identify signs such as exposed tire cords, tread separation, leaks, damaged hoses, corrosion, loose parts, or broken lamps.
- Claim (does): A visible sign prompts inspection and reporting; only a qualified assessment can determine cause and repair. Never treat the image as a safe-to-operate test.
- Claim (where): Check vehicle exterior, tires, frame, suspension, brake components, lighting, and hoses using the applicable inspection process.
- Claim (Observe, report, assess): A pre-trip visual check can identify a possible defect, but it cannot establish all internal conditions. Record what was observed and follow the carrier’s repair and inspection process; an exposed cord or separation should not be treated as cosmetic.

Candidate references:

- [49 CFR § 393.75 — Tires](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-393/subpart-G/section-393.75)
- [Washington DOL — Commercial Driver Guide: inspection, air brakes and coupling](https://dol.wa.gov/driver-licenses-and-permits/commercial-driver-licenses-cdl/cdl-training-and-testing/commercial-driver-guides/commercial-driver-guide-text-only)

Photo evidence (manifest license and caption):

- [TREAD SEPARATION](https://commons.wikimedia.org/wiki/File:Trailer_tire_with_tread_separating.jpg) — The source identifies tread separation. A photograph alone does not establish the failure cause. Rights record: Heyyouoverthere; CC BY-SA 4.0; attribution and share-alike terms apply..
- [EXPOSED TIRE CORDS](https://commons.wikimedia.org/wiki/File:Truck_Tyre_Wire.jpg) — Exposed casing material is a serious tire condition; the source photo does not prescribe a repair. Rights record: Longhair; CC BY 3.0; attribution required..
- [BRAKE CHAMBER COMPONENT](https://commons.wikimedia.org/wiki/File:Spring_brake_air_cylinder.jpg) — This is a component reference photo, not a depiction of a confirmed defect. Rights record: Panoha; CC BY-SA 3.0; attribution and share-alike terms apply..

### Truck Safety Equipment (`safety-equipment`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): Common safety equipment can include reflective warning devices, a fire extinguisher, high-visibility clothing, and wheel chocks as required by the situation or applicable rules.
- Claim (does): Equipment has different purposes: warn approaching traffic, protect a work zone, or prevent unintended vehicle movement. Requirements vary by vehicle, operation, and jurisdiction.
- Claim (where): Warning devices are placed outside the vehicle as rules require; chocks are placed at wheels when the applicable procedure calls for them.
- Claim (Equipment depends on the duty): Reflective warning devices and fire extinguishers are among equipment addressed by U.S. federal rules for covered vehicles; other equipment depends on the vehicle, task, jurisdiction, and carrier procedure. A wheel chock has a different purpose from a roadside warning device.

Candidate references:

- [49 CFR § 393.95 — Emergency equipment](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-393/subpart-G/section-393.95)
- [Washington DOL — Commercial Driver Guide: inspection, air brakes and coupling](https://dol.wa.gov/driver-licenses-and-permits/commercial-driver-licenses-cdl/cdl-training-and-testing/commercial-driver-guides/commercial-driver-guide-text-only)

Photo evidence (manifest license and caption):

- [REFLECTIVE WARNING TRIANGLE](https://commons.wikimedia.org/wiki/File:Red_triangle_of_a_car.jpg) — A real reflective triangle is shown; this specific photo was taken in Finland and does not show U.S. placement distances. Rights record: Santeri Viinamäki; CC BY-SA 4.0; attribution and share-alike terms apply..
- [WHEEL CHOCK AT TRAILER TIRE](https://commons.wikimedia.org/wiki/File:Unterlegkeil-2.JPG) — This photo shows a wheel chock at a trailer tire. Chock use depends on the work and site procedure. Rights record: UlrichHeither; CC BY-SA 3.0; attribution and share-alike required..
- [COMMERCIAL VEHICLE INSPECTION SITE](https://commons.wikimedia.org/wiki/File:Truck_inspection.jpg) — An inspection-site context image; it does not establish which safety equipment is carried in the pictured vehicle. Rights record: Oregon Department of Transportation; CC BY 2.0; attribution required..

### Tire Count on a 5-Axle Tractor-Trailer (`five-axle-tire-count`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): For the common five-axle arrangement, the combination has 5 axle lines: 1 steer + 2 drive + 2 trailer. A conventional dual-tire setup commonly has 18 tires: 2 steer tires and 8 each on tractor drive and trailer axle groups.
- Claim (does): Axle count and tire count are not interchangeable. Lift axles, wide-base singles, different trailers, and special configurations change counts.
- Claim (where): Move front to back: tractor steer → tractor drive tandem → semitrailer tandem.
- Claim (Count the layout): A common configuration has one steering axle on the tractor, two tractor drive axles, and two trailer axles. With two steer tires and dual tires at both ends of each remaining axle, the arithmetic is 2 + 8 + 8 = 18 tires.
- Claim (Why the answer varies): Five axles describe axle lines, not a fixed number of tires. Wide-base single tires, lift axles, and other configurations can change the tire count; count the equipment actually present.

Candidate references:

- [Context only — 49 CFR § 393.75: tire requirements, not axle or tire count](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-393/subpart-G/section-393.75)

Photo evidence (manifest license and caption):

- [TRACTOR–TRAILER ORIENTATION](https://commons.wikimedia.org/wiki/File:Volvo_VNL_670.jpg) — This full-vehicle photo helps orient tractor versus trailer, but the source does not label it as a five-axle combination. Rights record: Alex Blokha; CC BY-SA 4.0; attribution and share-alike terms apply..
- [TRACTOR DRIVE TANDEM](https://commons.wikimedia.org/wiki/File:Rear_axles_tandem.jpg) — This shows a tractor drive axle group; count the axle lines, not the number of tire sidewalls, when describing axles. Rights record: Panoha; CC BY-SA 3.0; attribution and share-alike terms apply..
- [TRAILER REAR AXLE EXAMPLE](https://commons.wikimedia.org/wiki/File:Semitrailer_rear_axle_(54757063900).jpg) — This historic axle is not presented as a modern U.S. two-axle trailer configuration. Rights record: Thomas Vogt; CC BY 4.0; attribution required..

### Minimum Tread Depth in the U.S. (`us-minimum-tread-depth`)

Priority finding: Checked the 4/32 and 2/32 inch thresholds and measurement exclusions against 49 CFR 393.75(b)–(c).

- Claim (what): Under 49 CFR § 393.75, steer tires on trucks and truck tractors require at least 4/32 inch in a major tread groove; other covered tires generally require at least 2/32 inch.
- Claim (does): The legal test is a groove-depth measurement at a major tread groove, excluding tie bars, humps, and fillets. Damage conditions can independently make a tire unsafe or noncompliant.
- Claim (where): Steer position has the 4/32-inch threshold; the general 2/32-inch threshold applies to other tires covered by the rule.
- Claim (Federal measurement): For the front wheels of a bus, truck, or truck tractor, 49 CFR 393.75 specifies at least 4/32 inch when measured at any point on a major tread groove. Other covered tires require at least 2/32 inch when measured in a major tread groove. Measurements are not made where tie bars, humps, or fillets are located.
- Claim (Practical inspection): Use a tread-depth gauge in major grooves and inspect across the tread. Depth alone does not establish that a tire is safe: cuts, exposed cord, separation, and other defects have separate requirements. Additional state or operating requirements may apply.

Candidate references:

- [49 CFR § 393.75 — Tires](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-393/subpart-G/section-393.75)

Photo evidence (manifest license and caption):

- [TRUCK TIRE TREAD CLOSE-UP](https://commons.wikimedia.org/wiki/File:Close_up_of_truck_tire_(2266492596).jpg) — This racing-truck slick tire photo does not demonstrate a compliant commercial-road tread depth. Rights record: tequilamike; CC BY 2.0; attribution required..
- [TREAD DAMAGE EXAMPLE](https://commons.wikimedia.org/wiki/File:Trailer_tire_with_tread_separating.jpg) — Tread separation is prohibited independently of groove-depth measurement. Rights record: Heyyouoverthere; CC BY-SA 4.0; attribution and share-alike terms apply..

### Passive vs. Active vs. Parked Regen (`regen-modes`)

Priority finding: Checked passive and active regeneration and ash maintenance concepts against the EPA technical bulletin; equipment-specific procedure remains OEM-dependent.

- Claim (what): Passive regeneration uses exhaust heat already available to oxidize accumulated particulate matter; active strategies add heat or fuel when needed. Some vehicles request a stationary or parked regeneration.
- Claim (does): Passive, active, and parked describe different regeneration strategies or operating conditions. Exact indications, prerequisites, and instructions are vehicle-specific.
- Claim (where): Regeneration occurs in the diesel particulate filter (DPF) in the exhaust aftertreatment system.
- Claim (Passive regeneration): Heat produced during normal operation can burn accumulated soot when exhaust conditions are sufficient. It may happen without the driver initiating an event.
- Claim (Active and parked regeneration): Active regeneration uses additional heat or fuel when needed; it can occur while driving or during a stationary event. A parked regeneration is a stationary procedure required by some systems under certain conditions. Follow the vehicle’s prompts and OEM instructions, including site and exhaust-clearance requirements.
- Claim (Soot and ash): Regeneration removes soot; noncombustible ash can still accumulate and eventually require filter service. Repeated requests or warning lights deserve diagnosis rather than repeated forced cycles.

Candidate references:

- [EPA — Diesel Particulate Filter Operation and Maintenance](https://www.epa.gov/sites/default/files/2016-03/documents/420f10027.pdf)

Photo evidence (manifest license and caption):

- [HINO SCR / DPR ASSEMBLY](https://commons.wikimedia.org/wiki/File:Hino_Standardized_SCR_Unit.jpg) — The photo documents aftertreatment hardware, not a visible active, passive, or parked regeneration event. Rights record: Z22; CC BY-SA 3.0; attribution and share-alike terms apply..
- [TRUCK TURBOCHARGER / EXHAUST BRAKE](https://commons.wikimedia.org/wiki/File:Turbocharger_assembly.jpg) — A turbocharger/exhaust-brake component view; no regeneration mode is visible. Rights record: Panoha; CC BY-SA 3.0; attribution and share-alike required..
- [TRUCK AIR COMPRESSOR](https://commons.wikimedia.org/wiki/File:Truck_air_compressor.jpg) — The image source identifies a truck air compressor; the Cummins name is visible on the photographed part. It is a photo of one component, not a complete engine layout. Rights record: Panoha; CC BY-SA 3.0; attribution and share-alike terms apply..

### Around What Temperature Does DEF Freeze? (`def-freezing`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): DEF (diesel exhaust fluid) freezes at about 12°F (−11°C). Vehicle systems are designed to manage freezing and thawing, but details vary by model.
- Claim (does): Frozen DEF does not mean the fluid is permanently unusable. Do not add contaminants or heat it using an unapproved method; follow the vehicle operator manual.
- Claim (where): DEF is stored in a dedicated tank and metered into the exhaust aftertreatment system on SCR-equipped engines.
- Claim (Freeze and thaw): DEF freezes at about 12°F (−11°C). Vehicle systems designed for DEF generally include provisions for thawing; follow the equipment manual and protect DEF from contamination. Do not infer the fluid’s condition from the exterior of a truck.

Candidate references:

- [Cummins — 6 Answers About Diesel Exhaust Fluid](https://www.cummins.com/en-na/news/2016/01/04/6-answers-about-diesel-exhaust-fluid)

Photo evidence (manifest license and caption):

- [SCR / DIESEL EXHAUST TREATMENT](https://commons.wikimedia.org/wiki/File:Hino_Standardized_SCR_Unit.jpg) — This shows aftertreatment hardware; it does not depict frozen DEF or a specific DEF tank. Rights record: Z22; CC BY-SA 3.0; attribution and share-alike terms apply..
- [DIESEL TRACTOR CONTEXT](https://commons.wikimedia.org/wiki/File:Bakersfield,_%20(CA)_Truck_Freightliner_at_Flying_J_Travel_Plaza_(en2016)_(2).JPG) — A diesel tractor context image; the source does not identify its emissions system or DEF tank position. Rights record: Pierre André Leclercq; CC BY-SA 4.0; attribution and share-alike terms apply..

### The Four AAR Questions (`aar-four-questions`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): A common After Action Review (AAR) asks: What was supposed to happen? What actually happened? What went well and why? What can we improve or learn?
- Claim (does): An AAR is a structured, no-blame learning conversation after an event, exercise, shift, or project. Question wording varies by organization and context.
- Claim (where): Use the questions after an operation or incident, with people who participated and objective records where available.
- Claim (Turn observations into action): Compare the intended plan with a timeline and actual records, discuss what helped and what could improve, and assign specific follow-up actions. The wording and the meaning of AAR can differ by organization.

Candidate references:

- [U.S. Fire Administration — After Action Review: A Valuable Learning Opportunity](https://apps.usfa.fema.gov/pdf/efop/efo43180.pdf)

Photo evidence (manifest license and caption):

- [CARGO-LOADING OPERATION](https://commons.wikimedia.org/wiki/File:Loading_cargo_onto_a_truck_at_Cam_Ranh_Bay.jpg) — A historical cargo operation provides a real event context for a debrief; it does not document a specific after-action review. Rights record: SSG Gilbert L. Meyers / U.S. Army; U.S. federal government work; public domain in the United States..
- [FREIGHT-HOUSE TRUCK OPERATION](https://commons.wikimedia.org/wiki/File:Truck_trailers_line_up_at_a_freight_house_to_load_and_unload_goods_1a34619v.jpg) — A real loading/unloading scene; it does not record the discussion or outcome of an AAR. Rights record: Jack Delano / U.S. Office of War Information; U.S. federal government work; public domain in the United States..

### Budget vs. Forecast (`budget-vs-forecast`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): A budget is an approved plan for a period. A forecast is a current estimate of expected results, updated as actual conditions change.
- Claim (does): Compare actual results and the latest forecast against the budget to identify timing, volume, rate, cost, and utilization differences. Accounting practices differ.
- Claim (where): A carrier may forecast freight volume, revenue, fuel, repairs, payroll, and equipment availability.
- Claim (Different questions): A budget sets an approved target or spending authority for a period. A forecast estimates the likely outcome using information available now; a forecast can differ from the original budget.
- Claim (Example): A fleet budgets $10,000 for maintenance but forecasts $12,000 after an unexpected repair. Track the $2,000 variance and its causes rather than treating the forecast as automatic approval to spend.

Candidate references:

- [Context only — FMCSA — Motor carrier financial and operational context](https://www.fmcsa.dot.gov/registration/financial-responsibility-motor-carriers)

Photo evidence (manifest license and caption):

- [FREIGHT-HOUSE OPERATION](https://commons.wikimedia.org/wiki/File:Truck_trailers_line_up_at_a_freight_house_to_load_and_unload_goods_1a34619v.jpg) — A historical operations photo, not a budget record. Rights record: Jack Delano / U.S. Office of War Information; U.S. federal government work; public domain in the United States..
- [TRAILERS AT A WAREHOUSE](https://commons.wikimedia.org/wiki/File:Row_of_Trailer_Trucks_at_a_Loading_Dock_Warehouse_-_DPLA_-_def951fbf4581639fe4eb05f0f289b26.jpg) — A warehouse photograph, not a financial forecast. Rights record: David E. Lucas / Columbus Metropolitan Library; No Copyright — United States; rights determination by contributing library..

### DVIR Repair Loop (`dvir-repair-loop`)

Priority finding: Checked defect reporting, repair, certification and retention against 49 CFR 396.11; corrected an outdated passenger-carrier no-defect statement. Driver review is in 396.13.

- Claim (what): A Driver Vehicle Inspection Report (DVIR) records reportable defects. The carrier repairs a defect likely to affect safe operation before dispatch and certifies correction or that correction was unnecessary, as required.
- Claim (does): The loop is report → evaluate → repair or determine no repair is needed → certify → retain records under applicable rules. A defect report is not itself proof that a repair was completed.
- Claim (where): The driver identifies vehicle condition; the carrier and maintenance process handle the required repair and certification steps.
- Claim (Report and assess): A driver reports defects or deficiencies that could affect safe operation or cause a breakdown. Under the current federal rule, a no-defect report is not required when no defect or deficiency is discovered or reported; applicability, exceptions, state rules, and carrier policies still need checking.
- Claim (Repair and certify): Before dispatch, the carrier must correct reported defects likely to affect safe operation. The carrier or its agent certifies that the defect was corrected or that correction was unnecessary; the next driver reviews the last report and signs when required. Retain the report and certifications for the required period.

Candidate references:

- [49 CFR § 396.11 — Driver vehicle inspection reports](https://www.ecfr.gov/current/title-49/section-396.11)
- [49 CFR § 396.13 — Driver inspection](https://www.ecfr.gov/current/title-49/section-396.13)

Photo evidence (manifest license and caption):

- [TRUCK AT OREGON INSPECTION STATION](https://commons.wikimedia.org/wiki/File:Truck_inspection.jpg) — A real inspection-site photo; it does not show a specific DVIR form or repair record. Rights record: Oregon Department of Transportation; CC BY 2.0; attribution required..
- [AIR DISC BRAKE ASSEMBLY](https://commons.wikimedia.org/wiki/File:Air_disc_brake.jpg) — A brake system example; the image does not identify a defect or repair outcome. Rights record: Panoha; CC BY-SA 3.0; attribution and share-alike terms apply..
- [TREAD SEPARATION](https://commons.wikimedia.org/wiki/File:Trailer_tire_with_tread_separating.jpg) — The source identifies tread separation. A photograph alone does not establish the failure cause. Rights record: Heyyouoverthere; CC BY-SA 4.0; attribution and share-alike terms apply..

### FMI 3–6 Usually Suggest… (`fmi-3-to-6`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): In J1939 diagnostics, FMI 3 usually means voltage above normal or shorted high; FMI 4 means voltage below normal or shorted low; FMI 5 means current below normal or open circuit; FMI 6 means current above normal or grounded circuit.
- Claim (does): FMI wording is a general failure-mode description. The SPN, OEM diagnostic tree, circuit design, and test conditions are needed to diagnose the actual fault.
- Claim (where): Use the complete SPN/FMI and the specific OEM service information; do not replace a component based on FMI alone.
- Claim (Interpret the code as a clue): FMI describes the type of abnormal condition associated with a suspect parameter; it does not identify the failed part. For example, a low-voltage indication may come from wiring, supply, sensor, or controller problems.
- Claim (Diagnostic sequence): Record the full SPN/FMI, occurrence count, operating conditions, and vehicle-specific fault information. Follow the OEM diagnostic procedure and electrical safety practices before replacing components.

Candidate references:

- [SAE J1939 FMI definitions (technical reference)](https://publications.vtt.fi/pdf/tiedotteet/2006/T2343.pdf)
- [Eaton ServiceRanger — Example OEM J1939 FMI definitions](https://productinfo.serviceranger4.com/books/TRTS0950/lang/en-us/section/TS0950FC970)

Photo evidence (manifest license and caption):

- [TRUCK INSTRUMENT PANEL](https://commons.wikimedia.org/wiki/File:Bakersfield,_Dashboard_Truck_Freightliner_cascadia_at_Flying_J_Travel_Plaza.jpg) — The photo does not display or verify an FMI fault code. Rights record: Pierre André Leclercq; CC BY 4.0; attribution required..
- [ENGINE-DRIVEN AIR COMPRESSOR](https://commons.wikimedia.org/wiki/File:Truck_air_compressor.jpg) — A photographed vehicle component; no fault or wiring condition is inferred. Rights record: Panoha; CC BY-SA 3.0; attribution and share-alike terms apply..

### 7-Way Connector: Red Wire (`seven-way-red-wire`)

Priority finding: Checked the red circuit 4 label against the Caltrans SAE J560 comparison table; removed the unverified secondary-power qualifier.

- Claim (what): In the SAE J560 table published by Caltrans, circuit 4 is red and is designated for stop lamps and antilock devices.
- Claim (does): Connector pinouts and color wiring must be checked against the applicable SAE J560 edition and vehicle/trailer wiring. Some fleets or jurisdictions use modified configurations.
- Claim (where): The seven-way electrical jumper connects tractor and trailer; red is the J560 conductor color for circuit 4.
- Claim (Scope of the answer): The Caltrans comparison table identifies J560 circuit 4 as red for stop lamps and antilock devices. Caltrans uses a different wiring configuration, and other seven-way connector families and fleet modifications can differ.
- Claim (Verify before work): Confirm connector type, pin orientation, wiring diagram, and circuit function on the vehicle. Wire color alone is not proof of function, especially after repairs or modifications.

Candidate references:

- [SAE J560 — Primary and Auxiliary Seven Conductor Connector](https://saemobilus.sae.org/standards/j560_202002-primary-auxiliary-seven-conductor-electrical-connector-truck-trailer-jumper-cable)
- [Caltrans — Seven-pin trailer connector wiring and state deviation](https://dot.ca.gov/programs/equipment/electrical/wires-cable-harness)

Photo evidence (manifest license and caption):

- [TRAILER CONNECTIONS AT THE GLADHANDS](https://commons.wikimedia.org/wiki/File:Anschl%C3%BCsse_Anh%C3%A4nger_08.jpg) — The photo shows connection context; individual wire colors and pin assignments cannot be read here. Rights record: GeorgHH; Public domain according to Wikimedia Commons file record..
- [TRAILER TURN LAMP](https://commons.wikimedia.org/wiki/File:Trailer%27s_turning_light.jpg) — A real trailer lighting component, not a view of the J560 connector pinout. Rights record: Santeri Viinamäki; CC BY-SA 4.0; attribution and share-alike required..

### OEM vs. Aftermarket vs. Reman (`oem-aftermarket-reman`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): OEM parts are supplied by the original equipment manufacturer or its authorized channel; aftermarket parts are supplied by other manufacturers; remanufactured parts are used components restored to a defined process/specification.
- Claim (does): Part origin and remanufacturing status are determined from traceability, labeling, supplier documentation, and applicable warranty—not appearance alone.
- Claim (where): Compare part number, fitment, warranty, quality requirements, and supplier traceability for the specific application.
- Claim (Source versus condition): OEM and aftermarket describe supply or origin; remanufactured describes a restoration process. A part can be both OEM-supplied and remanufactured, so these labels are not mutually exclusive.
- Claim (Compare the actual part): Check fitment, specifications, warranty, core charges and return conditions, traceability, and the remanufacturer’s documented process. A used part is not automatically remanufactured.

Candidate references:

- [U.S. Federal Trade Commission — Buying auto parts and repair services](https://consumer.ftc.gov/articles/0211-auto-repair-basics)

Photo evidence (manifest license and caption):

- [TRUCK TURBOCHARGER ASSEMBLY](https://commons.wikimedia.org/wiki/File:Turbocharger_assembly.jpg) — The photo documents a truck turbocharger/exhaust-brake assembly; provenance as OEM or replacement part is not established. Rights record: Panoha; CC BY-SA 3.0; attribution and share-alike required..
- [SPRING-BRAKE CHAMBER](https://commons.wikimedia.org/wiki/File:Spring_brake_air_cylinder.jpg) — The source identifies the physical brake component, not its supply channel or refurbishment history. Rights record: Panoha; CC BY-SA 3.0; attribution and share-alike terms apply..

### Reorder Point Formula (`reorder-point`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): A common reorder point is average demand during replenishment lead time plus safety stock: ROP = (average daily demand × lead-time days) + safety stock.
- Claim (does): The formula estimates when to trigger replenishment. Demand variability, supplier lead time, criticality, and review policy determine appropriate safety stock.
- Claim (where): Apply the calculation to a specific part number and unit of measure; do not mix eaches, kits, or service assemblies.
- Claim (Worked example): If demand averages 4 filters per day, replenishment lead time is 5 days, and safety stock is 10 filters, reorder at 4 × 5 + 10 = 30 filters.
- Claim (What can invalidate it): Use consistent units and account for variability in demand and lead time. The formula triggers replenishment; order quantity is a separate decision, and open purchase orders affect inventory position.

Candidate references:

- [Context only — U.S. Small Business Administration — Manage inventory](https://www.sba.gov/business-guide/manage-your-business/manage-your-finances)

Photo evidence (manifest license and caption):

- [TRUCK AIR COMPRESSOR](https://commons.wikimedia.org/wiki/File:Truck_air_compressor.jpg) — A real replacement-part category; this image does not show stock quantity or replenishment lead time. Rights record: Panoha; CC BY-SA 3.0; attribution and share-alike terms apply..
- [SPRING-BRAKE CHAMBER](https://commons.wikimedia.org/wiki/File:Spring_brake_air_cylinder.jpg) — A real maintenance component, with no inventory level visible in the photo. Rights record: Panoha; CC BY-SA 3.0; attribution and share-alike terms apply..

### Leading vs. Lagging Indicator (`leading-vs-lagging-indicators`)

Priority finding: Checked safety indicator distinctions against OSHA guidance; individual fleet metrics need defined denominators.

- Claim (what): A leading indicator tracks actions or conditions intended to prevent future outcomes, such as completed inspections or corrective actions. A lagging indicator tracks results after events, such as breakdowns or injuries.
- Claim (does): Indicators need clear definitions, denominators, time periods, and data quality. A single photograph is not a KPI.
- Claim (where): Use leading measures to monitor preventive work and lagging measures to monitor outcomes; review both together.
- Claim (Use both kinds): Inspection completion or timely closure of defects can show whether a process is being performed. Breakdowns and injury counts describe outcomes that have already occurred.
- Claim (Avoid false confidence): A high completion rate is useful only if inspections are effective and defects are reported accurately. Pair activity measures with quality checks and outcome measures, and define the measurement period and denominator.

Candidate references:

- [OSHA — Leading indicators](https://www.osha.gov/leading-indicators)

Photo evidence (manifest license and caption):

- [ROADSIDE INSPECTION CONTEXT](https://commons.wikimedia.org/wiki/File:Truck_inspection.jpg) — A real inspection setting that may relate to preventive safety activity; it is not itself a leading-indicator statistic. Rights record: Oregon Department of Transportation; CC BY 2.0; attribution required..
- [TIRE FAILURE OUTCOME EXAMPLE](https://commons.wikimedia.org/wiki/File:Trailer_tire_with_tread_separating.jpg) — A real tire damage example; it does not establish incident rate or root cause. Rights record: Heyyouoverthere; CC BY-SA 4.0; attribution and share-alike terms apply..

### BOL / POD (`bol-pod`)

Priority finding: Checked the existence and scope of the federal bill-of-lading rule for for-hire, non-exempt carriers; proof-of-delivery and contract effects still need source-specific review.

- Claim (what): A bill of lading (BOL) records shipment and carriage details and may serve as a receipt/contract document. A proof of delivery (POD) records delivery completion and may include receiver evidence.
- Claim (does): The BOL is associated with shipment pickup and carriage; POD evidence is associated with delivery. Electronic processes and contract requirements vary.
- Claim (where): Keep documents tied to the load/reference number and delivery event; follow shipper, broker, carrier, and customer requirements.
- Claim (At pickup): The bill of lading identifies the shipment and parties and documents the goods tendered for carriage. Details, exceptions, signatures, and the applicable contract determine its legal effect.
- Claim (At delivery): Proof of delivery records evidence of delivery, often through a signed document or electronic record. Check delivery exceptions, dates, and customer requirements before billing; a BOL and POD may be separate documents or combined.

Candidate references:

- [49 CFR § 373.101 — Bills of lading for for-hire, non-exempt carriers](https://www.ecfr.gov/current/title-49/section-373.101)

Photo evidence (manifest license and caption):

- [CARGO BEING LOADED FOR TRANSPORT](https://commons.wikimedia.org/wiki/File:Loading_cargo_onto_a_truck_at_Cam_Ranh_Bay.jpg) — A shipment-handling scene; the image is not a bill of lading. Rights record: SSG Gilbert L. Meyers / U.S. Army; U.S. federal government work; public domain in the United States..
- [FREIGHT HOUSE LOAD / UNLOAD](https://commons.wikimedia.org/wiki/File:Truck_trailers_line_up_at_a_freight_house_to_load_and_unload_goods_1a34619v.jpg) — A freight movement context; the photograph is not a signed proof of delivery. Rights record: Jack Delano / U.S. Office of War Information; U.S. federal government work; public domain in the United States..

### TONU (`tonu`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): TONU means “truck ordered, not used” in common freight billing usage: a carrier may seek compensation when a load is cancelled after a truck has been ordered or dispatched.
- Claim (does): Eligibility, timing, required notice, and amount depend on the rate confirmation, customer terms, and facts of the cancellation.
- Claim (where): Record the load reference, dispatch status, notice time, and agreed contract terms.
- Claim (Record the event): Document the accepted load, dispatch, cancellation time, truck position, communications, and agreed charge. Whether compensation is owed depends on the rate confirmation and other contract terms.
- Claim (Related charges): TONU addresses a load that does not move after a truck is ordered or committed. Detention addresses qualifying waiting time; a contract determines whether either charge applies.

Candidate references:

- [Context only — FMCSA — Broker and carrier arrangements are governed by applicable agreements and regulations](https://www.fmcsa.dot.gov/regulations)

Photo evidence (manifest license and caption):

- [TRAILERS AT A LOADING-DOCK WAREHOUSE](https://commons.wikimedia.org/wiki/File:Row_of_Trailer_Trucks_at_a_Loading_Dock_Warehouse_-_DPLA_-_def951fbf4581639fe4eb05f0f289b26.jpg) — A trailer-terminal context; no cancellation or charge is shown. Rights record: David E. Lucas / Columbus Metropolitan Library; No Copyright — United States; rights determination by contributing library..
- [EMPTY FLATBED TRAILER](https://commons.wikimedia.org/wiki/File:Four-axle_flatbed_container_semi-trailer.jpg) — The source identifies an empty flatbed; emptiness alone does not establish a TONU or dispatch status. Rights record: Summit666; CC BY-SA 3.0; attribution and share-alike terms apply..

### FSC (`fuel-surcharge`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): A fuel surcharge (FSC) is a rate adjustment intended to address fuel-price changes. The calculation and index, baseline, schedule, and payer depend on the contract.
- Claim (does): An FSC may be a cents-per-mile table or a formula tied to a published index; do not assume one method is universal.
- Claim (where): Check the signed rate confirmation or contract for the selected index, base price, calculation, and applicable miles.
- Claim (A contract-driven adjustment): An FSC formula may use a published fuel index, a baseline price, a fuel-economy assumption, and an agreed mileage basis. The contract defines timing, rounding, exclusions, and the party charged.
- Claim (Simple illustration): If an agreement sets a surcharge of $0.20 per loaded mile and the billable distance is 1,000 loaded miles, the surcharge is $200. This is an example, not a universal rate or formula.

Candidate references:

- [U.S. Energy Information Administration — Weekly retail diesel prices](https://www.eia.gov/petroleum/gasdiesel/)
- [FMCSA — Motor carrier registration and broker/carrier resources](https://www.fmcsa.dot.gov/registration)

Photo evidence (manifest license and caption):

- [FUEL DELIVERY TANKER](https://commons.wikimedia.org/wiki/File:Rotten_Robbie_tanker_truck_delivering_fuel.jpg) — The source identifies a fuel-delivery tanker, a bulk fuel transport example. Rights record: Grendelkhan; CC BY-SA 4.0; attribution and share-alike terms apply..
- [FREIGHT CARRIER TRACTOR](https://commons.wikimedia.org/wiki/File:Bakersfield,_%20(CA)_Truck_Freightliner_at_Flying_J_Travel_Plaza_(en2016)_(2).JPG) — This vehicle photo does not identify the carrier’s fuel cost or applied surcharge. Rights record: Pierre André Leclercq; CC BY-SA 4.0; attribution and share-alike terms apply..

### Detention Calculation (`detention-calculation`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): Detention is compensation for qualifying time a truck is held beyond contractually allowed free time at pickup or delivery.
- Claim (does): A basic example is chargeable hours × the agreed hourly rate, often with rounding, caps, or separate terms. Start/end timestamps and free-time definitions matter.
- Claim (where): Keep arrival, check-in, dock, release, and departure timestamps with the load records.
- Claim (Worked example): If the contract allows two hours free and recognizes a documented four-hour wait, two hours may be chargeable. At an agreed $75 per hour, the example is 2 × $75 = $150 before any contractual rounding, caps, or exclusions.
- Claim (Evidence and terms): Record the times and events specified in the agreement, such as arrival, check-in, release, and departure. Appointment compliance, notice deadlines, approvals, and the party responsible can change the amount or eligibility.

Candidate references:

- [FMCSA — Impact of driver detention time on safety and operations](https://www.fmcsa.dot.gov/research-and-analysis/impact-driver-detention-time-safety-and-operations)

Photo evidence (manifest license and caption):

- [FREIGHT-HOUSE LOADING ACTIVITY](https://commons.wikimedia.org/wiki/File:Truck_trailers_line_up_at_a_freight_house_to_load_and_unload_goods_1a34619v.jpg) — A historical freight-house scene; wait time and contract terms are not visible. Rights record: Jack Delano / U.S. Office of War Information; U.S. federal government work; public domain in the United States..
- [TRAILERS AT WAREHOUSE DOCKS](https://commons.wikimedia.org/wiki/File:Row_of_Trailer_Trucks_at_a_Loading_Dock_Warehouse_-_DPLA_-_def951fbf4581639fe4eb05f0f289b26.jpg) — A terminal context; parked trailers do not establish a detention event. Rights record: David E. Lucas / Columbus Metropolitan Library; No Copyright — United States; rights determination by contributing library..

### Invoice Packet (`invoice-packet`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): A carrier invoice packet commonly includes an invoice, rate confirmation or load tender, bill of lading, proof of delivery, and approved accessorial evidence as required by the customer.
- Claim (does): Match every document to the same load reference; confirm the rate, delivered quantity, signatures or electronic evidence, and accessorial approvals before submission.
- Claim (where): Submit through the customer’s stated billing channel and keep a copy of the complete packet.
- Claim (Build from the agreement): Match the invoice to the customer’s purchase order, load or reference number, rate, agreed accessorials, and required delivery evidence. Packet requirements vary by customer and contract.
- Claim (Avoid delays): Check that signatures or electronic delivery evidence are legible, dates match the shipment, and supporting approvals and timestamps accompany accessorial charges. Keep the original records according to applicable requirements.

Candidate references:

- [Context only — FMCSA — Records and regulatory resources](https://www.fmcsa.dot.gov/regulations)

Photo evidence (manifest license and caption):

- [CARGO LOADING DOCUMENTATION CONTEXT](https://commons.wikimedia.org/wiki/File:Loading_cargo_onto_a_truck_at_Cam_Ranh_Bay.jpg) — A shipment operation context image; it does not show a commercial invoice packet. Rights record: SSG Gilbert L. Meyers / U.S. Army; U.S. federal government work; public domain in the United States..
- [LTL FREIGHT DELIVERY CONTEXT](https://commons.wikimedia.org/wiki/File:LTL_truck.jpg) — A freight movement example; it does not establish proof of delivery or billing status. Rights record: Omnishipping; CC BY-SA 4.0; attribution and share-alike required..

### Net 30 (`net-30`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): Net 30 usually means payment is due 30 calendar days from the date defined by the contract, such as invoice date or receipt of an approved invoice.
- Claim (does): The triggering date, business-day treatment, disputes, and late fees are controlled by the agreement and applicable law.
- Claim (where): Read the invoice terms and customer contract; calculate the due date from the stated trigger, not an assumed universal convention.
- Claim (Find the start date): Count from the date defined in the agreement. Invoice date, receipt date, and acceptance of a complete invoice packet can produce different due dates.
- Claim (Example): If a contract specifies 30 calendar days from an invoice dated June 1, the due date is July 1. Confirm any terms for weekends, disputes, or payment processing.

Candidate references:

- [Context only — U.S. Small Business Administration — Manage your finances](https://www.sba.gov/business-guide/manage-your-business/manage-your-finances)

Photo evidence (manifest license and caption):

- [TRAILERS AT A FREIGHT CUSTOMER SITE](https://commons.wikimedia.org/wiki/File:Row_of_Trailer_Trucks_at_a_Loading_Dock_Warehouse_-_DPLA_-_def951fbf4581639fe4eb05f0f289b26.jpg) — A freight customer context image; no invoice or payment term is visible. Rights record: David E. Lucas / Columbus Metropolitan Library; No Copyright — United States; rights determination by contributing library..
- [FREIGHT OPERATIONS](https://commons.wikimedia.org/wiki/File:Truck_trailers_line_up_at_a_freight_house_to_load_and_unload_goods_1a34619v.jpg) — The photograph predates current payment systems and is used only as transport context. Rights record: Jack Delano / U.S. Office of War Information; U.S. federal government work; public domain in the United States..

### Freight Factoring (`freight-factoring`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): Freight factoring is a transaction in which a carrier sells or assigns eligible invoices/receivables to a factor for earlier cash, generally for a fee and subject to contract terms.
- Claim (does): Advance rate, fees, recourse, reserves, notification, and eligibility vary. Compare the full agreement and customer/payment effects.
- Claim (where): Review an actual factoring agreement and invoice terms; do not infer the cost from a quoted advance alone.
- Claim (How cash moves): A factor advances part of an eligible receivable, collects according to the agreement, then settles any reserve less fees and adjustments. The advance is not the same as the total net proceeds.
- Claim (Compare contracts): Review recourse and non-recourse terms, reserve release, minimums, fees, notice of assignment, customer credit limits, and handling of disputed invoices. A factor’s collection rights depend on the contract and applicable law.

Candidate references:

- No non-photo technical source recorded; source verification needed.

Photo evidence (manifest license and caption):

- [LTL FREIGHT MOVEMENT](https://commons.wikimedia.org/wiki/File:LTL_truck.jpg) — A real carrier-service context; no invoice sale is shown. Rights record: Omnishipping; CC BY-SA 4.0; attribution and share-alike required..
- [TRUCK FREIGHT LOADING](https://commons.wikimedia.org/wiki/File:Loading_cargo_onto_a_truck_at_Cam_Ranh_Bay.jpg) — A loading context; it does not show a commercial factoring arrangement. Rights record: SSG Gilbert L. Meyers / U.S. Army; U.S. federal government work; public domain in the United States..

### Downtime (`downtime`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): Downtime is time equipment is unavailable for its planned work because of maintenance, repair, inspection, waiting, or another operational constraint.
- Claim (does): Track start/end definitions consistently and separate planned from unplanned downtime when managing availability.
- Claim (where): Record the unit, reason, start and return-to-service times, and resulting missed or reassigned work.
- Claim (Define the clock): Specify whether downtime begins at breakdown, arrival in the shop, or missed dispatch, and whether it ends at repair completion or return to service. Consistent definitions make fleet comparisons useful.
- Claim (Diagnose the cost): Break out repair labor and parts, towing, replacement equipment, lost productive time, and other contract-specific costs. Avoid double-counting a missed load and a replacement expense.

Candidate references:

- [Context only — FMCSA — Inspection, repair, and maintenance](https://www.fmcsa.dot.gov/regulations/inspection-repair-and-maintenance)

Photo evidence (manifest license and caption):

- [TRUCK AT INSPECTION SITE](https://commons.wikimedia.org/wiki/File:Truck_inspection.jpg) — The photo does not establish a breakdown or time out of service. Rights record: Oregon Department of Transportation; CC BY 2.0; attribution required..
- [TRUCK AIR COMPRESSOR](https://commons.wikimedia.org/wiki/File:Truck_air_compressor.jpg) — A component that can appear in a maintenance workflow; this photo does not show a failed compressor. Rights record: Panoha; CC BY-SA 3.0; attribution and share-alike terms apply..

### Deadhead (`deadhead`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): Deadhead miles are vehicle miles driven without revenue freight, often to reach a pickup or reposition after delivery.
- Claim (does): An empty deck does not always mean deadhead: the tractor may be under a paid movement, bobtailing, or repositioning under a contract. Define the metric consistently.
- Claim (where): Use dispatch/load records and odometer or telematics miles to classify loaded and empty miles.
- Claim (Measure consistently): Record miles driven without revenue freight and choose a consistent denominator for a deadhead percentage, such as total miles. A 100-mile empty repositioning trip on a 500-mile total trip is 20% of total miles.
- Claim (Operational tradeoff): A repositioning move can still be economically useful if it enables a better next load. Compare total trip revenue, cost, time, and available alternatives rather than judging one percentage in isolation.

Candidate references:

- [Context only — FMCSA — Motor carrier operations and records](https://www.fmcsa.dot.gov/regulations)

Photo evidence (manifest license and caption):

- [EMPTY FLATBED SEMITRAILER](https://commons.wikimedia.org/wiki/File:Four-axle_flatbed_container_semi-trailer.jpg) — The source describes this trailer as empty; the image alone does not show whether it is moving without a load or being repositioned. Rights record: Summit666; CC BY-SA 3.0; attribution and share-alike terms apply..
- [LTL TRUCK READY TO UNLOAD](https://commons.wikimedia.org/wiki/File:LTL_truck.jpg) — This is a partially loaded/less-than-loaded freight context, not a deadhead proof. Rights record: Omnishipping; CC BY-SA 4.0; attribution and share-alike required..

### Power Swap (`power-only-swap`)

Priority finding: No claim-level source verification completed in this pass.

- Claim (what): A power swap commonly describes changing the tractor/power unit while leaving a trailer in place or transferring it to another tractor, but carrier terminology can vary.
- Claim (does): Confirm which party supplies tractor, driver, trailer, insurance, and responsibility for securement, documents, and equipment condition.
- Claim (where): At the tractor–trailer coupling point, under an agreed dispatch and interchange process.
- Claim (Define the arrangement): A power-unit change can keep a trailer moving when a tractor or driver changes, but carrier terminology differs. Document the unit and trailer identifiers, condition, location, custody, and dispatch instructions at the exchange.

Candidate references:

- [Context only — FMCSA — Intermodal equipment and motor-carrier regulations](https://www.fmcsa.dot.gov/regulations)

Photo evidence (manifest license and caption):

- [TRACTOR WITH TRAILER](https://commons.wikimedia.org/wiki/File:Volvo_VNL_670.jpg) — A tractor–trailer combination illustrates that tractor power unit and trailer are separable equipment. Rights record: Alex Blokha; CC BY-SA 4.0; attribution and share-alike terms apply..
- [TRACTOR EXAMPLE](https://commons.wikimedia.org/wiki/File:Peterbilt_with_custom_sleeper_from_SB_I-95_%40_FL_206.jpg) — A separate tractor example; it is not evidence that a power-only swap occurred. Rights record: DanTD; CC BY 4.0; attribution required..
