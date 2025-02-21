import { Task } from './types';

const taskHash: Map<string, Partial<Task>> = new Map([
  [
    'buy-essential-gear',
    {
      title: 'Buy Essential Gear',
      link: '',
    },
  ],
  [
    'limegrave-west-map-fragment',
    {
      title: 'Obtain Limgrave West Map Fragment',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/map_limgrave_west_key_items_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Map+(Limgrave,+West)',
    },
  ],
  [
    'obtain-wetstone-knife',
    {
      title: 'Obtain Whetstone Knife',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/whetstone_knife-elden-ring-wiki-guide-200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Whetstone+Knife',
    },
  ],
  [
    'unlock-torrent',
    {
      title: 'Unlock Torrent & Spirit Bell',
      link: 'https://eldenring.wiki.fextralife.com/Torrent',
    },
  ],
  [
    'boc-seamster-quest',
    {
      title: "Do Boc the Seamster's Quest",
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/boc_npcs_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Boc+the+Seamster',
      longDesc: `South-east from Gatefront Ruins (past east of the telescope on the map), you'll hear him shout, so hit the small tree around here to begin <a class="wiki_link" title="Elden Ring Boc the Seamster" href="/Boc+the+Seamster" target="">Boc the Seamster</a>'s questline (see <a class="wiki_link" title="Elden Ring Side Quests" href="/Side+Quests" target="">Side Quests</a> for other quests). It will take you to <a class="wiki_link" title="Elden Ring Coastal Cave" href="/Coastal+Cave" target="">Coastal Cave</a>&nbsp;(southern portion of the western beach), which also unlocks access to the <a class="wiki_link" title="Elden Ring Church of Dragon Communion" href="/Church+of+Dragon+Communion" target="">Church of Dragon Communion</a>&nbsp;(if you continue further in the cave without exiting it via portal).`,
    },
  ],
  [
    'defeat-nights-cavalry',
    {
      title: "Defeat Night's Cavalry.",
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nights_cavalry_bosses_elden_ring_wiki_guide.jpg',
      link: "https://eldenring.wiki.fextralife.com/Night's+Cavalry",
      longDesc:
        "Night's Cavalry are Bosses in Elden Ring. These imposing knights ride atop dark steeds and appear only at night, wielding large flails and halberds. There are several Night's Cavalry that roam the Lands Between. These are optional bosses, as players don't need to defeat them in order to advance in Elden Ring.",
    },
  ],
  [
    'find-sellen',
    {
      title: "Find Sorceress Sellen (if you're a mage)",
      longDesc: `<p>If you are a mage, you will want to unlock <a class="wiki_link" title="Elden Ring Sorceress Sellen" href="/Sorceress+Sellen" target="">Sorceress Sellen</a> in <a class="wiki_link" title="Elden Ring Waypoint Ruins" href="/Waypoint+Ruins" target="">Waypoint Ruins</a> - follow the road south from Gatefront Ruins to find it.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/sorceress-sellen-npc-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Sorceress+Sellen',
    },
  ],
  [
    'talk-to-roderika',
    {
      title: 'Talk to Roderika',
      longDesc: `<p>Head towards <a class="wiki_link" title="Elden Ring Stormhill" href="/Stormhill" target="">Stormhill</a>&nbsp;(past the Gatefront grace leading west) and talk to <a class="wiki_link" title="Elden Ring Roderika" href="/Roderika">Roderika</a> to begin her quest and receive the Sitting Sideways gesture, alongstide the <a class="wiki_link" title="Elden Ring Spirit Jellyfish Ashes" href="/Spirit+Jellyfish+Ashes" target="">Spirit Jellyfish Ashes</a>. You will pick up a <a class="wiki_link" title="Elden Ring Golden Seed" href="/Golden+Seed" target="">Golden Seed</a> just before arriving at <a class="wiki_link" title="Elden Ring Stormhill Shack" href="/Stormhill+Shack" target="">Stormhill Shack</a>. There's also a <a class="wiki_link" title="Elden Ring Stonesword Key" href="/Stonesword+Key" target="">Stonesword Key</a> here that you will want to start collecting.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/woman_with_a_red_hood_npc_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Roderika',
    },
  ],
  [
    'find-ashes-of-war-merchant',
    {
      title: 'Find Ashes of War Merchant',
      longDesc: `<p>Follow the road East from the <a class="wiki_link" title="Elden Ring Stormhill Shack" href="/Stormhill+Shack" target="">Stormhill Shack</a> in Stormhill and you'll come to <a class="wiki_link" title="Elden Ring Warmaster's Shack" href="/Warmaster's+Shack" target="">Warmaster's Shack</a>, where you can purchase Ashes of War from <a class="wiki_link" title="Elden Ring Knight Bernahl" href="/Knight+Bernahl" target="">Knight Bernahl</a>. Just south from here in the hills were the trolls are, you can visit at night and be invaded by a <a class="wiki_link" title="Elden Ring Deathbird" href="/Deathbird" target="">Deathbird</a> mini-boss and get the <a class="wiki_link" title="Elden Ring Blue-Feathered Branchsword" href="/Blue-Feathered+Branchsword" target="">Blue-Feathered Branchsword</a> talisman.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/warmasters_shack_locations_elden_ring_wiki_guide.jpg',
      link: "https://eldenring.wiki.fextralife.com/Warmaster's+Shack",
    },
  ],
  [
    'meet-potboy',
    {
      title: 'Meet Potboy (Alexander)',
      longDesc: `<p>Continue East from this location and turn right as you see a bridge and hear someone shouting. There is a small path to take up the cliff to your right hand side. You will meet <a class="wiki_link" title="Elden Ring Iron Fist Alexander" href="/Iron+Fist+Alexander">Alexander (Potboy)</a> and can free him to begin his quest and earn the Triumphant Delight gesture and 1x <a class="wiki_link" title="Elden Ring Exalted Flesh" href="/Exalted+Flesh" target="">Exalted Flesh</a>. You have to hit him with a heavy attack or several times from behind.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/alexander_npc_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Iron+Fist+Alexander',
    },
  ],
  [
    'talk-to-d-hunter',
    {
      title: 'Talk to D, Hunter of the Dead',
      longDesc: `<p>Further down the road, past the bridge, you can meet <a class="wiki_link" title="Elden Ring D, Hunter of the Dead" href="/D,+Hunter+of+the+Dead" target="">D, Hunter of the Dead</a>, and begin his quest (if you already reached the Roundtable Hold before this point, he will not show up since you would have first met him&nbsp;at the hold&nbsp;instead of near past the bridge, but quest progression remains the same).</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/d-hunter-of-the-dead-npc-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/D+Hunter+of+the+Dead',
    },
  ],
  [
    'talk-to-kenneth',
    {
      title: 'Talk to Kenneth Haight',
      longDesc: `<p>First you will head to some broken structures along the northern cliff of the area (easiest place to start would be at the Artist's Shack grace, or follow the road North from the Gatefront Ruins after passing the bridge). A group of demi-humans must be dispatched, then you can talk to <a class="wiki_link" title="Elden Ring Kenneth Haight" href="/Kenneth+Haight" target="">Kenneth Haight</a> atop the ruins, and agree to serve him. He asks you to liberate his keep to the south.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/kenneth_haight_npcs_elden_ring_wiki_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Kenneth+Haight',
    },
  ],
  [
    'murkwater-cave',
    {
      title: 'Complete Murkwater Cave',
      longDesc: `<p>You will now want to return to the lower area of Limgrave, to go up the ravine from Agheel Lake until you find <a class="wiki_link" title="Elden Ring Murkwater Catacombs" href="/Murkwater+Catacombs" target="">Murkwater Catacombs</a>, and then <a class="wiki_link" title="Elden Ring Murkwater Cave" href="/Murkwater+Cave" target="">Murkwater Cave</a> that has a special surprise. You will get invaded here, so be careful!</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/murkwater_cave_locations_elden_ring_wiki_guide_300x.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Murkwater+Cave',
    },
  ],
  [
    'get-wondrous',
    {
      title: 'Get the flask of wondrous physik',
      longDesc: `<p>Continue following the road northeast from here until you reach the <a class="wiki_link" title="Elden Ring Third Church of Marika" href="/Third+Church+of+Marika" target="">Third Church of Marika</a>, where you can loot the <a class="wiki_link" title="Elden Ring Flask of Wondrous Physick" href="/Flask+of+Wondrous+Physick">Flask of Wondrous Physick</a> and the <a class="wiki_link" title="Elden Ring Crimson Crystal Tear" href="/Crimson+Crystal+Tear" target="">Crimson Crystal Tear</a>. This is an important flask for your journey so don't miss it!</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/flask_of_wondrous_physick_tools_consumables_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/flask+of+wondrous+physick',
    },
  ],
  [
    'limegrave-east-map-fragment',
    {
      title: 'Get Limgrave, East Map Fragment',
      longDesc: `<p>Follow the road south until you find the area's map fragment. Beware of Rune Bears, but just by the map fragment you'll also find an altar with the&nbsp;<a class="wiki_link" title="Elden Ring Greenspill Crystal Tear" href="/Greenspill+Crystal+Tear">Greenspill Crystal Tear</a> and <a class="wiki_link" title="Elden Ring Spiked Cracked Tear" href="/Spiked+Cracked+Tear" target="">Spiked Cracked Tear</a>. There's also a Teardrop Scarab nearby that drops <a class="wiki_link" title="Elden Ring Ash of War: Ground Slam" href="/Ash+of+War:+Ground+Slam" target="">Ash of War: Ground Slam</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/map-limgrave,-east_key-items-elden-ring-wiki-guide-200.png',
      link: 'https://eldenring.wiki.fextralife.com/Map+(Limgrave,+East)',
    },
  ],
  [
    'get-flask-materials-from-erdtree',
    {
      title: 'Get Flask Materials from Minor Erdtree',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/minor-erdtree-weeping-peninsula-location-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Minor+Erdtree+(Mistwood)',
    },
  ],
  [
    'activate-siofra-river-well',
    {
      title: 'Activate Siofra River Well',
      longDesc: `<p>Once you have looted the above, go inside the structure. Take the lift down all the way to the <a class="wiki_link" title="Elden Ring Siofra River" href="/Siofra+River" target="">Siofra River</a>, activate the Site of Grace down there, and head back up - you will come here later as it's very above your current level.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/siofra-river-a-locations-elden-ring-wiki-guide-300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Siofra+River',
    },
  ],
  [
    'trigger-blaidd',
    {
      title: 'Trigger Blaidd event',
      longDesc: `<p>Nearby is the mistwood ruins, there is a howling wolf that you will hear. Once you hear him you can go back to the Church of Elleh location and talk to <a class="wiki_link" title="Elden Ring Merchant Kale" href="/Merchant+Kale">Merchant Kalé</a> who will give you a gesture. Do the gesture (<strong>Finger Snap</strong>) to the wolf and he will jump down and you can talk to <a class="wiki_link" title="Elden Ring Blaidd" href="/Blaidd" target="">Blaidd</a> and start his quest.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/blaidd-wolfman-location2-npc-elden-ring-wiki-300px-min.jpeg',
      link: 'https://eldenring.wiki.fextralife.com/Blaidd',
    },
  ],
  [
    'liberate-fort-haight',
    {
      title: 'Liberate Fort Haight',
      longDesc: `<p>Continue south from here, you can take a detour to meet the Nomadic Merchant of the area if you wish. To the very south, you will encounter <a class="wiki_link" title="Elden Ring Fort Haight" href="/Fort+Haight" target="">Fort Haight</a>. There's a <a class="wiki_link" title="Elden Ring Golden Seed" href="/Golden+Seed" target="">Golden Seed</a> to be picked up before you go in. Then kill all the enemies within, and loot the tower on the right side from the entrance to obtain the very important key item: <a class="wiki_link" title="Elden Ring Dectus Medallion (Left)" href="/Dectus+Medallion+(Left)" target="">Dectus Medallion (Left)</a>. There's also <a class="wiki_link" title="Elden Ring Nomadic Warrior's Cookbook (6)" href="/Nomadic+Warrior's+Cookbook+(6)" target="">Nomadic Warrior's Cookbook (6)</a> and <a class="wiki_link" title="Elden Ring Ash of War: Bloody Slash" href="/Ash+of+War:+Bloody+Slash" target="">Ash of War: Bloody Slash</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/post-town-remains-ruined-cellar-location-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Fort+Haight',
    },
  ],
  [
    'get-reward-kenneth-haight',
    {
      title: 'Get Reward from Kenneth Haight',
      longDesc: `<p>Now that the fort is free, report back to Kenneth in the northern area. He will reward you with&nbsp;<a class="wiki_link" title="Elden Ring Erdsteel Dagger" href="/Erdsteel+Dagger" target="">Erdsteel Dagger</a> and offer you the opportunity to enter into his service, choice is up to you.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/kenneth_haight_npcs_elden_ring_wiki_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Kenneth+Haight',
    },
  ],
  [
    'complete-summonwater',
    {
      title: 'Complete Summonwater',
      longDesc: `<p>Once this is done, head to <a class="wiki_link" title="Elden Ring Summonwater" href="/Summonwater" target="">Summonwater</a>&nbsp;(northwest from the Third Church of Marika), where you will face a <a class="wiki_link" title="Elden Ring Tibia Mariner" href="/Tibia+Mariner" target="">Tibia Mariner</a> boss. Defeat it to gain your first <a class="wiki_link" title="Elden Ring Deathroot" href="/Deathroot" target="">Deathroot</a>&nbsp;and the <a class="wiki_link" title="Elden Ring Skeletal Militiaman Ashes" href="/Skeletal+Militiaman+Ashes" target="_blank" rel="noopener noreferrer">Skeletal Militiamen Ashes</a>), which will enable a discussion with <a class="wiki_link" title="Elden Ring D, Hunter of the Dead" href="/D,+Hunter+of+the+Dead" target="">D, Hunter of the Dead</a> at the <a class="wiki_link" title="Elden Ring Roundtable Hold" href="/Roundtable+Hold" target="">Roundtable Hold</a>&nbsp;(you may also find him instead near the Summonwater Village Outskirts grace west of here if you didn't reach&nbsp;the Hold yet).</p> <p>Afterwards, go back to the Third Chirch of Marika. In the back there will be a portal that will take you to your next location. Open the door and rest at the site of grace. Melina will offer to take you to the Roundtable Hold (which again, if you have not already&nbsp;reached yet earlier from resting at enough graces, since&nbsp;activating them alone isn't enough).</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/post-town-remains-ruined-cellar-location-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Summonwater+Village',
    },
  ],
  [
    'talk-to-d-hunter-at-roundtable',
    {
      title: 'Talk to D, Hunter of the Dead at the Roundtable Hold.',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/d-hunter-of-the-dead-npc-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/D+Hunter+of+the+Dead',
    },
  ],
  [
    'teleport-bestial-sanctum',
    {
      title: '*Teleport to Bestial Sanctum',
      longDesc: `<p>* If you have access to the Roundtable Hold, after that discussion a gateway will be marked on your map that allows you to teleport to the <a class="wiki_link" title="Elden Ring Bestial Sanctum" href="/Bestial+Sanctum" target="">Bestial Sanctum</a> in eastern <a class="wiki_link" title="Elden Ring Caelid" href="/Caelid" target="">Caelid</a>. You don't need to do this now so don't worry about it if you haven't been to Roundtable Hold!</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bestial-sanctuary-location-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Bestial+Sanctum',
    },
  ],
  [
    'meet-yura',
    {
      title: 'Meet Yura',
      longDesc: `<p><a class="wiki_link" title="Elden Ring Interactive Map?id=499&amp;lat=-198.859375&amp;lng=106.943373&amp;zoom=5&amp;code=mapA" href="/Interactive+Map?id=499&amp;lat=-198.859375&amp;lng=106.943373&amp;zoom=5&amp;code=mapA">Elden Ring Map: Southern Limgrave Starting Point</a>. You are now ready to explore Southern <a class="wiki_link" title="Elden Ring Limgrave" href="/Limgrave" target="">Limgrave</a>. Travel northeast to the underpass (directly west of the Artist's Shack, down at the ravine underneath a ruin) and talk to <a class="wiki_link" title="Elden Ring Bloody Finger Hunter Yura" href="/Bloody+Finger+Hunter+Yura" target="">Bloody Finger Hunter Yura</a>, then proceed to Lake Agheel to challenge and defeat the dragon in this area, <a class="wiki_link" title="Elden Ring Flying Dragon Agheel" href="/Flying+Dragon+Agheel" target="">Flying Dragon Agheel</a>. You can summon players or use <a class="wiki_link" title="Elden Ring Spirits" href="/Spirits">Spirit Ashes</a> to help with the fight. Using Torrent is suggested. The Dragon Heart you obtain can be traded for <a class="wiki_link" title="Elden Ring Incantations" href="/Incantations" target="">Incantations</a> at the <a class="wiki_link" title="Elden Ring Church of Dragon Communion" href="/Church+of+Dragon+Communion" target="">Church of Dragon Communion</a> accessed by traversing through <a class="wiki_link" title="Elden Ring Coastal Cave" href="/Coastal+Cave" target="">Coastal Cave</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloody-finger-hunter-yura-npc-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Bloody+Finger+Hunter+Yura',
    },
  ],
  [
    'kill-dragon-agheel',
    {
      title: 'Kill Dragon Agheel',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/flying_dragon_agheel_wildlife_creature_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Flying+Dragon+Agheel',
    },
  ],
  [
    'obtain-royal-house-scroll',
    {
      title: 'Obtain Royal House Scroll',
      longDesc: `<p>If you are a sorcerer, you will want to get the <a class="wiki_link" title="Elden Ring Royal House Scroll" href="/Royal+House+Scroll" target="">Royal House Scroll</a>, that you can bring to <a class="wiki_link" title="Elden Ring Sorceress Sellen" href="/Sorceress+Sellen" target="">Sorceress Sellen</a> to unlock more inventory at her shop. Head southeast from the Agheel Lake South site of grace, toward the top of a cliff and you'll see a statue of an object that looks like the half piece of a bowl or a circle. Face the other way, to see a Knight. Keep going to a structure to see a man standing watching over the big structure, alongside a dead body. In that body, you will find the Royal House Scroll.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/royal_house_scroll-elden-ring-wiki-guide-200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Royal+House+Scroll',
    },
  ],
  [
    'defeat-nights-cavalry-2',
    {
      title: "Defeat Night's Cavalry",
      longDesc: `<p>Proceed south into the <a class="wiki_link" title="Elden Ring Weeping Peninsula" href="/Weeping+Peninsula" target="">Weeping Peninsula</a> and you'll meet <a class="wiki_link" title="Elden Ring Irina " href="/Irina" target="">Irina</a>&nbsp;by the road. She will ask you to talk to her Father at Castle Morne. You will get there later so for now just continue down the road and rest at the Castle Morne Rampart site of grace. A miniboss roams the area at night. This is a <a class="wiki_link" title="Elden Ring Night's Cavalry" href="/Night's+Cavalry" target="">Night's Cavalry</a> and defeating him will give you the&nbsp;<a class="wiki_link" title="Elden Ring Ash of War: Barricade" href="/Ash+of+War:+Barricade" target="">Ash of War: Barricade</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nights_cavalry_bosses_elden_ring_wiki_guide.jpg',
      link: "https://eldenring.wiki.fextralife.com/Night's+Cavalry",
    },
  ],
  [
    'obtain-memory-slot-1',
    {
      title: 'Obtain memory slot',
      longDesc: `<p>Take the jump spring near the Site of Grace to gain access to a tower.&nbsp;<a class="wiki_link" title="Elden Ring Oridys's Rise" href="/Oridys's+Rise">Oridy's Rise</a> is a mage tower and contains an item that increases your memory slots, the <a class="wiki_link" title="Elden Ring Memory Stone" href="/Memory+Stone" target="">Memory Stone</a>. There are multiple of these to be found throughout the game, and they are usually in towers such as this one. You have to find and hit 3 turtles to unlock the entrance. See the Oridy's Rise page for details on where they are. After that, head north of the tower to find a site of grace, and a few enemies. Further after that, you'll find a corpse on a chair holding a Stonesword Key, and a statue which points to a catabombs to complete).</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/oridyss-rise-location-elden-ring-wiki-guide.jpg',
      link: "https://eldenring.wiki.fextralife.com/Oridys's+Rise",
    },
  ],
  [
    'get-sacred-tears-1',
    {
      title: 'Get Sacred Tears',
      longDesc: `<p>From here you will head North to find a <a class="wiki_link" title="Elden Ring Faith-knot Crystal Tear" href="/Faith-knot+Crystal+Tear" target="_blank" rel="noopener noreferrer">Faith-knot Crystal Tear</a> guarded by some hostile plants. Directly west is a church containing a <a class="wiki_link" title="Elden Ring Sacred Tear" href="/Sacred+Tear" target="_blank" rel="noopener noreferrer">Sacred Tear</a> for your flask. South from here leads to both the <a class="wiki_link" title="Elden Ring Tombsward Catacombs" href="/Tombsward+Catacombs" target="_blank" rel="noopener noreferrer">Tombsward Catacombs</a> and the <a class="wiki_link" title="Elden Ring Minor Erdtree" href="/Minor+Erdtree" target="_blank" rel="noopener noreferrer">Minor Erdtree</a>, which contains both the&nbsp;&nbsp;<a class="wiki_link" title="Elden Ring Crimsonburst Crystal Tear" href="/Crimsonburst+Crystal+Tear" target="">Crimsonburst Crystal Tear</a> and <a class="wiki_link" title="Elden Ring Opaline Bubbletear" href="/Opaline+Bubbletear" target="">Opaline Bubbletear</a> for your flask. Down the plains, you can see a <a class="wiki_link" title="Elden Ring Walking Mausoleum" href="/Walking+Mausoleum">Mausoleum</a>: these are used to replicate Remembrances, which are the "Boss Souls" of the main bosses of the game.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/sacred_tear_consumable-elden-ring-wiki-guide-200.png',
      link: 'https://eldenring.wiki.fextralife.com/Interactive+Map?id=817&lat=-210.828125&lng=95.226796&zoom=8',
    },
  ],
  [
    'get-flask-materials-erdtree-1',
    {
      title: 'Get Flask Materials from Erdtree',
      longDesc: `<p>Several points of interest are also west of the Minor Erdtree, including another church holding another <a class="wiki_link" title="Elden Ring Sacred Tear" href="/Sacred+Tear" target="_blank" rel="noopener noreferrer">Sacred Tear</a>, and the Isolated Merchant's Shack, which you can buy a <a class="wiki_link" title="Elden Ring Lantern" href="/Lantern" target="_blank" rel="noopener noreferrer">Lantern</a>&nbsp;to avoid needing a torch for dark areas. Note that in the Witchbane Ruins north of the shack, the Sorceress Sellen is there, but there is no way to interact with her. <em>(It also seems unrelated to her "well-being"&nbsp; back at the Waypoint Ruins, so it's unknown if this is a quest progression bug or if the character isn't actually Sellen)</em></p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/minor-erdtree-weeping-peninsula-location-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Minor+Erdtree+(Weeping+Peninsula)',
    },
  ],
  [
    'head-up-from-stormhill',
    {
      title: 'Head up from Stormhill into Stormveil',
      link: 'https://eldenring.wiki.fextralife.com/Stormhill',
    },
  ],
  [
    'defeat-margit',
    {
      title: 'Defeat Margit',
      longDesc: `<p>Once you complete the boss of the area, return to Irina and again to him to progress their quest (however, I would advise against completing this quest too soon until your weapon upgrade is at least +8, because you'll obtain a+8 weapon after progressing enough in this questline, which may affect your ability to interact with other players if matchmaking is affected by weapon level).</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/margit-the-fell-omen-boss-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Margit,+The+Fell+Omen',
    },
  ],
  [
    'visit-roundtable-hold',
    {
      title: 'Visit Roundtable Hold',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/roundtable-hold-hub-location-preview-elden-ring-wiki-guide-300px-min.jpeg',
      link: 'https://eldenring.wiki.fextralife.com/Roundtable+Hold',
    },
  ],
  [
    'talk-roundtable-npcs',
    {
      title: 'Talk to all Roundtable NPCs',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/roundtable-hold-hub-location-preview-elden-ring-wiki-guide-300px-min.jpeg',
      link: 'https://eldenring.wiki.fextralife.com/Roundtable+Hold',
    },
  ],
  [
    'upgrade-weapons-1',
    {
      title: 'Upgrade your Weapons',
      longDesc: `<p>The most important thing to do here right now is to ensure that you <a class="wiki_link" title="Elden Ring Upgrades" href="/Upgrades" target="">Upgrade</a> your weapons as much as possible as <a class="wiki_link" title="Elden Ring Stormveil Castle" href="/Stormveil+Castle" target="">Stormveil Castle</a> is a difficult endeavor and you will need all the help you can get.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/greatsword_colossal_swords_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Upgrades',
    },
  ],
  [
    'stormveil-alternate-entrance',
    {
      title: 'Take the alternate entrance to the Stormveil Castle',
      longDesc: `<p>Right before you head for Stormveil Castle, head northeast of the Stormhill Shack to pick up the Strength-Knot Crystal Tear guarded by a giant. Now head for the castle. There will be a site of grace named "Castleward Tunnel" right before a mini-boss inside the tunnel.&nbsp;</p> <p>Once you reach the main gate, head to the left side and go down to grab a couple items and make your way around back on the main path. Once near the gate, interact with the grace nearby, then head left and speak to Gatekeeper Gostoc. Take his suggestion by entering through&nbsp;the alternate route.&nbsp; Outside near the summoning pool, loot the body to obtain <a class="wiki_link" title="Elden Ring Golden Rune (1)." href="/Golden+Rune+(1)." target="">Golden Rune (1).</a>&nbsp;Uptop another concrete beam nearby is another bootable body which will give you 3 <a class="wiki_link" title="Elden Ring Ruin Fragment" href="/Ruin+Fragment">Ruin Fragments</a>. Another body towards&nbsp;the alternate entrance will carry a Smithing stone. After looting the area, you can continue to make your way into the castle. Clear the Bladed Talon Eagle that may intercept you from above. You will come across another Site of Grace&nbsp;to the right called Stormveil Cliffside. Head up on the wooden platforms and loot the body on the path to obtain a <a class="wiki_link" title="Elden Ring Marred Leather Shield" href="/Marred+Leather+Shield" target="">Marred Leather Shield</a>. Continue, but be wary of the three Castle Guards. Clear them to continue inside and there will be another body at the edge of the platform and another <a class="wiki_link" title="Elden Ring Castle Guard " href="/Castle+Guard+" target="">Castle Guard</a>. Clear him and loot the corpse to obtain a <a class="wiki_link" title="Elden Ring Golden Rune (2)" href="/Golden+Rune+(2)" target="">Golden Rune (2)</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/back-entrance-stormveil-castle-walkthrough-location-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Stormveil+Castle',
    },
  ],
  [
    'ascend-the-castle',
    {
      title: 'Ascend the Castle and clear Enemies in your path',
      link: 'https://eldenring.wiki.fextralife.com/Enemies',
    },
  ],
  [
    'defeat-banished-knight',
    {
      title: 'Defeat the Banished Knight and retrieve the Rusty Key',
      longDesc: `<p>Once you reach the main gate, head to the left side and go down to grab a couple items and make your way around back on the main path. Once near the gate, interact with the grace nearby, then head left and speak to Gatekeeper Gostoc. Take his suggestion by entering through&nbsp;the alternate route.&nbsp; Outside near the summoning pool, loot the body to obtain <a class="wiki_link" title="Elden Ring Golden Rune (1)." href="/Golden+Rune+(1)." target="">Golden Rune (1).</a>&nbsp;Uptop another concrete beam nearby is another bootable body which will give you 3 <a class="wiki_link" title="Elden Ring Ruin Fragment" href="/Ruin+Fragment">Ruin Fragments</a>. Another body towards&nbsp;the alternate entrance will carry a Smithing stone. After looting the area, you can continue to make your way into the castle. Clear the Bladed Talon Eagle that may intercept you from above. You will come across another Site of Grace&nbsp;to the right called Stormveil Cliffside. Head up on the wooden platforms and loot the body on the path to obtain a <a class="wiki_link" title="Elden Ring Marred Leather Shield" href="/Marred+Leather+Shield" target="">Marred Leather Shield</a>. Continue, but be wary of the three Castle Guards. Clear them to continue inside and there will be another body at the edge of the platform and another <a class="wiki_link" title="Elden Ring Castle Guard " href="/Castle+Guard+" target="">Castle Guard</a>. Clear him and loot the corpse to obtain a <a class="wiki_link" title="Elden Ring Golden Rune (2)" href="/Golden+Rune+(2)" target="">Golden Rune (2)</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/banished-knight-enemy-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Banished+Knight',
    },
  ],
  [
    'obtain-the-stonesword-key',
    {
      title: 'Obtain the Stonesword Key',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/stonesword_key-elden-ring-wiki-guide-200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Stonesword+Key',
    },
  ],
  [
    'dispel-fog-enter-gates',
    {
      title: 'Use the Key to dispel the fog in front of the gates and enter',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/stonesword_key-elden-ring-wiki-guide-200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Stormveil+Castle',
    },
  ],
  [
    'locate-nepheli-loux',
    {
      title: 'Locate Nepheli Loux and speak to her',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nepheli-loux-npc-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Nepheli+Loux',
    },
  ],
  [
    'clear-the-castle-1',
    {
      title: 'Clear the castle',
    },
  ],
  [
    'fight-the-lion',
    {
      title: 'Fight the Lion Guardian Mini-boss',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/lion-guardian-enemy-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Lion+Guardian',
    },
  ],
  [
    'prepare-for-boss-summon-nepheli',
    {
      title: 'Prepare for a Boss battle and summon Nepheli',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nepheli-loux-npc-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Nepheli+Loux',
    },
  ],
  [
    'fight-godrick',
    {
      title: 'Fight Godrick the Grafted',
      longDesc: `<p>Finally, face Godrick. Remember to use the summon sign to summon <a class="wiki_link" title="Elden Ring Nepheli" href="/Nepheli" target="">Nepheli</a>. Clear the boss. A boss guide can be found on the <a class="wiki_link" title="Elden Ring Godrick the Grafted" href="/Godrick+the+Grafted" target="">Godrick the Grafted</a>&nbsp;page. The second phase will be indicated with a cutscene where he grafts a dragon arm and can now deal additional <a class="wiki_link" title="Elden Ring Fire Damage" href="/Fire+Damage" target="">Fire Damage</a>. Clear both phases and you will defeat Godrick. You will be rewarded with&nbsp;<a class="wiki_link" title="Elden Ring Godrick's Great Rune" href="/Godrick's+Great+Rune" target="">Godrick's Great Rune</a>&nbsp;and x1&nbsp;<a class="wiki_link" title="Elden Ring Remembrance of the Grafted" href="/Remembrance+of+the+Grafted" target="">Remembrance of the Grafted</a>, as well as 15000 Runes.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/boss_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Godrick+the+Grafted',
    },
  ],
  [
    'restore-godricks-great-rune',
    {
      title: "Restore Godrick's Great Rune at the Divine Tower of Limgrave",
      longDesc: `<p>Now you can make your way to the Throne Room. The west room will have a set of steps leading to the basement. Climb down the ladder and you can approach the praying spirit. loot the item next to it to obtain&nbsp;x1&nbsp;<a class="wiki_link" title="Elden Ring Shabriri Grape" href="/Shabriri+Grape" target="">Shabriri Grape</a>. Turn back and you will arrive at&nbsp;&nbsp;<a class="wiki_link" title="Elden Ring Liurnia of the Lakes" href="/Liurnia+of+the+Lakes" target="">Liurnia of the Lakes</a>.&nbsp;<a class="wiki_link" title="Elden Ring Nepehli Loux" href="/Nepehli+Loux" target="">Nepehli Loux</a>&nbsp;will also be available at the <a class="wiki_link" title="Elden Ring Roundtable Hold" href="/Roundtable+Hold" target="">Roundtable Hold</a>. Speak to her so that she can give you x1&nbsp;<a class="wiki_link" title="Elden Ring Arsenal Charm" href="/Arsenal+Charm" target="">Arsenal Charm</a>.</p> <p>To use the newly&nbsp;obtained &nbsp;<a class="wiki_link" title="Elden Ring Godrick's Great Rune" href="/Godrick's+Great+Rune" target="">Godrick's Great Rune</a>, you will need to fast travel to the Limgrave Tower Bridge site at&nbsp;<a class="wiki_link" title="Elden Ring Stormveil Castle" href="/Stormveil+Castle" target="">Stormveil Castle</a>. More enemies and Colossal Statues will be here. You need to reach a waygate then a large door to the tower and activate the lift inside. Here, you can discover a new <a class="wiki_link" title="Elden Ring Site of Grace" href="/Site+of+Grace" target="">Site of Grace</a>. Continue to ascend and there will a glowing sigil. Restore the power of the great rune.&nbsp;Godrick's Great Rune blesses the player's character by raising all attributes</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/limgrave_divine_tower_locations_elden_ring_wiki_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Divine+Tower+of+Limgrave',
    },
  ],
  [
    'talk-to-boc-the-seamster',
    {
      title: 'Talk to Boc the Seamster',
      longDesc: `<p><a class="wiki_link" title="Elden Ring Interactive Map?id=745&amp;lat=-170.984375&amp;lng=82.102865&amp;zoom=5&amp;code=mapA" href="/Interactive+Map?id=745&amp;lat=-170.984375&amp;lng=82.102865&amp;zoom=5&amp;code=mapA">Elden Ring Map: Liurnia of the Lakes Starting Point</a>. You can meet <a class="wiki_link" title="Elden Ring Boc the Seamster" href="/Boc+the+Seamster" target="">Boc the Seamster</a> at the first Site of Grace of the area. Nearby, a church houses <a class="wiki_link" title="Elden Ring Thops" href="/Thops">Thops</a>, who will teach you some basic sorcery and ask if you can help him get into the academy.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/boc_npcs_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Boc+the+Seamster',
    },
  ],
  [
    'meet-sorcerer-thops',
    {
      title: 'Meet Sorcerer Thops',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/thops_npc_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Thops',
    },
  ],
  [
    'obtain-academy-scroll',
    {
      title: 'Obtain Academy Scroll',
      longDesc: `<p>Northwest from their position, a graveyard hides the <a class="wiki_link" title="Elden Ring Academy Scroll" href="/Academy+Scroll" target="">Academy Scroll</a>, that can be given to Sorceress Sellen to unlock more inventory at her Shop. Follow the road south, collecting <a class="wiki_link" title="Elden Ring Glintstone Craftman's Cookbook (1)" href="/Glintstone+Craftsman's+Cookbook+(1)" target="">Glintstone Craftman's Cookbook (1)</a>, and talk to the <a class="wiki_link" title="Elden Ring Nomadic Merchant Liurnia of the Lakes" href="/Nomadic+Merchant+Liurnia+of+the+Lakes" target="">Nomadic Merchant</a> of the area. Head into the water and north until you come to <a class="wiki_link" title="Elden Ring Laskyar Ruins" href="/Laskyar+Ruins" target="">Laskyar Ruins</a>, where you can loot two key items:&nbsp;<a class="wiki_link" title="Elden Ring Glintstone Craftsman's Cookbook (2)" href="/Glintstone+Craftsman's+Cookbook+(2)" target="">Glintstone Craftsman's Cookbook (2)</a> and <a class="wiki_link" title="Elden Ring Ritual Pot" href="/Ritual+Pot" target="">Ritual Pot</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/academy-scroll_spells-elden-ring-wiki-guide-200.png',
      link: 'https://eldenring.wiki.fextralife.com/Academy+Scroll',
    },
  ],
  [
    'obtain-fire-monks-prayerbook',
    {
      title: "Obtain Fire Monk's Prayerbook",
      image:
        "https://eldenring.wiki.fextralife.com/file/Elden-Ring/fire_monk's_prayerbook__key_items-elden-ring-wiki-guide-200.png",
      link: "https://eldenring.wiki.fextralife.com/Fire+Monks'+Prayerbook",
    },
  ],
  [
    'get-liurnia-map-fragments',
    {
      title: 'Get Liurnia of the Lakes map fragments',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/map-liurna,-east_key-items-elden-ring-wiki-guide-200.png',
      link: 'https://eldenring.wiki.fextralife.com/Liurnia+of+the+Lakes',
    },
  ],
  [
    'get-cookbooks-and-ritual-pot',
    {
      title: 'Get Cookbooks & Ritual Pot',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ritual_pot_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Ritual+Pot',
    },
  ],
  [
    'meet-patches-get-flask-upgrades',
    {
      title: 'Meet Patches and Get Flask Upgrades',
      longDesc: `<p>Your next stops will be to get the <a class="wiki_link" title="Elden Ring Dexterity-Knot Crystal Tear" href="/Dexterity-Knot+Crystal+Tear" target="">Dexterity-Knot Crystal Tear</a> from a small island found north-west from the Telescope icon - and you can access <a class="wiki_link" title="Elden Ring Patches" href="/Patches" target="">Patches</a> for his shop by the Scenic Isle Site of Grace. This is before you reach <a class="wiki_link" title="Elden Ring Academy Gate Town" href="/Academy+Gate+Town" target="">Academy Gate Town</a>, where you should search for a <a class="wiki_link" title="Elden Ring Golden Seed" href="/Golden+Seed" target="">Golden Seed</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/patches_bosses_elden_ring_wiki_guide_300x.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Patches',
    },
  ],
  [
    'visit-rose-church',
    {
      title: 'Visit Rose Church',
      longDesc: `<p>Take a brief detour north and west, until you find <a class="wiki_link" title="Elden Ring Rose Church" href="/Rose+Church" target="">Rose Church</a> and talk to <a class="wiki_link" title="Elden Ring White-Faced Varre" href="/White-Faced+Varre" target="">White-Faced Varre</a>. He wants you to invade other players (see his page for specifics). You can get&nbsp;<a class="wiki_link" title="Elden Ring Nomadic Warrior's Cookbook (12)" href="/Nomadic+Warrior's+Cookbook+(12)" target="">Nomadic Warrior's Cookbook (12)</a> from here.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rose_church_location_elden_ring_wiki_guide_300x.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Rose+Church',
    },
  ],
  [
    'find-lakeside-crystal-cave',
    {
      title: 'Find Lakeside Crystal Cave and Latenna',
      link: 'https://eldenring.wiki.fextralife.com/Lakeside+Crystal+Cave',
    },
  ],
  [
    'complete-malefactors-evergoal',
    {
      title: "Complete Malefactor's Evergaol",
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/malefactors_evergaol_locations_elden_ring_wiki_guide.jpg',
      link: "https://eldenring.wiki.fextralife.com/Malefactor's+Evergaol",
    },
  ],
  [
    'defeat-erdtree-avatar',
    {
      title: 'Defeat Erdtree Avatar',
      longDesc: `<p><a class="wiki_link" title="Elden Ring Interactive Map?id=4583&amp;lat=-103.039&amp;lng=124.305&amp;zoom=5&amp;code=mapB" href="/Interactive+Map?id=4583&amp;lat=-103.039&amp;lng=124.305&amp;zoom=5&amp;code=mapB">Elden Ring Map: Deeproot Depths Starting Point</a>. This is a special location only accessible by teleporting in from the coffin in <a class="wiki_link" title="Elden Ring Siofra Aqueduct" href="/Siofra+Aqueduct" target="">Siofra Aqueduct</a>, so it's easy to miss. The are is important to progress <a class="wiki_link" title="Elden Ring Fia" href="/Fia" target="">Fia</a>'s questline, and give the player a chance to align with a specific faction for the <a class="wiki_link" title="Elden Ring Endings" href="/Endings" target="">Endings</a>. The area offers <a class="wiki_link" title="Elden Ring Smithing Stone (4)" href="/Smithing+Stone+(4)" target="">Smithing Stone (4)</a> to&nbsp;<a class="wiki_link" title="Elden Ring Smithing Stone (6)" href="/Smithing+Stone+(6)" target=""> (6)</a> and <a class="wiki_link" title="Elden Ring Ghost Glovewort (4)" href="/Ghost+Glovewort+(4)" target="">Ghost Glovewort (4)</a> to&nbsp;<a class="wiki_link" title="Elden Ring Ghost Glovewort (6)" href="/Ghost+Glovewort+(6)" target=""> (6)</a>, so you should have your upgrades over 15 or +6 for special.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdtree-avatar-boss-elden-ring-compressed-300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Erdtree+Avatar',
    },
  ],
  [
    'loot-upgrade-materials-deeproot-depths',
    {
      title: 'Loot Upgrade Materials',
      longDesc: `<p>You will spawn in a watery area in the underground beneath Lyndell. This is Great Waterfall Crest. Nearby, defeat an Erdtree Avatar enemy and loot <a class="wiki_link" title="Elden Ring Staff of the Avatar" href="/Staff+of+the+Avatar">Staff of the Avatar</a> and <a class="wiki_link" title="Elden Ring Ash of War: Golden Land" href="/Ash+of+War:+Golden+Land">Ash of War: Golden Land</a>. From here, cross the ravine west by carefully following the roots. There are some items around in this area in the root paths if you're willing to explore a bit. If not, keep going west until you meet the Palm Reader and the site of grace Deeproot depths.</p>`,
      image: '',
      link: '',
    },
  ],
  [
    'talk-to-palm-reader',
    {
      title: 'Talk to Palm Reader',
      longDesc: `<p>You will spawn in a watery area in the underground beneath Lyndell. This is Great Waterfall Crest. Nearby, defeat an Erdtree Avatar enemy and loot <a class="wiki_link" title="Elden Ring Staff of the Avatar" href="/Staff+of+the+Avatar">Staff of the Avatar</a> and <a class="wiki_link" title="Elden Ring Ash of War: Golden Land" href="/Ash+of+War:+Golden+Land">Ash of War: Golden Land</a>. From here, cross the ravine west by carefully following the roots. There are some items around in this area in the root paths if you're willing to explore a bit. If not, keep going west until you meet the Palm Reader and the site of grace Deeproot depths.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/palm_reader_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Palm+Reader',
    },
  ],
  [
    'obtain-area-map-deeproot-depths',
    {
      title: 'Obtain Area Map',
      longDesc: `<p>Navigate the roots north toward the flooded ruins, past what seems like an army of <a class="wiki_link" title="Elden Ring Basilisk" href="/Basilisk" target="">Basilisks</a>, until you find a gazebo with a corpse that holds <a class="wiki_link" title="Elden Ring Map (Deeproot Depths)" href="/Map+(Deeproot+Depths)" target="">Map (Deeproot Depths)</a>. The building nearby has <a class="wiki_link" title="Elden Ring Ash of War: Vacuum Slice" href="/Ash+of+War:+Vacuum+Slice" target="">Ash of War: Vacuum Slice</a> within it. From here, you will want to ignore most enemies and travel northwest to <span class="fextratip"><a class="wiki_link wiki_tooltip" title="Elden Ring Interactive Map?id=5206&amp;lat=-97.507812&amp;lng=111.457443&amp;zoom=8&amp;code=mapB" href="/Interactive+Map?id=5206&amp;lat=-97.507812&amp;lng=111.457443&amp;zoom=8&amp;code=mapB">The Nameless Eternal City site of grace</a><span class="popover left" style="right: 256px; display: none;"><span class="arrow"></span><span class="popover-content"></span></span></span>. A coffin nearby teleports you to Ainsel River main, but your objective is to get to the <a class="wiki_link" title="Elden Ring Walking Mausoleum" href="/Walking+Mausoleum" target="">Walking Mausoleum</a> roaming nearby and deactivate it, as it will de-spawn all the <a class="wiki_link" title="Elden Ring Mausoleum Knight" href="/Mausoleum+Knight" target="">Mausoleum Knight</a> and <a class="wiki_link" title="Elden Ring Mausoleum Soldier" href="/Mausoleum+Soldier" target="">Mausoleum Soldier</a> enemies.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/deeproot-depths-location-undeground-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Deeproot+Depths',
    },
  ],
  [
    'activate-walking-mausoleum',
    {
      title: 'Activate Walking Mausoleum',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/walking-mausoleum-location-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Walking+Mausoleum',
    },
  ],
  [
    'defeat-crucible-knight-siluria',
    {
      title: 'Defeat Crucible Knight Siluria',
      longDesc: `<p>To deactivate the Mausolum, go to the lower area north from the site of grace and all the way to the west.&nbsp; Loot the Stonesword Key while you're here, then take the spirit spring up. You will land by <a class="wiki_link" title="Elden Ring Crucible Knight Siluria" href="/Crucible+Knight+Siluria" target="">Crucible Knight Siluria</a>, which should be a straight-forward fight at this point. Defeat it and loot the <a class="wiki_link" title="Elden Ring Crucible Tree Set" href="/Crucible+Tree+Set" target="">Crucible Tree Set</a> and <a class="wiki_link" title="Elden Ring Siluria's Tree" href="/Siluria's+Tree" target="">Siluria's Tree</a>. Now head east toward the branches and quickly navigate across them to a point here you can jump ONTO the mausoleum. There are basilisks and archers that will interrupt your progress so it's best to dismount from Torrent as you get closer to the mausoleum. Once on it, hit the white skulls until it stops. This will de-spawn all Mausoleum-type enemies.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/crucible_knight_siluria_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Crucible+Knight+Siluria',
    },
  ],
  [
    'defeat-fias-champions',
    {
      title: 'Defeat Fia"s Champions',
      longDesc: `<p>You are now free to roam and loot any other objects in the area before proceeding in the game. When you feel you're ready, go back to the <a class="wiki_link" title="Elden Ring Interactive Map?id=5206&amp;lat=-97.507812&amp;lng=111.457443&amp;zoom=8&amp;code=mapB" href="/Interactive+Map?id=5206&amp;lat=-97.507812&amp;lng=111.457443&amp;zoom=8&amp;code=mapB">Nameless Eternal City site of grace</a>&nbsp;and look directly Northeast. This is the general area leading you to where you need go next. To your right there will be some rooftops that you can use to get to and navigate the branches. There's <a class="wiki_link" title="Elden Ring Prince of Death's Staff" href="/Prince+of+Death's+Staff">Prince of Death's Staff</a>&nbsp;to be found just up the first branch to your left when you're making your way up.</p> <p>You will deal with some fire-breathing Broken Statue enemies as you attempt to cross, and you will then arrive at the <a class="wiki_link" title="Elden Ring Interactive Map?id=5362&amp;lat=-96.335937&amp;lng=116.879443&amp;zoom=8&amp;code=mapB" href="/Interactive+Map?id=5362&amp;lat=-96.335937&amp;lng=116.879443&amp;zoom=8&amp;code=mapB">Across the Roots site of grace</a>. Nearby, an entrance gives you access to the <a class="wiki_link" title="Elden Ring Fia's Champions" href="/Fia's+Champions">Fia's Champions</a> boss fight:</p> <ul> 
      <li>Fia's Champions are five randomized invader enemies and are found in Deeproot Depths. This is an optional boss as players don't need to defeat it to advance in Elden Ring. Fia's Champions spawn in three waves: single invader, single invader, three invaders. Each wave begins after previous one is defeated.</li> 
     </ul>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/crucible_knight_siluria_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Fia"s+Champions',
    },
  ],
  [
    'talk-to-fia',
    {
      title: 'Talk to Fia',
      longDesc: `<p>After defeating Fia's Champions , it's time to proceed with Fia's quest. NOTE that completing Fia's quest determines the ending you get):</p> <ul> 
      <li>Go back to Roundtable&nbsp;hold and talk to Fia.</li> 
      <li>Exhaust her dialogue and receive a <a class="wiki_link" title="Elden Ring Weathered Dagger" href="/Weathered+Dagger">Weathered Dagger</a>.</li> 
      <li>Exhaust her dialogue once again and receive&nbsp;a simple map concerning the location of a Black Knifeprint.</li> 
      <li>Still in Roundhold, talk to <a class="wiki_link" title="Elden Ring D, Hunter of the Dead" href="/D,+Hunter+of+the+Dead">D, Hunter of the Dead</a>&nbsp;and give him the Weathered Dagger.</li> 
      <li>Reload the game to find Fia in a newly opened room near the blacksmith area.</li> 
      <li>Go back to the&nbsp;<a class="wiki_link" title="Elden Ring Interactive Map?id=5401&amp;lat=-92.882812&amp;lng=118.79351&amp;zoom=8&amp;code=mapB" href="/Interactive+Map?id=5401&amp;lat=-92.882812&amp;lng=118.79351&amp;zoom=8&amp;code=mapB">Prince of Death's Trone grace site</a>. Talk to Fia near the teleport and receive her embrace.</li> 
      <li>Exhaust her dialogue until an option opens to giver her <a class="wiki_link" title="Elden Ring Cursemark of Death" href="/Cursemark+of+Death">Cursemark of Death</a>&nbsp;to receive a <a class="wiki_link" title="Elden Ring Radiant Baldachin's Blessing" href="/Radiant+Baldachin's+Blessing">Radiant Baldachin's Blessing</a>.</li> 
      <li>Exhaust her dialogue once again&nbsp;and reload the area and talk/exhaust the dialogue one more time.</li> 
     </ul>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/fia-npc-elden-ring-wiki-300px2-min.jpeg',
      link: 'https://eldenring.wiki.fextralife.com/Fia',
    },
  ],
  [
    'defeat-lichdragon-fortissax',
    {
      title: 'TDefeat Lichdragon Fortissax',
      longDesc: `<p>If you proceed from this point on with the quest you'll get Age of Duskborn ending, so beware what ending you're going for. If you don't want this ending, don't interact with Fia anymore. Since this walkthrough is going for Age of Duskborn (that requires Fia's questline to be completed), we recommend the following steps:</p> <ul> 
      <li>Inspect Fia to&nbsp;enter Godwyn's dream to fight <a class="wiki_link" title="Elden Ring Lichdragon Fortissax" href="/Lichdragon+Fortissax">Lichdragon Fortissax</a>. Defeating Fortissax grants you with 90k runes and <a class="wiki_link" title="Elden Ring Remembrance of the Lichdragon" href="/Remembrance+of+the+Lichdragon">Remembrance of the Lichdragon</a>, which you can&nbsp;trade for <a class="wiki_link" title="Elden Ring Fortissax's Lightning Spear" href="/Fortissax's+Lightning+Spear">Fortissax's Lightning Spear</a>&nbsp;or <a class="wiki_link" title="Elden Ring Death Lightning " href="/Death+Lightning+">Death Lightning</a>&nbsp;incantation.</li> 
      <li>Winning this fight will allow you to pick up the <a class="wiki_link" title="Elden Ring Mending Rune of the Death-Prince" href="/Mending+Rune+of+the+Death-Prince">Mending Rune of the Death-Prince</a>, which is the item that will grant you the Age of Duskborn ending.</li> 
      <li>Return to Fia and get her <a class="wiki_link" title="Elden Ring armor set" href="/armor+set">armor set</a>.</li> 
     </ul>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/lichdragon-fortissax-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Lichdragon+Fortissax',
    },
  ],
  [
    'enter-ainsel-river-main',
    {
      title: 'Enter Ainsel River Main',
      longDesc: `<p><a class="wiki_link" title="Elden Ring Interactive Map?id=1963&amp;lat=-120.30469&amp;lng=75.90301&amp;zoom=5&amp;code=mapB" href="/Interactive+Map?id=1963&amp;lat=-120.30469&amp;lng=75.90301&amp;zoom=5&amp;code=mapB">Elden Ring Map: Nokstella Eternal City Starting Point</a>. Begin from North-West Liurnia of the Lakes. Take the stairs to the very top of <a class="wiki_link" title="Elden Ring Renna's Rise" href="/Renna's+Rise">Renna's Rise</a> and take the waygate there. It will teleport you to <a class="wiki_link" title="Elden Ring Ainsel River Main" href="/Ainsel+River+Main">Ainsel River Main</a>, that northern part of <a class="wiki_link" title="Elden Ring Ainsel River" href="/Ainsel+River">Ainsel River</a> that was inaccessible last time you were there. Inside an open coffin you'll find <a class="wiki_link" title="Elden Ring Miniature Ranni" href="/Miniature+Ranni">Miniature Ranni</a>. Hold on to that doll for now, you'll need it later. Follow the path through the river and you'll get to another section of the <a class="wiki_link" title="Elden Ring Uhl Palace Ruins" href="/Uhl+Palace+Ruins">Uhl Palace Ruins</a>. Clear the enemies out and collect the loot here that includes <a class="wiki_link" title="Elden Ring Ghost Glovewort (6)" href="/Ghost+Glovewort+(6)">Ghost Gloveworts [6]</a>&nbsp;&amp; <a class="wiki_link" title="Elden Ring Ghost Glovewort (7)" href="/Ghost+Glovewort+(7)">[7]</a>, <a class="wiki_link" title="Elden Ring Smithing Stone (4)" href="/Smithing+Stone+(4)">Smithing Stone [4]</a>, and a <a class="wiki_link" title="Elden Ring Stonesword Key" href="/Stonesword+Key">Stonesword Key</a>.</p>`,
      image: '',
      link: 'https://eldenring.wiki.fextralife.com/Ainsel+River+Main',
    },
  ],
  [
    'collect-miniature-ranni',
    {
      title: 'Collect Miniature Ranni',
      longDesc: `<p><a class="wiki_link" title="Elden Ring Interactive Map?id=1963&amp;lat=-120.30469&amp;lng=75.90301&amp;zoom=5&amp;code=mapB" href="/Interactive+Map?id=1963&amp;lat=-120.30469&amp;lng=75.90301&amp;zoom=5&amp;code=mapB">Elden Ring Map: Nokstella Eternal City Starting Point</a>. Begin from North-West Liurnia of the Lakes. Take the stairs to the very top of <a class="wiki_link" title="Elden Ring Renna's Rise" href="/Renna's+Rise">Renna's Rise</a> and take the waygate there. It will teleport you to <a class="wiki_link" title="Elden Ring Ainsel River Main" href="/Ainsel+River+Main">Ainsel River Main</a>, that northern part of <a class="wiki_link" title="Elden Ring Ainsel River" href="/Ainsel+River">Ainsel River</a> that was inaccessible last time you were there. Inside an open coffin you'll find <a class="wiki_link" title="Elden Ring Miniature Ranni" href="/Miniature+Ranni">Miniature Ranni</a>. Hold on to that doll for now, you'll need it later. Follow the path through the river and you'll get to another section of the <a class="wiki_link" title="Elden Ring Uhl Palace Ruins" href="/Uhl+Palace+Ruins">Uhl Palace Ruins</a>. Clear the enemies out and collect the loot here that includes <a class="wiki_link" title="Elden Ring Ghost Glovewort (6)" href="/Ghost+Glovewort+(6)">Ghost Gloveworts [6]</a>&nbsp;&amp; <a class="wiki_link" title="Elden Ring Ghost Glovewort (7)" href="/Ghost+Glovewort+(7)">[7]</a>, <a class="wiki_link" title="Elden Ring Smithing Stone (4)" href="/Smithing+Stone+(4)">Smithing Stone [4]</a>, and a <a class="wiki_link" title="Elden Ring Stonesword Key" href="/Stonesword+Key">Stonesword Key</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/miniature-ramni-key-items-description.png',
      link: 'https://eldenring.wiki.fextralife.com/Miniature+Ranni',
    },
  ],
  [
    'enter-nokstella-eternal-city',
    {
      title: 'Enter Nokstella, Eternal City',
      longDesc: `<p>Continue west and keep following the path up, making sure not to fall back down into the lower floors of <a class="wiki_link" title="Elden Ring Ainsel River" href="/Ainsel+River">Ainsel River</a>, and eventually you'll reach <a class="wiki_link" title="Elden Ring Nokstella, Eternal City" href="/Nokstella,+Eternal+City">Nokstella, Eternal City</a>. Feel free to explore the city to collect equipment and valuable upgrade materials. Items to note are <a class="wiki_link" title="Elden Ring Archer Ashes" href="/Archer+Ashes">Archer Ashes</a>, <a class="wiki_link" title="Elden Ring Nightmaiden &amp; Swordstress Puppets" href="/Nightmaiden+&amp;+Swordstress+Puppets">Nightmaiden &amp; Swordstress Puppets</a>, and <a class="wiki_link" title="Elden Ring Ghost-Glovewort Picker's Bell Bearing (2)" href="/Ghost-Glovewort+Picker's+Bell+Bearing+(2)">Ghost-Glovewort Picker's Bell Bearing [2]</a>, all of which can be found in buildings near the entrance to Nokstella, and the <a class="wiki_link" title="Elden Ring Moon of Nokstella" href="/Moon+of+Nokstella">Moon of Nokstella</a>, a <a class="wiki_link" title="Elden Ring Talismans" href="/Talismans">Talisman</a> that increases your memory slots found in the north-west of the city.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nokstella-eternal-city-locations-elden-ring-wiki-guide-300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Nokstella,+Eternal+City',
    },
  ],
  [
    'collect-key-items-and-spirit-ashes-nokstella',
    {
      title: 'Collect Key Items & Spirit Ashes',
      longDesc: `<p>Continue west and keep following the path up, making sure not to fall back down into the lower floors of <a class="wiki_link" title="Elden Ring Ainsel River" href="/Ainsel+River">Ainsel River</a>, and eventually you'll reach <a class="wiki_link" title="Elden Ring Nokstella, Eternal City" href="/Nokstella,+Eternal+City">Nokstella, Eternal City</a>. Feel free to explore the city to collect equipment and valuable upgrade materials. Items to note are <a class="wiki_link" title="Elden Ring Archer Ashes" href="/Archer+Ashes">Archer Ashes</a>, <a class="wiki_link" title="Elden Ring Nightmaiden &amp; Swordstress Puppets" href="/Nightmaiden+&amp;+Swordstress+Puppets">Nightmaiden &amp; Swordstress Puppets</a>, and <a class="wiki_link" title="Elden Ring Ghost-Glovewort Picker's Bell Bearing (2)" href="/Ghost-Glovewort+Picker's+Bell+Bearing+(2)">Ghost-Glovewort Picker's Bell Bearing [2]</a>, all of which can be found in buildings near the entrance to Nokstella, and the <a class="wiki_link" title="Elden Ring Moon of Nokstella" href="/Moon+of+Nokstella">Moon of Nokstella</a>, a <a class="wiki_link" title="Elden Ring Talismans" href="/Talismans">Talisman</a> that increases your memory slots found in the north-west of the city.</p>`,
      image: '',
      link: '',
    },
  ],
  [
    'talk-to-miniature-ranni',
    {
      title: 'Talk to Miniature Ranni',
      longDesc: `<p>When you're done exploring, head to the far western side of Nokstella to find a lift that takes you back down to <a class="wiki_link" title="Elden Ring Ainsel River Main" href="/Ainsel+River+Main">Ainsel River Main</a>. You'll find a Site of Grace here where when resting at,&nbsp; you'll be given the option to talk with the <a class="wiki_link" title="Elden Ring Miniature Ranni" href="/Miniature+Ranni">Miniature Ranni</a> doll. She'll ignore you the first two times, but keep at it and she'll eventually give in and ask you to defeat a <a class="wiki_link" title="Elden Ring Baleful Shadow" href="/Baleful+Shadow">Baleful Shadow</a>. Luckily, if you continue forward you'll find him right ahead in an open cavern. Defeat him and you'll be rewarded with&nbsp;the <a class="wiki_link" title="Elden Ring Discarded Palace Key" href="/Discarded+Palace+Key">Discarded Palace Key</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/miniature-ramni-key-items-description.png',
      link: 'https://eldenring.wiki.fextralife.com/Miniature+Ranni',
    },
  ],
  [
    'enter-lake-of-rot',
    {
      title: 'Enter Lake of Rot',
      longDesc: `<p>Head south and find a building that houses a lift taking you down.&nbsp;This lift will take&nbsp;you to <a class="wiki_link" title="Elden Ring Lake Rot" href="/Lake+Rot">Lake Rot</a>. At the water's edge, just slightly past the Site of Grace, you can loot a corpse that holds the Map fragment for the Lake of Rot, making navigation easier.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/lake-of-rot-a-locations-elden-ring-wiki-guide-300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Lake+of+Rot',
    },
  ],
  [
    'obtain-map-fragment-nokstella',
    {
      title: 'Obtain Map Fragment',
      image: '',
      link: '',
    },
  ],
  [
    'use-the-discarded-palace-key',
    {
      title: 'Use the Discarded Palace Key',
      longDesc: `<p>Now that you've got the map and a Site of Grace to teleport to, we're taking a quick detour for <a class="wiki_link" title="Elden Ring Ranni the Witch" href="/Ranni+the+Witch">Ranni's</a> quest. Feel free to skip this part if you've chosen not to provide your services to her. Teleport back to the Raya Lucaria Grand Library. There is a small chest next to a bookshelf north-west of where Rennala is sitting that can be unlocked with the <a class="wiki_link" title="Elden Ring Discarded Palace Key" href="/Discarded+Palace+Key">Discarded Palace Key</a> that <a class="wiki_link" title="Elden Ring Miniature Ranni" href="/Miniature+Ranni">Miniature Ranni</a> handed over to you. Inside&nbsp;you'll find <a class="wiki_link" title="Elden Ring Ranni the Witch" href="/Ranni+the+Witch">Ranni's</a> ring, the <a class="wiki_link" title="Elden Ring Dark Moon Ring" href="/Dark+Moon+Ring">Dark Moon Ring</a>. And with that out of the way, you can teleport back to the <a class="wiki_link" title="Elden Ring Lake of Rot" href="/Lake+of+Rot">Lake of Rot</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/discarded-palace-key-elden-ring-wiki-guide.png',
      link: 'https://eldenring.wiki.fextralife.com/Discarded+Palace+Key',
    },
  ],
  [
    'defeat-dragonkin-soldier',
    {
      title: 'Defeat Dragonkin Soldier',
      longDesc: `<p>With all the landmasses raised, we can go deal with the boss. In the middle of the lake, next to three raised islands, sits the <a class="wiki_link" title="Elden Ring Dragonkin Soldier" href="/Dragonkin+Soldier">Dragonkin Soldier</a> once again. Defeat him, being careful not to get knocked down in the water. From here you can choose to loot bodies scattered all around <a class="wiki_link" title="Elden Ring Lake Rot" href="/Lake+Rot">Lake Rot</a> to obtain <a class="wiki_link" title="Elden Ring Items" href="/Items">items</a>, many of which are <a class="wiki_link" title="Elden Ring Somber Smithing Stone (7)" href="/Somber+Smithing+Stone+(7)">Somber Smithing Stones [7]</a> &amp; <a class="wiki_link" title="Elden Ring Somber Smithing Stone (8)" href="/Somber+Smithing+Stone+(8)">[8]</a>. An item of note is the <a class="wiki_link" title="Elden Ring Nomadic Warrior's Cookbook (22)" href="/Nomadic+Warrior's+Cookbook+(22)">Nomadic Warrior's Cookbook [22]</a> obtained from a lone chest in a large ruin in the south-western section of the map.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragonkin-soldier-boss-enemies-elden-ring-wiki-guide-300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Dragonkin+Soldier',
    },
  ],
  [
    'enter-grand-cloister-nokstella',
    {
      title: 'Enter Grand Cloister',
      longDesc: `<p>After you're done with this area, head over to the southern section, where you'll find a waterfall. Climb down the stairs next to it to reach the <a class="wiki_link" title="Elden Ring Grand Cloister" href="/Grand+Cloister">Grand Cloister</a>. If you're not planning to explore the area, head west and then south by&nbsp;a group of enemies, where you'll find an open coffin at the tip of the waterfall. Interact with the coffin to rest in it and a cutscene will play.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/grand_cloister_locations_elden_ring_wiki_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Grand+Cloister',
    },
  ],
  [
    'defeat-astel-naturalborn-of-the-void',
    {
      title: 'Defeat Astel, Naturalborn of the Void',
      longDesc: `<p>If you open your map now, you will find yourself in an isolated area south of the <a class="wiki_link" title="Elden Ring Lake of Rot" href="/Lake+of+Rot">Lake of Rot</a>. Through the mist door, you'll fight <a class="wiki_link" title="Elden Ring Astel, Naturalborn of the Void" href="/Astel,+Naturalborn+of+the+Void">Astel, Naturalborn of the Void</a>, and with his defeat, all the underground areas have been explored. Head north past his boss room to find a lift that takes you back to the surface at <a class="wiki_link" title="Elden Ring Deep Ainsel Well" href="/Deep+Ainsel+Well">Deep Ainsel Well</a>.</p>`,
      image: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/astel.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Astel+Naturalborn+of+the+Void',
    },
  ],
  [
    'get-access-to-altus-plateau',
    {
      title: 'Get access to the Altus Plateau',
      longDesc: `<p><a class="wiki_link" title="Elden Ring Interactive Map?id=1963&amp;lat=-120.30469&amp;lng=75.90301&amp;zoom=5&amp;code=mapB" href="/Interactive+Map?id=1963&amp;lat=-120.30469&amp;lng=75.90301&amp;zoom=5&amp;code=mapB">Elden Ring Map: Altus Plateau Starting Point</a>. The Altus Plateau, northeast of Liurnia, is your next destination. There are two ways to access it: fight your way up through the cliffside dungeon at <a class="wiki_link" title="Elden Ring Ruin-Strewn Precipice" href="/Ruin-Strewn+Precipice" target="">Ruin-Strewn Precipice</a> (the red-outlined hole on the map, accessed from northern canyon of Liurnia of the Lakes), or use the <a class="wiki_link" title="Elden Ring Dectus Medallion (Left)" href="/Dectus+Medallion+(Left)">left</a>&nbsp;and <a class="wiki_link" title="Elden Ring Dectus Medallion (Right)" href="/Dectus+Medallion+(Right)">right halves of the Dectus Medallion</a> at the <a class="wiki_link" title="Elden Ring Grand Lift of Dectus" href="/Grand+Lift+of+Dectus">Grand Lift of Dectus</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/altus-plateau-hub-location-preview-elden-ring-wiki-guide-300px.jpghttps://eldenring.wiki.fextralife.com/file/Elden-Ring/malefactors_evergaol_locations_elden_ring_wiki_guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Altus+Plateau',
    },
  ],
  [
    'complete-western-altus-objectives',
    {
      title: 'Complete Western Altus Objectives',
      longDesc: `<p>Entering from <a class="wiki_link" title="Elden Ring Ruin-Strewn Precipice" href="/Ruin-Strewn+Precipice" target="">Ruin-Strewn Precipice</a> is better as you can obtain several crafting magerials, a <a class="wiki_link" title="Elden Ring Dragon Heart" href="/Dragon+Heart" target="">Dragon Heart</a> and&nbsp; <a class="wiki_link" title="Elden Ring Golden Seed" href="/Golden+Seed" target="">Golden Seed</a> within it. You will head up to the plateau from Magma Wyrm Site of grace, and can pick up the <a class="wiki_link" title="Elden Ring Ruler's Set" href="/Ruler's+Set" target="">Ruler's Set</a> shortly after.</p> <p>You are now at the Abandoned Coffin site of grace (<a class="wiki_link" title="Elden Ring Interactive Map?id=1138&amp;lat=-101.343747&amp;lng=69.075444&amp;zoom=8&amp;code=mapA" href="/Interactive+Map?id=1138&amp;lat=-101.343747&amp;lng=69.075444&amp;zoom=8&amp;code=mapA">see it on the map here</a>). Head West from this site of grace and defeat a Teardrop Scarab to loot <a class="wiki_link" title="Elden Ring Ash of War: Sacred Order" href="/Ash+of+War:+Sacred+Order" target="">Ash of War: Sacred Order</a>. Further east, <a class="wiki_link" title="Elden Ring Perfumer's Ruins" href="/Perfumer's+Ruins" target="">Perfumer's Ruins</a> has the <a class="wiki_link" title="Elden Ring Omenkiller Set" href="/Omenkiller+Set" target="">Omenkiller Set</a>, <a class="wiki_link" title="Elden Ring Perfumer's Cookbook (1)" href="/Perfumer's+Cookbook+(1)" target="">Perfumer's Cookbook (1)</a> and <a class="wiki_link" title="Elden Ring Perfumer's Talisman" href="/Perfumer's+Talisman" target="">Perfumer's Talisman</a>. Nearby, <a class="wiki_link" title="Elden Ring Unsightly Catacombs" href="/Unsightly+Catacombs" target="">Unsightly Catacombs</a> has valuable <a class="wiki_link" title="Elden Ring Ghost Glovewort (5)" href="/Ghost+Glovewort+(5)" target="">Ghost Glovewort (5)</a> and <a class="wiki_link" title="Elden Ring Grave Glovewort (4)" href="/Grave+Glovewort+(4)" target="">Grave Glovewort (4)</a> to loot, as well as the <a class="wiki_link" title="Elden Ring Perfumer Tricia" href="/Perfumer+Tricia" target="">Perfumer Tricia</a> spirit ash from the dual boss of the dungeon.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/altus-plateau-hub-location-preview-elden-ring-wiki-guide-300px.jpghttps://eldenring.wiki.fextralife.com/file/Elden-Ring/malefactors_evergaol_locations_elden_ring_wiki_guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Altus+Plateau',
    },
  ],
  [
    'talk-to-millicent',
    {
      title: 'Talk to Millicent',
      longDesc: `<p>Return to Abandoned Coffin and follow the road north toward Lux Ruins, <a class="wiki_link" title="Elden Ring Ancient Dragon Lansseax" href="/Ancient+Dragon+Lansseax" target="">Ancient Dragon Lansseax</a> will stand on your way but it's an optional fight as you can just run by if you prefer, heading to meet <a class="wiki_link" title="Elden Ring Millicent" href="/Millicent" target="">Millicent</a> and collect a <a class="wiki_link" title="Elden Ring Golden Seed" href="/Golden+Seed" target="">Golden Seed</a> before veering slightly south to Erdtree-Gazing Hill and <a class="wiki_link" title="Elden Ring Lux Ruins" href="/Lux+Ruins" target="">Lux Ruins</a>. <a class="wiki_link" title="Elden Ring Ash of War: Shield Crash" href="/Ash+of+War:+Shield+Crash" target="">Ash of War: Shield Crash</a> can be looted from a teardrop scarab here, and the <a class="wiki_link" title="Elden Ring Greatshield Talisman" href="/Greatshield+Talisman" target="">Greatshield Talisman</a> from a chest further east.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/millicent-npc-elden-ring-wiki-300px-min-min-min.jpeg',
      link: 'https://eldenring.wiki.fextralife.com/Millicent',
    },
  ],
  [
    'complete-old-altus-tunnel',
    {
      title: 'Complete Old Altus Tunnel',
      longDesc: `<p>Find the lower ground and head due north on the bottom cannyon. You will find <a class="wiki_link" title="Elden Ring Old Altus Tunnel" href="/Old+Altus+Tunnel" target="">Old Altus Tunnel</a> on your left, with <a class="wiki_link" title="Elden Ring Smithing Stone (4)" href="/Smithing+Stone+(4)" target="">Smithing Stone (4)</a> and (5) as well as <a class="wiki_link" title="Elden Ring Somber Smithing Stone (5)" href="/Somber+Smithing+Stone+(5)" target="">Somber Smithing Stone (5)</a> and (6). The <a class="wiki_link" title="Elden Ring Stonedigger Troll" href="/Stonedigger+Troll" target="">Stonedigger Troll</a> boss within drops the <a class="wiki_link" title="Elden Ring Great Club" href="/Great+Club" target="">Great Club</a>, and a <a class="wiki_link" title="Elden Ring Troll Hammer" href="/Troll+Hammer" target="">Troll Hammer</a> and <a class="wiki_link" title="Elden Ring Boldrake Talisman" href="/Boldrake+Talisman" target="">Boldrake Talisman</a> +1 can be looted from sheds within the tunnel.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/old_altus_tunnel_locations_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Old+Altus+Tunnel',
    },
  ],
  [
    'complete-shaded-castle',
    {
      title: 'Complete Shaded Castle',
      longDesc: `<p>Exit and continue following the cannyon north until you come to a poisonous area. This is the Shaded Castle. Please see the <a class="wiki_link" title="Elden Ring Shaded Castle" href="/Shaded+Castle" target="">Shaded Castle</a> page for a proper walkthrough of the area. Notable items include <a class="wiki_link" title="Elden Ring Perfumer's Cookbook (2)" href="/Perfumer's+Cookbook+(2)" target="">Perfumer's Cookbook (2)</a> and the <a class="wiki_link" title="Elden Ring Valkyrie's Prosthesis" href="/Valkyrie's+Prosthesis" target="">Valkyrie's Prosthesis</a> that you need to advance <a class="wiki_link" title="Elden Ring Millicent" href="/Millicent" target="">Millicent</a>'s quest. To the west of the castle, an invasion by <a class="wiki_link" title="Elden Ring Maleigh Marais, Shaded Castle Castellan" href="/Maleigh+Marais,+Shaded+Castle+Castellan" target="">Maleigh Marais, Shaded Castle Castellan</a> gives you the <a class="wiki_link" title="Elden Ring House Marais Set" href="/House+Marais+Set" target="">House Marais Set</a> and <a class="wiki_link" title="Elden Ring Antspur Rapier" href="/Antspur+Rapier" target="">Antspur Rapier</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/the-shaded-castle-location-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/The+Shaded+Castle',
    },
  ],
  [
    'talk-to-millicent-again',
    {
      title: 'Talk to Millicent',
      longDesc: `<p>Teleport back to the Erdtree-Gazing Hill in souther Altus and talk to <a class="wiki_link" title="Elden Ring Millicent" href="/Millicent" target="">Millicent</a> to advance her quest. Then travel south and east until you are at the road by the Grand Lift of Dectus. To the east of here and down the slopes, the <a class="wiki_link" title="Elden Ring Golden Lineage Evergaol" href="/Golden+Lineage+Evergaol" target="">Golden Lineage Evergaol</a> has the optional boss <a class="wiki_link" title="Elden Ring Godfrey the Grafted" href="/Godfrey+the+Grafted" target="">Godfrey the Grafted</a>, that drops the very useful <a class="wiki_link" title="Elden Ring Godfrey Icon" href="/Godfrey+Icon" target="">Godfrey Icon</a> talisman for charged spells and skills.&nbsp;</p> <p>NOTE: If you want you can ride the lift up and spawn <a class="wiki_link" title="Elden Ring Rya" href="/Rya" target="">Rya</a>, who will invite you to the <a class="wiki_link" title="Elden Ring Volcano Manor" href="/Volcano+Manor" target="">Volcano Manor</a>, which we will naturally visit later on this playthrough.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/millicent-npc-elden-ring-wiki-300px-min-min-min.jpeg',
      link: 'https://eldenring.wiki.fextralife.com/Millicent',
    },
  ],
  [
    'complete-golden-lineage-evergaolboc-the-seamster',
    {
      title: 'Complete Golden Lineage EvergaolBoc the Seamster',
      longDesc: `<p>You can follow now follow the main road north and activate the Altus Highway Junction site of grace, nearby you can meet <a class="wiki_link" title="Elden Ring Boc the Seamster" href="/Boc+the+Seamster" target="">Boc the Seamster</a> and advance his quest. North from here the road takes you to a <a class="wiki_link" title="Elden Ring Golden Seed" href="/Golden+Seed" target="">Golden Seed</a> and <a class="wiki_link" title="Elden Ring Map (Altus Plateau)" href="/Map+(Altus+Plateau)" target="">Map (Altus Plateau)</a> to reveal the region. Slightly north, talk to <a class="wiki_link" title="Elden Ring Brother Corhyn" href="/Brother+Corhyn" target="">Brother Corhyn</a> who is looking for the Goldmask. Directly east from the Atlus Highway Junction Site of Grace, follow the road until it breaks off <strong>north</strong> into an open cave, in the cave the <a class="wiki_link" title="Elden Ring Amber Starlight" href="/Amber+Starlight" target="">Amber Starlight</a> will be sitting below a statue surrounded by octupus ball creatures. <a class="wiki_link" title="Elden Ring Interactive Map?id=5766&amp;lat=-95.45&amp;lng=87.133&amp;zoom=8&amp;code=mapA" href="/Interactive+Map?id=5766&amp;lat=-95.45&amp;lng=87.133&amp;zoom=8&amp;code=mapA">Map Link</a> - you need this item for&nbsp;<a class="wiki_link" title="Elden Ring Preceptor Seluvis" href="/Preceptor+Seluvis">Seluvis's</a> quest if you are doing it, but in this playthrough we have already bypassed his side-quest.</p>`,
      image: '',
      link: 'https://eldenring.wiki.fextralife.com/Golden+Lineage+Evergaol',
    },
  ],
  [
    'boc-the-seamster',
    {
      title: 'Boc the Seamster',
      link: 'https://eldenring.wiki.fextralife.com/Boc+the+Seamster',
    },
  ],
  [
    'obtain-zone-map-talk-to-boc-and-corhyn',
    {
      title: 'Obtain Zone Map & Talk to Boc and Corhyn',
      longDesc: `<p>You can follow now follow the main road north and activate the Altus Highway Junction site of grace, nearby you can meet <a class="wiki_link" title="Elden Ring Boc the Seamster" href="/Boc+the+Seamster" target="">Boc the Seamster</a> and advance his quest. North from here the road takes you to a <a class="wiki_link" title="Elden Ring Golden Seed" href="/Golden+Seed" target="">Golden Seed</a> and <a class="wiki_link" title="Elden Ring Map (Altus Plateau)" href="/Map+(Altus+Plateau)" target="">Map (Altus Plateau)</a> to reveal the region. Slightly north, talk to <a class="wiki_link" title="Elden Ring Brother Corhyn" href="/Brother+Corhyn" target="">Brother Corhyn</a> who is looking for the Goldmask. Directly east from the Atlus Highway Junction Site of Grace, follow the road until it breaks off <strong>north</strong> into an open cave, in the cave the <a class="wiki_link" title="Elden Ring Amber Starlight" href="/Amber+Starlight" target="">Amber Starlight</a> will be sitting below a statue surrounded by octupus ball creatures. <a class="wiki_link" title="Elden Ring Interactive Map?id=5766&amp;lat=-95.45&amp;lng=87.133&amp;zoom=8&amp;code=mapA" href="/Interactive+Map?id=5766&amp;lat=-95.45&amp;lng=87.133&amp;zoom=8&amp;code=mapA">Map Link</a> - you need this item for&nbsp;<a class="wiki_link" title="Elden Ring Preceptor Seluvis" href="/Preceptor+Seluvis">Seluvis's</a> quest if you are doing it, but in this playthrough we have already bypassed his side-quest.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/brother_corhyn_npcs_elden_ring_wiki_guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Brother+Corhyn',
    },
  ],
  [
    'complete-secong-church-of-marika',
    {
      title: 'Complete Second Church of Marika',
      longDesc: `<p>Keep following the road north then go West to visit the <a class="wiki_link" title="Elden Ring Second Church of Marika" href="/Second+Church+of+Marika" target="">Second Church of Marika</a> and loot the <a class="wiki_link" title="Elden Ring Crystal Tear" href="/Crystal+Tear" target="">Crystal Tear</a> there. <a class="wiki_link" title="Elden Ring Bloody Finger Hunter Yura" href="/Bloody+Finger+Hunter+Yura" target="">Bloody Finger Hunter Yura</a> will be here, and if you talk to him you will trigger an invasion from <a class="wiki_link" title="Elden Ring Eleonora, Violet Bloody Finger" href="/Eleonora,+Violet+Bloody+Finger" target="">Eleonora, Violet Bloody Finger</a>, who allows for the acquisition of <a class="wiki_link" title="Elden Ring Purifying Crystal Tear" href="/Purifying+Crystal+Tear" target="">Purifying Crystal Tear</a> alongside <a class="wiki_link" title="Elden Ring Eleonora's Poleblade" href="/Eleonora's+Poleblade" target="">Eleonora's Poleblade</a>. This is a VERY useful item for an upcoming Boss fight, and doing Yura's quest is not necessarily required for her to spawn, but the triggers are unclear at this time.</p>`,
      image: '',
      link: 'https://eldenring.wiki.fextralife.com/Second+Church+of+Marika',
    },
  ],
  [
    'get-minord-erdtree-flask-upgrade-complete-valley-objectives',
    {
      title: 'Get Minord Erdtree Flask Upgrades & complete valley objectives',
      longDesc: `<p>Return to the road and follow it to the valley with the Minor Erdtree. The tree is protected by <a class="wiki_link" title="Elden Ring Wormface" href="/Wormface" target="">Wormface</a>, a boss that drops <a class="wiki_link" title="Elden Ring Speckled Hardtear" href="/Speckled+Hardtear" target="">Speckled Hardtear</a> and <a class="wiki_link" title="Elden Ring Crimsonspill Crystal Tear" href="/Crimsonspill+Crystal+Tear" target="">Crimsonspill Crystal Tear</a>. There's also a Golden Seed slightly north and west from the tree. Within this valley, you will find <a class="wiki_link" title="Elden Ring Mirage Rise" href="/Mirage+Rise" target="">Mirage Rise</a> to the west, that asks that you find symbols in the valley to unlock the tower and gain the <a class="wiki_link" title="Elden Ring Unseen Form" href="/Unseen+Form" target="">Unseen Form</a> and <a class="wiki_link" title="Elden Ring Unseen Blade" href="/Unseen+Blade" target="">Unseen Blade</a> spells. To the East, <a class="wiki_link" title="Elden Ring Altus Tunnel" href="/Altus+Tunnel" target="">Altus Tunnel</a> has <a class="wiki_link" title="Elden Ring Smithing Stone (5)" href="/Smithing+Stone+(5)" target="">Smithing Stone (5)</a> upgrades and the <a class="wiki_link" title="Elden Ring Somberstone Miner's Bell Bearing (2)" href="/Somberstone+Miner's+Bell+Bearing+(2)" target="">Somberstone Miner's Bell Bearing (2)</a>. <a class="wiki_link" title="Elden Ring Woodfolk Ruins" href="/Woodfolk+Ruins" target="">Woodfolk Ruins</a> has an underground cellar with <a class="wiki_link" title="Elden Ring Wrath of Gold" href="/Wrath+of+Gold" target="">Wrath of Gold</a> in a chest, another one with <a class="wiki_link" title="Elden Ring Nomadic Warrior's Cookbook (19)" href="/Nomadic+Warrior's+Cookbook+(19)" target="">Nomadic Warrior's Cookbook (19)</a>, and a teardrop scarab with <a class="wiki_link" title="Elden Ring Ash of War: Golden Slam" href="/Ash+of+War:+Golden+Slam" target="">Ash of War: Golden Slam</a> in the northern area of the ruins.</p>`,
      image: '',
      link: '',
    },
  ],
  [
    'complete-dominula-and-talk-to-millicent',
    {
      title: 'Complete Dominula & talk to Millicent',
      longDesc: `<p>Follow the road north exiting the Erdtree Valley and once you reach the elevation after the villagers attack you go right until you are in front of a watchtower to collect a <a class="wiki_link" title="Elden Ring Golden Seed" href="/Golden+Seed" target="">Golden Seed</a>. From this point East, enemies will shoot at you with deadly ballistas and catapults. Instead of going East toward the capital, go north into <a class="wiki_link" title="Elden Ring Dominula, Windmill Village" href="/Dominula,+Windmill+Village" target="">Dominula, Windmill Village</a>. Here you can defeat the <a class="wiki_link" title="Elden Ring Godskin Apostle" href="/Godskin+Apostle" target="">Godskin Apostle</a> boss that drops the <a class="wiki_link" title="Elden Ring Scouring Black Flame" href="/Scouring+Black+Flame" target="">Scouring Black Flame</a> incantation, after which you can talk to <a class="wiki_link" title="Elden Ring Millicent" href="/Millicent" target="">Millicent</a> again. The area also has the <a class="wiki_link" title="Elden Ring Goskin Peeler" href="/Goskin+Peeler" target="">Goskin Peeler</a> twinblade and <a class="wiki_link" title="Elden Ring Celebrant's Skull" href="/Celebrant's+Skull" target="">Celebrant's Skull</a> warhammer.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/millicent-npc-elden-ring-wiki-300px-min-min-min.jpeg',
      link: 'https://eldenring.wiki.fextralife.com/Millicent',
    },
  ],
  [
    'explore-eastern-altus-heights',
    {
      title: 'Explore Eastern Altus Heights',
      longDesc: `<p>If you return to the road, there's the option to head East into Lyndell, Capital City outskirts. We will leave this for later, and instead take the lower road south-east. This will bring you to an unnamed ruins where a noble will transform into a Lion Guardian. Defeat it to get a <a class="wiki_link" title="Elden Ring Larval Tear" href="/Larval+Tear" target="">Larval Tear</a>, then continue following the road until you come to an elevation with lightning and <a class="wiki_link" title="Elden Ring Ancient Dragon Lansseax" href="/Ancient+Dragon+Lansseax" target="">Ancient Dragon Lansseax</a>. This is an optional fight, and west from here there's another boss encounter with a <a class="wiki_link" title="Elden Ring Black Knife Assassin" href="/Black+Knife+Assassin" target="">Black Knife Assassin</a> just outside the <a class="wiki_link" title="Elden Ring Sainted Hero's Grave" href="/Sainted+Hero's+Grave" target="">Sainted Hero's Grave</a>. The grave has the <a class="wiki_link" title="Elden Ring Crimson Seed Talisman" href="/Crimson+Seed+Talisman" target="">Crimson Seed Talisman</a> and <a class="wiki_link" title="Elden Ring Dragoncrest Shield Talisman" href="/Dragoncrest+Shield+Talisman" target="">Dragoncrest Shield Talisman</a> +1. South from here, <a class="wiki_link" title="Elden Ring Stormcaller Church" href="/Stormcaller+Church" target="">Stormcaller Church</a> has a <a class="wiki_link" title="Elden Ring Crystal Tear" href="/Crystal+Tear" target="">Crystal Tear</a> to loot, as well as the <a class="wiki_link" title="Elden Ring Dragonbolt Blessing" href="/Dragonbolt+Blessing" target="">Dragonbolt Blessing</a> incantation.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/altus-plateau-hub-location-preview-elden-ring-wiki-guide-300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Altus+Plateau',
    },
  ],
  [
    'meet-goldmask-report-to-corhyb',
    {
      title: 'Meet Goldmask and report to Corhyn',
      longDesc: `<p>You have now successfully looted the eastern part of Altus Plains, so bactrack to <a class="wiki_link" title="Elden Ring Dominula, Windmill Village" href="/Dominula,+Windmill+Village" target="">Dominula, Windmill Village</a> and head west instead. Following the main road without going up you will arrive to meet <a class="wiki_link" title="Elden Ring Goldmask" href="/Goldmask" target="">Goldmask</a> near the collapsed bridge. The lower area has <a class="wiki_link" title="Elden Ring Radiant Gold Mask" href="/Radiant+Gold+Mask" target="">Radiant Gold Mask</a> helm. After interacting with Goldmask, go back to Brother Corhyn near the Altus Highway Junction site of grace and tell him of your finding. He will move to Goldmask's location.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/goldmask_npcs_elden_ring_wiki_guide300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Goldmask',
    },
  ],
  [
    'unlock-mt-gelmir-site-of-grace',
    {
      title: "Unlock Mt Gelmir's site of grace",
      longDesc: `<p>Travel back to Goldmask and Corhyn will have more incantations to sell, and dialogue that you should exhaust to progress his quest. To the north from here, in the higher areas, the Windmill Pastures (East and West) hold the <a class="wiki_link" title="Elden Ring Noble's Set" href="/Noble's+Set" target="">Noble's Set</a>, <a class="wiki_link" title="Elden Ring Battlemage Set" href="/Battlemage+Set" target="">Battlemage Set</a> and <a class="wiki_link" title="Elden Ring Giant Rat Ashes" href="/Giant+Rat+Ashes" target="">Giant Rat Ashes</a>. You can do a quick sweep of this before dropping back to the road and taking the <a class="wiki_link" title="Elden Ring Great Stars" href="/Great+Stars" target="">Great Stars</a> Warhammer from the enemy caravan traveling here. Following this road West leads you directly to Mt. Gelmir, but it's a good idea to follow it until the Bridge of Iniquity site of grace to activate it for teleporting. The road ahead from here is a dead-end with difficult enemies leading to an invasion by <a class="wiki_link" title="Elden Ring Anastacia, Tarnished-Eater" href="/Anastacia,+Tarnished-Eater" target="">Anastacia, Tarnished-Eater</a> and the <a class="wiki_link" title="Elden Ring Golden Vow (Spell)" href="/Golden+Vow+(Spell)" target="">Golden Vow (Spell)</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/mt-gelmir-hub-location-preview-elden-ring-wiki-guide-300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Mt+Gelmir',
    },
  ],
  [
    'defeat-tibia-mariner',
    {
      title: 'Defeat Tibia Mariner',
      longDesc: `<p><a class="wiki_link" title="Elden Ring Interactive Map?id=4567&amp;lat=-99.632&amp;lng=75.514&amp;zoom=8&amp;code=mapA" href="/Interactive+Map?id=4567&amp;lat=-99.632&amp;lng=75.514&amp;zoom=8&amp;code=mapA">Elden Ring Map: Mt. Gelmir Starting Point</a>. We'll complete a couple of locations that are technically Altus Plains but we left for later in order to make it easier to understand progress. From the Erdtree-Gazing Hill site of grace, go straight north and up to arrive to <a class="wiki_link" title="Elden Ring Wyndham Ruins" href="/Wyndham+Ruins" target="">Wyndham Ruins</a> and <a class="wiki_link" title="Elden Ring Wyndham Catacombs" href="/Wyndham+Catacombs" target="">Wyndham Catacombs</a>. There's a <a class="wiki_link" title="Elden Ring Tibia Mariner" href="/Tibia+Mariner" target="">Tibia Mariner</a> here to defeat and earn a <a class="wiki_link" title="Elden Ring Deathroot" href="/Deathroot" target="">Deathroot</a> as well as <a class="wiki_link" title="Elden Ring Tibia's Summons" href="/Tibia's+Summons" target="">Tibia's Summons</a> spell. The catacombs boss drops <a class="wiki_link" title="Elden Ring Glovewort Picker's Bell Bearing (1)" href="/Glovewort+Picker's+Bell+Bearing+(1)" target="">Glovewort Picker's Bell Bearing (1)</a>, which enables you to purchase low level grave glovewort from the Roundtable Hold.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/tibia-mariner_ground_boss_enemies_elden_ring_wiki_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Tibia+Mariner',
    },
  ],
  [
    'complete-wyndham-ruins-and-catacombs',
    {
      title: 'Complete Wyndham Ruins & Catacombs',
      longDesc: `<p><a class="wiki_link" title="Elden Ring Interactive Map?id=4567&amp;lat=-99.632&amp;lng=75.514&amp;zoom=8&amp;code=mapA" href="/Interactive+Map?id=4567&amp;lat=-99.632&amp;lng=75.514&amp;zoom=8&amp;code=mapA">Elden Ring Map: Mt. Gelmir Starting Point</a>. We'll complete a couple of locations that are technically Altus Plains but we left for later in order to make it easier to understand progress. From the Erdtree-Gazing Hill site of grace, go straight north and up to arrive to <a class="wiki_link" title="Elden Ring Wyndham Ruins" href="/Wyndham+Ruins" target="">Wyndham Ruins</a> and <a class="wiki_link" title="Elden Ring Wyndham Catacombs" href="/Wyndham+Catacombs" target="">Wyndham Catacombs</a>. There's a <a class="wiki_link" title="Elden Ring Tibia Mariner" href="/Tibia+Mariner" target="">Tibia Mariner</a> here to defeat and earn a <a class="wiki_link" title="Elden Ring Deathroot" href="/Deathroot" target="">Deathroot</a> as well as <a class="wiki_link" title="Elden Ring Tibia's Summons" href="/Tibia's+Summons" target="">Tibia's Summons</a> spell. The catacombs boss drops <a class="wiki_link" title="Elden Ring Glovewort Picker's Bell Bearing (1)" href="/Glovewort+Picker's+Bell+Bearing+(1)" target="">Glovewort Picker's Bell Bearing (1)</a>, which enables you to purchase low level grave glovewort from the Roundtable Hold.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/wyndham_ruins_2_locations_elden_ring_wiki_guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Wyndham+Ruins',
    },
  ],
  [
    'collect-golden-seed-2',
    {
      title: 'Collect Golden Seed',
      longDesc: `<p>Once you are done with exploring those, go west and down to the canyon floor, to find Seethewater River site of grace. Begin your ride northward, a teardrop scarab nearby drops <a class="wiki_link" title="Elden Ring Ash of War: Barrage" href="/Ash+of+War:+Barrage" target="">Ash of War: Barrage</a>. Continue your way north avoiding the waves of heat until you come to a <a class="wiki_link" title="Elden Ring Golden Seed" href="/Golden+Seed" target="">Golden Seed</a>. Further ahead, you can loot 1x <a class="wiki_link" title="Elden Ring Smithing Stone (5)" href="/Smithing+Stone+(5)" target="">Smithing Stone (5)</a> before arriving to an Imp Gate defended by <a class="wiki_link" title="Elden Ring Basilisk" href="/Basilisk" target="">Basilisks</a> that needs a Stonesword Key - this is <a class="wiki_link" title="Elden Ring Seethewater Cave" href="/Seethewater+Cave" target="">Seethewater Cave</a>, and you can get the peculiar <a class="wiki_link" title="Elden Ring Mushroom Set" href="/Mushroom+Set" target="">Mushroom Set</a> and <a class="wiki_link" title="Elden Ring Kindred of Rot's Exultation" href="/Kindred+of+Rot's+Exultation" target="">Kindred of Rot's Exultation</a> talisman.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_seed_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Golden+Seed',
    },
  ],
  [
    'complete-fort-laeidd',
    {
      title: 'Complete Fort Laeidd',
      longDesc: `<p>Follow the road north until a fort comes into view, this is <a class="wiki_link" title="Elden Ring Fort Laiedd" href="/Fort+Laiedd" target="">Fort Laiedd</a>, and it's UNDER the area with the map fragment so don't fret that you aren't up there yet!. Activate the Seethewater Terminus site of grace and head inside the fort to collect&nbsp;<a class="wiki_link" title="Elden Ring Armorer's Cookbook (7)" href="/Armorer's+Cookbook+(7)" target="">Armorer's Cookbook (7)</a> and the <a class="wiki_link" title="Elden Ring Fire Scorpion Charm" href="/Fire+Scorpion+Charm" target="">Fire Scorpion Charm</a>. You can also loot a Stone Sword Key by the jellyfish to the east of the fort it you needed one for the cave we mentioned before.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/fort_leidd_icon.png',
      link: 'https://eldenring.wiki.fextralife.com/Fort+Laiedd',
    },
  ],
  [
    'defeat-magma-wyrm',
    {
      title: 'Defeat Magma Wyrm',
      longDesc: `<p>South from Fort Laiedd, the road converges to a magma poool with a <a class="wiki_link" title="Elden Ring Magma Wyrm" href="/Magma+Wyrm" target="">Magma Wyrm</a> boss. Defeat it to earn a <a class="wiki_link" title="Elden Ring Dragon Heart" href="/Dragon+Heart" target="">Dragon Heart</a> and unlock the <a class="wiki_link" title="Elden Ring Magma Breath" href="/Magma+Breath" target="">Magma Breath</a> spell at the <a class="wiki_link" title="Elden Ring Cathedral of Dragon Communion" href="/Cathedral+of+Dragon+Communion" target="">Cathedral of Dragon Communion</a>. You will also meet <a class="wiki_link" title="Elden Ring Iron Fist Alexander" href="/Iron+Fist+Alexander" target="">Iron Fist Alexander</a> for the fifth location of his questline. Beware that you will lose health while talking to him if you are in the wrong spot, so keep in mind Alexander can be spoken to from the safety of the rock in the lava lake. Follow the road south past some enemies and a graveyard that can be looted for runes, until you come to the <a class="wiki_link" title="Elden Ring Hermit's Shack" href="/Hermit's+Shack" target="">Hermit's Shack</a>. Defeat the demi-humans here to loot <a class="wiki_link" title="Elden Ring Roiling Magma" href="/Roiling+Magma" target="">Roiling Magma</a>. You can also use the giant Rune Bear to destroy the statue and get some more smithing stones.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/magma_wyrm_bosses_elden_ring_wiki_guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Magma+Wyrm',
    },
  ],
  [
    'talk-to-iron-fist-2',
    {
      title: 'Talk to Iron Fist Alexander',
      longDesc: `<p>South from Fort Laiedd, the road converges to a magma poool with a <a class="wiki_link" title="Elden Ring Magma Wyrm" href="/Magma+Wyrm" target="">Magma Wyrm</a> boss. Defeat it to earn a <a class="wiki_link" title="Elden Ring Dragon Heart" href="/Dragon+Heart" target="">Dragon Heart</a> and unlock the <a class="wiki_link" title="Elden Ring Magma Breath" href="/Magma+Breath" target="">Magma Breath</a> spell at the <a class="wiki_link" title="Elden Ring Cathedral of Dragon Communion" href="/Cathedral+of+Dragon+Communion" target="">Cathedral of Dragon Communion</a>. You will also meet <a class="wiki_link" title="Elden Ring Iron Fist Alexander" href="/Iron+Fist+Alexander" target="">Iron Fist Alexander</a> for the fifth location of his questline. Beware that you will lose health while talking to him if you are in the wrong spot, so keep in mind Alexander can be spoken to from the safety of the rock in the lava lake. Follow the road south past some enemies and a graveyard that can be looted for runes, until you come to the <a class="wiki_link" title="Elden Ring Hermit's Shack" href="/Hermit's+Shack" target="">Hermit's Shack</a>. Defeat the demi-humans here to loot <a class="wiki_link" title="Elden Ring Roiling Magma" href="/Roiling+Magma" target="">Roiling Magma</a>. You can also use the giant Rune Bear to destroy the statue and get some more smithing stones.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/alexander_npc_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Iron+Fist+Alexander',
    },
  ],
  [
    'obtain-memory-stone-comet-azur',
    {
      title: 'Obtain Memory Stone & Comet Azur',
      longDesc: `<p>Continue following this road to arrive at <a class="wiki_link" title="Elden Ring Craftman's Shack" href="/Craftman's+Shack" target="">Craftman's Shack</a>. You can obtain the Pulley Crossbow as a treasure here as well as activate a convenient site of grace. Up ahead is Hermit Village, that is barricaded and has several enemies for you to deal with. Loot the Hierodas Glinstone Crown from a corpse in the southern area of the village, and the <a class="wiki_link" title="Elden Ring Prattling Pate You're Beautiful" href="/Prattling+Pate+You're+Beautiful">Prattling Pate "You're Beautiful"</a> from a door nearby. The north of the village has the miniboss <a class="wiki_link" title="Elden Ring Demi-Human Queen Maggie" href="/Demi-Human+Queen+Maggie" target="">Demi-Human Queen Maggie</a>, who will drop a <a class="wiki_link" title="Elden Ring Memory Stone" href="/Memory+Stone" target="">Memory Stone</a> upon defeat. Slightly north around the corner, you can get <a class="wiki_link" title="Elden Ring Comet Azur" href="/Comet+Azur" target="">Comet Azur</a> from <a class="wiki_link" title="Elden Ring Primeval Sorcerer Azur" href="/Primeval+Sorcerer+Azur" target="">Primeval Sorcerer Azur</a> and activate the site of grace.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/comet_azur_sorcery_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Comet+Azur',
    },
  ],
  [
    'complete-gelmir-hero-grave',
    {
      title: "Complete Gelmir Hero's Grave",
      longDesc: `<p>Traverse the beam by the sorcerer to cross the canyon and drop down. You can activate the lift to <a class="wiki_link" title="Elden Ring Gelmir Hero's Grave" href="/Gelmir+Hero's+Grave" target="">Gelmir Hero's Grave</a>. This location has a <a class="wiki_link" title="Elden Ring Deathroot" href="/Deathroot" target="">Deathroot</a>, as well as the <a class="wiki_link" title="Elden Ring Bloodhound Knight Set" href="/Bloodhound+Knight+Set" target="">Bloodhound Knight Set</a>, <a class="wiki_link" title="Elden Ring Gelmir Knight Set" href="/Gelmir+Knight+Set" target="">Gelmir Knight Set</a>, <a class="wiki_link" title="Elden Ring Bloodhound Knight Floh" href="/Bloodhound+Knight+Floh" target="">Bloodhound Knight Floh</a> spirit ashes and the <a class="wiki_link" title="Elden Ring Mantis Blade" href="/Mantis+Blade" target="">Mantis Blade</a>&nbsp;curved sword. Once you complete the location, return to the entrance and explore north to continue. You will be ambushed by a pack of wolves and then arrive at a fortification defended by a Mad Pumpkin Head and some soldiers. The <a class="wiki_link" title="Elden Ring Pulley Bow" href="/Pulley+Bow" target="">Pulley Bow</a> can be looted here, and you can opt to follow the <a class="wiki_link" title="Elden Ring Rainbow Stone" href="/Rainbow+Stone" target="">Rainbow Stones</a> glowing on the ground and if you dismount and get close to the edge, <a class="wiki_link" title="Elden Ring Patches" href="/Patches" target="">Patches</a> will knock you to the ground level near the entrance to Seethewater Cave, to prevent you accessing the Volcano Manor. The road south from the patches encounter takes you to the First Mt. Gelmir Campsite site of grace, that has a staircase leading you down to the dead-end road toward Corpse-Stench Shack.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/gelmir_heros_grave_locations_elden_ring_wiki_guide.jpg',
      link: "https://eldenring.wiki.fextralife.com/Gelmir+Hero's+Grave",
    },
  ],
  [
    'trigger-patches-event',
    {
      title: 'Trigger Patches event',
      longDesc: `<p>Traverse the beam by the sorcerer to cross the canyon and drop down. You can activate the lift to <a class="wiki_link" title="Elden Ring Gelmir Hero's Grave" href="/Gelmir+Hero's+Grave" target="">Gelmir Hero's Grave</a>. This location has a <a class="wiki_link" title="Elden Ring Deathroot" href="/Deathroot" target="">Deathroot</a>, as well as the <a class="wiki_link" title="Elden Ring Bloodhound Knight Set" href="/Bloodhound+Knight+Set" target="">Bloodhound Knight Set</a>, <a class="wiki_link" title="Elden Ring Gelmir Knight Set" href="/Gelmir+Knight+Set" target="">Gelmir Knight Set</a>, <a class="wiki_link" title="Elden Ring Bloodhound Knight Floh" href="/Bloodhound+Knight+Floh" target="">Bloodhound Knight Floh</a> spirit ashes and the <a class="wiki_link" title="Elden Ring Mantis Blade" href="/Mantis+Blade" target="">Mantis Blade</a>&nbsp;curved sword. Once you complete the location, return to the entrance and explore north to continue. You will be ambushed by a pack of wolves and then arrive at a fortification defended by a Mad Pumpkin Head and some soldiers. The <a class="wiki_link" title="Elden Ring Pulley Bow" href="/Pulley+Bow" target="">Pulley Bow</a> can be looted here, and you can opt to follow the <a class="wiki_link" title="Elden Ring Rainbow Stone" href="/Rainbow+Stone" target="">Rainbow Stones</a> glowing on the ground and if you dismount and get close to the edge, <a class="wiki_link" title="Elden Ring Patches" href="/Patches" target="">Patches</a> will knock you to the ground level near the entrance to Seethewater Cave, to prevent you accessing the Volcano Manor. The road south from the patches encounter takes you to the First Mt. Gelmir Campsite site of grace, that has a staircase leading you down to the dead-end road toward Corpse-Stench Shack.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/patches_bosses_elden_ring_wiki_guide_300x.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Patches',
    },
  ],
  [
    'defeat-fallingstar-beast',
    {
      title: 'Defeat Full-Grown Fallingstar Beast',
      longDesc: `<p>You should instead cross the beam leading to the other side of the canyon and begin making your way up the ladder behind a <a class="wiki_link" title="Elden Ring Grafted Scion" href="/Grafted+Scion" target="">Grafted Scion</a> mini-encounter. This next section is a continuation of ladders and optional drops to loot. One of the rests has a <a class="wiki_link" title="Elden Ring Nomadic Merchant Mt. Gelmir" href="/Nomadic+Merchant+Mt.+Gelmir">Nomadic Merchant</a>, before leading you to an encounter with the <a class="wiki_link" title="Elden Ring Full-Grown Fallingstar Beast" href="/Full-Grown+Fallingstar+Beast" target="">Full-Grown Fallingstar Beast</a> that drops <a class="wiki_link" title="Elden Ring Fallingstar Beast Jaw" href="/Fallingstar+Beast+Jaw" target="">Fallingstar Beast Jaw</a>. From the crater of this boss encounter, you have to take some broken pillars to the west and jump across to the other side to land successfully near the Road of Iniquity site of grace. You will be attacked by Marionette Soldiers to be careful. You can loot a <a class="wiki_link" title="Elden Ring Golden Seed" href="/Golden+Seed" target="">Golden Seed</a> and kill an invisible Teardrop Scarab to obtain <a class="wiki_link" title="Elden Ring Ash of War: Through and Through" href="/Ash+of+War:+Through+and+Through" target="">Ash of War: Through and Through</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/full-grown-fallingstar-beast-bosses-elden-ring-wiki-guide-300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Full-Grown+Fallingstar+Beast',
    },
  ],
  [
    'loot-golden-seed-map-fragment-3',
    {
      title: 'Loot Golden Seed & Map Fragment',
      longDesc: `<p>You should instead cross the beam leading to the other side of the canyon and begin making your way up the ladder behind a <a class="wiki_link" title="Elden Ring Grafted Scion" href="/Grafted+Scion" target="">Grafted Scion</a> mini-encounter. This next section is a continuation of ladders and optional drops to loot. One of the rests has a <a class="wiki_link" title="Elden Ring Nomadic Merchant Mt. Gelmir" href="/Nomadic+Merchant+Mt.+Gelmir">Nomadic Merchant</a>, before leading you to an encounter with the <a class="wiki_link" title="Elden Ring Full-Grown Fallingstar Beast" href="/Full-Grown+Fallingstar+Beast" target="">Full-Grown Fallingstar Beast</a> that drops <a class="wiki_link" title="Elden Ring Fallingstar Beast Jaw" href="/Fallingstar+Beast+Jaw" target="">Fallingstar Beast Jaw</a>. From the crater of this boss encounter, you have to take some broken pillars to the west and jump across to the other side to land successfully near the Road of Iniquity site of grace. You will be attacked by Marionette Soldiers to be careful. You can loot a <a class="wiki_link" title="Elden Ring Golden Seed" href="/Golden+Seed" target="">Golden Seed</a> and kill an invisible Teardrop Scarab to obtain <a class="wiki_link" title="Elden Ring Ash of War: Through and Through" href="/Ash+of+War:+Through+and+Through" target="">Ash of War: Through and Through</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_seed_elden_ring_wiki_guide_200px.png',
      link: '',
    },
  ],
  [
    'complete-volcano-manor',
    {
      title: 'Complete Volcano Manor',
      longDesc: `<p>You are now in the right level to obtain the map shard, but be careful as you approach the pillar as there are deadly <a class="wiki_link" title="Elden Ring Spider Hand" href="/Spider+Hand" target="">Spider Hand</a> enemies ready to ambush you. Activate the&nbsp; site of grace first! Go down the road toward the pillar and run past all the hands and map to rest at Road of Iniquity, then loot <a class="wiki_link" title="Elden Ring Map (Mt. Gelmir)" href="/Map+(Mt.+Gelmir)" target="">Map (Mt. Gelmir)</a>. You now have revealed the zone and are ready to head into Volcano Manor, that is just above. There different ways to deal with the location, so see <a class="wiki_link" title="Elden Ring Volcano Manor" href="/Volcano+Manor" target="">Volcano Manor</a> for details.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/volcano-manor-walkthrough-1-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Volcano+Manor',
    },
  ],
  [
    'defeat-draconic-tree-sentinel',
    {
      title: 'Defeat Draconic Tree Sentinel',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/draconic_tree_sentinel_boss_elden_ring_wiki_guide_300x.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Draconic+Tree+Sentinel',
    },
  ],
  [
    'enter-leyndell-royal-capital',
    {
      title: 'Enter from Leyndell Royal Capital',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/leyndell_royal_capital_locations_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Leyndell+Royal+Capital',
    },
  ],
  [
    'defeat-black-blade-kindred',
    {
      title: 'Defeat Black Blade Kindred',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/leyndell_royal_capital_locations_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Leyndell+Royal+Capital',
    },
  ],
  [
    'loot-sacrificial-twig',
    {
      title: 'Loot Sacrificial Twig',
      longDesc: `Return to Academy Gate Town where you should have gotten the Map fragment of the area, and make it past the many enemies guarding the town to the magic-sealed entrance of the Academy. Here, there is a note showing you a map to a Key that will let you through the magic barrier.`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/sacrificial_twig_talisman_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Sacrificial+Twig',
    },
  ],
  [
    'obtain-raya-lucaria-academy-key',
    {
      title: 'Obtain Raya Lucaria Academy Key',
      longDesc: `<p>If you follow the map directions, they will bring you north and west from this position, to the left side of the <a class="wiki_link" title="Elden Ring Raya Lucaria Academy" href="/Raya+Lucaria+Academy" target="">Raya Lucaria Academy</a> on your map. The&nbsp;<a class="wiki_link" title="Elden Ring Academy Glintstone Key" href="/Academy+Glintstone+Key" target="">Academy Glintstone Key</a> is guarded by a <a class="wiki_link" title="Elden Ring Glintstone Dragon Smarag" href="/Glintstone+Dragon+Smarag">Dragon</a> that is also magic resistant, so you can either pick it up and run or prepare for a difficult fight.</p> <p>Once you have the key, return to the Academy Gate and go through.</p>`,
      image: '',
      link: '',
    },
  ],
  [
    'acquire-academy-glintstone-key',
    {
      title: 'Acquire the Academy Glintstone Key',
      longDesc: `<p>To enter Raya Lucaria Academy, you must have an <a class="wiki_link" title="Elden Ring Academy Glintstone Key" href="/Academy+Glintstone+Key" target="">Academy Glintstone Key</a>&nbsp;to pass through the barrier.&nbsp;To find it, grab the map that has the coordinates of the key or travel&nbsp;to an island that is situated on the west side from the academy.&nbsp;On that island, you'll find that it is guarded by a field boss, the&nbsp;Glintstone Dragon Smarag. Fighting this dragon is optional since you can simply sneak behind it and loot the key from a lucarian sorcerer corpse. Once you have it, return to the&nbsp;South Raya Lucaria Gate and you can pass through the barrier. The nearest site of grace is the Crystalline Woods site [<a class="wiki_link" title="Elden Ring Interactive Map?id=1139&amp;lat=-133.59375&amp;lng=51.455302&amp;zoom=8" href="/Interactive+Map?id=1139&amp;lat=-133.59375&amp;lng=51.455302&amp;zoom=8">Map Coordinates</a>].</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/academy-glintstone-key_key-items-elden-ring-wiki-guide-200.png',
      link: 'https://eldenring.wiki.fextralife.com/Academy+Glintstone+Key',
    },
  ],
  [
    'pickup-several-ashes',
    {
      title: 'Pick up Several Ashes',
      longDesc: `<p>At the Academy Gate Town <a class="wiki_link" title="Elden Ring Sites of Grace" href="/Sites+of+Grace" target="">Site of Grace</a>, check the northwest section and you can find a glowing sapling where you can pick up x1&nbsp;<a class="wiki_link" title="Elden Ring Golden Seed" href="/Golden+Seed" target="">Golden Seed</a>&nbsp;[<a class="wiki_link" title="Elden Ring Interactive Map?id=1302&amp;lat=-143.960937&amp;lng=64.048781&amp;zoom=8" href="/Interactive+Map?id=1302&amp;lat=-143.960937&amp;lng=64.048781&amp;zoom=8">Map Coordinates Here</a>], next, go west and you'll see a&nbsp;<a class="wiki_link" title="Elden Ring Giant Crab" href="/Giant+Crab" target="">Giant Crab</a>&nbsp;that you can kill, this drops x1&nbsp;<a class="wiki_link" title="Elden Ring Crab Eggs" href="/Crab+Eggs" target="">Crab Eggs</a>. At the same section where the Giant Crab was, you'll find a body that can be looted to find&nbsp;x3&nbsp;<a class="wiki_link" title="Elden Ring Smithing Stone (2)" href="/Smithing+Stone+(2)" target="">Smithing Stone (2)</a>&nbsp;[<a class="wiki_link" title="Elden Ring Interactive Map?id=1303&amp;lat=-143.460937&amp;lng=62.022922&amp;zoom=8" href="/Interactive+Map?id=1303&amp;lat=-143.460937&amp;lng=62.022922&amp;zoom=8">Map Coordinates Here</a>].&nbsp;In the same section, look behind and you'll see a couple of&nbsp;<a class="wiki_link" title="Elden Ring Poison Pod" href="/Poison+Pod">Poison Pods</a>, and above it is a&nbsp;<a class="wiki_link" title="Elden Ring Teardrop Scarab" href="/Teardrop+Scarab" target="">Teardrop Scarab</a>&nbsp;hanging on the wall. Killing the Teardrop Scarab drops&nbsp;<a class="wiki_link" title="Elden Ring Ash of War: Charge Forth" href="/Ash+of+War:+Charge+Forth" target="">Ash of War: Charge Forth</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/quality_upgrade_affinity_elden_ring_wiki_guide_60px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Ashes+of+War',
    },
  ],
  [
    'obtain-gravity-well-sorcery',
    {
      title: 'Obtain Gravity Well Sorcery',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/gravity_well_sorcery_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Gravity+Well',
    },
  ],
  [
    'get-carian-knight-set',
    {
      title: 'Get Carian Knight Set',
      longDesc: `<p>Head through the doorway to enter the next section where you'll find a large rotating lift. By the entrance, turn right, hug the wall, and drop down to the path below. Walk along the narrow path and you'll see another group of Glintstone Zombies that are worshipping a large tombstone, kill the group and pick up the glowing item near the tombstone to find the <a class="wiki_link" title="Elden Ring Carian Knight Set" href="/Carian+Knight+Set" target="">Carian Knight Set</a>. Go back to the section where the large rotating lift is, don't ride it yet, but instead go straight where you'll see some maiden statues and a monlith at the center. Defeat the <a class="wiki_link" title="Elden Ring Slender Wayfarer" href="/Slender+Wayfarer" target="">Slender Wayfarer</a>&nbsp;that is guarding the monolith to acquire the <a class="wiki_link" title="Elden Ring Gravity Well" href="/Gravity+Well" target="">Gravity Well</a>&nbsp;sorcery and pick up the smithing stone on the monolith.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian-knight-armor-set-elden-ring-wiki-guide.png',
      link: 'https://eldenring.wiki.fextralife.com/Carian+Knight+Set',
    },
  ],
  [
    'get-conspectus-scroll',
    {
      title: 'Get Conspectus Scroll',
      longDesc: `<p>Next, ride the lift and head to the lower-most section where you'll encounter a <a class="wiki_link" title="Elden Ring Pendulum Statue" href="/Pendulum+Statue" target="">Pendulum Statue</a>&nbsp;enemy. Defeat it and make sure to loot the corpse here to find the&nbsp;<a class="wiki_link" title="Elden Ring Longtail Cat Talisman" href="/Longtail+Cat+Talisman" target="">Longtail Cat Talisman</a>. Ride the lift again and head to the top section, kill the enemies along the way and enter the next section where you can find the&nbsp;Schoolhouse Classroom site. From the site, enter the hallway and go to the room on the left. There's a corpse that you can loot to find the&nbsp;<a class="wiki_link" title="Elden Ring Conspectus Scroll" href="/Conspectus+Scroll" target="">Conspectus Scroll</a>&nbsp;and a treasure chest containing the&nbsp;<a class="wiki_link" title="Elden Ring Glintstone Craftsman's Cookbook [5]" href="/Glintstone+Craftsman's+Cookbook+[5]" target="">Glintstone Craftsman's Cookbook [5]</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/conspectus_scroll_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Conspectus+Scroll',
    },
  ],
  [
    'get-olivinus-glintstone-crown-and-ritual-pot',
    {
      title: 'Get Olivinus Glintstone Crown and Ritual Pot',
      longDesc: `<p>Don't leave the room yet, in front of the body you just looted, make sure to hit the door in front of it to reveal the illusory wall. Pillage the body on the right of the balcony to find a <a class="wiki_link" title="Elden Ring Smithing Stones" href="/Smithing+Stones" target="">Smithing Stones</a>&nbsp;and then jump off the balcony from the left side. Grab the materials there and&nbsp;jump up the rocks on&nbsp;the narrow sideway, along the way, before jumping down and returning to the Schoolhouse Classroom site, there's a body that can be looted to find the&nbsp;<a class="wiki_link" title="Elden Ring Olivinus Glintstone Crown" href="/Olivinus+Glintstone+Crown" target="">Olivinus Glintstone Crown</a>. Now continue exploring the hallway.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/olivinus_glintstone_crown_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Olivinus+Glintstone+Crown',
    },
  ],
  [
    'defeat-red-wolf-of-radagon',
    {
      title: 'Defeat Red Wolf of Radagon',
      longDesc: `<p>Take note that the&nbsp;<a class="wiki_link" title="Elden Ring Raya Lucaria Sorcerer" href="/Raya+Lucaria+Sorcerer">Raya Lucaria Sorcerers</a>&nbsp;enemies has a chance to drop the&nbsp;<a class="wiki_link" title="Elden Ring Academy Glintstone Staff" href="/Academy+Glintstone+Staff" target="">Academy Glintstone Staff</a>. At the other end of the hallway where you encountered the giant <a class="wiki_link" title="Elden Ring Living Jar" href="/Living+Jar" target="">Living Jar</a>, you'll find a chest containing x1&nbsp;<a class="wiki_link" title="Elden Ring Ritual Pot" href="/Ritual+Pot" target="">Ritual Pot</a>. On the second floor that is guarded by more&nbsp;<a class="wiki_link" title="Elden Ring Raya Lucaria Sorcerer" href="/Raya+Lucaria+Sorcerer">Raya Lucaria Sorcerers</a>, make sure to check the balcony to find another corpse that can be pillaged to acquire&nbsp;<a class="wiki_link" title="Elden Ring Furcalling Finger Remedy" href="/Furcalling+Finger+Remedy" target="">Furcalling Finger Remedy</a>&nbsp;- head up the third floor, and if you are prepared, pass through the mist to fight&nbsp;<a class="wiki_link" title="Elden Ring Red Wolf of Radagon" href="/Red+Wolf+of+Radagon" target="">Red Wolf of Radagon</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/red-wolf-of-radagon.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Red+Wolf+of+Radagon',
    },
  ],
  [
    'access-secret-radagon-upstairs-area',
    {
      title: 'Access Secret Radagon Upstairs Area',
      longDesc: `<p>Defeating&nbsp;<a class="wiki_link" title="Elden Ring Red Wolf of Radagon" href="/Red+Wolf+of+Radagon" target="">Red Wolf of Radagon</a>&nbsp;rewards you with 14000&nbsp;<a class="wiki_link" title="Elden Ring Runes" href="/Runes" target="">Runes</a>&nbsp;and x1&nbsp;<a class="wiki_link" title="Elden Ring Memory Stone" href="/Memory+Stone" target="">Memory Stone</a>, you'll also find the Debate Hall&nbsp;<a class="wiki_link" title="Elden Ring Sites of Grace" href="/Sites+of+Grace" target="">Site of Grace</a>&nbsp;in this arena. As you exit through the doorway, you'll enter the main courtyard of the institue. From the entrance, turn right and jump over the fence. Climb up the ladder and go through the broken glass window to reach the second floor of the Debate Hall.&nbsp;Go to the left, and you'll find a body that you can pillage to find x5&nbsp;<a class="wiki_link" title="Elden Ring Crystal Bud" href="/Crystal+Bud" target="">Crystal Bud</a>. Head to the opposite side on the right, and you'll find a treasure chest containing x1&nbsp;<a class="wiki_link" title="Elden Ring Radagon Icon" href="/Radagon+Icon" target="">Radagon Icon</a>. Head back down and start exploring the courtyard section.</p>`,
      image: '',
      link: '',
    },
  ],
  [
    'get-key-golden-seed-glintstone-crown',
    {
      title: 'Get Stonesword Key, Golden Seed and Karolos Glintstone Crown',
      longDesc: `<p>On the fountain, you can find&nbsp;x1&nbsp;<a class="wiki_link" title="Elden Ring Stonesword Key" href="/Stonesword+Key" target="">Stonesword Key</a>. Make sure to go around the courtyard to find some materials.&nbsp;Head west of the courtyard and you'll see a glowing sapling that is guarded by three Noble Zombies. Kill the enemies and check the glowing sapling to find x1&nbsp;<a class="wiki_link" title="Elden Ring Golden Seed" href="/Golden+Seed" target="">Golden Seed</a>&nbsp;on the ground.&nbsp;Also on the west, there's a Cryallized Crab hiding around the corner, by the bush, kill it to acquire&nbsp;x1&nbsp;<a class="wiki_link" title="Elden Ring Karolos Glintstone Crown" href="/Karolos+Glintstone+Crown" target="">Karolos Glintstone Crown</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/karolos_glintstone_crown_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Karolos+Glintstone+Crown',
    },
  ],
  [
    'expore-upper-rooftops',
    {
      title: 'Explore Upper Rooftops',
      longDesc: `<p>After clearing the west side of the courtyard, return to the center area where the fountain is and you'll see a slope of rubble on the right&nbsp;(facing the doorway leading back to the&nbsp;Debate Hall, along the building). At the top, there are multiple enemies here such as more&nbsp;<a class="wiki_link" title="Elden Ring Raya Lucaria Sorcerer" href="/Raya+Lucaria+Sorcerer">Raya Lucaria Sorcerers</a>, Noble Zombies, and a different-looking zombie enemy called the Aristocrat. You'll see the Noble Zombies kneeling, the Aristocrat standing on the steps, two Sorcerers standing by the balcony fence at the top of the steps, while another sorcerer inside the room in front of the kneeling zombies. Kill all the enemies and go inside the small room to find&nbsp;a body that is hanging on the fence of the window balcony - the body contains x1&nbsp;<a class="wiki_link" title="Elden Ring Glintstone Whetblade" href="/Glintstone+Whetblade" target="">Glintstone Whetblade</a>.</p>`,
      image: '',
      link: '',
    },
  ],
  [
    'get-imbued-sword-key',
    {
      title: 'Get Imbued Sword Key',
      longDesc: `<p>Now traverse the rooftops section of the academy. Make sure to check every corner and some platforms that you can jump on or can drop to find some materials. There's&nbsp;x1&nbsp;<a class="wiki_link" title="Elden Ring Imbued Sword Key" href="/Imbued+Sword+Key" target="">Imbued Sword Key</a>&nbsp;as well that can be looted off a body located on&nbsp;another towering building. Eventually, you'll end up finding a broken glass window that leads to the ceiling of the Church of the Cuckoo. Loot the body that's on the narrow beam and drop down until you land on the chandelier where you can take another&nbsp;<a class="wiki_link" title="Elden Ring Academy Glintstone Key" href="/Academy+Glintstone+Key" target="">Academy Glintstone Key</a>&nbsp;from the corpse.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/imbued-sword-key-elden-ring-wiki-guide.png',
      link: 'https://eldenring.wiki.fextralife.com/Imbued+Sword+Key',
    },
  ],
  [
    'loot-scademy-glintstone-key',
    {
      title: 'Loot Academy Glintstone Key',
      longDesc: `<p>Now traverse the rooftops section of the academy. Make sure to check every corner and some platforms that you can jump on or can drop to find some materials. There's&nbsp;x1&nbsp;<a class="wiki_link" title="Elden Ring Imbued Sword Key" href="/Imbued+Sword+Key" target="">Imbued Sword Key</a>&nbsp;as well that can be looted off a body located on&nbsp;another towering building. Eventually, you'll end up finding a broken glass window that leads to the ceiling of the Church of the Cuckoo. Loot the body that's on the narrow beam and drop down until you land on the chandelier where you can take another&nbsp;<a class="wiki_link" title="Elden Ring Academy Glintstone Key" href="/Academy+Glintstone+Key" target="">Academy Glintstone Key</a>&nbsp;from the corpse.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/academy-glintstone-key_key-items-elden-ring-wiki-guide-200.png',
      link: 'https://eldenring.wiki.fextralife.com/Academy+Glintstone+Key',
    },
  ],
  [
    'defeat-moongrum-carian-knight',
    {
      title: 'Defeat Moongrum, Carian Knight',
      longDesc: `<p>Jump down to the second floor and clear the area of&nbsp;<a class="wiki_link" title="Elden Ring Raya Lucarian Warden" href="/Raya+Lucarian+Warden">Raya Lucarian Wardens</a>&nbsp;and&nbsp;<a class="wiki_link" title="Elden Ring Raya Lucarian Sorcerer" href="/Raya+Lucarian+Sorcerer">Raya Lucarian Sorcerers</a>.&nbsp;Check the northwest&nbsp;side after killing the enemies to find a corpse that is sitting against a wall, you can pillage the body to find x1&nbsp;<a class="wiki_link" title="Elden Ring Shattering Crystal" href="/Shattering+Crystal" target="">Shattering Crystal</a>.&nbsp;Head east, out the balcony, and check the right side by the corner of the scaffolding to find another Crystallized Crab, kill it to acquire the&nbsp;<a class="wiki_link" title="Elden Ring Twinsage Glintstone Crown" href="/Twinsage+Glintstone+Crown" target="">Twinsage Glintstone Crown</a>. Also, there's another doorway here that is guarded by a single Page. Inside the room that is being guarded, you'll find&nbsp;the&nbsp;<a class="wiki_link" title="Elden Ring Azur's Glintstone Staff" href="/Azur's+Glintstone+Staff" target="">Azur's Glintstone Staff</a>&nbsp;on the ground - after clearing the second floor, make sure to kick the ladder to unlock a shortcut to the Church of the Cuckoo site.</p> <p>Go back to the courtyard and&nbsp;go east where you'll encounter the large iron ball trap. Make sure to loot the bodies on the stairs and the broken beam to find items such as&nbsp;x8&nbsp;<a class="wiki_link" title="Elden Ring Crystal Dart" href="/Crystal+Dart" target="">Crystal Dart</a>,&nbsp;x1&nbsp;<a class="wiki_link" title="Elden Ring Smithing Stone (5)" href="/Smithing+Stone+(5)" target="">Smithing Stone (5)</a>&nbsp;and&nbsp;x1&nbsp;<a class="wiki_link" title="Elden Ring Furlcalling Finger Remedy" href="/Furlcalling+Finger+Remedy" target="">Furlcalling Finger Remedy</a>. As you enter the next section, you'll encounter&nbsp;a hostile enemy NPC,&nbsp;<a class="wiki_link" title="Elden Ring Moongrum, Carian Knight" href="/Moongrum,+Carian+Knight" target="">Moongrum, Carian Knight</a>&nbsp;that's guarding the lift leading to the main boss of this legacy dungeon. Defeating&nbsp;<a class="wiki_link" title="Elden Ring Moongrum, Carian Knight" href="/Moongrum,+Carian+Knight" target="">Moongrum</a>&nbsp;drops the&nbsp;<a class="wiki_link" title="Elden Ring Carian Knight's Shield" href="/Carian+Knight's+Shield" target="">Carian Knight's Shield</a>. Before riding the lift, check the west side, by the gate, turn left and jump over the fence as you walk on the narrow beam of the wall. Climb up the ladder, defeat the <a class="wiki_link" title="Elden Ring Lesser Pumpkin Head" href="/Lesser+Pumpkin+Head" target="">Lesser Pumpkin Head</a>&nbsp;and&nbsp;<a class="wiki_link" title="Elden Ring Raya Lucaria Sorcerer" href="/Raya+Lucaria+Sorcerer">Raya Lucaria Sorcerers</a>. There's a treasure chest that you can open to find&nbsp;x1&nbsp;<a class="wiki_link" title="Elden Ring Glintstone Scarab" href="/Glintstone+Scarab" target="">Glintstone Scarab</a>&nbsp;- climb back down, open the closed door and ride the lift.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/moongrum-carian-knight-hostile-npc-enemy-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Moongrum+Carian+Knight',
    },
  ],
  [
    'deal-with-iron-ball',
    {
      title: 'Deal with Iron Ball Trap',
      longDesc: `<p>Go back to the courtyard and&nbsp;go east where you'll encounter the large iron ball trap. Make sure to loot the bodies on the stairs and the broken beam to find items such as&nbsp;x8&nbsp;<a class="wiki_link" title="Elden Ring Crystal Dart" href="/Crystal+Dart" target="">Crystal Dart</a>,&nbsp;x1&nbsp;<a class="wiki_link" title="Elden Ring Smithing Stone (5)" href="/Smithing+Stone+(5)" target="">Smithing Stone (5)</a>&nbsp;and&nbsp;x1&nbsp;<a class="wiki_link" title="Elden Ring Furlcalling Finger Remedy" href="/Furlcalling+Finger+Remedy" target="">Furlcalling Finger Remedy</a>. As you enter the next section, you'll encounter&nbsp;a hostile enemy NPC,&nbsp;<a class="wiki_link" title="Elden Ring Moongrum, Carian Knight" href="/Moongrum,+Carian+Knight" target="">Moongrum, Carian Knight</a>&nbsp;that's guarding the lift leading to the main boss of this legacy dungeon. Defeating&nbsp;<a class="wiki_link" title="Elden Ring Moongrum, Carian Knight" href="/Moongrum,+Carian+Knight" target="">Moongrum</a>&nbsp;drops the&nbsp;<a class="wiki_link" title="Elden Ring Carian Knight's Shield" href="/Carian+Knight's+Shield" target="">Carian Knight's Shield</a>. Before riding the lift, check the west side, by the gate, turn left and jump over the fence as you walk on the narrow beam of the wall. Climb up the ladder, defeat the <a class="wiki_link" title="Elden Ring Lesser Pumpkin Head" href="/Lesser+Pumpkin+Head" target="">Lesser Pumpkin Head</a>&nbsp;and&nbsp;<a class="wiki_link" title="Elden Ring Raya Lucaria Sorcerer" href="/Raya+Lucaria+Sorcerer">Raya Lucaria Sorcerers</a>. There's a treasure chest that you can open to find&nbsp;x1&nbsp;<a class="wiki_link" title="Elden Ring Glintstone Scarab" href="/Glintstone+Scarab" target="">Glintstone Scarab</a>&nbsp;- climb back down, open the closed door and ride the lift.</p>`,
      image: '',
      link: '',
    },
  ],
  [
    'defeat-rennala',
    {
      title: 'Defeat Rennala, Queen of the Full Moon',
      longDesc: `<p>Beyond the large door is the Grand Library where you will fight&nbsp;<a class="wiki_link" title="Elden Ring Rennala, Queen of the Moon" href="/Rennala,+Queen+of+the+Moon" target="">Rennala, Queen of the Moon</a>&nbsp;in two phases. Defeating her&nbsp;yields 40000 Runes and rewards you with x1&nbsp;<a class="wiki_link" title="Elden Ring Remembrance of the Full Moon Queen" href="/Remembrance+of+the+Full+Moon+Queen" target="">Remembrance of the Full Moon Queen</a>&nbsp;and x1&nbsp;<a class="wiki_link" title="Elden Ring Great Rune of the Unborn" href="/Great+Rune+of+the+Unborn" target="">Great Rune of the Unborn</a>. Make sure to discover the site of grace here before leaving.</p> <p>One of the items you've found in the academy is the&nbsp;<a class="wiki_link" title="Elden Ring Academy Glintstone Key" href="/Academy+Glintstone+Key" target="">Academy Glintstone Key</a>. This is to be given to&nbsp;<a class="wiki_link" title="Elden Ring Thops" href="/Thops" target="">Thops</a>&nbsp;who can be found at the&nbsp;<a class="wiki_link" title="Elden Ring Church of Irith" href="/Church+of+Irith" target="">Church of Irith</a>. [<a class="wiki_link" title="Elden Ring Interactive Map?id=842&amp;lat=-172.992187&amp;lng=81.645886&amp;zoom=8" href="/Interactive+Map?id=842&amp;lat=-172.992187&amp;lng=81.645886&amp;zoom=8">Map Link</a>]. Just make sure that you were able to buy everything that you need from him before or after giving him the key. Upon giving the key, if you travel to the Schoolhouse Classroom site of grace of the academy, you'll find him dead outside the room. Go outside and turn right, you'll find him, sitting in a chair. You can loot his body to find x1&nbsp;<a class="wiki_link" title="Elden Ring Thops's Bell Bearing" href="/Thops's+Bell+Bearing" target="">Thops's Bell Bearing</a>, x1&nbsp;<a class="wiki_link" title="Elden Ring Thops's Barrier (Spell)" href="/Thops's+Barrier+(Spell)">Thops's Barrier</a>, and x1&nbsp;<a class="wiki_link" title="Elden Ring Academy Glintstone Staff" href="/Academy+Glintstone+Staff" target="">Academy Glintstone Staff</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/renala_bosses_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Rennala+Queen+of+the+Full+Moon',
    },
  ],
  [
    'talk-to-irina',
    {
      title: 'Talk to Irina',
      longDesc: `<p>Proceed south into the <a class="wiki_link" title="Elden Ring Weeping Peninsula" href="/Weeping+Peninsula" target="">Weeping Peninsula</a> and you'll meet <a class="wiki_link" title="Elden Ring Irina " href="/Irina" target="">Irina</a>&nbsp;by the road. She will ask you to talk to her Father at Castle Morne. You will get there later so for now just continue down the road and rest at the Castle Morne Rampart site of grace. A miniboss roams the area at night. This is a <a class="wiki_link" title="Elden Ring Night's Cavalry" href="/Night's+Cavalry" target="">Night's Cavalry</a> and defeating him will give you the&nbsp;<a class="wiki_link" title="Elden Ring Ash of War: Barricade" href="/Ash+of+War:+Barricade" target="">Ash of War: Barricade</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/irina_npcs_elden_ring_wiki_guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Rennala+Queen+of+the+Full+Moon',
    },
  ],
  [
    'get-kaiden-sellsword-ashes',
    {
      title: 'Get Kaiden Sellsword Ashes',
      longDesc: `<p><a class="wiki_link" title="Elden Ring Interactive Map?id=1466&amp;lat=-171.09375&amp;lng=87.487072&amp;zoom=5&amp;code=mapA" href="/Interactive+Map?id=1466&amp;lat=-171.09375&amp;lng=87.487072&amp;zoom=5&amp;code=mapA">Elden Ring Map: Liurnia of the Lakes East Starting Point</a>. We'll tackle this area from the bottom heading up, just to make it easier to navigate. You can begin ALL the way south by collecting the <a class="wiki_link" title="Elden Ring Treespear" href="/Treespear" target="">Treespear</a> weapon (Found on the Caravan left at the edge of the collapsed bridge). From here head to <a class="wiki_link" title="Elden Ring Cliffbottom Catacombs" href="/Cliffbottom+Catacombs" target="">Cliffbottom Catacombs</a> to gather valuable upgrade materials <a class="wiki_link" title="Elden Ring Grave Glovewort (2)" href="/Grave+Glovewort+(2)" target="">Grave Glovewort (2)</a> and <a class="wiki_link" title="Elden Ring Grave Glovewort (3)" href="/Grave+Glovewort+(3)" target="">Grave Glovewort (3)</a> as well as the <a class="wiki_link" title="Elden Ring Kaiden Sellsword Ashes" href="/Kaiden+Sellsword+Ashes" target="">Kaiden Sellsword Ashes</a> that is excellent for early game tanking. Slightly North-West from here, <a class="wiki_link" title="Elden Ring Purified Ruins" href="/Purified+Ruins">Purified Ruins</a> has a <a class="wiki_link" title="Elden Ring Shabriri Grape" href="/Shabriri+Grape" target="">Shabriri Grape</a> and <a class="wiki_link" title="Elden Ring Hyetta" href="/Hyetta" target="">Hyetta</a>'s second location.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/kaiden_sellsword_ashes_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Kaiden+Sellsword+Ashes',
    },
  ],
  [
    'get-shabiri-grape-talk-to-hyetta',
    {
      title: 'Get Shabriri Grape at Purified Ruins and Talk to Hyetta',
      longDesc: `<p><a class="wiki_link" title="Elden Ring Interactive Map?id=1466&amp;lat=-171.09375&amp;lng=87.487072&amp;zoom=5&amp;code=mapA" href="/Interactive+Map?id=1466&amp;lat=-171.09375&amp;lng=87.487072&amp;zoom=5&amp;code=mapA">Elden Ring Map: Liurnia of the Lakes East Starting Point</a>. We'll tackle this area from the bottom heading up, just to make it easier to navigate. You can begin ALL the way south by collecting the <a class="wiki_link" title="Elden Ring Treespear" href="/Treespear" target="">Treespear</a> weapon (Found on the Caravan left at the edge of the collapsed bridge). From here head to <a class="wiki_link" title="Elden Ring Cliffbottom Catacombs" href="/Cliffbottom+Catacombs" target="">Cliffbottom Catacombs</a> to gather valuable upgrade materials <a class="wiki_link" title="Elden Ring Grave Glovewort (2)" href="/Grave+Glovewort+(2)" target="">Grave Glovewort (2)</a> and <a class="wiki_link" title="Elden Ring Grave Glovewort (3)" href="/Grave+Glovewort+(3)" target="">Grave Glovewort (3)</a> as well as the <a class="wiki_link" title="Elden Ring Kaiden Sellsword Ashes" href="/Kaiden+Sellsword+Ashes" target="">Kaiden Sellsword Ashes</a> that is excellent for early game tanking. Slightly North-West from here, <a class="wiki_link" title="Elden Ring Purified Ruins" href="/Purified+Ruins">Purified Ruins</a> has a <a class="wiki_link" title="Elden Ring Shabriri Grape" href="/Shabriri+Grape" target="">Shabriri Grape</a> and <a class="wiki_link" title="Elden Ring Hyetta" href="/Hyetta" target="">Hyetta</a>'s second location.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/purefied-ruins-location-elden-ring-wiki-300px-min-min.jpeg',
      link: 'https://eldenring.wiki.fextralife.com/Purified+Ruins',
    },
  ],
  [
    'get-cookbook-staff-highway-lookout',
    {
      title: 'Get Cookbook & Staff at Highway Lookout Tower',
      longDesc: `<p>Head further north and stop by <a class="wiki_link" title="Elden Ring Highway Lookout Tower" href="/Highway+Lookout+Tower" target="">Highway Lookout Tower</a> to obtain Carian Glintblade Staff and Glintstone Craftman's Cookbook (3), then return to the main road. You will encounter a group of undead fighting soldiers, and a giant Spirit Skeleton. You can fight them or run by, your destination is the&nbsp;<a class="wiki_link" title="Elden Ring Interactive Map?id=1512&amp;lat=-149.7969&amp;lng=77.477&amp;zoom=8&amp;code=mapA" href="/Interactive+Map?id=1512&amp;lat=-149.7969&amp;lng=77.477&amp;zoom=8&amp;code=mapA"> Gate Town Bridge site of grace</a>. Wait until night to fight a <a class="wiki_link" title="Elden Ring Night's Cavalry" href="/Night's+Cavalry" target="">Night's Cavalry</a> that drops the <a class="wiki_link" title="Elden Ring Ice Spear" href="/Ice+Spear" target="">Ice Spear</a> <a class="wiki_link" title="Elden Ring Ashes of War" href="/Ashes+of+War" target="">Ash of War</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian_glintblade_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Highway+Lookout+Tower',
    },
  ],
  [
    'defeat-nights-cavalry-3',
    {
      title: "Defeat Night's Cavalry",
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nights_cavalry_bosses_elden_ring_wiki_guide.jpg',
      link: "https://eldenring.wiki.fextralife.com/Night's+Cavalry",
    },
  ],
  [
    'defeat-tibia-mariner-2',
    {
      title: 'Defeat Tibia Mariner',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/tibia-mariner_ground_boss_enemies_elden_ring_wiki_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Tibia+Mariner',
    },
  ],
  [
    'obtain-dragon-cult-prayerbook',
    {
      title: 'Obtain Dragon Cult Prayerbook',
      longDesc: `<p>Backtrack south to <a class="wiki_link" title="Elden Ring Interactive Map?id=1509&amp;lat=-157.15625&amp;lng=81.735548&amp;zoom=8&amp;code=mapA" href="/Interactive+Map?id=1509&amp;lat=-157.15625&amp;lng=81.735548&amp;zoom=8&amp;code=mapA">Liurnia Highway North</a> and head further east up the slopes until you come to a <a class="wiki_link" title="Elden Ring Tibia Mariner" href="/Tibia+Mariner" target="">Tibia Mariner</a> boss, a valuable <a class="wiki_link" title="Elden Ring Deathroot" href="/Deathroot" target="">Deathroot</a>, and can pick up <a class="wiki_link" title="Elden Ring Skeletal Bandit Ashes" href="/Skeletal+Bandit+Ashes" target="">Skeletal Bandit Ashes</a>. Further north, defeat a patrolling knight to obtain the <a class="wiki_link" title="Elden Ring Dragon Cult Prayerbook" href="/Dragon+Cult+Prayerbook" target="">Dragon Cult Prayerbook</a>. Beware of his lightning strikes!</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragon_cult_prayerbook_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Dragon+Cult+Prayerbook',
    },
  ],
  [
    'visit-artist-shack',
    {
      title: "Visit Artist's Shack and Jarburg",
      link: "https://eldenring.wiki.fextralife.com/Artist's+Shack",
    },
  ],
  [
    'visit-church-of-vows',
    {
      title: 'Visit Church of Vows',
      longDesc: `<p>You must now go back to ground level to the <a class="wiki_link" title="Elden Ring Interactive Map?id=1517&amp;lat=-138.75&amp;lng=75.351&amp;zoom=8&amp;code=mapA" href="/Interactive+Map?id=1517&amp;lat=-138.75&amp;lng=75.351&amp;zoom=8&amp;code=mapA">Eastern Liurnia Lake Shore</a> site of grace. Follow it East and then <strong>north</strong> to continue exploring this area. (To the south, <a class="wiki_link" title="Elden Ring Carian Study Hall" href="/Carian+Study+Hall" target="">Carian Study Hall</a> cannot yet be completed as you are missing a key item you will obtain later from <a class="wiki_link" title="Elden Ring Ranni the Witch" href="/Ranni+the+Witch">this NPC</a>). The road north has two paths: One has a <a class="wiki_link" title="Elden Ring Golem" href="/Golem" target="">Golem</a> that is guarding access to <a class="wiki_link" title="Elden Ring Ainsel RiveR Well" href="/Ainsel+RiveR+Well" target="">Ainsel River Well</a>. We will go there later. Take the other path up the slopes. The area to the left of the site of grace will have an Incantation (<a class="wiki_link" title="Elden Ring Flame, Cleanse Me!" href="/Flame,+Cleanse+Me!" target="">Flame, Cleanse Me!</a>) and the <a class="wiki_link" title="Elden Ring Fire Monk Gauntlets" href="/Fire+Monk+Gauntlets" target="">Fire Monk Gauntlets</a>. Stay the road and access the higher ground to arrive at the <a class="wiki_link" title="Elden Ring Church of Vows" href="/Church+of+Vows" target="">Church of Vows</a> and meet <a class="wiki_link" title="Elden Ring Miriel Pastor of Vows" href="/Miriel+Pastor+of+Vows" target="">Miriel, Pastor of Vows</a> who can teach you both <a class="wiki_link" title="Elden Ring Incantations" href="/Incantations" target="">Incantations</a> and <a class="wiki_link" title="Elden Ring Sorceries" href="/Sorceries" target="">Sorceries</a>, receive Scrolls and Prayerbooks, and give you <a class="wiki_link" title="Elden Ring Lore" href="/Lore" target="">Lore</a> information. This location is important because it allows you to cleanse your SIN (aggrod NPCs) by using <a class="wiki_link" title="Elden Ring Celestial Dew" href="/Celestial+Dew" target="">Celestial Dew</a> and performing an "<a class="wiki_link" title="Elden Ring Absolution" href="/Absolution" target="">Absolution</a>" at the altar. You will also find <a class="wiki_link" title="Elden Ring Golden Sewing Needle" href="/Golden+Sewing+Needle" target="">Golden Sewing Needle</a> and <a class="wiki_link" title="Elden Ring Golden Tailoring Tools" href="/Golden+Tailoring+Tools" target="">Golden Tailoring Tools</a> (key items for boss armor alteration)</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/church_of_vows_locations_elden_ring_wiki_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Church+of+Vows',
    },
  ],
  [
    'obtain-flask-upgrades-from-erdtree-2',
    {
      title: 'Obtain Flask Upgrades from Minor Erdtree',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/minor_erdtree_(liurnia_northeast)_full_map_elden_ring_wiki_guide_600px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Minor+Erdtree+(Liurnia+Northeast)',
    },
  ],
  [
    'obtain-flask-upgrades-from-erdtree-2',
    {
      title: 'Obtain Flask Upgrades from Minor Erdtree',
      longDesc: `<p>Now follow the road east and north to visit the Minor Erdtree. Here you will fight the <a class="wiki_link" title="Elden Ring Erdtree Avatar" href="/Erdtree+Avatar" target="">Erdtree Avatar</a>, and can loot <a class="wiki_link" title="Elden Ring Lightning-Shrouding Cracked Tear" href="/Lightning-Shrouding+Cracked+Tear" target="">Lightning-Shrouding Cracked Tear</a>, <a class="wiki_link" title="Elden Ring Holy-Shrouding Cracked Tear" href="/Holy-Shrouding+Cracked+Tear" target="">Holy-Shrouding Cracked Tear</a> and <a class="wiki_link" title="Elden Ring Magic-Shrouding Cracked Tear" href="/Magic-Shrouding+Cracked+Tear" target="">Magic-Shrouding Cracked Tear</a>. Once these are obtained, follow the road west to unlock the Walking Mausoleum, and continue all the way to the lake shore to find and complete <a class="wiki_link" title="Elden Ring Raya Lucaria Crystal Tunnel" href="/Raya+Lucaria+Crystal+Tunnel" target="">Raya Lucaria Crystal Tunnel</a>. Within the tunnel you will find <a class="wiki_link" title="Elden Ring Smithing-Stone Miner's Bell Bearing (1)" href="/Smithing-Stone+Miner's+Bell+Bearing+(1)" target="">Smithing-Stone Miner's Bell Bearing (1)</a> as well as <a class="wiki_link" title="Elden Ring Smithing Stones" href="/Smithing+Stones">upgrade stones level 2 and 3</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/minor_erdtree_(liurnia_northeast)_full_map_elden_ring_wiki_guide_600px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Minor+Erdtree+(Liurnia+Northeast)',
    },
  ],
  [
    'walking-mausoleum-2',
    {
      title: 'Unlock Walking Mausoleum',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/walking-mausoleum-location-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Walking+Mausoleum',
    },
  ],
  [
    'upgrades-raya-lucaria-crystal-tunnel',
    {
      title: 'Get upgrades from Raya Lucaria Crystal Tunnel',
      longDesc: `<p>Now follow the road east and north to visit the Minor Erdtree. Here you will fight the <a class="wiki_link" title="Elden Ring Erdtree Avatar" href="/Erdtree+Avatar" target="">Erdtree Avatar</a>, and can loot <a class="wiki_link" title="Elden Ring Lightning-Shrouding Cracked Tear" href="/Lightning-Shrouding+Cracked+Tear" target="">Lightning-Shrouding Cracked Tear</a>, <a class="wiki_link" title="Elden Ring Holy-Shrouding Cracked Tear" href="/Holy-Shrouding+Cracked+Tear" target="">Holy-Shrouding Cracked Tear</a> and <a class="wiki_link" title="Elden Ring Magic-Shrouding Cracked Tear" href="/Magic-Shrouding+Cracked+Tear" target="">Magic-Shrouding Cracked Tear</a>. Once these are obtained, follow the road west to unlock the Walking Mausoleum, and continue all the way to the lake shore to find and complete <a class="wiki_link" title="Elden Ring Raya Lucaria Crystal Tunnel" href="/Raya+Lucaria+Crystal+Tunnel" target="">Raya Lucaria Crystal Tunnel</a>. Within the tunnel you will find <a class="wiki_link" title="Elden Ring Smithing-Stone Miner's Bell Bearing (1)" href="/Smithing-Stone+Miner's+Bell+Bearing+(1)" target="">Smithing-Stone Miner's Bell Bearing (1)</a> as well as <a class="wiki_link" title="Elden Ring Smithing Stones" href="/Smithing+Stones">upgrade stones level 2 and 3</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/raya_lucaria_crystal_tunnel_locations_elden_ring_wiki_guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Raya+Lucaria+Crystal+Tunnel',
    },
  ],
  [
    'visit-frenzied-flame-village',
    {
      title: 'Visit Frenzied Flame Village',
      longDesc: `<p>Exit the tunnel and find your way up and north: this will be your first encounter with the <a class="wiki_link" title="Elden Ring Madness" href="/Madness" target="">Madness</a> effect. Stay out of sight of the "Eye of Sauron" you can see in the distance! You can pick up the incantation Frenzied Burst and head further north past an NPC invasion to the <a class="wiki_link" title="Elden Ring Church of Inhibition" href="/Church+of+Inhibition" target="">Church of Inhibition</a> to get the <a class="wiki_link" title="Elden Ring Finger Maiden Set" href="/Finger+Maiden+Set" target="">Finger Maiden Set</a>. Now set south and east toward Frenzied Flame Village: Pick up <a class="wiki_link" title="Elden Ring Frenzied's Cookbook (1)" href="/Frenzied's+Cookbook+(1)" target="">Frenzied's Cookbook (1)</a> and the&nbsp;<a class="wiki_link" title="Elden Ring Shabriri's Woe" href="/Shabriri's+Woe" target="">Shabriri's Woe</a> talisman. Past the village outskirts Site of Grace to the East, you'll find a knight that drops Ash of War: Giant Hunt and the way to Converted Fringe Tower.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/frenzied_flame_village_full_map_elden_ring_wiki_guide_600px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Frenzied+Flame+Village',
    },
  ],
  [
    'spells-from-fringe-tower',
    {
      title: 'Obtain powerful spells from Converted Fringe Tower',
      longDesc: `<p>Go back down the tower and move over to the cliff nearby. You'll see some platforms that you can use to get down. Do this to access <a class="wiki_link" title="Elden Ring Black Knife Catacombs" href="/Black+Knife+Catacombs">Black Knife Catacombs</a>. Inside you'll get&nbsp;<a class="wiki_link" title="Elden Ring Upgrade Materials" href="/Upgrade+Materials">Ghost Glovewort (2), (3) and (4)</a>, as well as <a class="wiki_link" title="Elden Ring Twinsage Sorcerer Ashes" href="/Twinsage+Sorcerer+Ashes" target="">Twinsage Sorcerer Ashes</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/converted_fringe_tower_full_map_elden_ring_wiki_guide_600px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Converted+Fringe+Tower',
    },
  ],
  [
    'unlock-ainsel-river-well',
    {
      title: 'Unlock Ainsel River Well',
      longDesc: `<p>Go back to Eastern Liurnia Lake Shore site of grace and find the previous road north with the two divergent paths. The one we want has a golem and is guarding access to&nbsp;<a class="wiki_link" title="Elden Ring Ainsel Rivel Well" href="/Ainsel+Rivel+Well">Ainsel Rivel Well</a>. To find it, just follow the road east from the grace site and&nbsp;then north until you find a golem. Defeat it and enter&nbsp;<a class="wiki_link" title="Elden Ring Ainsel River" href="/Ainsel+River" target="">Ainsel River</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ainsel-river-well-location-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Ainsel+River+Well',
    },
  ],
  [
    'complete-castle-morne',
    {
      title: 'Complete Castle Morne',
      longDesc: `Once you complete the boss of the area, return to Irina and again to him to progress their quest (however, I would advise against completing this quest too soon until your weapon upgrade is at least +8, because you'll obtain a+8 weapon after progressing enough in this questline, which may affect your ability to interact with other players if matchmaking is affected by weapon level).`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/castle-mourne-locationpreview-elden-ring-wiki-guide-300px-min.jpeg',
      link: 'https://eldenring.wiki.fextralife.com/Castle+Morne',
    },
  ],
  [
    'collect-upgrade-materials-3',
    {
      title: 'Collect Upgrade Materials',
      longDesc: `<p><a class="wiki_link" title="Elden Ring Interactive Map?id=1362&amp;lat=-129.46875&amp;lng=77.567149&amp;zoom=5&amp;code=mapB" href="/Interactive+Map?id=1362&amp;lat=-129.46875&amp;lng=77.567149&amp;zoom=5&amp;code=mapB">Elden Ring Map: Ainsel River Starting Point</a>. This is a pretty easy area to tackle even earlier on, however it makes sense to visit it now because it follows a "natural" path from Liurnia East. You will be able to loot several <a class="wiki_link" title="Elden Ring Smithing Stone (3)" href="/Smithing+Stone+(3)" target="">Smithing Stone (3)</a> here that allow you to upgrade your weapons to +9, making Liurnia West easier. Head left from the Site of Grace and defeat the many Ants you'll encounter until you arrive at an open area with many <a class="wiki_link" title="Elden Ring Clayman" href="/Clayman" target="">Clayman</a> humanoid enemies. Here, loot several <a class="wiki_link" title="Elden Ring Upgrade Materials" href="/Upgrade+Materials" target="">Upgrade Materials</a> and then you should take a non-obvious path to the RIGHT of the wall blocking your progress, as this will enable you to hide from the lazer-beam bug that would terrorize other approach. Use this right path and the broken pillars to quickly make your way across and get BEHIND the giant monster (<a class="wiki_link" title="Elden Ring Malformed Star" href="/Malformed+Star" target="">Malformed Star</a>). From here you'll be able to tackle it much easier and not be overwhelmed by other enemies. It will not respawn once defeated.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/smithing_stone_3_upgrade_material_elden_ring_wiki_guide_200px.png',
      link: '',
    },
  ],
  [
    'find-nomadic-merchant-3',
    {
      title: 'Find Nomadic Merchant',
      longDesc: `<p>Loot <a class="wiki_link" title="Elden Ring Map (Ainsel River)" href="/Map+(Ainsel+River)" target="">Map (Ainsel River)</a> and talk to the <a class="wiki_link" title="Elden Ring Nomadic Merchant Ainsel River" href="/Nomadic+Merchant+Ainsel+River" target="">Nomadic Merchant</a> to check out his shop. There's a curved sword (<a class="wiki_link" title="Elden Ring Wing of Astel" href="/Wing+of+Astel" target="">Wing of Astel</a>) that can be looted from a chest in the upper area if you want to explore around (This upper area can only be accessed later during <a class="wiki_link" title="Elden Ring Ranni the Witch" href="/Ranni+the+Witch">Ranni's sidequest</a>). Once you've gathered materials take the path downstream and confront several more giant ants and frogs, then get the <a class="wiki_link" title="Elden Ring Immunizing Horn Charm" href="/Immunizing+Horn+Charm" target="">Immunizing Horn Charm</a>. Keep following the river until you arrive at a boss room where you can fight the Great Enemy: <a class="wiki_link" title="Elden Ring Dragonkin Soldier of Nokstella" href="/Dragonkin+Soldier+of+Nokstella" target="">Dragonkin Soldier of Nokstella</a> and get the&nbsp;<a class="wiki_link" title="Elden Ring Frozen Lightning Spear" href="/Frozen+Lightning+Spear" target="">Frozen Lightning Spear</a> incantation. There's nothing else that can be done in this zone right now so we'll head back up to Liurnia of the Lakes and explore its western shores.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nomadic-merchant-ainsel-river-npcs-elden-ring-wiki-guide-300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Wandering+Merchant+Ainsel+River',
    },
  ],
  [
    'collect-immunizing-horn-charm',
    {
      title: 'Collect Immunizing Horn Charm',
      longDesc: `<p>Loot <a class="wiki_link" title="Elden Ring Map (Ainsel River)" href="/Map+(Ainsel+River)" target="">Map (Ainsel River)</a> and talk to the <a class="wiki_link" title="Elden Ring Nomadic Merchant Ainsel River" href="/Nomadic+Merchant+Ainsel+River" target="">Nomadic Merchant</a> to check out his shop. There's a curved sword (<a class="wiki_link" title="Elden Ring Wing of Astel" href="/Wing+of+Astel" target="">Wing of Astel</a>) that can be looted from a chest in the upper area if you want to explore around (This upper area can only be accessed later during <a class="wiki_link" title="Elden Ring Ranni the Witch" href="/Ranni+the+Witch">Ranni's sidequest</a>). Once you've gathered materials take the path downstream and confront several more giant ants and frogs, then get the <a class="wiki_link" title="Elden Ring Immunizing Horn Charm" href="/Immunizing+Horn+Charm" target="">Immunizing Horn Charm</a>. Keep following the river until you arrive at a boss room where you can fight the Great Enemy: <a class="wiki_link" title="Elden Ring Dragonkin Soldier of Nokstella" href="/Dragonkin+Soldier+of+Nokstella" target="">Dragonkin Soldier of Nokstella</a> and get the&nbsp;<a class="wiki_link" title="Elden Ring Frozen Lightning Spear" href="/Frozen+Lightning+Spear" target="">Frozen Lightning Spear</a> incantation. There's nothing else that can be done in this zone right now so we'll head back up to Liurnia of the Lakes and explore its western shores.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/immunizing_horn_charm_talisman_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Immunizing+Horn+Charm',
    },
  ],
  [
    'defeat-dragonkin-soldier-nokstella',
    {
      title: 'Defeat Dragonkin Soldier of Nokstella',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragonkin_soldier_of_nokstella_boss_enemies_elden_ring_wiki_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Dragonkin+Soldier+of+Nokstella',
    },
  ],
  [
    'loot-boss-room-3',
    {
      title: 'Loot Boss Room',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/95b56d97-cb83-4ef1-869e-a639449252c9.png',
      link: 'https://eldenring.wiki.fextralife.com/Ainsel+River',
    },
  ],
  [
    'begin-exploration-from-south-to-north',
    {
      title: 'Begin Exploration from South to North',
      longDesc: `<p><a class="wiki_link" title="Elden Ring Interactive Map?id=937&amp;lat=-153.265625&amp;lng=58.258712&amp;zoom=5&amp;code=mapA" href="/Interactive+Map?id=937&amp;lat=-153.265625&amp;lng=58.258712&amp;zoom=5&amp;code=mapA">Elden Ring Map: Liurnia of the Lakes West Starting Point</a>. Begin Exploration by accessing the Site of Grace: Folly on the Lake (<a class="wiki_link" title="Elden Ring Interactive Map?id=937&amp;lat=-153.265625&amp;lng=58.258712&amp;zoom=8&amp;code=mapA" href="/Interactive+Map?id=937&amp;lat=-153.265625&amp;lng=58.258712&amp;zoom=8&amp;code=mapA">Map coordinates here</a>). Ride Torrent to avoid being poisoned and explore the cavernous swamp. From the Site of Grace, head south and then hug the wall and keep going north. Eventually, you will notice a road heading up into a town - this is <a class="wiki_link" title="Elden Ring Village of the Albinaurics" href="/Village+of+the+Albinaurics" target="">Village of the Albinaurics</a> and has a VERY important item you don't want to miss. There are 2x <a class="wiki_link" title="Elden Ring Stormhawk Axe" href="/Stormhawk+Axe" target="">Stormhawk Axe</a> that can be looted from under a bridge as you access the village, then you'll come to a well and an NPC ghost that talks about Albus. Activate the site of grace then put the well to your back and go forward and left up a slope toward the Perfumer enemy. Past the perfumer, there's a suspicious POT. Hit the pot and it will transform into <a class="wiki_link" title="Elden Ring Albus" href="/Albus" target="">Albus</a>, who gives you the <a class="wiki_link" title="Elden Ring Haligtree Secret Medallion (Right)" href="/Haligtree+Secret+Medallion+(Right)" target="">Haligtree Secret Medallion (Right)</a>. This item is ESSENTIAL to access a later area of the game. Other interesting items in the area are the <a class="wiki_link" title="Elden Ring Crystal Sword" href="/Crystal+Sword" target="">Crystal Sword</a> across the rackety wooden bridge, and a <a class="wiki_link" title="Elden Ring Larval Tear" href="/Larval+Tear" target="">Larval Tear</a> in the graveyard. If you go across the other bridge and past the Teardrop Scarab, you can fight field boss <a class="wiki_link" title="Elden Ring Omenkiller" href="/Omenkiller" target="">Omenkiller</a> and obtain the <a class="wiki_link" title="Elden Ring Crucible Knot Talisman" href="/Crucible+Knot+Talisman" target="">Crucible Knot Talisman</a>. There are more items to be gathered here and in the swamp, to take a moment and look at the <a class="wiki_link" title="Elden Ring Interactive Map" href="/Interactive+Map" target="">Interactive Map</a> for details.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/liurnia-of-the-lakes-hub-location-preview-elden-ring-wiki-guide-300px.jpeg',
      link: 'https://eldenring.wiki.fextralife.com/Liurnia+of+the+Lakes',
    },
  ],
  [
    'find-fillage-of-the-albinaurics',
    {
      title: 'Find Village of the Aulbinaurics',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/village_of_the_albinaurics_location_elden_ring_wiki_guide_300x.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Village+of+the+Albinaurics',
    },
  ],
  [
    'talk-to-napheli-loux',
    {
      title: 'Talk to Nepheli Loux',
      link: 'https://eldenring.wiki.fextralife.com/Nepheli+Loux',
    },
  ],
  [
    'loot-secret-medallion-key',
    {
      title: 'Loot Secret Medallion Key',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/haligtree-secret-medalllion-right-key-itemselden-ring-wiki-guide.png',
      link: 'https://eldenring.wiki.fextralife.com/Haligtree+Secret+Medallion+(Right)',
    },
  ],
  [
    'talk-to-latenna',
    {
      title: 'Talk to Latenna',
      link: 'https://eldenring.wiki.fextralife.com/Latenna',
    },
  ],
  [
    'complete-optional-objectives-2',
    {
      title: 'Complete Optional Objectives',
      longDesc: `<p>Go back to the Folly on the Lake site of grace and this time head west and north. You will eventually come to the entrance to <a class="wiki_link" title="Elden Ring Converted Tower" href="/Converted+Tower" target="">Converted Tower</a>, perform the ERUDITION <a class="wiki_link" title="Elden Ring Gestures" href="/Gestures" target="">Gesture</a> to loot a <a class="wiki_link" title="Elden Ring Memory Stone" href="/Memory+Stone" target="">Memory Stone</a>. From here you should follow the road north toward the Minor Erdtree, defeat the <a class="wiki_link" title="Elden Ring Erdtree Avatar" href="/Erdtree+Avatar" target="">Erdtree Avatar</a> and loot Flask Upgrades:&nbsp;<a class="wiki_link" title="Elden Ring Cerulean Crystal Tear" href="/Cerulean+Crystal+Tear" target="">Cerulean Crystal Tear</a> and <a class="wiki_link" title="Elden Ring Ruptured Crystal Tear" href="/Ruptured+Crystal+Tear" target="">Ruptured Crystal Tear</a>.</p>`,
      image: '',
      link: '',
    },
  ],
  [
    'loot-flask-upgrades-4',
    {
      title: 'Loot Flask Upgrades',
      longDesc: `<p>Return to the Converted Tower site grace and, with the Minor Erdtree as reference, keep to its right side (east) and keep the cliff to your left. Keep hugging it until you find the entrance to&nbsp;<a class="wiki_link" title="Elden Ring Road End's Catacombs" href="/Road+End's+Catacombs">Road End's Catacombs</a> for some <a class="wiki_link" title="Elden Ring Spirit Ashes" href="/Spirit+Ashes" target="">Spirit Ashes</a> and <a class="wiki_link" title="Elden Ring Upgrade Materials" href="/Upgrade+Materials" target="">Upgrade Materials</a>. Further north, <a class="wiki_link" title="Elden Ring Revenger's Shack" href="/Revenger's+Shack" target="">Revenger's Shack</a> will have an invasion by <a class="wiki_link" title="Elden Ring Edgar the Revenger" href="/Edgar+the+Revenger" target="">Edgar the Revenger</a> if you completed <a class="wiki_link" title="Elden Ring Irina" href="/Irina" target="">Irina</a>'s quest in <a class="wiki_link" title="Elden Ring Weeping Peninsula" href="/Weeping+Peninsula" target="">Weeping Peninsula</a>. He drops&nbsp;<a class="wiki_link" title="Elden Ring Shabriri Grape" href="/Shabriri+Grape" target="">Shabriri Grape</a> and <a class="wiki_link" title="Elden Ring Banished Knight's Halberd" href="/Banished+Knight's+Halberd" target="">Banished Knight's Halberd</a> (+8). Further north you can challenge the <a class="wiki_link" title="Elden Ring Cuckoo's Evergaol" href="/Cuckoo's+Evergaol">Cuckoo's Evergaol</a>for the&nbsp;<a class="wiki_link" title="Elden Ring Greatblade Phalanx" href="/Greatblade+Phalanx" target="">Greatblade Phalanx</a> <a class="wiki_link" title="Elden Ring Sorceries" href="/Sorceries" target="">Sorcery</a>.</p>`,
      image: '',
      link: '',
    },
  ],
  [
    'visit-thefour-belfries',
    {
      title: 'Visit The Four Belfries',
      longDesc: `<p>Keep following the road north and then take right to go up to <a class="wiki_link" title="Elden Ring The Four Belfries" href="/The+Four+Belfries" target="">The Four Belfries</a>. Loot the&nbsp;<a class="wiki_link" title="Elden Ring Imbued Sword Key" href="/Imbued+Sword+Key">Imbued Sword Key</a> at the top and activate the site of grace. You can explore this destinations to get a sneak peak of later areas in the game. It's possible to range the enemies you come across, and also you get to take revenge vs the <a class="wiki_link" title="Elden Ring Grafted Scion" href="/Grafted+Scion" target="">Grafted Scion</a> that defeated you in the tutorial.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/d0d26f10-73a9-4213-9838-bce38e7ec370.png',
      link: 'https://eldenring.wiki.fextralife.com/The+Four+Belfries',
    },
  ],
  [
    'obtain-map-fragments-4',
    {
      title: 'Obtain Map Fragment',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/map_liurnia_west_key_items_elden_ring_wiki_guide.png',
      link: 'https://eldenring.wiki.fextralife.com/Map+(Liurnia,+West)',
    },
  ],
  [
    'talk-smithing-master-iji',
    {
      title: 'Talk to Smithing Master Iji',
      longDesc: `<p>Once back, take the lower road north and loot the caravan for the Carian Knight's Sword. Further ahead you can loot Map (Liurnia, West) and proceed through Kingsrealm Ruins. Hit the <a class="wiki_link" title="Elden Ring Illusory Walls" href="/Illusory+Walls" target="">Illusory Wall</a> at the end of the road to reveal the <a class="wiki_link" title="Elden Ring Interactive Map?id=1507&amp;lat=-114.875&amp;lng=52.924561&amp;zoom=8&amp;code=mapA" href="/Interactive+Map?id=1507&amp;lat=-114.875&amp;lng=52.924561&amp;zoom=8&amp;code=mapA">Road to the Manor Site of Grace</a> and then talk to <a class="wiki_link" title="Elden Ring War Counselor Iji" href="/War+Counselor+Iji">Smithing Master Iji</a>. He can upgrade your weapons and sells valuable materials. The road north leads to a small Legacy Dungeon called <a class="wiki_link" title="Elden Ring Caria Manor" href="/Caria+Manor" target="">Caria Manor</a>. Unlock the site of grace at the entrance, go into the Gardens and hug the right wall and loot&nbsp;<a class="wiki_link" title="Elden Ring Glintstone Craftsman's Cookbook (6)" href="/Glintstone+Craftsman's+Cookbook+(6)" target="">Glintstone Craftsman's Cookbook (6)</a>.&nbsp;There will be magic traps that attack you constantly, so keep on the move!&nbsp;</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/map_liurnia_west_key_items_elden_ring_wiki_guide.png',
      link: 'https://eldenring.wiki.fextralife.com/War+Counselor+Iji',
    },
  ],
  [
    'complete-caria-manor',
    {
      title: 'Complete Caria Manor',
      longDesc: `<p>Caria Manor is a large location so please see the <a class="wiki_link" title="Elden Ring Caria Manor" href="/Caria+Manor" target="">Caria Manor</a> page for a walkthrough of the area. There's a <a class="wiki_link" title="Elden Ring Golden Seed" href="/Golden+Seed" target="">Golden Seed</a> and NPC merchant <a class="wiki_link" title="Elden Ring Pidia, Carian Servant" href="/Pidia,+Carian+Servant" target="">Pidia, Carian Servant</a>. Mages will absolutely want to defeat the boss <a class="wiki_link" title="Elden Ring Royal Knight Loretta" href="/Royal+Knight+Loretta" target="">Royal Knight Loretta</a> to obtain the&nbsp;<a class="wiki_link" title="Elden Ring Loretta's Greatbow" href="/Loretta's+Greatbow" target="">Loretta's Greatbow</a> sorcery.</p> <p>Once through the manor, you will come to an area guarded by <a class="wiki_link" title="Elden Ring Glintstone Dragon Adula" href="/Glintstone+Dragon+Adula" target="">Glintstone Dragon Adula</a>. You don't have to defeat this dragon. This area has 3 towers called "Rises". Only one of them is accessible at the moment:&nbsp;&nbsp;<a class="wiki_link" title="Elden Ring Ranni's Rise" href="/Ranni's+Rise" target="">Ranni's Rise</a>, which you can find to the west.&nbsp;</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/caria_manor_locations_elden_ring_wiki_guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Caria+Manor',
    },
  ],
  [
    'meet-ranni-and-her-allies',
    {
      title: 'Meet Ranni and her allies',
      longDesc: `<p>Go all the way to the top and talk to <a class="wiki_link" title="Elden Ring Ranni the Witch" href="/Ranni+the+Witch" target="">Ranni the Witch</a> to begin her questline: The Hidden Treasure of Nokron. Agree to her request to find the hidden treasure of Nokron and she asks that you speak with three people in her service: War Counselor Iji, Blaidd and Seluvis. These three will then appear in spectral form on the first floor of her tower. After you talk to everyone, talk to her again to be able to leave this destination.</p> <p>From now this walkthrough will guide you to complete this quest. Blaidd will be waiting in the Siofra River area, and will reveal that he suspects that Seluvis knows more than he lets on. Seluvis will inform you that Sorceress Sellen has some information, and provide you with Seluvis's Introduction. <a class="wiki_link" title="Elden Ring Sorceress Sellen" href="/Sorceress+Sellen" target="">Sorceress Sellen</a> then informs the player that <a class="wiki_link" title="Elden Ring Starscourge Radahn" href="/Starscourge+Radahn" target="">Starscourge Radahn</a> stopped the stars, and that defeating him is the key to Nokron's secrets.</p> <p>Therefore the first step is to visit Siofra and complete it. BE WARNED: if you follow Preceptor Seluvis questline, you will betray Ranni and fail her quest. We will not do this on this walkthrough but you can read about it on his page: <a class="wiki_link" title="Elden Ring Preceptor Seluvis" href="/Preceptor+Seluvis" target="">Preceptor Seluvis</a></p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/fmlgngpvcacmvf4.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Ranni+the+Witch',
    },
  ],
  [
    'start-ryas-questline',
    {
      title: "Start Rya's Questline",
      longDesc: `<p>Find the Telescope icon to meet <a class="wiki_link" title="Elden Ring Rya" href="/Rya" target="">Rya</a>, who asks you to retrieve her necklace that was stolen from her. North-west from her location you can find <a class="wiki_link" title="Elden Ring Boilprawn Shack" href="/Boilprawn+Shack" target="">Boilprawn Shack</a>, here <a class="wiki_link" title="Elden Ring Blackguard Big Boggart" href="/Blackguard+Big+Boggart" target="">Blackguard Big Boggart</a> resides. Talk to him and purchase <a class="wiki_link" title="Elden Ring Rya's Necklace" href="/Rya's+Necklace" target="">Rya's Necklace</a> (1000 runes) and <a class="wiki_link" title="Elden Ring Boiled Prawn" href="/Boiled+Prawn" target="">Boiled Prawn</a>, so he will move to his next location. Return to <a class="wiki_link" title="Elden Ring Rya" href="/Rya" target="">Rya</a> and she will invite you to the <a class="wiki_link" title="Elden Ring Volcano Manor" href="/Volcano+Manor" target="">Volcano Manor</a> (for later!)</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rya_npcs_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Rya',
    },
  ],
  [
    'obtain-map-fragment-5',
    {
      title: 'Obtain Map Fragment',
      longDesc: `<p><a class="wiki_link" title="Elden Ring Interactive Map?id=1185&amp;lat=-187.414062&amp;lng=122.572832&amp;zoom=5&amp;code=mapB" href="/Interactive+Map?id=1185&amp;lat=-187.414062&amp;lng=122.572832&amp;zoom=5&amp;code=mapB">Elden Ring Map: Siofra River Starting Point</a>. Head to <a class="wiki_link" title="Elden Ring Mistwood" href="/Mistwood" target="">Mistwood</a> and go down <a class="wiki_link" title="Elden Ring Siofra River Well" href="/Siofra+River+Well" target="">Siofra River Well</a> - unlock the <a class="wiki_link" title="Elden Ring Interactive Map?id=1185&amp;lat=-187.414062&amp;lng=122.572832&amp;zoom=8&amp;code=mapB" href="/Interactive+Map?id=1185&amp;lat=-187.414062&amp;lng=122.572832&amp;zoom=8&amp;code=mapB">Site of Grace here</a> if you haven't. This area is filled with <a class="wiki_link" title="Elden Ring Ancestral Follower" href="/Ancestral+Follower" target="">Ancestral Follower</a> enemies that are generally best to take at a distance, but be VERY mindful of their incredibly powerful arrows. The area has lots of useful materials for weapons level 10+, so check out the interactive map for exact loot locations. You should make sure to pick up the&nbsp;<a class="wiki_link" title="Elden Ring Armorer's Cookbook (6)" href="/Armorer's+Cookbook+(6)" target="">Armorer's Cookbook (6)</a> and the <a class="wiki_link" title="Elden Ring Map (Siofra River)" href="/Map+(Siofra+River)" target="">Map (Siofra River)</a> before exploring further.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/map-siofra-river-key-item-elden-ring-wiki-guide.png',
      link: 'https://eldenring.wiki.fextralife.com/Map+(Siofra+River)',
    },
  ],
  [
    'light-fire-pillars',
    {
      title: 'Light the Fire Pillars',
      longDesc: `<p>This area has a mechanic to summon a special boss: you must light altars scattered around the zone. There's a map for their location in the <a class="wiki_link" title="Elden Ring Siofra River" href="/Siofra+River" target="">Siofra River</a> page. You will find <a class="wiki_link" title="Elden Ring Blaidd" href="/Blaidd" target="">Blaidd</a> standing <a class="wiki_link" title="Elden Ring Interactive Map?id=2799&amp;lat=-184.97187&amp;lng=136.09082&amp;zoom=8&amp;code=mapB" href="/Interactive+Map?id=2799&amp;lat=-184.97187&amp;lng=136.09082&amp;zoom=8&amp;code=mapB">near hallowhorn grounds</a>, you can talk to him to advance his quest. You should then proceed to locate and activate the pillars in the area:</p> <ul> 
      <li>First Pillar is by the site of grace <a class="wiki_link" title="Elden Ring Interactive Map?id=1183&amp;lat=-184.898437&amp;lng=130.582834&amp;zoom=8&amp;code=mapB" href="/Interactive+Map?id=1183&amp;lat=-184.898437&amp;lng=130.582834&amp;zoom=8&amp;code=mapB">Siofra River Bank</a>. [<a class="wiki_link" title="Elden Ring Interactive Map?id=3810&amp;lat=-185.109375&amp;lng=131.824941&amp;zoom=8&amp;code=mapB" href="/Interactive+Map?id=3810&amp;lat=-185.109375&amp;lng=131.824941&amp;zoom=8&amp;code=mapB">Map Link</a>]</li> 
      <li>Second Pillar is in a corner west from the first pillar. [<a class="wiki_link" title="Elden Ring Interactive Map?id=3812&amp;lat=-181.807812&amp;lng=129.941307&amp;zoom=8&amp;code=mapB" href="/Interactive+Map?id=3812&amp;lat=-181.807812&amp;lng=129.941307&amp;zoom=8&amp;code=mapB">Map Link</a>]</li> 
      <li>Third Pillar is in a small island in the watery area with the lightning whisps. [<a class="wiki_link" title="Elden Ring Interactive Map?id=3813&amp;lat=-181.896875&amp;lng=135.342489&amp;zoom=8&amp;code=mapB" href="/Interactive+Map?id=3813&amp;lat=-181.896875&amp;lng=135.342489&amp;zoom=8&amp;code=mapB">Map Link</a>]</li> 
      <li>Fourth Pillar is by a cliff on the eastern area of the map. [<a class="wiki_link" title="Elden Ring Interactive Map?id=3814&amp;lat=-183.67&amp;lng=140.23&amp;zoom=8&amp;code=mapB" href="/Interactive+Map?id=3814&amp;lat=-183.67&amp;lng=140.23&amp;zoom=8&amp;code=mapB">Map Link</a>]</li> 
      <li>Fifth Pillar is just south from Worshipper's Woods site of grace. [<a class="wiki_link" title="Elden Ring Interactive Map?id=3815&amp;lat=-179.95&amp;lng=139.50&amp;zoom=8&amp;code=mapB" href="/Interactive+Map?id=3815&amp;lat=-179.95&amp;lng=139.50&amp;zoom=8&amp;code=mapB">Map Link</a>]</li> 
      <li>Sixth Pillar is west from Worshipper's Woods site of grace. [<a class="wiki_link" title="Elden Ring Interactive Map?id=3816&amp;lat=-178.31&amp;lng=136.91&amp;zoom=8&amp;code=mapB" href="/Interactive+Map?id=3816&amp;lat=-178.31&amp;lng=136.91&amp;zoom=8&amp;code=mapB">Map Link</a>]</li> 
      <li>Seventh Pillar is to the right on the path toward "Below the Well" site of grace. [<a class="wiki_link" title="Elden Ring Interactive Map?id=3817&amp;lat=-175.44&amp;lng=140&amp;zoom=8&amp;code=mapB" href="/Interactive+Map?id=3817&amp;lat=-175.44&amp;lng=140&amp;zoom=8&amp;code=mapB">Map Link</a>]</li> 
      <li>Eight Pillar is on the left on the path toward "Below the Well" site of grace. [<a class="wiki_link" title="Elden Ring Interactive Map?id=3818&amp;lat=-175.31&amp;lng=138.17&amp;zoom=8&amp;code=mapB" href="/Interactive+Map?id=3818&amp;lat=-175.31&amp;lng=138.17&amp;zoom=8&amp;code=mapB">Map Link</a>]</li> 
     </ul>`,
      image: '',
      link: '',
    },
  ],
  [
    'collect-spells-tailsman-2',
    {
      title: 'Collect Spells & Talismans',
      longDesc: `<p><a class="wiki_link" title="Elden Ring Interactive Map?id=1185&amp;lat=-187.414062&amp;lng=122.572832&amp;zoom=5&amp;code=mapB" href="/Interactive+Map?id=1185&amp;lat=-187.414062&amp;lng=122.572832&amp;zoom=5&amp;code=mapB">Elden Ring Map: Siofra River Starting Point</a>. Head to <a class="wiki_link" title="Elden Ring Mistwood" href="/Mistwood" target="">Mistwood</a> and go down <a class="wiki_link" title="Elden Ring Siofra River Well" href="/Siofra+River+Well" target="">Siofra River Well</a> - unlock the <a class="wiki_link" title="Elden Ring Interactive Map?id=1185&amp;lat=-187.414062&amp;lng=122.572832&amp;zoom=8&amp;code=mapB" href="/Interactive+Map?id=1185&amp;lat=-187.414062&amp;lng=122.572832&amp;zoom=8&amp;code=mapB">Site of Grace here</a> if you haven't. This area is filled with <a class="wiki_link" title="Elden Ring Ancestral Follower" href="/Ancestral+Follower" target="">Ancestral Follower</a> enemies that are generally best to take at a distance, but be VERY mindful of their incredibly powerful arrows. The area has lots of useful materials for weapons level 10+, so check out the interactive map for exact loot locations. You should make sure to pick up the&nbsp;<a class="wiki_link" title="Elden Ring Armorer's Cookbook (6)" href="/Armorer's+Cookbook+(6)" target="">Armorer's Cookbook (6)</a> and the <a class="wiki_link" title="Elden Ring Map (Siofra River)" href="/Map+(Siofra+River)" target="">Map (Siofra River)</a> before exploring further.</p>`,
      image: '',
      link: '',
    },
  ],
  [
    'collect-key-items',
    {
      title: 'Collect Key Items',
      link: '',
    },
  ],
  [
    'defeat-dragonkin-soldier',
    {
      title: 'Defeat Dragonkin Soldier',
      longDesc: `<p>Once you have lit all pillars you can challenge the Ancestor Spirit boss fight. As you explore, you can also take a gateway (<a class="wiki_link" title="Elden Ring Interactive Map?id=1305&amp;lat=-181.296875&amp;lng=138.115104&amp;zoom=8&amp;code=mapB" href="/Interactive+Map?id=1305&amp;lat=-181.296875&amp;lng=138.115104&amp;zoom=8&amp;code=mapB">see on map)</a> to access the <a class="wiki_link" title="Elden Ring Dragonkin Soldier" href="/Dragonkin+Soldier" target="">Dragonkin Soldier</a> boss fight. This Great Enemy drops the <a class="wiki_link" title="Elden Ring Dragon Halberd" href="/Dragon+Halberd" target="">Dragon Halberd</a>, and players can loot the&nbsp;<a class="wiki_link" title="Elden Ring Marika's Scarseal" href="/Marika's+Scarseal" target="">Marika's Scarseal</a> talisman from nearby. Dropping down from here and going north will also bring you to a Golden Seed and the "Below the Well" site of grace.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragonkin-soldier-boss-enemies-elden-ring-wiki-guide-300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Dragonkin+Soldier',
    },
  ],
  [
    'obtain-golden-seed-5',
    {
      title: 'Obtain Golden Seed',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_seed_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Golden+Seed',
    },
  ],
  [
    'unlock-deep-siofra-well',
    {
      title: 'Unlock Deep Siofra Well',
      image: '',
      link: '',
    },
  ],
  [
    'defeat-ancestor-spirit',
    {
      title: 'Defeat Ancestor Spirit',
      longDesc: `<p>Once you have lit all pillars you can challenge the Ancestor Spirit boss fight. As you explore, you can also take a gateway (<a class="wiki_link" title="Elden Ring Interactive Map?id=1305&amp;lat=-181.296875&amp;lng=138.115104&amp;zoom=8&amp;code=mapB" href="/Interactive+Map?id=1305&amp;lat=-181.296875&amp;lng=138.115104&amp;zoom=8&amp;code=mapB">see on map)</a> to access the <a class="wiki_link" title="Elden Ring Dragonkin Soldier" href="/Dragonkin+Soldier" target="">Dragonkin Soldier</a> boss fight. This Great Enemy drops the <a class="wiki_link" title="Elden Ring Dragon Halberd" href="/Dragon+Halberd" target="">Dragon Halberd</a>, and players can loot the&nbsp;<a class="wiki_link" title="Elden Ring Marika's Scarseal" href="/Marika's+Scarseal" target="">Marika's Scarseal</a> talisman from nearby. Dropping down from here and going north will also bring you to a Golden Seed and the "Below the Well" site of grace.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ancestor_spirit.png',
      link: 'https://eldenring.wiki.fextralife.com/Ancestor+Spirit',
    },
  ],
  [
    'complete-smoldering-church',
    {
      title: 'Complete Smoldering Church',
      longDesc: `<p><a class="wiki_link" title="Elden Ring Interactive Map?id=983&amp;lat=-169.328125&amp;lng=124.477279&amp;zoom=5&amp;code=mapA" href="/Interactive+Map?id=983&amp;lat=-169.328125&amp;lng=124.477279&amp;zoom=5&amp;code=mapA">Elden Ring Map: Caelid Starting Point</a>. Exploring <a class="wiki_link" title="Elden Ring Caelid" href="/Caelid" target="">Caelid</a> can be a challenging task for players. The western area is quite easy at this point, but the east area is tough and the north (<a class="wiki_link" title="Elden Ring Dragonbarrow" href="/Dragonbarrow" target="">Dragonbarrow</a>) is best tackled later on. Many players may prefer to take the path North from <a class="wiki_link" title="Elden Ring Liurnia of the Lakes" href="/Liurnia+of+the+Lakes" target="">Liurnia of the Lakes</a> and through the <a class="wiki_link" title="Elden Ring Ruin-Strewn Precipice" href="/Ruin-Strewn+Precipice" target="">Ruin-Strewn Precipice</a> to explore the <a class="wiki_link" title="Elden Ring Altus Plateau" href="/Altus+Plateau" target="">Altus Plateau</a> first. If you want you can do this, and you can even go to <a class="wiki_link" title="Elden Ring Mt Gelmir" href="/Mt+Gelmir" target="">Mt Gelmir</a> before coming to Caelid. The reason this walkthrough opts to visit Caelid first is because there is little of consequence in Altus for the story, some <a class="wiki_link" title="Elden Ring Side Quests" href="/Side+Quests">NPC questlines</a> start in Caelid, and Mt. Gelmir is intended as higher level (upgrades are +6-7 whereas Caelid is +4-6)</p> <p>If you decide to tackle Caelid, then continue reading from here. If you want to do Altus, then scroll down to it using <a class="wiki_link" title="Elden Ring Game Progress Route#altusfirst" href="/Game+Progress+Route#altusfirst">this handy click</a>. We will include a way to return to this point from the end of Altus as well.</p> <p>Your first objective as you enter is to complete <a class="wiki_link" title="Elden Ring Smouldering Church" href="/Smouldering+Church" target="">Smouldering Church</a>. There's an NPC invasion here by <a class="wiki_link" title="Elden Ring Anastacia, Tarnished Eater" href="/Anastacia,+Tarnished+Eater" target="">Anastacia, Tarnished Eater</a> who drops a talisman, but the church also has 2 cookbooks that you want: <a class="wiki_link" title="Elden Ring Nomadic Warrior's Cookbook (14)" href="/Nomadic+Warrior's+Cookbook+(14)" target="">Nomadic Warrior's Cookbook (14)</a> and <a class="wiki_link" title="Elden Ring Missionary's Cookbook (3)" href="/Missionary's+Cookbook+(3)" target="">Missionary's Cookbook (3)</a>. From here you will want to activate the site of grace at the <a class="wiki_link" title="Elden Ring Shack of Rotting" href="/Shack+of+Rotting" target="">Shack of Rotting</a> to make sure you have an easy respawn if things go badly.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/smoldering-church-locations-elden-ring-wiki-guide-300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Smoldering+Church',
    },
  ],
  [
    'flask-spirit-upgrades',
    {
      title: 'Obtain Flask & Spirit Upgrades',
      longDesc: `<p>Follow the road forward and you will come to the Minor Erdtree of the area. Defeat the <a class="wiki_link" title="Elden Ring Erdtree Avatar" href="/Erdtree+Avatar" target="">Erdtree Avatar</a> and get&nbsp;<a class="wiki_link" title="Elden Ring Flame-Shrouding Cracked Tear" href="/Flame-Shrouding+Cracked+Tear" target="">Flame-Shrouding Cracked Tear</a> and <a class="wiki_link" title="Elden Ring Greenburst Crystal Tear" href="/Greenburst+Crystal+Tear" target="">Greenburst Crystal Tear</a>. You can then opt to explore the nearby <a class="wiki_link" title="Elden Ring Minor Erdtree Catacombs" href="/Minor+Erdtree+Catacombs" target="">Minor Erdtree Catacombs</a>, you can loot&nbsp;<a class="wiki_link" title="Elden Ring Grave Glovewort (5)" href="/Grave+Glovewort+(5)" target="">Grave Glovewort (5)</a> and the <a class="wiki_link" title="Elden Ring Mad Pumpkin Head" href="/Mad+Pumpkin+Head" target="">Mad Pumpkin Head</a> Spirit Ashes from a duo boss within. After this continue following the road and you can loot the <a class="wiki_link" title="Elden Ring Greatsword" href="/Greatsword" target="">Greatsword</a> from the travelling wagon. Ahead there are some ruins with a duo of Pumpkin Head mini-bosses that let you loot the <a class="wiki_link" title="Elden Ring Visage Shield" href="/Visage+Shield" target="">Visage Shield</a>.</p>`,
      image: '',
      link: '',
    },
  ],
  [
    'get-golden-scarab',
    {
      title: 'Get Golden Scarab talisman',
      longDesc: `<p>Travel East from here (directly East of the telescope icon on the map) and jump across the canyon to access the <a class="wiki_link" title="Elden Ring Abandoned Cave" href="/Abandoned+Cave" target="">Abandoned Cave</a>. Make sure to use gear with <a class="wiki_link" title="Elden Ring Immunity" href="/Immunity">Immunity</a> to fight against the pools of <a class="wiki_link" title="Elden Ring Scarlet Rot" href="/Scarlet+Rot">Scarlet Rot</a>, and have some <a class="wiki_link" title="Elden Ring Preserving Boluses" href="/Preserving+Boluses">Preserving Boluses</a> at hand! The <a class="wiki_link" title="Elden Ring Cleanrot Knight" href="/Cleanrot+Knight" target="">Cleanrot Knight</a> boss duo within can be challenging, but they drop the <a class="wiki_link" title="Elden Ring Gold Scarab" href="/Gold+Scarab" target="">Gold Scarab</a> talisman that can make rune farming a lot faster. There's also the <a class="wiki_link" title="Elden Ring Serpent Bow" href="/Serpent+Bow" target="">Serpent Bow</a> and <a class="wiki_link" title="Elden Ring Venomous Fang" href="/Venomous+Fang" target="">Venomous Fang</a> claw weapon to loot here.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/gold_scarab_talisman_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Golden+Scarab',
    },
  ],
  [
    'find-iron-fist-alexander-2',
    {
      title: 'Find Iron Fist Alexander',
      longDesc: `<p>Return to the Smouldering Wall site of grace just south of the telescope icon. To the west of this location, back toward Limgrave but on the lower level, you can find <a class="wiki_link" title="Elden Ring Gael Tunnel" href="/Gael+Tunnel" target="">Gael Tunnel</a> and challenge the <a class="wiki_link" title="Elden Ring Magma Wyrm" href="/Magma+Wyrm" target="">Magma Wyrm</a> to get 1&nbsp;<a class="wiki_link" title="Elden Ring Dragon Heart" href="/Dragon+Heart" target="">Dragon Heart</a> and <a class="wiki_link" title="Elden Ring Moonveil" href="/Moonveil" target="">Moonveil</a> (the Katana all PvPers love!). Explore thoroughly and find rear Gael Tunnel entrance to trigger your second encounter with <a class="wiki_link" title="Elden Ring Iron Fist Alexander" href="/Iron+Fist+Alexander">Alexander</a>. There are several upgrade materials to be looted in and out of the tunnel so make sure to check the <a class="wiki_link" title="Elden Ring Interactive Map" href="/Interactive+Map">Elden Ring Map</a>. You can also kill an invisible Teardrop Scarab near the tunnel's exit to loot <a class="wiki_link" title="Elden Ring Ash of War: Flame of the Redmanes" href="/Ash+of+War:+Flame+of+the+Redmanes" target="">Ash of War: Flame of the Redmanes</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/alexander_npc_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Iron+Fist+Alexander',
    },
  ],
  [
    'clear-fort-gael',
    {
      title: 'Clear Fort Gael',
      longDesc: `<p>Further south from here you will be able to explore Fort Gael. There's a Talisman, A Katar and <a class="wiki_link" title="Elden Ring Ash of War: Lion Claw" href="/Ash+of+War:+Lion+Claw" target="">Ash of War: Lion Claw</a> here as well as a secretive gateway that takes you to Redmane Castle. Don't take it right now if you want to continue exploring naturally, but you can progress this way if you want too.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/fort-gael-location-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Fort+Gael',
    },
  ],
  [
    'obtain-map-fragment-6',
    {
      title: 'Obtain Map Fragments',
      longDesc: `<p>Find <a class="wiki_link" title="Elden Ring Gaol Cave" href="/Gaol+Cave">Gaol Cave</a>&nbsp;to the northeast in the canyon and unlock it with <a class="wiki_link" title="Elden Ring Stonesword Key" href="/Stonesword+Key" target="">Stonesword Keys</a>.&nbsp;Within you will find some upgrade materials, a shield, and a <a class="wiki_link" title="Elden Ring Frenzied Duelist" href="/Frenzied+Duelist" target="">Frenzied Duelist</a> boss that drops <a class="wiki_link" title="Elden Ring Putrid Corpse Ashes" href="/Putrid+Corpse+Ashes" target="">Putrid Corpse Ashes</a>. The rear entrance of the cave allows you to drop down to an item that's technically in <a class="wiki_link" title="Elden Ring Limgrave" href="/Limgrave" target="">Limgrave</a>:&nbsp;<a class="wiki_link" title="Elden Ring Regalia of Echoid" href="/Regalia+of+Echoid" target="">Regalia of Echoid</a> (Straight Sword).</p> <p>Make your way southeast, and loot the&nbsp;<a class="wiki_link" title="Elden Ring Meteoric Ore Blade" href="/Meteoric+Ore+Blade" target="">Meteoric Ore Blade</a> in <a class="wiki_link" title="Elden Ring Caelid Waypoint Ruins" href="/Caelid+Waypoint+Ruins" target="">Caelid Waypoint Ruins</a>, before returning to the road. Follow it south until you come across <a class="wiki_link" title="Elden Ring Decaying Ekzykes" href="/Decaying+Ekzykes" target="">Decaying Ekzykes</a>, don't fight it yet as you should head just a little further along the road to find the area's <a class="wiki_link" title="Elden Ring Map (Caelid)" href="/Map+(Caelid)" target="">Map&nbsp; </a>and a convenient Site of Grace. There's also a merchant here that sells Stonesword Key and <a class="wiki_link" title="Elden Ring Nomadic Warrior's Cookbook (15)" href="/Nomadic+Warrior's+Cookbook+(15)" target="">Nomadic Warrior's Cookbook (15)</a>. You are now at the Southern Aonia Swampbank site of grace, and visiting this location at night will let you challenge the <a class="wiki_link" title="Elden Ring Night's Cavalry" href="/Night's+Cavalry" target="">Night's Cavalry</a> of the area and obtain his drop: <a class="wiki_link" title="Elden Ring Ash of War: Poison Moth Flight" href="/Ash+of+War:+Poison+Moth+Flight" target="">Ash of War: Poison Moth Flight</a>. Slightly east from here, a <a class="wiki_link" title="Elden Ring Deathbird" href="/Deathbird" target="">Deathbird</a> also spawns at night, and drops the&nbsp;<a class="wiki_link" title="Elden Ring Death's Poker" href="/Death's+Poker" target="">Death's Poker</a> greatsword.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/map_caelid_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Map+(Caelid)',
    },
  ],
  [
    'unlock-zone-merchants',
    {
      title: 'Unlock Zone Merchants',
      longDesc: `<p>Explore the road South from the fork by the merchant and loot a <a class="wiki_link" title="Elden Ring Golden Seed" href="/Golden+Seed" target="">Golden Seed</a>, then go westward to find the <a class="wiki_link" title="Elden Ring Cathedral of Dragon Communion" href="/Cathedral+of+Dragon+Communion" target="">Cathedral of Dragon Communion</a>, that allows you to buy special Dragon Incantations based on the dragons that you have defeated. Loot the&nbsp;<a class="wiki_link" title="Elden Ring Ancient Dragon Apostle's Cookbook (3)" href="/Ancient+Dragon+Apostle's+Cookbook+(3)" target="">Ancient Dragon Apostle's Cookbook (3)</a> before exploring nearby to find the <a class="wiki_link" title="Elden Ring Caelid Catacombs" href="/Caelid+Catacombs">Caelid Catacombs</a>&nbsp;directly east. There's an illusory wall within the catacombs that hides <a class="wiki_link" title="Elden Ring Miranda Ashes" href="/Miranda+Ashes" target="">Miranda Ashes</a>, and the <a class="wiki_link" title="Elden Ring Kindred of Rot" href="/Kindred+of+Rot" target="">Kindred of Rot</a> ashes can also be obtained within alongside upgrade materials. There's a teardrop scarab east from the catacombs to get a Somber Smithing Stone (3).</p> <p>You can now opt to follow the road south and east to visit and complete Redmane Castle, or go north toward the swamp and explore Sellia.</p>`,
      image: '',
      link: '',
    },
  ],
  [
    'defeat-dragon-deathbird',
    {
      title: "Defeat Dragon, Deathbird & Night's Cavalry",
      longDesc: `<li>Defeat Dragon, <a class="wiki_link" title="Elden Ring Deathbird" href="/Deathbird" target="">Deathbird</a> &amp; <a class="wiki_link" title="Elden Ring Night's Cavalry" href="/Night's+Cavalry" target="">Night's Cavalry</a></li>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/deathbird_elden_ring_wiki_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Deathbird',
    },
  ],
  [
    'loot-sellia-crystal',
    {
      title: 'Loot Sellia Crystal Tunnels',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/sellia_crystal_tunnel_map_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Sellia+Crystal+Tunnel',
    },
  ],
  [
    'meet-gowry-millicent',
    {
      title: 'Meet Gowry and Millicent',
      longDesc: `<p>To the east of the Swamp is <a class="wiki_link" title="Elden Ring Sellia, Town of Sorcery" href="/Sellia,+Town+of+Sorcery" target="">Sellia, Town of Sorcery</a>. This is an important location with many items to pick up. Notably, you will meet <a class="wiki_link" title="Elden Ring Gowry" href="/Gowry" target="">Gowry</a> at his shack just north of Sellia Gateway, who will task you with defeating&nbsp;<a class="wiki_link" title="Elden Ring Commander O'Neil" href="/Commander+O'Neil" target="">Commander O'Neil</a> in the swamp to obtain the <a class="wiki_link" title="Elden Ring Unalloyed Gold Needle" href="/Unalloyed+Gold+Needle" target="">Unalloyed Gold Needle</a>. Commander O'Neil can be found in a large clearing within Aeonia Swamp in eastern Caelid. Players can easily reach his arena by traveling southwest from <a class="wiki_link" title="Elden Ring Sellia, Town of Sorcery" href="/Sellia,+Town+of+Sorcery">Sellia, Town of Sorcery</a>&nbsp;(a further up north), looking for a large group of trees in a circular formation and jumping over the mutated growths with Torrent.</p> <p>After you defeat Commander O'Neil, return the Gold Needle to Gowry. Before we enter <a class="wiki_link" title="Elden Ring Sellia, Town of Sorcery" href="/Sellia,+Town+of+Sorcery">Sellia, Town of Sorcery</a>, we should visit <a class="wiki_link" title="Elden Ring Church of the Plague" href="/Church+of+the+Plague">Church of the Plague</a>&nbsp;to meet <a class="wiki_link" title="Elden Ring Millicent" href="/Millicent" target="">Millicent</a>. Players can reach this location by getting up the cliffs east of Gowry's Shack from the south or from the backstreets of Sellia, Town of Sorcery. Talk to <a class="wiki_link" title="Elden Ring Millicent" href="/Millicent">Millicent</a>&nbsp;and follow the steps outlined in her questline to obtain&nbsp;<a class="wiki_link" title="Elden Ring Prosthesis-Wearer Heirloom" href="/Prosthesis-Wearer+Heirloom" target="">Prosthesis-Wearer Heirloom</a>. Don't forget to exhaust her dialogue to move her to <a class="wiki_link" title="Elden Ring Altus Plateau" href="/Altus+Plateau" target="">Altus Plateau</a>. Make sure to loot the <a class="wiki_link" title="Elden Ring Sacred Tear" href="/Sacred+Tear" target="">Sacred Tear</a> in the area, then head into Sellia proper.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/gowry-location-npc-elden-ring-wiki-300px-min-min.jpeg',
      link: 'https://eldenring.wiki.fextralife.com/Gowry',
    },
  ],
  [
    'complete-sellia-tower-sorcery',
    {
      title: 'Complete Sellia, Town of Sorcery',
      longDesc: `<p>Read the <a class="wiki_link" title="Elden Ring Sellia, Town of Sorcery" href="/Sellia,+Town+of+Sorcery" target="">Sellia, Town of Sorcery</a> page for a proper walkthrough of the area. There is useful loot in there but of particular note is a <a class="wiki_link" title="Elden Ring Golden Seed" href="/Golden+Seed" target="">Golden Seed</a> and Imbued Sword Key.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/sellia-town-of-sorcery-location-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Sellia,+Town+of+Sorcery',
    },
  ],
  [
    'complete-redmane-castle',
    {
      title: 'Complete Redmane Castle',
      longDesc: `<p>It is now time to take on Redmane Castle. See the <a class="wiki_link" title="Elden Ring Redmane Castle" href="/Redmane+Castle" target="">Redmane Castle</a> page for information on how to navigate and loot it, and challenge&nbsp;<a class="wiki_link" title="Elden Ring Starscourge Radahn" href="/Starscourge+Radahn" target="">Starscourge Radahn</a> to progress the game.&nbsp;<br>(Note: After defeating the duo bosses at Redmane Castle, if the Old Geezer has a dialogue loop where&nbsp;he mentions that he "no use for you yet", assuming you've accepted <a class="wiki_link" title="Elden Ring Ranni the Witch" href="/Ranni+the+Witch">Ranni</a>'s quest earlier in the walkthrough,&nbsp;go speak to <a class="wiki_link" title="Elden Ring War Counselor Iji" href="/War+Counselor+Iji">Iji</a> at the&nbsp;<a class="wiki_link" title="Elden Ring Interactive Map?id=1507&amp;lat=-114.875&amp;lng=52.924561&amp;zoom=8&amp;code=mapA" href="/Interactive+Map?id=1507&amp;lat=-114.875&amp;lng=52.924561&amp;zoom=8&amp;code=mapA">Road To The Manor grace</a>, nearby <a class="wiki_link" title="Elden Ring Caria Manor" href="/Caria+Manor">Caria Manor</a>.&nbsp;He should talk about the Festival. Exhaust his dialogue, and fast travel back to <a class="wiki_link" title="Elden Ring Interactive Map?id=4543&amp;lat=-193.703&amp;lng=159.141&amp;zoom=8&amp;code=mapA" href="/Interactive+Map?id=4543&amp;lat=-193.703&amp;lng=159.141&amp;zoom=8&amp;code=mapA">Redmane Castle Plaza grace</a>, where all the NPCs now should have gathered at the Plaza. Now you can challenge Starscourge Radahn. Good luck!)</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/redmane-castle-location-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Redmane+Castle',
    },
  ],
  [
    'defeat-starscourge-radahn',
    {
      title: 'Defeat Starscourge Radahn',
      longDesc: `<p>It is now time to take on Redmane Castle. See the <a class="wiki_link" title="Elden Ring Redmane Castle" href="/Redmane+Castle" target="">Redmane Castle</a> page for information on how to navigate and loot it, and challenge&nbsp;<a class="wiki_link" title="Elden Ring Starscourge Radahn" href="/Starscourge+Radahn" target="">Starscourge Radahn</a> to progress the game.&nbsp;<br>(Note: After defeating the duo bosses at Redmane Castle, if the Old Geezer has a dialogue loop where&nbsp;he mentions that he "no use for you yet", assuming you've accepted <a class="wiki_link" title="Elden Ring Ranni the Witch" href="/Ranni+the+Witch">Ranni</a>'s quest earlier in the walkthrough,&nbsp;go speak to <a class="wiki_link" title="Elden Ring War Counselor Iji" href="/War+Counselor+Iji">Iji</a> at the&nbsp;<a class="wiki_link" title="Elden Ring Interactive Map?id=1507&amp;lat=-114.875&amp;lng=52.924561&amp;zoom=8&amp;code=mapA" href="/Interactive+Map?id=1507&amp;lat=-114.875&amp;lng=52.924561&amp;zoom=8&amp;code=mapA">Road To The Manor grace</a>, nearby <a class="wiki_link" title="Elden Ring Caria Manor" href="/Caria+Manor">Caria Manor</a>.&nbsp;He should talk about the Festival. Exhaust his dialogue, and fast travel back to <a class="wiki_link" title="Elden Ring Interactive Map?id=4543&amp;lat=-193.703&amp;lng=159.141&amp;zoom=8&amp;code=mapA" href="/Interactive+Map?id=4543&amp;lat=-193.703&amp;lng=159.141&amp;zoom=8&amp;code=mapA">Redmane Castle Plaza grace</a>, where all the NPCs now should have gathered at the Plaza. Now you can challenge Starscourge Radahn. Good luck!)</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/starscourge_radahn_bosses_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Starscourge+Radahn',
    },
  ],
  [
    'complete-war-dead-catacombs',
    {
      title: 'Complete War-Dead Catacombs',
      longDesc: `<p>After you defeat him, you can talk to <a class="wiki_link" title="Elden Ring Iron Fist Alexander" href="/Iron+Fist+Alexander" target="">Iron Fist Alexander</a> near the site of grace, and explore the <a class="wiki_link" title="Elden Ring War-Dead Catacombs" href="/War-Dead+Catacombs" target="">War-Dead Catacombs</a> to the north of the arena (you may want to leave them for later as they are quite challenging maybe level 80+).</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/war-dead-catacombs-location-elden-ring-wiki-guide.jpg',
      link: 'https://eldenring.wiki.fextralife.com/War-Dead+Catacombs',
    },
  ],
  [
    'head-to-altus-plateau',
    {
      title: 'Head to Altus Plateau',
      link: 'https://eldenring.wiki.fextralife.com/Altus+Plateau',
    },
  ],
  [
    'access-nokron-from-mistwood',
    {
      title: 'Access Nokron from Mistwood',
      longDesc: `<p><a class="wiki_link" title="Elden Ring Interactive Map?id=1545&amp;lat=-185.742187&amp;lng=121.299656&amp;zoom=5&amp;code=mapB" href="/Interactive+Map?id=1545&amp;lat=-185.742187&amp;lng=121.299656&amp;zoom=5&amp;code=mapB">Elden Ring Map: Nokron Starting Point</a>. With <a class="wiki_link" title="Elden Ring Starscourge Radahn" href="/Starscourge+Radahn">Starscourge Radahn</a>&nbsp;defeated, a new region underground is now accessible. Head back to <a class="wiki_link" title="Elden Ring Mistwood" href="/Mistwood">Mistwood</a> via the Mistwood Outskirts Site of Grace (or any you have in the area) and make your way south&nbsp;until&nbsp;you find a huge crater in the&nbsp;area west of <a class="wiki_link" title="Elden Ring Fort Haight" href="/Fort+Haight">Fort Haight</a>. Descend down the crater using platforms found in its the eastern side and eventually you'll arrive at <a class="wiki_link" title="Elden Ring Nokron, Eternal City" href="/Nokron,+Eternal+City">Nokron, Eternal City</a>. On the way, make sure to keep an eye out for corpses that have a <a class="wiki_link" title="Elden Ring Golden Rune (5)" href="/Golden+Rune+(5)">Golden Rune [5]</a> and two <a class="wiki_link" title="Elden Ring Soporific Grease" href="/Soporific+Grease">Soporific Grease</a> on them.</p> <p>At this point you're just in the outskirts of Nokron. This Eternal City shares a map fragment with <a class="wiki_link" title="Elden Ring Siofra River" href="/Siofra+River">Siofra River</a>, so navigating this area may get confusing; even opening your map&nbsp;right now shows you're outside of the map. From here though, getting to the main part of the city is pretty straightforward - head northeast to a toppled over building, noting&nbsp;a <a class="wiki_link" title="Elden Ring Rune Arc" href="/Rune+Arc">Rune Arc</a> can be found on a corpse laying up on a roof of&nbsp;a building in the south. Head north scaling up the building, and go through&nbsp;one of the windows on the side of the standing building that opens into a cavern. Before dropping down to where the <a class="wiki_link" title="Elden Ring Fallen Hawks Soldier" href="/Fallen+Hawks+Soldier">Fallen Hawks Soldiers</a>&nbsp;are, make sure to loot the corpses on this ledge for a <a class="wiki_link" title="Elden Ring Furlcalling Finger Remedy" href="/Furlcalling+Finger+Remedy">Furlcalling Finger Remedy</a> and a <a class="wiki_link" title="Elden Ring Smithing Stone (5)" href="/Smithing+Stone+(5)">Smithing Stone [5]</a>. After clearing out the enemies and collecting the <a class="wiki_link" title="Elden Ring Ghost Glovewort (3)" href="/Ghost+Glovewort+(3)">Ghost Glovewort [3]</a>, head through the doorway to the north to interact with the Nokron, Eternal City Site of Grace and you will now emerge into the heart of the city.</p>`,
      image: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nokron.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Nokron,+Eternal+City',
    },
  ],
  [
    'loot-ghost-glovewort-picker-bell-1',
    {
      title: "Loot Ghost-Glovewort Picker's Bell Bearing (1)",
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ghost-glovewort-pickers-bell-bearing-1-key-items-description.png',
      link: "https://eldenring.wiki.fextralife.com/Ghost-Glovewort+Picker's+Bell+Bearing+(1)",
    },
  ],
  [
    'obtain-larval-tears-2',
    {
      title: 'Obtain Larval Tears',
      longDesc: `<p>Right ahead, lying on the steps of a gazebo is a corpse that has the <a class="wiki_link" title="Elden Ring Ghost-Glovewort Picker's Bell Bearing (1)" href="/Ghost-Glovewort+Picker's+Bell+Bearing+(1)">Ghost-Glovewort Picker's Bell Bearing [1]</a> on them. There are corpses strewn around that have various levels of Smithing Stones and Somber Smithing Stones on them, as well as Ghost Gloveworts that you can collect. If you head east, next to the stairs going down, you'll find a small graveyard where you can collect the <a class="wiki_link" title="Elden Ring Greatshield Soldier Ashes" href="/Greatshield+Soldier+Ashes">Greatshield Soldier Ashes</a>, and two <a class="wiki_link" title="Elden Ring Ghost Glovewort (3)" href="/Ghost+Glovewort+(3)">Ghost Glovewort [3]</a>. In the building opposite to this graveyard, you'll find a corpse inside with a <a class="wiki_link" title="Elden Ring Larval Tear" href="/Larval+Tear">Larval Tear</a> guarded by two Fallen Hawks Soldiers.</p> <p>When you're done collecting items in this area, descend down the stairs going eastward and turn right at the corner. You'll be able to see a fog door in the distance. Head towards it, looting the corpses on the way for another <a class="wiki_link" title="Elden Ring Larval Tear" href="/Larval+Tear">Larval Tear</a>, a <a class="wiki_link" title="Elden Ring Ghost Glovewort (3)" href="/Ghost+Glovewort+(3)">Ghost Glovewort [3]</a>, and a <a class="wiki_link" title="Elden Ring Golden Rune (7)" href="/Golden+Rune+(7)">Golden Rune [7]</a>. At the bottom of the crumbling steps turn around for a Rune Arc on a dead body.&nbsp; When you're ready to face the boss, transverse through the mist.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ghost-glovewort-pickers-bell-bearing-1-key-items-description.png',
      link: "https://eldenring.wiki.fextralife.com/Ghost-Glovewort+Picker's+Bell+Bearing+(1)",
    },
  ],
  [
    'defeat-mimic-tear',
    {
      title: 'Defeat Mimic Tear',
      longDesc: `<p>You'll find yourself in a large temple ruin with no boss to be seen. Approach the center of the arena and the slime puddle will reveal itself to be the <a class="wiki_link" title="Elden Ring Mimic Tear" href="/Mimic+Tear">Mimic Tear</a>, transforming into your character. Defeat it for the <a class="wiki_link" title="Elden Ring Silver Tear Mask" href="/Silver+Tear+Mask">Silver Tear Mask</a>, two <a class="wiki_link" title="Elden Ring Larval Tear" href="/Larval+Tear">Larval Tears</a>, and to be able to progress further into <a class="wiki_link" title="Elden Ring Nokron, Eternal City" href="/Nokron,+Eternal+City">Nokron, Eternal City</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/mimic-tear-boss-enemies-elden-ring-wiki-guide-300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Mimic+Tear',
    },
  ],
  [
    'get-to-nights-sacred-ground',
    {
      title: "Get to Night's Sacred Ground",
      longDesc: `<p>Upon exiting the arena, cross the bridge and as soon as it's safe to, turn left and get off the bridge. Walk westwards until you reach the Ancestral Woods Site of Grace. Facing south-west, jump down to the roof of the building. Don't worry about collecting items in the north-east yet, we'll be back here later. Jump down to the next building's ledge and turn right, then jump down to the corpse hanging over the banister. You've reached <a class="wiki_link" title="Elden Ring Night's Sacred Ground" href="/Night's+Sacred+Ground">Night's Sacred Ground</a>, but the safe way down might not be too obvious yet. Continue following the edge of this building and you'll find another <a class="wiki_link" title="Elden Ring Rune Arc" href="/Rune+Arc">Rune Arc</a> on a corpse at the top of the large stairs to your right. Turn back around and jump down to the next building where there's two <a class="wiki_link" title="Elden Ring Silver Tear" href="/Silver+Tear">Silver Tears</a> hanging out. Head east after defeating them, following the building's edge, then walk across the wall ruin&nbsp;to reach the open windows on the other side.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nights-sacred-ground-locations-elden-ring-wiki-guide-300px.jpg',
      link: "https://eldenring.wiki.fextralife.com/Night's+Sacred+Ground",
    },
  ],
  [
    'loot-black-whetblade-celestial-dew',
    {
      title: 'Loot Black Whetblade, Celestial Dew',
      longDesc: `<p>After you've rested, continue northeast up the road, defeating enemies and pillaging corpses for loot, including a <a class="wiki_link" title="Elden Ring Celestial Dew" href="/Celestial+Dew">Celestial Dew</a>, along the way. It should be noted that the <a class="wiki_link" title="Elden Ring Silver Tear" href="/Silver+Tear">Silver Tear</a> right at the base of the stairs transforms into a <a class="wiki_link" title="Elden Ring Troll" href="/Troll">Troll</a>. At the top of the stairs and underneath the massive skeleton on it's throne, you'll find a chest containing the Hidden Treasure of Nokron, the <a class="wiki_link" title="Elden Ring Fingerslayer Blade" href="/Fingerslayer+Blade">Fingerslayer Blade</a>, as well as a <a class="wiki_link" title="Elden Ring Great Ghost Glovewort" href="/Great+Ghost+Glovewort">Great Ghost Glovewort</a>. The waygate next to this giant statue will take you back up to the Ancestral Woods Site of Grace.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/black_whetblade_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Black+Whetblade',
    },
  ],
  [
    'obtain-fingerslayer-blade',
    {
      title: 'Obtain Fingerslayer Blade',
      longDesc: `<p>Feel free to explore this hilly part of Nokron and it's ruins to collect valuable items such as a <a class="wiki_link" title="Elden Ring Clarifying Horn Charm" href="/Clarifying+Horn+Charm">Clarifying Horn Charm</a> (+1), <a class="wiki_link" title="Elden Ring Mottled Necklace" href="/Mottled+Necklace">Mottled Necklace</a> (+1),&nbsp;<a class="wiki_link" title="Elden Ring Celestial Dew" href="/Celestial+Dew">Celestial Dew</a>, and the <a class="wiki_link" title="Elden Ring Ash of War: Enchanted Shot" href="/Ash+of+War:+Enchanted+Shot">Ash of War: Enchanted Shot</a>. While you explore, you may have noticed that there's another <a class="wiki_link" title="Elden Ring Hallowhorn Grounds" href="/Hallowhorn+Grounds">Hallowhorn Grounds</a>&nbsp;here with unlit obelisks, like that in <a class="wiki_link" title="Elden Ring Siofra River" href="/Siofra+River">Siofra River</a>. The altars you need to activate can be found in the following places:</p> <ul> 
      <li>First Pillar is by the cliff's edge, next to the broken bridge you took to get here. [<a class="wiki_link" title="Elden Ring Interactive Map?id=3853&amp;lat=-179.625&amp;lng=132.781009&amp;zoom=8&amp;code=mapB" href="/Interactive+Map?id=3853&amp;lat=-179.625&amp;lng=132.781009&amp;zoom=8&amp;code=mapB">Map Link</a>]</li> 
      <li>Second Pillar is by the side of the brick road. [<a class="wiki_link" title="Elden Ring Interactive Map?id=3852&amp;lat=-180.359375&amp;lng=131.067153&amp;zoom=8&amp;code=mapB" href="/Interactive+Map?id=3852&amp;lat=-180.359375&amp;lng=131.067153&amp;zoom=8&amp;code=mapB">Map Link</a>]</li> 
      <li>Third Pillar is up on the ledge next to the brick road with an <a class="wiki_link" title="Elden Ring Ancestral Follower" href="/Ancestral+Follower">Ancestral Follower</a> singing by it. [<a class="wiki_link" title="Elden Ring Interactive Map?id=3858&amp;lat=-178.9375&amp;lng=129.445743&amp;zoom=8&amp;code=mapB" href="/Interactive+Map?id=3858&amp;lat=-178.9375&amp;lng=129.445743&amp;zoom=8&amp;code=mapB">Map Link</a>]</li> 
      <li>Fouth Pillar is found by a large rock. [<a class="wiki_link" title="Elden Ring Interactive Map?id=3857&amp;lat=-177.523437&amp;lng=127.398852&amp;zoom=8&amp;code=mapB" href="/Interactive+Map?id=3857&amp;lat=-177.523437&amp;lng=127.398852&amp;zoom=8&amp;code=mapB">Map Link</a>]</li> 
      <li>Fifth Pillar is by the cliff's edge, next to a submerged ruins and guarded by some <a class="wiki_link" title="Elden Ring Giant Rat" href="/Giant+Rat">Giant Rats</a>&nbsp;and chanting Ancestral Followers. [<a class="wiki_link" title="Elden Ring Interactive Map?id=3856&amp;lat=-174.132812&amp;lng=127.906287&amp;zoom=8&amp;code=mapB" href="/Interactive+Map?id=3856&amp;lat=-174.132812&amp;lng=127.906287&amp;zoom=8&amp;code=mapB">Map Link</a>]</li> 
      <li>Sixth Pillar is behind a deer carcass in a ruin&nbsp;right beside the Hallowhorn Grounds. [<a class="wiki_link" title="Elden Ring Interactive Map?id=3855&amp;lat=-176.625&amp;lng=130.524048&amp;zoom=8&amp;code=mapB" href="/Interactive+Map?id=3855&amp;lat=-176.625&amp;lng=130.524048&amp;zoom=8&amp;code=mapB">Map Link</a>]</li> 
     </ul>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/fingerslayer_blade_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Fingerslayer+Blade',
    },
  ],
  [
    'collect-ancestral-infant-head',
    {
      title: "Collect Ancestral Infant's Head",
      longDesc: `<p>When you get to the Fifth Pillar, it may be worth taking a detour to the submerged ruins down in the water. You'll find a <a class="wiki_link" title="Elden Ring Ghost Glovewort (5)" href="/Ghost+Glovewort+(5)">Ghost Glovewort (5)</a>, and the <a class="wiki_link" title="Elden Ring Ancestral Infant's Head" href="/Ancestral+Infant's+Head">Ancestral Infant's Head</a> in a chest at the far end of the ruins. Once all six&nbsp;altars are lit, head back to <a class="wiki_link" title="Elden Ring Hallowhorn Grounds" href="/Hallowhorn+Grounds">Hallowhorn Grounds</a> to challenge the <a class="wiki_link" title="Elden Ring Regal Ancestor Spirit" href="/Regal+Ancestor+Spirit">Regal Ancestor Spirit</a> and obtain the <a class="wiki_link" title="Elden Ring Remembrance of the Regal Ancestor" href="/Remembrance+of+the+Regal+Ancestor">Remembrance of the Regal Ancestor</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ancestral_infants_head_elden_ring_wiki_guide_200px.png',
      link: "https://eldenring.wiki.fextralife.com/Ancestral+Infant's+Head",
    },
  ],
  [
    'defeat-regal-ancestor-sprit',
    {
      title: 'Defeat Regal Ancestor Spirit',
      longDesc: `<p>When you get to the Fifth Pillar, it may be worth taking a detour to the submerged ruins down in the water. You'll find a <a class="wiki_link" title="Elden Ring Ghost Glovewort (5)" href="/Ghost+Glovewort+(5)">Ghost Glovewort (5)</a>, and the <a class="wiki_link" title="Elden Ring Ancestral Infant's Head" href="/Ancestral+Infant's+Head">Ancestral Infant's Head</a> in a chest at the far end of the ruins. Once all six&nbsp;altars are lit, head back to <a class="wiki_link" title="Elden Ring Hallowhorn Grounds" href="/Hallowhorn+Grounds">Hallowhorn Grounds</a> to challenge the <a class="wiki_link" title="Elden Ring Regal Ancestor Spirit" href="/Regal+Ancestor+Spirit">Regal Ancestor Spirit</a> and obtain the <a class="wiki_link" title="Elden Ring Remembrance of the Regal Ancestor" href="/Remembrance+of+the+Regal+Ancestor">Remembrance of the Regal Ancestor</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/regal-ancestor-spirit_map-bosses-enemies-elden-ring-wiki-guide-300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Regal+Ancestor+Spirit',
    },
  ],
  [
    'enter-siofra-aqueduct',
    {
      title: 'Enter Siofra Aqueduct',
      longDesc: `<p>This long structure is the <a class="wiki_link" title="Elden Ring Siofra Aqueduct" href="/Siofra+Aqueduct">Siofra Aqueduct</a>. There are some branching platforms on the outer walls of the aqueduct with valuable items&nbsp;such as the <a class="wiki_link" title="Elden Ring Order Healing" href="/Order+Healing">Order Healing</a> spell, a <a class="wiki_link" title="Elden Ring Rune Arc" href="/Rune+Arc">Rune Arc</a>, and <a class="wiki_link" title="Elden Ring Missionary's Cookbook (5)" href="/Missionary's+Cookbook+(5)">Missionary's Cookbook (5)</a>. You'll also find an NPC sitting on the outer section of the aqueduct who gives you the Inner Order <a class="wiki_link" title="Elden Ring Gestures" href="/Gestures">Gesture</a> in exchange for the <a class="wiki_link" title="Elden Ring Twinned Set" href="/Twinned+Set">Twinned Armor Set</a>.</p> <p>Navigate your way to the lowest level of the <a class="wiki_link" title="Elden Ring Siofra Aqueduct" href="/Siofra+Aqueduct">Siofra Aqueduct</a>, and exit the structure to emerge into a cavern at the base of a large waterfall. As you approach it, the <a class="wiki_link" title="Elden Ring Valiant Gargoyle" href="/Valiant+Gargoyle">Valiant Gargoyle</a> will jump down from the ceiling, and after taking him to about half health, the <a class="wiki_link" title="Elden Ring Valiant Gargoyle (Twinblade)" href="/Valiant+Gargoyle+(Twinblade)">Valiant Gargoyle (Twinblade)</a> jumps down to join him in the fight. Defeat them both and you'll be rewarded with the <a class="wiki_link" title="Elden Ring Gargoyle's Greatsword" href="/Gargoyle's+Greatsword">Gargoyle's Greatsword</a> and <a class="wiki_link" title="Elden Ring Gargoyle's Twinblade" href="/Gargoyle's+Twinblade">Gargoyle's Twinblade</a>. The Great Waterfall Basin Site of Grace will be accessible after this boss fight. Resting in the coffin north of the site of grace will deliver you to the secret area of <a class="wiki_link" title="Elden Ring Deeprooth Depths" href="/Deeprooth+Depths">Deeprooth Depths</a>, in which you can progress <a class="wiki_link" title="Elden Ring Fia" href="/Fia">Fia</a>'s quest. But first visit Ranni to obtain the <a class="wiki_link" title="Elden Ring Cursemark of Death" href="/Cursemark+of+Death" target="">Cursemark of Death</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/siofra-aquaduct.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Siofra+Aqueduct',
    },
  ],
  [
    'collect-missionary-cookbook-5',
    {
      title: "Collect Missionary's Cookbook (5)",
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/missionarys_cookbook_key_items_elden_ring_wiki_guide_200px.png',
      link: "https://eldenring.wiki.fextralife.com/Missionary's+Cookbook+(5)",
    },
  ],
  [
    'trade-twinned-set',
    {
      title: 'Trade Twinned Set for Gesture',
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/twinned-set-elden-ring-wiki-guide.png',
      link: 'https://eldenring.wiki.fextralife.com/Twinned+Set',
    },
  ],
  [
    'defeat-valiant-gargoyle',
    {
      title: 'Defeat Valiant Gargoyle & Valiant Gargoyle (Twinblade)',
      longDesc: `<p>Navigate your way to the lowest level of the <a class="wiki_link" title="Elden Ring Siofra Aqueduct" href="/Siofra+Aqueduct">Siofra Aqueduct</a>, and exit the structure to emerge into a cavern at the base of a large waterfall. As you approach it, the <a class="wiki_link" title="Elden Ring Valiant Gargoyle" href="/Valiant+Gargoyle">Valiant Gargoyle</a> will jump down from the ceiling, and after taking him to about half health, the <a class="wiki_link" title="Elden Ring Valiant Gargoyle (Twinblade)" href="/Valiant+Gargoyle+(Twinblade)">Valiant Gargoyle (Twinblade)</a> jumps down to join him in the fight. Defeat them both and you'll be rewarded with the <a class="wiki_link" title="Elden Ring Gargoyle's Greatsword" href="/Gargoyle's+Greatsword">Gargoyle's Greatsword</a> and <a class="wiki_link" title="Elden Ring Gargoyle's Twinblade" href="/Gargoyle's+Twinblade">Gargoyle's Twinblade</a>. The Great Waterfall Basin Site of Grace will be accessible after this boss fight. Resting in the coffin north of the site of grace will deliver you to the secret area of <a class="wiki_link" title="Elden Ring Deeprooth Depths" href="/Deeprooth+Depths">Deeprooth Depths</a>, in which you can progress <a class="wiki_link" title="Elden Ring Fia" href="/Fia">Fia</a>'s quest. But first visit Ranni to obtain the <a class="wiki_link" title="Elden Ring Cursemark of Death" href="/Cursemark+of+Death" target="">Cursemark of Death</a>.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/twinned-set-elden-ring-wiki-guide.png',
      link: 'https://eldenring.wiki.fextralife.com/Twinned+Set',
    },
  ],
  [
    'get-reward-from-ranni-2',
    {
      title: 'Get Reward from Ranni',
      longDesc: `<p>You're going to be finishing up the underground areas next. But before that, return to <a class="wiki_link" title="Elden Ring Ranni's Rise" href="/Ranni's+Rise">Ranni's Rise</a> to hand over the <a class="wiki_link" title="Elden Ring Fingerslayer Blade" href="/Fingerslayer+Blade">Fingerslayer Blade</a> <a class="wiki_link" title="Elden Ring Ranni the Witch" href="/Ranni+the+Witch">Ranni</a> asked you to retrieve. If you want to do <a class="wiki_link" title="Elden Ring Preceptor Seluvis" href="/Preceptor+Seluvis">Seluvis'</a> questline, hold off on doing this section until his quest is complete. You will have to do an absolution at the Church of Vows however to continue Ranni's quest after doing Seluvis's. Give the treasure of Nokron to Ranni and she'll reward you with the <a class="wiki_link" title="Elden Ring Carian Inverted Statue" href="/Carian+Inverted+Statue">Carian Inverted Statue</a>, which when reading the description tells you to head to the <a class="wiki_link" title="Elden Ring Carian Study Hall" href="/Carian+Study+Hall">Carian Study Hall</a>.&nbsp;You may recall a tall globe just by the entrance of the study hall. Interact with the pedestal just in front of it to place the Carian Inverted Statue and a cutscene will play.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/fmlgngpvcacmvf4.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Ranni+the+Witch',
    },
  ],
  [
    'carian-study-hall-hidden',
    {
      title: 'Access Carian Study Hall Hidden Area',
      longDesc: `<p>Head to the elevator shaft and enter the secret area through the small window. Right off the bat, <a class="wiki_link" title="Elden Ring Preceptor Miriam" href="/Preceptor+Miriam">Preceptor Miriam</a> will start attacking you. Fight back with ranged attacks or close the distance by turning right and heading down the side of the walls. After you've defeated her and taken her loot, you can find a <a class="wiki_link" title="Elden Ring Mask of Confidence" href="/Mask+of+Confidence">Mask of Confidence</a> on a corpse on the left side of the room, opposite to where you came down from. Continue heading down by jumping down platforms and beams until you reach a button on a platform in the middle of the room.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/8ef42fdc-7aba-4cb4-8906-15ad073dfc1f.png',
      link: 'https://eldenring.wiki.fextralife.com/Carian+Study+Hall',
    },
  ],
  [
    'obtain-cursemark-of-death',
    {
      title: 'Obtain the Cursemark of Death',
      longDesc: `<p>The platform takes you&nbsp;down to a bridge&nbsp;guarded by a large enemy. Whether you choose to defeat it or simply run away from it, crossing the bridge takes you to the <a class="wiki_link" title="Elden Ring Divine Tower of Liurnia" href="/Divine+Tower+of+Liurnia">Divine Tower of Liurnia</a>. Following the ladders and stairs up to the top will take you to a body that can be looted for a <a class="wiki_link" title="Elden Ring Stargazer Heirloom" href="/Stargazer+Heirloom">Stargazer Heirloom</a> and a <a class="wiki_link" title="Elden Ring Cursemark of Death" href="/Cursemark+of+Death">Cursemark of Death</a>, a key item for <a class="wiki_link" title="Elden Ring Fia" href="/Fia">Fia's</a> quest.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/cursemark_of_death_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Cursemark+of+Death',
    },
  ],
  [
    'help-iron-fist',
    {
      title: 'Help Iron Fist Alexander.',
      longDesc: `<p>Finishing this step in <a class="wiki_link" title="Elden Ring Ranni the Witch" href="/Ranni+the+Witch">Ranni's</a> questline unlocks other collectible items. Ranni herself disappears from her tower and speaking to <a class="wiki_link" title="Elden Ring War Counselor Iji" href="/War+Counselor+Iji">Iji</a> gives you insights on where she's gone. If you head to <a class="wiki_link" title="Elden Ring Seluvis's Rise" href="/Seluvis's+Rise">Seluvis's Rise</a>, you will find that you now have access to Seluvis' armor set, the <a class="wiki_link" title="Elden Ring Preceptor's Set" href="/Preceptor's+Set">Preceptor's Set</a>, and other items related to him, and you can find Ranni's armor set, the <a class="wiki_link" title="Elden Ring Snow Witch Set" href="/Snow+Witch+Set">Snow Witch Set</a>, in a chest up the ladder in <a class="wiki_link" title="Elden Ring Renna's Rise" href="/Renna's+Rise">Renna's Rise</a>. If you head back to <a class="wiki_link" title="Elden Ring Pidia" href="/Pidia" target="">Pidia</a> in Caria Manor, you can witness an interesting scene and pick up <a class="wiki_link" title="Elden Ring Pidia's Bell Bearing" href="/Pidia's+Bell+Bearing" target="">Pidia's Bell Bearing</a> &amp; <a class="wiki_link" title="Elden Ring Dolores the Sleeping Arrow Puppet" href="/Dolores+the+Sleeping+Arrow+Puppet" target="">Dolores the Sleeping Arrow Puppet</a>.&nbsp;</p> <p>While you are in Liurnia, make sure to explore the area in the East where you found the <a class="wiki_link" title="Elden Ring Tibia Mariner" href="/Tibia+Mariner" target="">Tibia Mariner</a> just south from the <a class="wiki_link" title="Elden Ring Carian Study Hall" href="/Carian+Study+Hall" target="">Carian Study Hall</a>&nbsp;and meet <a class="wiki_link" title="Elden Ring Iron Fist Alexander" href="/Iron+Fist+Alexander" target="">Iron Fist Alexander</a>. Use an <a class="wiki_link" title="Elden Ring Oil Pot" href="/Oil+Pot" target="">Oil Pot</a> to free him. (<a class="wiki_link" title="Elden Ring Interactive Map?id=5416&amp;lat=-147.031&amp;lng=81.906&amp;zoom=8&amp;code=mapA" href="/Interactive+Map?id=5416&amp;lat=-147.031&amp;lng=81.906&amp;zoom=8&amp;code=mapA">See it on the map</a>). From here, we will visit Deeproot Depths to advance Fia's questline.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/alexander_npc_elden_ring_wiki_guide_300px.jpg',
      link: 'https://eldenring.wiki.fextralife.com/Iron+Fist+Alexander',
    },
  ],
  [
    'defeat-tree-sentinel-duo',
    {
      title: 'Defeat Tree Sentinel duo',
      link: 'https://eldenring.wiki.fextralife.com/Tree+Sentinel',
    },
  ],
  [
    'collect-map-and-golden-seed',
    {
      title: 'Collect Map & Golden Seed',
      link: 'https://eldenring.wiki.fextralife.com/Golden+Seed',
    },
  ],
  [
    'complete-sealed-tunnel',
    {
      title: 'Complete Sealed Tunnel',
      link: 'https://eldenring.wiki.fextralife.com/Sealed+Tunnel',
    },
  ],
  [
    'collect-golden-seeds-and-fight-margit',
    {
      title: 'Collect Golden Seeds & Fight Margit',
      link: 'https://eldenring.wiki.fextralife.com/Golden+Seed',
    },
  ],
  [
    'complete-events-in-hermit-merchant-shack',
    {
      title: "Complete events in Hermit Merchant's Shack",
      link: "https://eldenring.wiki.fextralife.com/Hermit+Merchant's+Shack",
    },
  ],
  [
    'loot-flask-upgrades',
    {
      title: 'Loot Flask Upgrades',
    },
  ],
  [
    'visit-blackguard-big-boggart',
    {
      title: 'Visit Blackguard Big Boggart',
      link: 'https://eldenring.wiki.fextralife.com/Blackguard+Big+Boggart',
    },
  ],
  [
    'complete-auriza-hero',
    {
      title: "Complete Auriza Hero's Grave & Auriza Side Tomb",
      link: "https://eldenring.wiki.fextralife.com/Auriza+Hero's+Grave",
    },
  ],
  [
    'complete-legacy-dungeon',
    {
      title: 'Complete Legacy Dungeon',
      link: 'https://eldenring.wiki.fextralife.com/Leyndell+Royal+Capital+(Legacy+Dungeon)',
    },
  ],
  [
    'defeat-nights-cavalry-4',
    {
      title: "Defeat Night's Cavalry",
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/nights_cavalry_bosses_elden_ring_wiki_guide.jpg',
      link: "https://eldenring.wiki.fextralife.com/Night's+Cavalry",
    },
  ],
  [
    'collect-golden-seed',
    {
      title: 'Collect Golden Seed',
      longDesc: `<p>Once you are done with exploring those, go west and down to the canyon floor, to find Seethewater River site of grace. Begin your ride northward, a teardrop scarab nearby drops <a class="wiki_link" title="Elden Ring Ash of War: Barrage" href="/Ash+of+War:+Barrage" target="">Ash of War: Barrage</a>. Continue your way north avoiding the waves of heat until you come to a <a class="wiki_link" title="Elden Ring Golden Seed" href="/Golden+Seed" target="">Golden Seed</a>. Further ahead, you can loot 1x <a class="wiki_link" title="Elden Ring Smithing Stone (5)" href="/Smithing+Stone+(5)" target="">Smithing Stone (5)</a> before arriving to an Imp Gate defended by <a class="wiki_link" title="Elden Ring Basilisk" href="/Basilisk" target="">Basilisks</a> that needs a Stonesword Key - this is <a class="wiki_link" title="Elden Ring Seethewater Cave" href="/Seethewater+Cave" target="">Seethewater Cave</a>, and you can get the peculiar <a class="wiki_link" title="Elden Ring Mushroom Set" href="/Mushroom+Set" target="">Mushroom Set</a> and <a class="wiki_link" title="Elden Ring Kindred of Rot's Exultation" href="/Kindred+of+Rot's+Exultation" target="">Kindred of Rot's Exultation</a> talisman.</p>`,
      image:
        'https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_seed_elden_ring_wiki_guide_200px.png',
      link: 'https://eldenring.wiki.fextralife.com/Golden+Seed',
    },
  ],
  [
    'activate-grand-lift-of-rold',
    {
      title: 'Activate Grand Lift of Rold',
    },
  ],
  [
    'mountaintops-of-the-giants-01',
    {
      title: 'Obtain Area Map',
    },
  ],
  [
    'mountaintops-of-the-giants-02',
    {
      title: 'Talk to Shabriri',
      link: 'https://eldenring.wiki.fextralife.com/Shabriri',
    },
  ],
  [
    'mountaintops-of-the-giants-03',
    {
      title: 'Explore Zamor Ruins',
      link: 'https://eldenring.wiki.fextralife.com/Zamor+Ruins',
    },
  ],
  [
    'mountaintops-of-the-giants-04',
    {
      title: 'Access Ancient Snowvalley',
    },
  ],
  [
    'mountaintops-of-the-giants-05',
    {
      title: 'Obtain Golden Seed',
      link: 'https://eldenring.wiki.fextralife.com/Golden+Seed',
    },
  ],
  [
    'mountaintops-of-the-giants-06',
    {
      title: 'Complete Shack of the Lofty',
      link: 'https://eldenring.wiki.fextralife.com/Shack+of+the+Lofty',
    },
  ],
  [
    'mountaintops-of-the-giants-07',
    {
      title: 'Talk to Brother Corhyn',
      link: 'https://eldenring.wiki.fextralife.com/Brother+Corhyn',
    },
  ],
  [
    'mountaintops-of-the-giants-08',
    {
      title: 'Complete Minor Erdtree',
    },
  ],
  [
    'mountaintops-of-the-giants-09',
    {
      title: 'Unlock Heretical Rise',
      link: 'https://eldenring.wiki.fextralife.com/Heretical+Rise',
    },
  ],
  [
    'mountaintops-of-the-giants-10',
    {
      title: 'Complete Frozen Lake Objectives',
    },
  ],
  [
    'mountaintops-of-the-giants-11',
    {
      title: "Complete Guardian's Garrison",
      link: "https://eldenring.wiki.fextralife.com/Guardian's+Garrison",
    },
  ],
  [
    'mountaintops-of-the-giants-12',
    {
      title: 'Obtain second Map Fragment',
    },
  ],
  [
    'mountaintops-of-the-giants-13',
    {
      title: 'Gather Flask Upgrades',
    },
  ],
  [
    'mountaintops-of-the-giants-14',
    {
      title: 'Unlock Foot of the Forge',
    },
  ],
  [
    'mountaintops-of-the-giants-15',
    {
      title: 'Complete Castle Sol',
      link: 'https://eldenring.wiki.fextralife.com/Castle+Sol',
    },
  ],
  [
    'mountaintops-of-the-giants-16',
    {
      title: 'Defeat Fire Giant',
      link: 'https://eldenring.wiki.fextralife.com/Fire+Giant',
    },
  ],
  [
    'consecrated-snowfield-01',
    {
      title: 'Unlock Secret Path at Grand Lift of Rold',
      link: 'https://eldenring.wiki.fextralife.com/Grand+Lift+of+Rold',
    },
  ],
  [
    'consecrated-snowfield-02',
    {
      title: 'Complete Hidden Path to the Haligtree',
      link: 'https://eldenring.wiki.fextralife.com/Hidden+Path+to+the+Haligtree',
    },
  ],
  [
    'consecrated-snowfield-03',
    {
      title: 'Loot Golden Seed & Cookbook',
      link: 'https://eldenring.wiki.fextralife.com/Golden+Seed',
    },
  ],
  [
    'consecrated-snowfield-04',
    {
      title: 'Complete Consecrated Snowfield Catacombs',
      link: 'https://eldenring.wiki.fextralife.com/Consecrated+Snowfield+Catacombs',
    },
  ],
  [
    'consecrated-snowfield-05',
    {
      title: 'Complete Enemy Caravan Events',
    },
  ],
  [
    'consecrated-snowfield-06',
    {
      title: 'Complete Yelough Anix Tunnel and Ruins',
      link: 'https://eldenring.wiki.fextralife.com/Yelough+Anix+Tunnel',
    },
  ],
  [
    'consecrated-snowfield-07',
    {
      title: 'Frozen Waterfall Exploration',
    },
  ],
  [
    'consecrated-snowfield-08',
    {
      title: 'Gather Map Fragment',
    },
  ],
  [
    'consecrated-snowfield-09',
    {
      title: 'Minor Erdtree Event',
    },
  ],
  [
    'consecrated-snowfield-10',
    {
      title: 'Golden Seed & Apostate Derelict Exploration',
      link: 'https://eldenring.wiki.fextralife.com/Apostate+Derelict',
    },
  ],
  [
    'consecrated-snowfield-11',
    {
      title: 'Unlock Mohgwyn Palace',
      link: 'https://eldenring.wiki.fextralife.com/Mohgwyn+Palace',
    },
  ],
  [
    'consecrated-snowfield-12',
    {
      title: 'Complete Ordina, Liturgical Town',
      link: 'https://eldenring.wiki.fextralife.com/Ordina,+Liturgical+Town',
    },
  ],
  [
    'consecrated-snowfield-13',
    {
      title: "Unlock Miquella's Haligtree",
      link: "https://eldenring.wiki.fextralife.com/Miquella's+Haligtree",
    },
  ],
  [
    'mohgwyn-palace-01',
    {
      title:
        "Enter from Consecrated Snowfield or by using Pureblood Knight's Medal",
      link: 'https://eldenring.wiki.fextralife.com/Consecrated+Snowfield',
    },
  ],
  [
    'mohgwyn-palace-02',
    {
      title: 'Obtain Area Map',
    },
  ],
  [
    'mohgwyn-palace-03',
    {
      title: 'Loot Key Items and Upgrade Materials',
    },
  ],
  [
    'mohgwyn-palace-04',
    {
      title: 'Navigate the caves of Mohgwyn Dynasty Mausoleum',
      link: 'https://eldenring.wiki.fextralife.com/Mohgwyn+Dynasty+Mausoleum',
    },
  ],
  [
    'mohgwyn-palace-05',
    {
      title: 'Defeat Mohg, Lord of Blood',
      link: 'https://eldenring.wiki.fextralife.com/Mohg,+Lord+of+Blood',
    },
  ],
  [
    'miquellas-haligtree-01',
    {
      title: 'Navigate the Haligtree Canopy',
    },
  ],
  [
    'miquellas-haligtree-02',
    {
      title: 'Collect Key Items and Ashes',
    },
  ],
  [
    'miquellas-haligtree-03',
    {
      title: 'Make your way through Haligtree Town',
    },
  ],
  [
    'miquellas-haligtree-04',
    {
      title: 'Collect Talismans and an Ancient Dragon Smithing Stone',
      link: 'https://eldenring.wiki.fextralife.com/Ancient+Dragon+Smithing+Stone',
    },
  ],
  [
    'miquellas-haligtree-05',
    {
      title: 'Defeat Loretta, Knight of the Haligtree',
      link: 'https://eldenring.wiki.fextralife.com/Loretta,+Knight+of+the+Haligtree',
    },
  ],
  [
    'miquellas-haligtree-06',
    {
      title: 'Enter Elphael, Brace of the Haligtree',
      link: 'https://eldenring.wiki.fextralife.com/Elphael,+Brace+of+the+Haligtree',
    },
  ],
  [
    'miquellas-haligtree-07',
    {
      title: 'Navigate the Outer Wall',
    },
  ],
  [
    'miquellas-haligtree-08',
    {
      title: 'Collect Equipment and Ashes',
    },
  ],
  [
    'miquellas-haligtree-09',
    {
      title: 'Navigate the Inner Wall',
    },
  ],
  [
    'miquellas-haligtree-10',
    {
      title: 'Defeat the Lesser Ulcerated Tree Spirit',
      link: 'https://eldenring.wiki.fextralife.com/Lesser+Ulcerated+Tree+Spirit',
    },
  ],
  [
    'miquellas-haligtree-11',
    {
      title: "Complete Millicent's Quest (if you're doing it)",
      link: 'https://eldenring.wiki.fextralife.com/Millicent',
    },
  ],
  [
    'miquellas-haligtree-12',
    {
      title: 'Activate shortcut connecting bell tower and underground',
    },
  ],
  [
    'miquellas-haligtree-13',
    {
      title: 'Defeat Malenia, Blade of Miquella',
      link: 'https://eldenring.wiki.fextralife.com/Malenia,+Blade+of+Miquella',
    },
  ],
  [
    'crumbling-farum-azula-01',
    {
      title: 'Navigate Crumbling Beast Grave',
    },
  ],
  [
    'crumbling-farum-azula-02',
    {
      title: 'Obtain several Key Items and Upgrade Materials',
    },
  ],
  [
    'crumbling-farum-azula-03',
    {
      title: 'Navigate the Dragon Temple',
    },
  ],
  [
    'crumbling-farum-azula-04',
    {
      title: 'Obtain a Stonesword Key',
      link: 'https://eldenring.wiki.fextralife.com/Stonesword+Key',
    },
  ],
  [
    'crumbling-farum-azula-05',
    {
      title: 'Defeat the Godskin Duo',
      link: 'https://eldenring.wiki.fextralife.com/Godskin+Duo',
    },
  ],
  [
    'crumbling-farum-azula-06',
    {
      title: 'Explore the Dragon Temple Lift area behind the imp statue',
    },
  ],
  [
    'crumbling-farum-azula-07',
    {
      title: 'Collect a Golden Seed & other Key Items',
      link: 'https://eldenring.wiki.fextralife.com/Golden+Seed',
    },
  ],
  [
    'crumbling-farum-azula-08',
    {
      title: 'Navigate the Dragon Temple Rooftops',
    },
  ],
  [
    'crumbling-farum-azula-09',
    {
      title: 'Defeat Dragonlord Placidusax',
      link: 'https://eldenring.wiki.fextralife.com/Dragonlord+Placidusax',
    },
  ],
  [
    'crumbling-farum-azula-10',
    {
      title: "Collect the Old Lord's Talisman",
      link: "https://eldenring.wiki.fextralife.com/Old+Lord's+Talisman",
    },
  ],
  [
    'crumbling-farum-azula-11',
    {
      title: 'Defeat Beast Clergyman/Maliketh, the Black Blade',
      link: 'https://eldenring.wiki.fextralife.com/Beast+Clergyman',
    },
  ],
  [
    'leyndell-ashen-capital-01',
    {
      title: 'Explore the Subterranean Shunning-Grounds',
      link: 'https://eldenring.wiki.fextralife.com/Subterranean+Shunning-Grounds',
    },
  ],
  [
    'leyndell-ashen-capital-02',
    {
      title: 'Grab the Somber Ancient Dragon Smithing Stone',
      link: 'https://eldenring.wiki.fextralife.com/Somber+Ancient+Dragon+Smithing+Stone',
    },
  ],
  [
    'leyndell-ashen-capital-03',
    {
      title: "Complete Brother Corhyn/Goldmask's quest",
      link: 'https://eldenring.wiki.fextralife.com/Brother+Corhyn',
    },
  ],
  [
    'leyndell-ashen-capital-04',
    {
      title: 'Defeat an old ally, now boss',
    },
  ],
  [
    'leyndell-ashen-capital-05',
    {
      title: 'Defeat Godfrey, First Elden Lord/Hoarah Loux, Warrior',
      link: 'https://eldenring.wiki.fextralife.com/Godfrey,+First+Elden+Lord',
    },
  ],
  [
    'leyndell-ashen-capital-06',
    {
      title: 'Defeat Radagon of the Golden Order/Elden Beast',
      link: 'https://eldenring.wiki.fextralife.com/Radagon+of+the+Golden+Order',
    },
  ],
  [
    'subterranean-shunning-grounds-01',
    {
      title: 'Navigate the pipe room',
    },
  ],
  [
    'subterranean-shunning-grounds-02',
    {
      title: "Obtain Mohg's Shackle",
      link: "https://eldenring.wiki.fextralife.com/Mohg's+Shackle",
    },
  ],
  [
    'subterranean-shunning-grounds-03',
    {
      title: 'Navigate the Leyndell Catacombs',
      link: 'https://eldenring.wiki.fextralife.com/Leyndell+Catacombs',
    },
  ],
  [
    'subterranean-shunning-grounds-04',
    {
      title: 'Defeat Esgar, Priest of Blood',
      link: 'https://eldenring.wiki.fextralife.com/Esgar,+Priest+of+Blood',
    },
  ],
  [
    'subterranean-shunning-grounds-05',
    {
      title: 'Visit the Dung Eater in jail',
      link: 'https://eldenring.wiki.fextralife.com/Dung+Eater',
    },
  ],
  [
    'subterranean-shunning-grounds-06',
    {
      title: 'Navigate the sewer tunnels',
    },
  ],
  [
    'subterranean-shunning-grounds-07',
    {
      title: 'Defeat Mohg, the Omen',
      link: 'https://eldenring.wiki.fextralife.com/Mohg,+the+Omen',
    },
  ],
  [
    'subterranean-shunning-grounds-08',
    {
      title: "Complete Hyetta's quest",
      link: 'https://eldenring.wiki.fextralife.com/Hyetta',
    },
  ],
  [
    'endings-01',
    {
      title: "The Three Fingers' ending",
      link: 'https://eldenring.wiki.fextralife.com/Three+Fingers',
    },
  ],
  [
    'endings-02',
    {
      title: "Ranni the Witch's ending",
      link: 'https://eldenring.wiki.fextralife.com/Ranni+the+Witch',
    },
  ],
  [
    'endings-03',
    {
      title: "Fia's ending",
      link: 'https://eldenring.wiki.fextralife.com/Fia',
    },
  ],
  [
    'endings-04',
    {
      title: "Brother Corhyn/Goldmask's ending",
      link: 'https://eldenring.wiki.fextralife.com/Brother+Corhyn',
    },
  ],
  [
    'endings-05',
    {
      title: "Dung Eater's ending",
      link: 'https://eldenring.wiki.fextralife.com/Dung+Eater',
    },
  ],
  [
    'endings-06',
    {
      title: 'Default ending',
    },
  ],
]);

export default taskHash;
