// ---- Snippet Library Data ----
// Each snippet: title, language, description, code (HTML-escaped string)
const snippets = [
    {
        title: "Sum of Two Numbers",
        language: "Java",
        description: "A simple way to get the sum of two numbers.",
        code: `public class SumOfTwoNumbers {
    public static void main(String[] args) {
        int num1 = 15, num2 = 25;
        int sum = num1 + num2;
        System.out.println("The sum of " + num1 + " and " + num2 + " is: " + sum);
    }
}`
    },
    {
        title: "Reverse a String",
        language: "C++",
        description: "A basic function to reverse a string using std::reverse.",
        code: `#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    string s = "coders hub";
    reverse(s.begin(), s.end());
    cout << s;
    return 0;
}`
    },
    {
        title: "Check Prime Number",
        language: "Java",
        description: "Checks whether a given number is prime.",
        code: `public class PrimeCheck {
    public static void main(String[] args) {
        int n = 29;
        boolean isPrime = n > 1;
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }
        System.out.println(n + " is prime: " + isPrime);
    }
}`
    },
    {
        title: "Fibonacci Sequence",
        language: "Python",
        description: "Generates the first n numbers of the Fibonacci sequence.",
        code: `def fibonacci(n):
    seq = [0, 1]
    for i in range(2, n):
        seq.append(seq[-1] + seq[-2])
    return seq[:n]

print(fibonacci(10))`
    },
    {
        title: "Debounce Function",
        language: "JavaScript",
        description: "A reusable debounce helper to limit how often a function runs.",
        code: `function debounce(fn, delay = 300) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

// usage
window.addEventListener('resize', debounce(() => {
    console.log('resized!');
}, 200));`
    },
    {
        title: "Centering a Div",
        language: "CSS",
        description: "The classic flexbox one-liner to center anything.",
        code: `.center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}`
    },
    {
        title: "Responsive Navbar Skeleton",
        language: "HTML",
        description: "A minimal semantic starting point for a responsive navbar.",
        code: `<nav class="navbar">
    <a href="#" class="logo">Brand</a>
    <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>`
    },
    {
        title: "Find Duplicate Rows",
        language: "MySQL",
        description: "Finds duplicate rows in a table based on a column.",
        code: `SELECT email, COUNT(*) as count
FROM users
GROUP BY email
HAVING COUNT(*) > 1;`
    },
    {
        title: "Binary Search",
        language: "Java",
        description: "Iterative binary search on a sorted array.",
        code: `public class BinarySearch {
    static int search(int[] arr, int target) {
        int low = 0, high = arr.length - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (arr[mid] == target) return mid;
            if (arr[mid] < target) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }
}`
    },
    {
        title: "Quick Sort",
        language: "C++",
        description: "A classic recursive quicksort implementation.",
        code: `void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pivot = arr[high], i = low - 1;
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) swap(arr[++i], arr[j]);
        }
        swap(arr[i + 1], arr[high]);
        int pi = i + 1;
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`
    },
    {
        title: "Read a CSV File",
        language: "Python",
        description: "Reads and prints rows from a CSV file using pandas.",
        code: `import pandas as pd

df = pd.read_csv("data.csv")
print(df.head())
print(df.describe())`
    },
    {
        title: "Fetch API Wrapper",
        language: "JavaScript",
        description: "A tiny wrapper around fetch with error handling.",
        code: `async function getData(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Network error: " + res.status);
        return await res.json();
    } catch (err) {
        console.error("Fetch failed:", err);
        return null;
    }
}`
    },
    {
        title: "CSS Grid Card Layout",
        language: "CSS",
        description: "A responsive auto-fit grid for card layouts.",
        code: `.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}`
    },
    {
        title: "Simple Contact Form",
        language: "HTML",
        description: "A minimal accessible contact form structure.",
        code: `<form>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>

    <label for="message">Message</label>
    <textarea id="message" name="message" rows="4" required></textarea>

    <button type="submit">Send</button>
</form>`
    },
    {
        title: "Join Two Tables",
        language: "MySQL",
        description: "An inner join example between orders and customers.",
        code: `SELECT customers.name, orders.order_date, orders.total
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id
ORDER BY orders.order_date DESC;`
    },
    {
        title: "Linked List Node",
        language: "Java",
        description: "A basic singly linked list node and insert method.",
        code: `class Node {
    int data;
    Node next;
    Node(int data) { this.data = data; }
}

class LinkedList {
    Node head;
    void insert(int data) {
        Node node = new Node(data);
        if (head == null) { head = node; return; }
        Node temp = head;
        while (temp.next != null) temp = temp.next;
        temp.next = node;
    }
}`
    },
    {
        title: "Palindrome Check",
        language: "Python",
        description: "Checks if a string reads the same forwards and backwards.",
        code: `def is_palindrome(s):
    s = s.lower().replace(" ", "")
    return s == s[::-1]

print(is_palindrome("Was it a car or a cat I saw"))`
    },
    {
        title: "LocalStorage Helper",
        language: "JavaScript",
        description: "Save and load JSON objects from localStorage safely.",
        code: `function saveData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function loadData(key, fallback = null) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch {
        return fallback;
    }
}`
    },
    {
        title: "Dark Mode Toggle",
        language: "CSS",
        description: "CSS variables setup for an easy light/dark theme switch.",
        code: `:root {
    --bg: #ffffff;
    --text: #111111;
}
[data-theme="dark"] {
    --bg: #111111;
    --text: #f0f0f0;
}
body {
    background: var(--bg);
    color: var(--text);
    transition: background 0.3s ease, color 0.3s ease;
}`
    },
    {
        title: "Semantic Article Layout",
        language: "HTML",
        description: "A semantic structure for a blog article page.",
        code: `<article>
    <header>
        <h1>Article Title</h1>
        <p>Published on <time datetime="2026-07-01">July 1, 2026</time></p>
    </header>
    <section>
        <p>Article content goes here...</p>
    </section>
    <footer>
        <p>Tags: coding, tutorial</p>
    </footer>
</article>`
    },
    {
        title: "Delete Old Records",
        language: "MySQL",
        description: "Deletes records older than a given number of days.",
        code: `DELETE FROM logs
WHERE created_at < NOW() - INTERVAL 90 DAY;`
    },
    {
        title: "Bubble Sort",
        language: "C++",
        description: "A simple, classic bubble sort implementation.",
        code: `void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}`
    },
    {
        title: "Word Frequency Counter",
        language: "Python",
        description: "Counts how often each word appears in a block of text.",
        code: `from collections import Counter

text = "the quick brown fox jumps over the lazy dog the fox runs"
words = text.split()
freq = Counter(words)
print(freq.most_common(3))`
    },
    {
        title: "Event Delegation Pattern",
        language: "JavaScript",
        description: "Handles clicks on dynamically added list items efficiently.",
        code: `document.getElementById('list').addEventListener('click', (e) => {
    if (e.target.matches('li')) {
        console.log('Clicked:', e.target.textContent);
    }
});`
    }
];

