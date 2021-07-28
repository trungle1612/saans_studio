# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_28_170846) do

  create_table "abouts", charset: "utf8mb4", collation: "utf8mb4_bin", force: :cascade do |t|
    t.text "content", size: :medium, null: false
    t.text "address", size: :medium
    t.string "phone"
    t.string "email", null: false
    t.text "quote", size: :medium
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.text "introduce", size: :medium
    t.string "photo_file_name"
    t.string "photo_content_type"
    t.bigint "photo_file_size"
    t.datetime "photo_updated_at"
  end

  create_table "active_admin_comments", charset: "utf8mb4", collation: "utf8mb4_bin", force: :cascade do |t|
    t.string "namespace"
    t.text "body", size: :medium
    t.string "resource_type"
    t.bigint "resource_id"
    t.string "author_type"
    t.bigint "author_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id"
    t.index ["namespace"], name: "index_active_admin_comments_on_namespace"
    t.index ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id"
  end

  create_table "photos", charset: "utf8mb4", collation: "utf8mb4_bin", force: :cascade do |t|
    t.text "link", size: :medium, null: false
    t.text "caption", size: :medium, null: false
    t.boolean "visible", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "link_home"
  end

  create_table "portfolio_details", charset: "utf8mb4", collation: "utf8mb4_bin", force: :cascade do |t|
    t.text "introduce", size: :medium
    t.bigint "portfolio_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "visible", default: true
    t.string "photo_file_name"
    t.string "photo_content_type"
    t.bigint "photo_file_size"
    t.datetime "photo_updated_at"
    t.index ["portfolio_id"], name: "index_portfolio_details_on_portfolio_id"
  end

  create_table "portfolios", charset: "utf8mb4", collation: "utf8mb4_bin", force: :cascade do |t|
    t.string "name"
    t.text "introduce", size: :medium
    t.boolean "visible"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "photo_file_name"
    t.string "photo_content_type"
    t.bigint "photo_file_size"
    t.datetime "photo_updated_at"
    t.string "architect"
    t.string "location"
    t.string "lead_architects"
    t.string "area"
    t.integer "project_year"
    t.string "photographs"
    t.string "pdf_file_name"
    t.string "pdf_content_type"
    t.bigint "pdf_file_size"
    t.datetime "pdf_updated_at"
    t.string "p_type", default: "housing"
  end

  create_table "skills", charset: "latin1", force: :cascade do |t|
    t.string "name", null: false
    t.string "level", default: "0"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sliders", charset: "utf8mb4", collation: "utf8mb4_bin", force: :cascade do |t|
    t.string "caption", default: ""
    t.boolean "visible", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.bigint "image_file_size"
    t.datetime "image_updated_at"
    t.string "photo_file_name"
    t.string "photo_content_type"
    t.bigint "photo_file_size"
    t.datetime "photo_updated_at"
  end

  create_table "users", charset: "utf8mb4", collation: "utf8mb4_bin", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "admin", default: true, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "portfolio_details", "portfolios"
end
