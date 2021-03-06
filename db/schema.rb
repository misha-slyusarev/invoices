# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170502180659) do

  create_table "additional_files", force: :cascade do |t|
    t.string   "description"
    t.integer  "invoice_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.string   "body_file_name"
    t.string   "body_content_type"
    t.integer  "body_file_size"
    t.datetime "body_updated_at"
    t.index ["invoice_id"], name: "index_additional_files_on_invoice_id"
  end

  create_table "invoices", force: :cascade do |t|
    t.datetime "created_at",                              null: false
    t.datetime "updated_at",                              null: false
    t.string   "attachment_file_name"
    t.string   "attachment_content_type"
    t.integer  "attachment_file_size"
    t.datetime "attachment_updated_at"
    t.integer  "amount_cents",            default: 0,     null: false
    t.string   "amount_currency",         default: "EUR", null: false
    t.datetime "date"
  end

  create_table "recipients", force: :cascade do |t|
    t.string   "name"
    t.string   "surname"
    t.string   "address"
    t.string   "phone"
    t.integer  "invoice_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["invoice_id"], name: "index_recipients_on_invoice_id"
  end

end
