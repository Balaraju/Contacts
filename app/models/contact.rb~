class Contact < ActiveRecord::Base
  attr_accessible :email, :first_name, :last_name, :phone_number, :category_id
  
  belongs_to :category
  
  searchable do
    text :first_name
  end
 
  
end
