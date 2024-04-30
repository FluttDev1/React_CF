const products = [
    {
        id: "h6269",
        name: "Harmony Modular 3-Piece Sectional",
        description: "Low-slung sectional by Barcelona-based Mermelada Estudio is designed for lounging. Upholstered in a textured, linen-like performance fabric, the sectional's deep frame is topped with pillow-like cushions finished with a clean piping welt. Arrange and rearrange sectional pieces to fit your changing needs.",
        stock: 8,
        category: "living-room",
        image: "/img/living-room/living1.jpg",
        price: 3999
    },
    {
        id: "h2479",
        name: "Margarite White Sofa",
        description: "Perfectly proportioned in scale, quietly chic white sofa has a slim frame that cuts a confident silhouette. Quality is apparent throughout, with a kiln-dried wooden frame certified by the Forest Stewardship Council ® and thick foam-core cushions generously filled with a feather blend for exceptional comfort. The piece is upholstered in an easy-to-clean Crypton® performance fabric that feels like a plush chenille with a hint of linen, giving it a soft texture designed to withstand plenty of wear while retaining its casually elegant feel.",
        stock: 9,
        category: "living-room",
        image: "/img/living-room/living2.jpg",
        price: 2154
    },
    {
        id: "h8368",
        name: "Monti Coffee Table",
        description: "Sculptural coffee table from Caleb Zipperer updates the classic pedestal table with striking materiality and a modern biomorphic base. The organic silhouette is hand-poured and casted of matte black resin with swirls that resemble marble veining. Perfectly scaled for smaller living spaces.",
        stock: 10,
        category: "living-room",
        image: "/img/living-room/living3.jpg",
        price: 699
    },
    {
        id: "h1903",
        name: "Mid-Century Pop-Up Coffee Table",
        description: "Given a neutral driftwood finish, Keane complements any decor with clean lines and the organic beauty of natural wood. Channel detailing lends eye-catching dimension and linear interest to the coffee table's architectural lines. A generously sized open shelf provides space to stow magazines, books or trays, while four drawers punctuated by brass-finished pulls offer closed storage for remotes, coasters and other living room sundries.",
        stock: 12,
        category: "living-room",
        image: "/img/living-room/living4.jpg",
        price: 799
    },
    {
        id: "h6983",
        name: "Norre Media Console",
        description: "Our 1960s-inspired Norre Media Console recalls the timelessness of mid-century design with a tailored profile and streamlined shape that works well in any room. Offers plenty of storage space on shelves behind smoothly minimalistic doors. Crafted of solid walnut and walnut veneer, this multipurpose piece epitomizes the clean, architectural lines of modern design. Slim, conical legs taper slightly, elegantly elevating the credenza's seamless door and drawer fronts.",
        stock: 10,
        category: "living-room",
        image: "/img/living-room/living5.jpg",
        price: 859
    },
    {
        id: "h12060",
        name: "Anton Open Bookshelf",
        description: "Make the most of an open floor plan or empty wall with our Shelter bookcase. With its striking asymmetrical and architectural lines, this stunner can be viewed in all directions as a bookshelf or room divider. A black finish on the mahogany frame brings the shelving into graphic silhouette, highlighting the intriguing arrangement of open shelving and shadowbox cubbies. You'll love how Shelter's compartmentalizing shelf space organizes as it showcases prized books or decorative pieces.",
        stock: 7,
        category: "living-room",
        image: "/img/living-room/living6.jpg",
        price: 1799
    },
    {
        id: "h8811",
        name: "Hargrove Expandable Dining Table",
        description: "Simple and rustic, the Basque dining table displays the heft and character of a European farmhouse antique. Hand-planed planks of sustainably sourced solid mango wood are enhanced with peg detailing that lend unmistakable authenticity to the expert craftsmanship. Waxed to a soft sheen and finished in charcoal, the dining table showcases the wood's natural open grain and beautiful, unique knots.",
        stock: 10,
        category: "dining-room",
        image: "/img/dining-room/dining1.jpg",
        price: 1199
    },
    {
        id: "h4705",
        name: "Jax Round Dining Table",
        description: "Jax's unexpected angles put a spin on Scandinavian Modern. Made of solid ash wood and oak veneer, the round dining table showcases slender, tapered legs with turned stretchers set at opposing angles that add interest as well as legroom. Bullnose edging adds to the table's detail-rich styling. A natural almond finish lends a light look and casual feel, for a table that looks just right in a kitchen or relaxed dining room.",
        stock: 11,
        category: "dining-room",
        image: "/img/dining-room/dining2.jpg",
        price: 699
    },
    {
        id: "h11859",
        name: "Wingate Dining Chair",
        description: "Wingate's easy charm lies in its subtle design details. The slightest curve to the chair's slat back provides back support, while the sculpted seat ensures a comfortable sit. Tapered legs splay to give a sense of movement, and eased edges soften all the angles. Wirebrushing and an ebonized black finish call out the grain of this versatile hardwood dining chair.",
        stock: 14,
        category: "dining-room",
        image: "/img/dining-room/dining3.jpg",
        price: 298
    },
    {
        id: "h12159",
        name: "Hyde Dining Chair",
        description: "Made in Italy, with cutaway curves and generously cushioned seat gives you room to relax. Neatly upholstered in a softly textured ivory performance fabric, the tight seat and back cushions are supported by slim, turned legs finished in espresso brown. Suitable to a wide range of dining room decor.",
        stock: 10,
        category: "dining-room",
        image: "/img/dining-room/dining4.jpg",
        price: 349
    },
    {
        id: "h8513",
        name: "Berkshire Stacking Dining Chair",
        description: "Fewer spindles and a fresh bleached finish update the classic Windsor design with an easy air in our Juni dining chair. Channeling the casual attitude of Scandinavian farmhouse style, the ash wood chair relaxes with softened edges, tapered legs and spindles and a sculpted, linger-worthy seat. A natural choice to pair with any of our dining tables.",
        stock: 12,
        category: "dining-room",
        image: "/img/dining-room/dining5.jpg",
        price: 329
    },
    {
        id: "h9551",
        name: "Hargrove Bed",
        description: "Keane streamlines a classic modern bed in beautiful mahogany and meranti woods with a natural finish, to showcase the wood's unique variations in knots, grain, texture and color. The wood crafts an architectural yet informal frame for any style bedroom. Ivory linen upholstery cushions the headboard for bedtime lounging.",
        stock: 5,
        category: "bedroom",
        image: "/img/bedroom/bedroom1.jpg",
        price: 1899
    },
    {
        id: "h11678",
        name: "Emmett Side Storage Bed",
        description: "Our Arden bed shelters you within its luxe, fully upholstered contours. The tall headboard squares the traditional wingback silhouette with right angles, accentuating the bed's eye-catching proportions and clean lines. Topstitching lends a tailored look to the poly-linen fabric in a neutral oyster shade. Storage drawers feature side mounted ball-bearing metal drawer slides, making them easy to open and close.",
        stock: 7,
        category: "bedroom",
        image: "/img/bedroom/bedroom2.jpg",
        price: 2194
    },
    {
        id: "h4430",
        name: "Anton 6-Drawer Dresser",
        description: "Anton's clean, linear styling in FSC ®-certified reclaimed solid teak is left unfinished in its natural state to showcase the wood's unique variations in knots, grain, texture and color. The dresser's open framing gives each piece an airy, floating feel. With horizontal pulls accent six roomy drawers with gunmetal-finished brass.",
        stock: 10,
        category: "bedroom",
        image: "/img/bedroom/bedroom3.jpg",
        price: 1799
    },
    {
        id: "h4264",
        name: "Mason 2-Drawer White Nightstand",
        description: "Minimal nightstand takes a modern turn, balances clean lines with a fresh white finish while delivering plenty of room for bedroom storage. Two generously sized drawers cut a clean line with recessed drawer panels rather than traditional hardware, to provide space to stow bedside essentials. Slim plinth base keeps it sturdy and sleek.",
        stock: 6,
        category: "bedroom",
        image: "/img/bedroom/bedroom4.jpg",
        price: 399
    },
    {
        id: "h8798",
        name: "Keira Solid Wood Nightstand",
        description: "Refined and bold, Keira takes bedroom furniture beyond simple storage. Scaled to create a stately presence in the bedroom, each piece is crafted of beautiful mahogany and meranti woods with a wire-brushed, dark brown rustic finish. The wood nightstand features inset panels to draw the eye to its clean, architectural lines. Mirroring the linear look of the Keane canopy bed, the generously sized two-drawer nightstand floats a top shelf and accommodates modern living with a powerstrip inside the top drawer.",
        stock: 8,
        category: "bedroom",
        image: "/img/bedroom/bedroom5.jpg",
        price: 499
    },
    {
        id: "h12192",
        name: "Hargrove Desk",
        description: "If your home office is ready for an edit, consider the pure functionality and Nordic-inspired design of our Hargrove desk. A light rye finish updates the mid-century silhouette, showcasing the elm desk's clean lines and artisan-like woodworking. Rounded edges and subtly curved stretchers soften the linear silhouette, while the recessed apron floats a single drawer for laptops, pencils, papers and other desk essentials.",
        stock: 6,
        category: "home-office",
        image: "/img/home-office/office1.jpg",
        price: 799
    },
    {
        id: "h12356",
        name: "Parker Executive Desk",
        description: "Our Parker desk takes a home office essential to the next level in beautiful solid mahogany and mahogany veneer. A natural finish puts the focus on the wood, while channel detailing and a mix of open and closed spaces create clean, architectural lines. An expansive top floats on the frame, creating three open cubbies with a pull-out keyboard tray in the center. An asymmetrical arrangement stacks two drawers on the left and a file drawer on the right. Integrated power completes this full-service home office desk.",
        stock: 4,
        category: "home-office",
        image: "/img/home-office/office2.jpg",
        price: 1599
    },
    {
        id: "h9121",
        name: "Helvetica Leather Swivel Office Chair",
        description: "Our Helvetica office chair scores modern style points with a streamlined profile and tailored faux leather in warm brown. Handsome, channel-seamed upholstery is complemented by sleek gunmetal arms and tapered base to shape a supportive seat and give the chair its architectural flair. Designed by Daniel Stromborg of The Common Good, Graham is a classic for any home office.",
        stock: 5,
        category: "home-office",
        image: "/img/home-office/office3.jpg",
        price: 699
    },
    {
        id: "h9416",
        name: "Cooper High-Back Swivel Office Chair",
        description: "A modern mix of materials in a vintage-inspired design. The Cooper office chair flows padded cushioning from the button-tufted high back to the roll-edge seat. Boomerang-shaped side panels show off the beautiful grain of oak veneer, while brushed brass-finished tubing wraps behind the back and under the seat to create slim padded armrests. Adjusting for height and rolling about on caster wheels, the office chair makes its rounds in the home office or library.",
        stock: 6,
        category: "home-office",
        image: "/img/home-office/office4.jpg",
        price: 539
    },
    {
        id: "h12359",
        name: "Blaine Shelf Unit",
        description: "Minimalism scales for small spaces in clean, pristine white. A shorter version of our tall stairway white bookcase, five shelves ladder up in engineered wood with glossy lacquer. Slick powdercoated aluminum frame with hidden hardware accentuates spotless rise of white. Mounts sturdy to the wall.",
        stock: 8,
        category: "home-office",
        image: "/img/home-office/office5.jpg",
        price: 349
    },
    {
        id: "b3179",
        name: "Bearaby Cotton Weighted Blanket",
        description: "A trio of knitting stitches unite in a throw blanket with a wealth of texture and coziness. Durable acrylic yarn in dark grey lends warmth to autumn and winter decor, pairing effortlessly with a palette of neutrals, colorful patterns or bold blacks and whites. Evoking the cuffs of a favorite sweater, the wide-ribbed border finishes the throw with a graphic striped pattern. Drape our exclusive grey sweater-knit throw blanket over the arm of a sofa or the foot of the bed so indulgent warmth and comfort is always right at hand.",
        stock: 5,
        category: "decor-and-pillows",
        image: "/img/decor-and-pillows/decor1.jpg",
        price: 279
    },
    {
        id: "t4758",
        name: "Cotton Canvas Pillow Cover",
        description: "Pure cotton in a subtly slubbed weave covers a throw pillow in silvery grey. Bordered with overlocking stitching in contrasting black, the square pillow brings modern monochrome and a relaxed yet tailored finishing touch to the sofa, armchair or bed. The cotton merrow stitch moonbeam pillow is a Crate and Barrel exclusive. Our decorative pillows include your choice of a plush Feather or lofty down-alternative insert at no extra cost.",
        stock: 11,
        category: "decor-and-pillows",
        image: "/img/decor-and-pillows/decor2.jpg",
        price: 39
    },
    {
        id: "d17768",
        name: "Faux Potted Sparse Olive Tree",
        description: "Lush, life-like and unparalleled in quality, our olive tree brings a touch of the Mediterranean to your decor. Skillfully crafted to look just like the real thing, the seven-foot-tall botanical graces the home with the same silvery green color and graceful lance-shaped leaves of an actual olive tree. The effect is so convincing, your guests will marvel at your green thumb, yet there's no maintenance or light requirements needed. Just place the olive tree anywhere that needs a boost of (faux) greenery.",
        stock: 5,
        category: "decor-and-pillows",
        image: "/img/decor-and-pillows/decor3.jpg",
        price: 299
    },
    {
        id: "t7150",
        name: "Marina Rug",
        description: "A solid with luminous nuance, Laval lends its silky feel and plush texture to your space. Skilled artisans shave the tips off the looped yarn in certain areas to imbue the ivory rug with tonal variations and give it the look of a vintage heirloom. Made of a silk-like fiber, the rug complements your decor with its lush pile and luxe color. To keep Laval looking its best, we recommend using it in bedrooms, home offices or other low-traffic rooms.",
        stock: 9,
        category: "decor-and-pillows",
        image: "/img/decor-and-pillows/decor4.jpg",
        price: 999
    },
    {
        id: "d16064",
        name: "Asher Ceramic Objects",
        description: "Dramatic in scale, this marvel of a piece makes a substantial statement in any room. Designed by Evan Jerry of Studio ANANSI, each piece is created through a meticulous process. A single artisan skillfully sculpts the sandstone from start to finish, an endeavor that results in superior uniformity. The sandstone's veining adds depth and texture, while the matte quality of the stone accentuates the curvature of this modern yet timeless piece.",
        stock: 8,
        category: "decor-and-pillows",
        image: "/img/decor-and-pillows/decor5.jpg",
        price: 59
    },
    {
        id: "d11694",
        name: "Wire Polished Brass Metal Object",
        description: "Antique brass loops and spirals curve over each other in artful form. Sculpture adds interest and a bit of drama to the coffee table, bookshelf or mantle.",
        stock: 6,
        category: "decor-and-pillows",
        image: "/img/decor-and-pillows/decor6.jpg",
        price: 45
    },
    {
        id: "w4954",
        name: "Gull Pendant",
        description: "Our Gull pendant casts a warm glow overhead with natural linen, gleaming brass and clean lines. Light filters softly through the slub-textured conical shade and diffuser, reflecting off the burnished brass accents. Hang the large pendant light over a kitchen island, reading nook or breakfast table for cozy illumination with modern-organic style.",
        stock: 9,
        category: "lighting",
        image: "/img/lighting/lighting1.jpg",
        price: 399
    },
    {
        id: "w3683",
        name: "Sculptural Pebble Pendant",
        description: "Our Pebble pendant gleams overhead in a compelling interplay of geometric lines and clear glass. The ceiling light showcases a single bulb within an elongated cylinder of subtly bubbled clear glass. Finished in burnished brass, the steel fixture grasps the shade with an X-shaped clamp to add linear contrast. We love the way our exclusive Coquina pendant light brings modern glamour to a dining table or kitchen island.",
        stock: 14,
        category: "lighting",
        image: "/img/lighting/lighting2.jpg",
        price: 169
    },
    {
        id: "w3395",
        name: "Mid-Century Tripod Floor Lamp",
        description: "Our Hyde floor lamp's tripod base combines the industrial appeal of a professional photographer's light with sculptural lines. Geometric and contemporary, the lamp brings its simple geometry and on-trend mix of brushed brass and dark bronze to a living room or library. We love the way its open triangle of slender lines opens up a dark corner and adds vertical counterpoint to a sofa. Topped with a clean white linen drum shade, the lamp casts a soft ambient glow or a more focused pool of light for reading.",
        stock: 11,
        category: "lighting",
        image: "/img/lighting/lighting3.jpg",
        price: 299
    },
    {
        id: "w12342",
        name: "Ardsley Table Lamp",
        description: "Like a refined steel beam finished in near-black bronze, our Isla lamp graces tables with industrial beauty and architectural grace. Three gently curved panels welded together sculpt a slender pyramid topped with a contrasting bright white cotton drum shade for softly diffused light. The clips of the built-in shade frame add dainty bronze details. Designed for us by Blake Tovin of Tovin Design, our exclusive Isla triangle table lamp pairs with the matching floor lamp for a unified room.",
        stock: 12,
        category: "lighting",
        image: "/img/lighting/lighting4.jpg",
        price: 178
    },
    {
        id: "w3687",
        name: "Curvilinear Mid-Century Sconce",
        description: "Sculptural silhouette tells a tall tale with a midcentury twist. Space-saving wall sconce design hits a dramatic peak and swivels with a 360-degree shade rotation, shining light any direction you need it. Glossy brass steel illuminates industrial with matching brass interior that amplifies the glow. Suspends sturdy from warm brass walnut-finished ash wood wall plate.",
        stock: 16,
        category: "lighting",
        image: "/img/lighting/lighting5.jpg",
        price: 229
    }
]

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});

export default getProducts