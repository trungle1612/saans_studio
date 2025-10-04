class AddImgbbFields < ActiveRecord::Migration[6.1]
  def change
    # Add ImgBB fields to portfolios table
    # Note: photo_imgbb field already exists in schema, so we'll add the missing fields
    add_column :portfolios, :photo_origin_url, :string, comment: 'Stores data.url from ImgBB API response'
    add_column :portfolios, :photo_medium_url, :string, comment: 'Stores data.medium.url from ImgBB API response'
    add_column :portfolios, :delete_url, :string, comment: 'Stores data.delete_url from ImgBB API response'
    
    # Add ImgBB fields to portfolio_details table
    add_column :portfolio_details, :photo_origin_url, :string, comment: 'Stores data.url from ImgBB API response'
    add_column :portfolio_details, :photo_medium_url, :string, comment: 'Stores data.medium.url from ImgBB API response'
    add_column :portfolio_details, :delete_url, :string, comment: 'Stores data.delete_url from ImgBB API response'
  end
end
