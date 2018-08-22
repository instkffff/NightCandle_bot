const ep = require('evepraisal')

ep.create(
    ` 50MN Y-T8 Compact Microwarpdrive	1	Propulsion Module	Module	Medium Slot
 Adaptive Invulnerability Field II	1	Shield Hardener	Module	Medium Slot
 Caldari Navy Antimatter Charge M	2,900	Hybrid Charge	Charge	Cargo Hold
 Caldari Navy Iridium Charge M	2,000	Hybrid Charge	Charge	Cargo Hold
 Damage Control II	1	Damage Control	Module	Low Slot
 Drone Damage Amplifier II	1	Drone Damage Modules	Module	Low Slot
 Drone Damage Amplifier II	1	Drone Damage Modules	Module	Low Slot
 Faint Epsilon Scoped Warp Scrambler	1	Warp Scrambler	Module	Medium Slot
 Large F-S9 Regolith Compact Shield Extender	1	Shield Extender	Module	Medium Slot
 Large F-S9 Regolith Compact Shield Extender	1	Shield Extender	Module	Medium Slot
 Magnetic Field Stabilizer II	1	Magnetic Field Stabilizer	Module	Low Slot
 Magnetic Field Stabilizer II	1	Magnetic Field Stabilizer	Module	Low Slot
 Medium Core Defense Field Extender I	1	Rig Shield	Module	Rig Slot
 Medium Core Defense Field Extender I	1	Rig Shield	Module	Rig Slot
 Medium Ghoul Compact Energy Nosferatu	1	Energy Nosferatu	Module	High Slot
 Medium Micro Jump Drive	1	Micro Jump Drive	Module	Medium Slot
 Medium Processor Overclocking Unit I	1	Rig Core	Module	Rig Slot
 Power Diagnostic System II	1	Power Diagnostic System	Module	Low Slot
 Regulated Neutron Phase Cannon I	1	Hybrid Weapon	Module	High Slot
 Regulated Neutron Phase Cannon I	1	Hybrid Weapon	Module	High Slot
 Regulated Neutron Phase Cannon I	1	Hybrid Weapon	Module	High Slot
 Regulated Neutron Phase Cannon I	1	Hybrid Weapon	Module	High Slot
 Regulated Neutron Phase Cannon I	1	Hybrid Weapon	Module	High Slot
 Valkyrie II	6	Combat Drone	Drone	Drone Bay
Gnosis	1	Combat Battlecruiser	Ship	`, // The data you're getting an appraisal on
    'jita', // The market you're looking up data for.
    {} )// Optional options argument. Can be used to set persist="no", etc. This just gets passed to evepraisal.
.then((a) => {
  console.log(a)
})


