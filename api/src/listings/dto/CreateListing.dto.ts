import mongoose from 'mongoose';
export class CreateListingDto {
  _id: string;
  access: string;
  accommodates: number;
  address: {
    country: string;
    country_code: string;
    government_area: string;
    location: {
      coordinates: [number];
      is_location_exact: boolean;
    };
    market: string;
    street: string;
    suburb: string;
  };
  amenities: [string];
  availability: {
    type: {
      availability_30: number;
      availability_60: number;
      availability_90: number;
      availability_365: number;
    };
  };
  bathrooms: mongoose.Types.Decimal128;
  bed_type: string;
  bedrooms: number;
  beds: number;
  cancellation_policy: string;
  cleaning_fee: mongoose.Types.Decimal128;
  description: string;
  extra_people: mongoose.Types.Decimal128;
  first_review: Date;
  guests_included: mongoose.Types.Decimal128;
  host: {
    host_about: string;
    host_has_profile_pic: boolean;
    host_id: string;
    host_identity_verified: boolean;
    host_is_superhost: boolean;
    host_listings_count: number;
    host_location: string;
    host_name: string;
    host_neighbourhood: string;
    host_picture_url: string;
    host_response_rate: number;
    host_response_time: string;
    host_thumbnail_url: string;
    host_total_listings_count: number;
    host_url: string;
    host_verifications: [string];
  };
  house_rules: string;
  images: {
    medium_url: string;
    picture_url: string;
    thumbnail_url: string;
    xl_picture_url: string;
  };
  interaction: string;
  last_review: Date;
  last_scraped: Date;
  listing_url: string;
  maximum_nights: string;
  minimum_nights: string;
  monthly_price: { type: mongoose.Types.Decimal128; required: false };
  name: string;
  neighborhood_overview: string;
  notes: string;
  number_of_reviews: number;
  price: mongoose.Types.Decimal128;
  property_type: string;
  review_scores: {
    review_scores_accuracy: { type: number; required: false };
    review_scores_checkin: { type: number; required: false };
    review_scores_cleanliness: { type: number; required: false };
    _review_scores_communication: { type: number; required: false };
    review_scores_location: { type: number; required: false };
    review_scores_rating: { type: number; required: false };
    review_scores_value: { type: number; required: false };
  };
  reviews: [
    {
      _id: string;
      comments: string;
      date: Date;
      listing_id: string;
      reviewer_id: string;
      reviewer_name: string;
    },
  ];
  reviews_per_month: number;
  room_type: string;
  security_deposit: mongoose.Types.Decimal128;
  space: string;
  summary: string;
  transit: string;
  weekly_price: { type: mongoose.Types.Decimal128; required: false };
}
