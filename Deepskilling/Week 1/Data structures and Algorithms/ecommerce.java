public class ecommerce {

    static class Product {
        private int productId;
        private String productName;
        private String category;

        public Product(int productId, String productName, String category) {
            this.productId = productId;
            this.productName = productName;
            this.category = category;
        }

        public int getProductId() {
            return productId;
        }

        @Override
        public String toString() {
            return "Product ID: " + productId +
                   ", Name: " + productName +
                   ", Category: " + category;
        }
    }

    public static Product linearSearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.getProductId() == targetId) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (products[mid].getProductId() == targetId) {
                return products[mid];
            }

            if (products[mid].getProductId() < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mobile", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Bag", "Fashion")
        };

        int targetId = 104;

        Product linearResult = linearSearch(products, targetId);

        if (linearResult != null) {
            System.out.println("Linear Search Result:");
            System.out.println(linearResult);
        } else {
            System.out.println("Product not found using Linear Search.");
        }

        Product binaryResult = binarySearch(products, targetId);

        if (binaryResult != null) {
            System.out.println("\nBinary Search Result:");
            System.out.println(binaryResult);
        } else {
            System.out.println("Product not found using Binary Search.");
        }
    }
}
/*Linear Search:
Best Case: O(1)
Average Case: O(n)
Worst Case: O(n)
Binary Search:
Best Case: O(1)
Average Case: O(log n)
Worst Case: O(log n)*/