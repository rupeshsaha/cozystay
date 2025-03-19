import { Listing } from "../models/listing.model.js"

export const getAllListings = async (req, res) => {
    const { listingId } = req.query
    
    try {
        let listings;
        if (listingId) {
            listings = await Listing.find({ _id: listingId });
        } else {

            listings = await Listing.find({});
        }
            
        if (listings.length === 0) {
            return res.status(404).json({ message: "No listings found" })
        }
 
        return res.status(200).json({ message: "Listings fetched successfully", listings })
 
    } catch (error) {
        console.log(`Error while fetching listings`)
        return res.status(500).json({ message: `Error while fetching listing : ${error}` })
    }
}


export const createListing = async (req, res) => {
    const { title, availableDates, requirements, address, rate } = req.body

    if (!title.trim() || !availableDates || !address) {
        return res.status(400).json({message: "All fields are required"})
    }
    
    
    try {
        const createdListing = await Listing.create({
            title,
            address,
            availableDates,
            requirements,
            rate,
            listingCreator: req.user.id
        })
    
        if (createListing.length === 0) {
            return res.status(400).json("Listing not created")
        }
    
        return res.status(201).json({message: "Listing created successfully", createdListing})
    } catch (error) {
         console.log(`Error while creating listing`);
         return res
           .status(500)
           .json({ message: `Error while creating listing : ${error}` });
    }
}

