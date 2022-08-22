
package net.javaguides.project.model;

import javax.persistence.*;

@Entity
@Table(name = "item")
public class Item
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;

    //@Column(name = "orderId")
    //private long orderId;
    @Column(name = "name")
    private String name;
    @Column(name = "description")
    private String description;
    @Column(name = "price")
    private String price;
    @Column(name = "imageUrl")
    private String imageUrl;


    public Item()
    {

    }

    public Item(String name, String description, String price, String imageUrl)
    {
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }



    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

}