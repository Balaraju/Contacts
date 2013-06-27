class ContactsController < ApplicationController
  # GET /contacts
  # GET /contacts.json
  def index
    #raise params.inspect
     @categories = Category.all
    @search = Contact.search do
      fulltext params[:search]
     paginate :page => 1, :per_page => 3
    end
    @contacts = @search.results
   
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @contacts }
    end
   
    #raise @categories.inspect
  end

  # GET /contacts/1
  # GET /contacts/1.json
  def show
    #raise params.inspect
    @contact = Contact.find(params[:id])

    respond_to do |format|
      #format.html # show.html.erb
      #format.json { render json: @contact }
      format.js
    end
  end

  # GET /contacts/new
  # GET /contacts/new.json
  def new
    @contact = Contact.new
    @categories = Category.all
    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @contact }
      format.js
    end
  end

  # GET /contacts/1/edit
  def edit
    @contact = Contact.find(params[:id])
    @categories = Category.all
  end

  # POST /contacts
  # POST /contacts.json
  def create
    #raise params.inspect
    params[:contact].merge!(:category_id => params[:category])
    @contact = Contact.new(params[:contact])

    respond_to do |format|
      if @contact.save
        format.html { redirect_to @contact, notice: 'Contact was successfully created.' }
        format.json { render json: @contact, status: :created, location: @contact }
      else
        format.html { render action: "new" }
        format.json { render json: @contact.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /contacts/1
  # PUT /contacts/1.json
  def update
    @contact = Contact.find(params[:id])
     params[:contact].merge!(:category_id => params[:category])
    respond_to do |format|
      if @contact.update_attributes(params[:contact])
        format.html { redirect_to @contact, notice: 'Contact was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @contact.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /contacts/1
  # DELETE /contacts/1.json
  def destroy
    @contact = Contact.find(params[:id])
    @contact.destroy

    respond_to do |format|
      format.html { redirect_to contacts_url }
      format.json { head :no_content }
    end
  end
  
  def contacts_list
    @result = []
    @contacts_list = Contact.where("first_name LIKE ?", "%#{params[:term]}%")
    @contacts_list.each do |contact|
      @result << Hash[:id => contact.id, :value => params[:term], :label => contact.first_name]
    end
    render json: @result
  end
  
end
