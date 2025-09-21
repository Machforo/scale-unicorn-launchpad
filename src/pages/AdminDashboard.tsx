import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { LogOut, Mail, Phone, Building, MessageSquare, Calendar, Download } from 'lucide-react';

interface FormResponse {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  message: string | null;
  form_type: string;
  additional_data: any;
  created_at: string;
  updated_at: string;
}

const AdminDashboard = () => {
  const [formResponses, setFormResponses] = useState<FormResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is authenticated
    const isAuthenticated = localStorage.getItem('adminAuthenticated');
    if (!isAuthenticated) {
      navigate('/admin');
      return;
    }

    fetchFormResponses();

    // Set up real-time subscription
    const channel = supabase
      .channel('form_responses_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'form_responses'
        },
        (payload) => {
          console.log('Real-time update:', payload);
          fetchFormResponses(); // Refresh data when changes occur
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [navigate]);

  const fetchFormResponses = async () => {
    try {
      const { data, error } = await supabase
        .from('form_responses')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setFormResponses(data || []);
    } catch (error) {
      console.error('Error fetching form responses:', error);
      toast.error('Failed to fetch form responses');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    localStorage.removeItem('adminUser');
    navigate('/admin');
    toast.success('Logged out successfully');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getFormTypeBadgeVariant = (formType: string) => {
    switch (formType) {
      case 'consultation':
        return 'default';
      case 'workshop':
        return 'secondary';
      case 'incubation':
        return 'outline';
      default:
        return 'default';
    }
  };

  const downloadCSV = () => {
    if (formResponses.length === 0) {
      toast.error('No data available to download');
      return;
    }

    // Define CSV headers
    const headers = [
      'Name',
      'Email', 
      'Phone',
      'Company',
      'Form Type',
      'Message',
      'Date',
      'Additional Data'
    ];

    // Convert data to CSV format
    const csvData = formResponses.map(response => [
      response.name || '',
      response.email || '',
      response.phone || '',
      response.company || '',
      response.form_type || '',
      response.message ? `"${response.message.replace(/"/g, '""')}"` : '', // Escape quotes in message
      formatDate(response.created_at),
      response.additional_data ? `"${JSON.stringify(response.additional_data).replace(/"/g, '""')}"` : ''
    ]);

    // Combine headers with data
    const csvContent = [headers, ...csvData]
      .map(row => row.join(','))
      .join('\n');

    // Create and download the file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `form-responses-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success('CSV file downloaded successfully');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex gap-2">
            <Button onClick={downloadCSV} variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download CSV
            </Button>
            <Button onClick={handleLogout} variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formResponses.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Consultations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formResponses.filter(r => r.form_type === 'consultation').length}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Workshops</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formResponses.filter(r => r.form_type === 'workshop').length}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Incubations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formResponses.filter(r => r.form_type === 'incubation').length}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Form Submissions</CardTitle>
            <CardDescription>
              Manage and track all form submissions from your website
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Form Type</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {formResponses.map((response) => (
                    <TableRow key={response.id}>
                      <TableCell className="font-medium">
                        {response.name}
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <Mail className="w-3 h-3 mr-1" />
                            {response.email}
                          </div>
                          {response.phone && (
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Phone className="w-3 h-3 mr-1" />
                              {response.phone}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        {response.company && (
                          <div className="flex items-center text-sm">
                            <Building className="w-3 h-3 mr-1" />
                            {response.company}
                          </div>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge variant={getFormTypeBadgeVariant(response.form_type)}>
                          {response.form_type}
                        </Badge>
                      </TableCell>
                      <TableCell className="max-w-xs">
                        {response.message && (
                          <div className="flex items-start">
                            <MessageSquare className="w-3 h-3 mr-1 mt-0.5 flex-shrink-0" />
                            <span className="text-sm truncate" title={response.message}>
                              {response.message.length > 50 
                                ? `${response.message.substring(0, 50)}...` 
                                : response.message}
                            </span>
                          </div>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center text-sm">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(response.created_at)}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            {formResponses.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No form submissions found.
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;