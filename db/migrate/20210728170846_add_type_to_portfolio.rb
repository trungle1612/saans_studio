class AddTypeToPortfolio < ActiveRecord::Migration[6.1]
  def change
    add_column :portfolios, :p_type, :string, default: 'housing'
  end
end
