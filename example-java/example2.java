public class example {
    private String name;
    private int value;

    public example(String name, int value) {
        this.name = name;
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "Example{name='" + name + "', value=" + value + "}";
    }

    public static void main(String[] args) {
        example example = new example("Sample", 42);
        System.out.println(example);
    }
}
