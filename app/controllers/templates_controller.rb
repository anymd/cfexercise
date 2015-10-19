class TemplatesController < ApplicationController
  include ActionView::Helpers::AssetUrlHelper

  def index
    @message = Message.new
    @templates = [
      {:id => 1, :name => "Sentiment Analysis", :url => asset_path("use_case_senti_analysis_2x.png")},
      {:id => 2, :name => "Search Relevance Tuning", :url => asset_path("use_case_search_rel_2x.png")},
      {:id => 3, :name => "Data Categorization", :url => asset_path("use_case_data_cat_2x.png")},
      {:id => 4, :name => "Business Data Enrichment", :url => asset_path("use_case_biz_data_enrich_2x.png")},
      {:id => 5, :name => "Metadata Creation", :url => asset_path("use_case_metadata_creation_2x.png")},
      {:id => 6, :name => "Image Annotation", :url => asset_path("use_case_image_annotation_2x.png")},
      {:id => 7, :name => "Transcription", :url => asset_path("use_case_transcription_2x.png")},
      {:id => 8, :name => "Deduplication", :url => asset_path("use_case_de_duplication_2x.png")},
      {:id => 9, :name => "Content Moderation", :url => asset_path("use_case_content_moderation_2x.png")},
      {:id => 10, :name => "Start from Scratch", :url => asset_path("use_case_start_from_scratch_2x.png")}
    ]
  end

end
