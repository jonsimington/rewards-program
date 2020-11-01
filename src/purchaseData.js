const purchaseData = [
	{
		date: "2020-06-01",
		description: "Heavy Duty Plunger",
		total: 29.99,
		customer_id: 1
	},
	{
		date: "2020-06-01",
		description: "Wireless Headphones",
		total: 82.74,
		customer_id: 2
	},
	{
		date: "2020-06-01",
		description: "Complete Tool Box Set",
		total: 116.12,
		customer_id: 3
	},
	{
		date: "2020-06-01",
		description: "Storage Container",
		total: 36.01,
		customer_id: 4
	},
	{
		date: "2020-06-02",
		description: "Computer Mouse (wireless)",
		total: 77.76,
		customer_id: 5
	},
	{
		date: "2020-06-02",
		description: "Turbo Vacuum",
		total: 198.05,
		customer_id: 6
	},
	{
		date: "2020-06-03",
		description: "Leather Work Boots Size 10",
		total: 42,
		customer_id: 7
	},
	{
		date: "2020-06-04",
		description: "Kitchen Table",
		total: 135.79,
		customer_id: 8
	},
	{
		date: "2020-06-04",
		description: "Bar Table w/ Stools",
		total: 216.97,
		customer_id: 9
	},
	{
		date: "2020-06-04",
		description: "Cucumber",
		total: 1.07,
		customer_id: 10
	},
	{
		date: "2020-06-04",
		description: "Frozen Chicken Nuggets",
		total: 16.59,
		customer_id: 11
	},
	{
		date: "2020-06-05",
		description: "Men's Dress Shoes Size 13",
		total: 32.48,
		customer_id: 12
	},
	{
		date: "2020-06-05",
		description: "Color Care Shampoo",
		total: 13.25,
		customer_id: 13
	},
	{
		date: "2020-06-06",
		description: "Car Seat Covers",
		total: 102.65,
		customer_id: 14
	},
	{
		date: "2020-06-06",
		description: "Offbrand Tablet",
		total: 99.99,
		customer_id: 15
	},
	{
		date: "2020-06-07",
		description: "Green Grapes",
		total: 3.14,
		customer_id: 16
	},
	{
		date: "2020-06-07",
		description: "Jumbo Fish Tank",
		total: 69.21,
		customer_id: 17
	},
	{
		date: "2020-06-07",
		description: "30\" Television - Electronics",
		total: 107.23,
		customer_id: 18
	},
	{
		date: "2020-06-07",
		description: "Paint Brush",
		total: 19.98,
		customer_id: 19
	},
	{
		date: "2020-06-09",
		description: "(4) New Tire Set w/ Installation - Automotive",
		total: 302.22,
		customer_id: 20
	},
	{
		date: "2020-06-09",
		description: "Men's Hair Gel",
		total: 4.36,
		customer_id: 21
	},
	{
		date: "2020-06-09",
		description: "Mail Box Post",
		total: 114.56,
		customer_id: 22
	},
	{
		date: "2020-06-09",
		description: "George Foreman Grill",
		total: 65.41,
		customer_id: 23
	},
	{
		date: "2020-06-10",
		description: "Wood Stain",
		total: 49.87,
		customer_id: 24
	},
	{
		date: "2020-06-10",
		description: "Love Seat",
		total: 167.89,
		customer_id: 25
	},
	{
		date: "2020-06-10",
		description: "Coveralls",
		total: 78.86,
		customer_id: 26
	},
	{
		date: "2020-06-11",
		description: "Graphing Calculator",
		total: 123.45,
		customer_id: 27
	},
	{
		date: "2020-06-11",
		description: "High Power Microwave",
		total: 234.98,
		customer_id: 28
	},
	{
		date: "2020-06-11",
		description: "Digital Fan",
		total: 51.64,
		customer_id: 29
	},
	{
		date: "2020-06-11",
		description: "Ribeye Steaks",
		total: 27.96,
		customer_id: 30
	},
	{
		date: "2020-06-11",
		description: "AirPods",
		total: 325.87,
		customer_id: 13
	},
	{
		date: "2020-06-11",
		description: "Tennis Shoes",
		total: 55.87,
		customer_id: 14
	},
	{
		date: "2020-06-12",
		description: "Brita Filtered Pitched Combo",
		total: 124.56,
		customer_id: 10
	},
	{
		date: "2020-06-12",
		description: "Spearmint Gum",
		total: 1.29,
		customer_id: 7
	},
	{
		date: "2020-06-13",
		description: "Lemon Iced Tea",
		total: 4.55,
		customer_id: 6
	},
	{
		date: "2020-06-13",
		description: "Baby Chair",
		total: 63.59,
		customer_id: 7
	},
	{
		date: "2020-06-13",
		description: "Italian Cold Cut Sandwich",
		total: 6.58,
		customer_id: 6
	},
	{
		date: "2020-06-14",
		description: "Diet Pills",
		total: 87.25,
		customer_id: 13
	},
	{
		date: "2020-06-14",
		description: "Watermelon",
		total: 4.2,
		customer_id: 1
	},
	{
		date: "2020-06-14",
		description: "Corn Taco Shells",
		total: 5.98,
		customer_id: 7
	},
	{
		date: "2020-06-15",
		description: "Suitcases",
		total: 124.68,
		customer_id: 2
	},
	{
		date: "2020-06-15",
		description: "Towel Set",
		total: 59.99,
		customer_id: 8
	},
	{
		date: "2020-06-15",
		description: "Fabric",
		total: 26.74,
		customer_id: 18
	},
	{
		date: "2020-06-16",
		description: "Premium Toaster",
		total: 45.65,
		customer_id: 11
	},
	{
		date: "2020-06-17",
		description: "Decorative Pillows",
		total: 65.96,
		customer_id: 20
	},
	{
		date: "2020-06-17",
		description: "Wool Sweater",
		total: 96.36,
		customer_id: 9
	},
	{
		date: "2020-06-18",
		description: "Onion",
		total: 1.11,
		customer_id: 10
	},
	{
		date: "2020-06-19",
		description: "Justin Bieber C.D.",
		total: 33.33,
		customer_id: 4
	},
	{
		date: "2020-06-19",
		description: "Polarized Sunglasses",
		total: 52.24,
		customer_id: 6
	},
	{
		date: "2020-06-19",
		description: "Industrial Waffle Iron",
		total: 72.55,
		customer_id: 2
	},
	{
		date: "2020-06-20",
		description: "Refurbished Cell Phone",
		total: 102.95,
		customer_id: 23
	},
	{
		date: "2020-06-20",
		description: "Honey Walnut Cheerios",
		total: 7.7,
		customer_id: 11
	},
	{
		date: "2020-06-22",
		description: "Ointment",
		total: 9.04,
		customer_id: 24
	},
	{
		date: "2020-06-22",
		description: "Rubber Gloves",
		total: 9.28,
		customer_id: 1
	},
	{
		date: "2020-06-23",
		description: "Blow Dryer w/ Attachments",
		total: 55.68,
		customer_id: 12
	},
	{
		date: "2020-06-24",
		description: "Bag of Lemons",
		total: 2.45,
		customer_id: 13
	},
	{
		date: "2020-06-24",
		description: "Gatorade (Orange)",
		total: 2.69,
		customer_id: 2
	},
	{
		date: "2020-06-24",
		description: "Pepsi Cans",
		total: 9.87,
		customer_id: 14
	},
	{
		date: "2020-06-24",
		description: "Scoes",
		total: 12.56,
		customer_id: 15
	},
	{
		date: "2020-06-25",
		description: "Laundry Hamper",
		total: 36.45,
		customer_id: 16
	},
	{
		date: "2020-06-25",
		description: "Bulk Dog Food",
		total: 51.64,
		customer_id: 23
	},
	{
		date: "2020-06-26",
		description: "Strand Lights",
		total: 27.96,
		customer_id: 14
	},
	{
		date: "2020-06-26",
		description: "Air Fryer and Insta Pot Bundle",
		total: 326.17,
		customer_id: 11
	},
	{
		date: "2020-06-26",
		description: "Decorative Dove Figurine",
		total: 56.17,
		customer_id: 18
	},
	{
		date: "2020-06-26",
		description: "AC Window Unit",
		total: 124.86,
		customer_id: 25
	},
	{
		date: "2020-06-26",
		description: "Spicy Chicken Sandwich",
		total: 1.59,
		customer_id: 2
	},
	{
		date: "2020-06-27",
		description: "Fruit Smoothie",
		total: 4.85,
		customer_id: 7
	},
	{
		date: "2020-06-27",
		description: "Anti Slip Bathroom Mat",
		total: 63.89,
		customer_id: 20
	},
	{
		date: "2020-06-27",
		description: "iPhone Cable",
		total: 6.88,
		customer_id: 11
	},
	{
		date: "2020-06-27",
		description: "10 pc. Skillet Set",
		total: 87.55,
		customer_id: 6
	},
	{
		date: "2020-06-28",
		description: "Ziplock Bags",
		total: 4.5,
		customer_id: 2
	},
	{
		date: "2020-06-28",
		description: "Metal Spatula",
		total: 6.28,
		customer_id: 28
	},
	{
		date: "2020-06-28",
		description: "Outdoor Heater",
		total: 124.98,
		customer_id: 1
	},
	{
		date: "2020-06-28",
		description: "Electric Paper Towel Dispenser",
		total: 60.29,
		customer_id: 27
	},
	{
		date: "2020-06-29",
		description: "Men's Hair Dye",
		total: 27.04,
		customer_id: 26
	},
	{
		date: "2020-06-29",
		description: "Sticky Notes (Jumbo Pack)",
		total: 76.48,
		customer_id: 4
	},
	{
		date: "2020-06-29",
		description: "Exercise Bike",
		total: 196.77,
		customer_id: 25
	},
	{
		date: "2020-06-29",
		description: "Flower Bouquet",
		total: 40.72,
		customer_id: 23
	},
	{
		date: "2020-06-30",
		description: "Disney Princess Dress Up Set",
		total: 134.51,
		customer_id: 20
	},
	{
		date: "2020-06-30",
		description: "Camping Tent",
		total: 215.69,
		customer_id: 1
	},
	{
		date: "2020-07-01",
		description: "Purified Drinking Water",
		total: 1.21,
		customer_id: 3
	},
	{
		date: "2020-07-01",
		description: "Flip Flops",
		total: 15.31,
		customer_id: 23
	},
	{
		date: "2020-07-01",
		description: "Copper Skillet",
		total: 31.2,
		customer_id: 28
	},
	{
		date: "2020-07-02",
		description: "Grain Free Cat Food",
		total: 11.97,
		customer_id: 6
	},
	{
		date: "2020-07-03",
		description: "Lobster Tails",
		total: 101.37,
		customer_id: 30
	},
	{
		date: "2020-07-03",
		description: "Baby Formula 10 Pack",
		total: 98.71,
		customer_id: 2
	},
	{
		date: "2020-07-03",
		description: "Barbecue Chips",
		total: 1.86,
		customer_id: 18
	},
	{
		date: "2020-07-05",
		description: "Lawn and Leaf Bags",
		total: 67.93,
		customer_id: 29
	},
	{
		date: "2020-07-05",
		description: "Microsoft Windows Activation Key",
		total: 105.95,
		customer_id: 20
	},
	{
		date: "2020-07-05",
		description: "Watch",
		total: 18.7,
		customer_id: 5
	},
	{
		date: "2020-07-06",
		description: "Luxury Toilet",
		total: 300.94,
		customer_id: 1
	},
	{
		date: "2020-07-06",
		description: "3-Tier Birthday Cake",
		total: 59.32,
		customer_id: 17
	},
	{
		date: "2020-07-06",
		description: "Gift Card",
		total: 120,
		customer_id: 4
	},
	{
		date: "2020-07-06",
		description: "Cat Litter Box",
		total: 4.74,
		customer_id: 14
	},
	{
		date: "2020-07-07",
		description: "Dog Tee Shirt",
		total: 8,
		customer_id: 6
	},
	{
		date: "2020-07-07",
		description: "Prepay Cell Phone",
		total: 67.04,
		customer_id: 13
	},
	{
		date: "2020-07-08",
		description: "Premium Cheddar",
		total: 10.03,
		customer_id: 26
	},
	{
		date: "2020-07-08",
		description: "Flower Pots",
		total: 90.7,
		customer_id: 18
	},
	{
		date: "2020-07-08",
		description: "Kleenex",
		total: 7.65,
		customer_id: 27
	},
	{
		date: "2020-07-09",
		description: "Chirping Cat Toy",
		total: 9.43,
		customer_id: 20
	},
	{
		date: "2020-07-09",
		description: "Ice Cream Maker",
		total: 128.13,
		customer_id: 28
	},
	{
		date: "2020-07-09",
		description: "Trashcan",
		total: 63.44,
		customer_id: 29
	},
	{
		date: "2020-07-10",
		description: "Harry Potter Collection Hard Cover",
		total: 30.19,
		customer_id: 1
	},
	{
		date: "2020-07-10",
		description: "Deoderant Jumbo Pack",
		total: 49.1,
		customer_id: 2
	},
	{
		date: "2020-07-10",
		description: "Shrimp",
		total: 69.41,
		customer_id: 4
	},
	{
		date: "2020-07-11",
		description: "Large Wall Art",
		total: 99.81,
		customer_id: 6
	},
	{
		date: "2020-07-11",
		description: "Mangoes",
		total: 4.56,
		customer_id: 23
	},
	{
		date: "2020-07-11",
		description: "Trash Bags",
		total: 5.9,
		customer_id: 29
	},
	{
		date: "2020-07-12",
		description: "Dragon Fruit",
		total: 6.14,
		customer_id: 27
	},
	{
		date: "2020-07-12",
		description: "Modern Wall Art",
		total: 13.32,
		customer_id: 15
	},
	{
		date: "2020-07-13",
		description: "Decorative Tissue Box Holder",
		total: 16.01,
		customer_id: 20
	},
	{
		date: "2020-07-14",
		description: "Dumbbell Set",
		total: 128.12,
		customer_id: 6
	},
	{
		date: "2020-07-15",
		description: "Hygiene Product",
		total: 63.43,
		customer_id: 14
	},
	{
		date: "2020-07-16",
		description: "Premium Dog Food",
		total: 30.18,
		customer_id: 7
	},
	{
		date: "2020-07-17",
		description: "Expo Marker Jumbo Pack",
		total: 79.62,
		customer_id: 25
	},
	{
		date: "2020-07-17",
		description: "Physician's Desk Reference",
		total: 199.91,
		customer_id: 20
	},
	{
		date: "2020-07-17",
		description: "Electric Griddle",
		total: 43.86,
		customer_id: 26
	},
	{
		date: "2020-07-18",
		description: "Chromebook",
		total: 137.65,
		customer_id: 1
	},
	{
		date: "2020-07-18",
		description: "Chandalier",
		total: 218.83,
		customer_id: 8
	},
	{
		date: "2020-07-18",
		description: "Plastic Cutting Board",
		total: 4.35,
		customer_id: 10
	},
	{
		date: "2020-07-19",
		description: "Brim Hat",
		total: 18.45,
		customer_id: 14
	},
	{
		date: "2020-07-19",
		description: "Water Shoes",
		total: 34.34,
		customer_id: 29
	},
	{
		date: "2020-07-19",
		description: "Paper Towels",
		total: 15.11,
		customer_id: 4
	},
	{
		date: "2020-07-20",
		description: "Paper Shredder",
		total: 104.51,
		customer_id: 20
	},
	{
		date: "2020-07-20",
		description: "Scallops",
		total: 101.85,
		customer_id: 30
	},
	{
		date: "2020-07-21",
		description: "Cold Sandwich BLT",
		total: 5,
		customer_id: 6
	},
	{
		date: "2020-07-22",
		description: "Wifi Router",
		total: 71.07,
		customer_id: 28
	},
	{
		date: "2020-07-22",
		description: "Ice Maker",
		total: 109.09,
		customer_id: 13
	},
	{
		date: "2020-07-23",
		description: "Butter Pecan Ice Cream",
		total: 21.84,
		customer_id: 15
	},
	{
		date: "2020-07-24",
		description: "Luxury Fur Coat",
		total: 304.08,
		customer_id: 20
	},
	{
		date: "2020-07-24",
		description: "Exfoliating Face Cream",
		total: 62.46,
		customer_id: 15
	},
	{
		date: "2020-07-25",
		description: "Kid's Tractor",
		total: 131.15,
		customer_id: 23
	},
	{
		date: "2020-07-25",
		description: "Cat Litter  ",
		total: 7.88,
		customer_id: 1
	},
	{
		date: "2020-07-25",
		description: "Premium Ice Cream",
		total: 11.14,
		customer_id: 2
	},
	{
		date: "2020-07-25",
		description: "Saw Blades",
		total: 70.18,
		customer_id: 7
	},
	{
		date: "2020-07-26",
		description: "Makeup Wipes",
		total: 13.17,
		customer_id: 8
	},
	{
		date: "2020-07-26",
		description: "Hiking Backpack",
		total: 93.84,
		customer_id: 9
	},
	{
		date: "2020-07-27",
		description: "Margerine",
		total: 10.79,
		customer_id: 30
	},
	{
		date: "2020-07-27",
		description: "Metal Tongs",
		total: 12.57,
		customer_id: 10
	},
	{
		date: "2020-07-27",
		description: "Baby Stroller",
		total: 131.27,
		customer_id: 12
	},
	{
		date: "2020-07-29",
		description: "Personal Back Massager",
		total: 66.58,
		customer_id: 6
	},
	{
		date: "2020-07-29",
		description: "Cook Book",
		total: 33.33,
		customer_id: 13
	},
	{
		date: "2020-07-30",
		description: "Baby Bathroom Set",
		total: 52.24,
		customer_id: 8
	},
	{
		date: "2020-07-30",
		description: "Flatware Set",
		total: 72.55,
		customer_id: 15
	},
	{
		date: "2020-07-31",
		description: "Silk Skirt",
		total: 102.95,
		customer_id: 14
	},
	{
		date: "2020-07-31",
		description: "Bag of Garlic",
		total: 7.7,
		customer_id: 30
	},
	{
		date: "2020-07-31",
		description: "Hidden Valley Ranch Dressing",
		total: 9.04,
		customer_id: 1
	},
	{
		date: "2020-08-01",
		description: "Clue Board Game",
		total: 9.28,
		customer_id: 5
	},
	{
		date: "2020-08-01",
		description: "Hair Shears",
		total: 16.46,
		customer_id: 15
	},
	{
		date: "2020-08-01",
		description: "Moisturizing Lotion",
		total: 19.15,
		customer_id: 25
	},
	{
		date: "2020-08-02",
		description: "Gormet Knife Set",
		total: 33.12,
		customer_id: 30
	},
	{
		date: "2020-08-02",
		description: "Beats by Dre",
		total: 125.68,
		customer_id: 28
	},
	{
		date: "2020-08-03",
		description: "Electric Bill Pay",
		total: 89,
		customer_id: 21
	},
	{
		date: "2020-08-03",
		description: "Chocolate Pint Ice Cream",
		total: 4.16,
		customer_id: 24
	},
	{
		date: "2020-08-04",
		description: "Coffee Pot",
		total: 36.69,
		customer_id: 20
	},
	{
		date: "2020-08-04",
		description: "Desk Chair",
		total: 58.97,
		customer_id: 23
	},
	{
		date: "2020-08-05",
		description: "Car Battery",
		total: 78.98,
		customer_id: 6
	},
	{
		date: "2020-08-06",
		description: "Economy Bathroom Tissue",
		total: 1.58,
		customer_id: 14
	},
	{
		date: "2020-08-06",
		description: "Gemstone Earrings",
		total: 59.9,
		customer_id: 1
	},
	{
		date: "2020-08-06",
		description: "Mario Video Games",
		total: 128.59,
		customer_id: 5
	},
	{
		date: "2020-08-06",
		description: "Cheddar Cheese",
		total: 5.32,
		customer_id: 9
	},
	{
		date: "2020-08-07",
		description: "Red Cabbage Salad Kit",
		total: 8.58,
		customer_id: 10
	},
	{
		date: "2020-08-07",
		description: "Heavy Duty Flash Light",
		total: 67.62,
		customer_id: 21
	},
	{
		date: "2020-08-07",
		description: "Coffee Grounds",
		total: 10.61,
		customer_id: 25
	},
	{
		date: "2020-08-07",
		description: "Child Digital Toy",
		total: 91.28,
		customer_id: 29
	},
	{
		date: "2020-08-08",
		description: "Heavy Cream",
		total: 8.23,
		customer_id: 13
	},
	{
		date: "2020-08-08",
		description: "Apples",
		total: 10.01,
		customer_id: 28
	},
	{
		date: "2020-08-09",
		description: "Candle Making Kit",
		total: 128.71,
		customer_id: 14
	},
	{
		date: "2020-08-10",
		description: "Kid's Arts and Crafts",
		total: 64.02,
		customer_id: 13
	},
	{
		date: "2020-08-11",
		description: "Dinner Plate Set",
		total: 30.77,
		customer_id: 30
	},
	{
		date: "2020-08-11",
		description: "Crab Legs",
		total: 49.68,
		customer_id: 4
	},
	{
		date: "2020-08-11",
		description: "Leather Satchel",
		total: 69.99,
		customer_id: 1
	},
	{
		date: "2020-08-11",
		description: "Off Brand Tablet",
		total: 100.39,
		customer_id: 5
	},
	{
		date: "2020-08-12",
		description: "Digiorno Frozen Pepperoni Pizza",
		total: 5.14,
		customer_id: 1
	},
	{
		date: "2020-08-12",
		description: "Wine Sprintzer",
		total: 6.48,
		customer_id: 6
	},
	{
		date: "2020-08-12",
		description: "Case of Water",
		total: 6.72,
		customer_id: 20
	},
	{
		date: "2020-08-12",
		description: "Pork Sausage Bulk",
		total: 13.9,
		customer_id: 23
	},
	{
		date: "2020-08-12",
		description: "Women's Hair Accessory",
		total: 16.59,
		customer_id: 17
	},
	{
		date: "2020-08-12",
		description: "Curling Iron",
		total: 30.56,
		customer_id: 5
	},
	{
		date: "2020-08-12",
		description: "Gormet Mixing Bowl",
		total: 80.38,
		customer_id: 10
	},
	{
		date: "2020-08-13",
		description: "Car Seat Covers (leather)",
		total: 118.4,
		customer_id: 11
	},
	{
		date: "2020-08-13",
		description: "Giant Stuffed Animal",
		total: 31.15,
		customer_id: 12
	},
	{
		date: "2020-08-13",
		description: "30 Ft. Christmas Tree (Clearance)",
		total: 313.39,
		customer_id: 4
	},
	{
		date: "2020-08-13",
		description: "Wireless Router",
		total: 71.77,
		customer_id: 6
	},
	{
		date: "2020-08-14",
		description: "Cell Phone Bill",
		total: 140.46,
		customer_id: 13
	},
	{
		date: "2020-08-14",
		description: "Cleaning Products",
		total: 17.19,
		customer_id: 20
	},
	{
		date: "2020-08-15",
		description: "Blueberry Lotion",
		total: 20.45,
		customer_id: 14
	},
	{
		date: "2020-08-16",
		description: "Laptop Charger",
		total: 79.49,
		customer_id: 15
	},
	{
		date: "2020-08-16",
		description: "Scented Candles",
		total: 22.48,
		customer_id: 30
	},
	{
		date: "2020-08-16",
		description: "4TB Hard Drive",
		total: 103.15,
		customer_id: 14
	},
	{
		date: "2020-08-16",
		description: "Phone Charger",
		total: 20.1,
		customer_id: 17
	},
	{
		date: "2020-08-16",
		description: "Blanket",
		total: 21.88,
		customer_id: 13
	},
	{
		date: "2020-08-16",
		description: "Limited Edition Nail Polish Set",
		total: 140.58,
		customer_id: 4
	},
	{
		date: "2020-08-16",
		description: "Floor Lamp",
		total: 75.89,
		customer_id: 12
	},
	{
		date: "2020-08-16",
		description: "Kid's Cooking Toys",
		total: 42.64,
		customer_id: 30
	},
	{
		date: "2020-08-17",
		description: "PC Speakers",
		total: 61.55,
		customer_id: 22
	},
	{
		date: "2020-08-17",
		description: "Desk Cleaning Product",
		total: 81.86,
		customer_id: 3
	},
	{
		date: "2020-08-17",
		description: "Suitcase",
		total: 112.26,
		customer_id: 23
	},
	{
		date: "2020-08-18",
		description: "Tea Pot Set",
		total: 76,
		customer_id: 24
	},
	{
		date: "2020-08-18",
		description: "Foot Massager",
		total: 106.4,
		customer_id: 29
	},
	{
		date: "2020-08-19",
		description: "Makeup Remover",
		total: 11.15,
		customer_id: 2
	},
	{
		date: "2020-08-19",
		description: "Gel Pens",
		total: 12.49,
		customer_id: 7
	},
	{
		date: "2020-08-19",
		description: "Desk Lamp",
		total: 12.73,
		customer_id: 21
	},
	{
		date: "2020-08-21",
		description: "Rug",
		total: 19.91,
		customer_id: 20
	},
	{
		date: "2020-08-21",
		description: "Throw Blanket",
		total: 22.6,
		customer_id: 19
	},
	{
		date: "2020-08-21",
		description: "Comforter Set",
		total: 134.71,
		customer_id: 18
	},
	{
		date: "2020-08-21",
		description: "Luxury Curtains ",
		total: 70.02,
		customer_id: 16
	},
	{
		date: "2020-08-22",
		description: "Serving Platter",
		total: 36.77,
		customer_id: 17
	},
	{
		date: "2020-08-22",
		description: "Women's Suit",
		total: 86.21,
		customer_id: 14
	},
	{
		date: "2020-08-22",
		description: "Large Lamp",
		total: 206.5,
		customer_id: 6
	},
	{
		date: "2020-08-22",
		description: "Adult Swim Suit",
		total: 50.45,
		customer_id: 5
	},
	{
		date: "2020-08-22",
		description: "Pizza Oven",
		total: 144.24,
		customer_id: 18
	},
	{
		date: "2020-08-23",
		description: "Laptop",
		total: 225.42,
		customer_id: 24
	},
	{
		date: "2020-08-24",
		description: "Pink Lip Gloss",
		total: 10.94,
		customer_id: 13
	},
	{
		date: "2020-08-24",
		description: "Magnets",
		total: 25.04,
		customer_id: 15
	},
	{
		date: "2020-08-25",
		description: "Pool Lounge Chair",
		total: 40.93,
		customer_id: 5
	},
	{
		date: "2020-08-26",
		description: "Kid's Activity Set",
		total: 21.7,
		customer_id: 9
	},
	{
		date: "2020-08-26",
		description: "The Office - Complete Series DVD",
		total: 111.1,
		customer_id: 6
	},
	{
		date: "2020-08-27",
		description: "Women's Prom Dress",
		total: 108.44,
		customer_id: 1
	},
	{
		date: "2020-08-27",
		description: "Men's Tie",
		total: 11.59,
		customer_id: 23
	},
	{
		date: "2020-08-28",
		description: "Reading Glasses",
		total: 77.66,
		customer_id: 22
	},
	{
		date: "2020-08-29",
		description: "Cat Tree Perch",
		total: 115.68,
		customer_id: 6
	},
	{
		date: "2020-08-29",
		description: "Creamy Face Makeup",
		total: 28.43,
		customer_id: 29
	},
	{
		date: "2020-08-29",
		description: "Nintendo Switch",
		total: 310.67,
		customer_id: 21
	},
	{
		date: "2020-08-29",
		description: "Power Drill",
		total: 69.05,
		customer_id: 12
	},
	{
		date: "2020-08-30",
		description: "Air Fryer with Attachment",
		total: 137.74,
		customer_id: 3
	},
	{
		date: "2020-08-30",
		description: "Women's Bath Robe",
		total: 14.47,
		customer_id: 4
	},
	{
		date: "2020-08-30",
		description: "Child Jacket",
		total: 17.73,
		customer_id: 8
	},
	{
		date: "2020-08-30",
		description: "13 MP Digital Camera",
		total: 76.77,
		customer_id: 21
	},
	{
		date: "2020-08-31",
		description: "Kid's Fishing Pole",
		total: 19.76,
		customer_id: 17
	},
	{
		date: "2020-08-31",
		description: "Office Chair",
		total: 100.43,
		customer_id: 20
	},
	{
		date: "2020-08-31",
		description: "Electric Toothbrush",
		total: 17.38,
		customer_id: 6
	},
	{
		date: "2020-08-31",
		description: "10 lb. Frozen Chicken",
		total: 19.16,
		customer_id: 23
	}

];

export default purchaseData;