// ---- Rendering ----
function escapeHTML(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function displaySnippets(data) {
    const container = document.getElementById('snippetContainer');
    const noResults = document.getElementById('noResults');
    if (!container) return;

    container.innerHTML = "";

    if (data.length === 0) {
        noResults.style.display = "block";
        return;
    }
    noResults.style.display = "none";

    data.forEach((snip) => {
        const card = document.createElement('div');
        card.className = 'snippet-card';
        card.innerHTML = `
            <div class="card-header">
                <h3>${escapeHTML(snip.title)}</h3>
                <span>${escapeHTML(snip.language)}</span>
            </div>
            <p class="card-description">${escapeHTML(snip.description)}</p>
            <pre><code>${escapeHTML(snip.code)}</code></pre>
        `;
        container.appendChild(card);
    });
}

let activeLang = "All";

function filterSnippets() {
    const searchInput = document.getElementById('snippetSearch');
    if (!searchInput) return;
    const query = searchInput.value.toLowerCase();

    const filtered = snippets.filter((snip) => {
        const matchesQuery =
            snip.title.toLowerCase().includes(query) ||
            snip.description.toLowerCase().includes(query) ||
            snip.language.toLowerCase().includes(query);
        const matchesLang = activeLang === "All" || snip.language === activeLang;
        return matchesQuery && matchesLang;
    });

    displaySnippets(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('snippetContainer');
    if (!container) return; // not on the snippets page

    displaySnippets(snippets);

    const searchInput = document.getElementById('snippetSearch');
    if (searchInput) {
        searchInput.addEventListener('input', filterSnippets);
    }

    const chips = document.querySelectorAll('#filterChips .chip');
    chips.forEach((chip) => {
        chip.addEventListener('click', () => {
            chips.forEach((c) => c.classList.remove('active'));
            chip.classList.add('active');
            activeLang = chip.dataset.lang;
            filterSnippets();
        });
    });
});
