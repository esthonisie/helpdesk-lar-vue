<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Hardware Issues',
                'description' => 'Problems related to physical devices like desktops, laptops, printers, monitors, keyboards, or mobile devices.'
            ],
            [
                'name' => 'Software Issues',
                'description' => 'Troubles with installed applications, operating systems, or software updates and installations.',
            ],
            [
                'name' => 'Network & Connectivity',
                'description' => 'Problems with Wi-Fi, VPN, internet access, intranet, or network drives.',
            ],
            [
                'name' => 'Access & Permissions',
                'description' => 'Requests or issues related to user accounts, password resets, access rights, and security permissions.',
            ],
            [
                'name' => 'Email & Communication Tools',
                'description' => 'Issues with corporate email, messaging apps, video conferencing tools, or collaboration platforms.',
            ],
            [
                'name' => 'Performance & System Errors',
                'description' => 'Slow systems, crashes, error messages, or unexpected behavior in IT infrastructure.',
            ],
            [
                'name' => 'Security & Compliance',
                'description' => 'Reporting suspicious activity, malware, phishing attempts, or compliance-related IT concerns.',
            ],
            [
                'name' => 'Requests & Changes',
                'description' => 'Hardware or software upgrade requests, new equipment setup, or configuration changes.',
            ],
            [
                'name' => 'Backup & Recovery',
                'description' => 'Data recovery requests, backup failures, or restoration issues.',
            ],
            [
                'name' => 'Other / General IT Support',
                'description' => 'Miscellaneous or uncategorized issues.',
            ],
        ];
        
        foreach ($categories as $category) {
            Category::create([
                'name' => $category['name'],
                'description' => $category['description'],
            ]);
        }
    }
}
