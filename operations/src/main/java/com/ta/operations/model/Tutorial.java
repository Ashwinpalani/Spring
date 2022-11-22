package com.ta.operations.model;

public class Tutorial {

	  private long id;
	  private String title;
	  private String descriptions;
	  private boolean published;
	  public Tutorial() {

	  }
	  
	  public Tutorial(long id, String title, String descriptions, boolean published) {
	    this.id = id;
	    this.title = title;
	    this.descriptions = descriptions;
	    this.published = published;
	  }

	  public Tutorial(String title, String descriptions, boolean published) {
	    this.title = title;
	    this.descriptions = descriptions;
	    this.published = published;
	  }
	  
	  public void setId(long id) {
	    this.id = id;
	  }
	  
	  public long getId() {
	    return id;
	  }

	  public String getTitle() {
	    return title;
	  }

	  public void setTitle(String title) {
	    this.title = title;
	  }

	  public String getDescriptions() {
	    return descriptions;
	  }

	  public void setDescriptions(String descriptions) {
	    this.descriptions = descriptions;
	  }

	  public boolean isPublished() {
	    return published;
	  }

	  public void setPublished(boolean isPublished) {
	    this.published = isPublished;
	  }

	  @Override
	  public String toString() {
	    return "Tutorial [id=" + id + ", title=" + title + ", desc=" + descriptions + ", published=" + published + "]";
	  }

	}