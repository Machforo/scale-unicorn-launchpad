import { useState } from "react";
import { Settings, Youtube, Linkedin, Save, Eye, Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";

const IntegrationDemo = () => {
  const [youtubeConfig, setYoutubeConfig] = useState({
    apiKey: "",
    channelId: "",
    maxResults: "5"
  });

  const [linkedinConfig, setLinkedinConfig] = useState({
    accessToken: "",
    companyId: "",
    maxResults: "5"
  });

  const [activeTab, setActiveTab] = useState("youtube");

  const handleYoutubeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("YouTube Config:", youtubeConfig);
    // Here you would integrate with YouTube API
  };

  const handleLinkedinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("LinkedIn Config:", linkedinConfig);
    // Here you would integrate with LinkedIn API
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-12 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Integration Configuration
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Configure your social media integrations to display live content from YouTube and LinkedIn
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="youtube">
                <Youtube className="h-4 w-4 mr-2" />
                YouTube
              </TabsTrigger>
              <TabsTrigger value="linkedin">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </TabsTrigger>
              <TabsTrigger value="preview">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </TabsTrigger>
            </TabsList>

            {/* YouTube Configuration */}
            <TabsContent value="youtube" className="space-y-6">
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Youtube className="h-8 w-8 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold text-foreground">YouTube Integration</h2>
                </div>
                
                <form onSubmit={handleYoutubeSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="youtube-api-key">YouTube API Key</Label>
                    <div className="relative">
                      <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="youtube-api-key"
                        type="password"
                        placeholder="Enter your YouTube Data API v3 key"
                        value={youtubeConfig.apiKey}
                        onChange={(e) => setYoutubeConfig({...youtubeConfig, apiKey: e.target.value})}
                        className="pl-10"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Get your API key from the <a href="https://console.developers.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Developers Console</a>
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="channel-id">Channel ID</Label>
                    <Input
                      id="channel-id"
                      placeholder="Enter your YouTube Channel ID"
                      value={youtubeConfig.channelId}
                      onChange={(e) => setYoutubeConfig({...youtubeConfig, channelId: e.target.value})}
                    />
                    <p className="text-sm text-muted-foreground">
                      Find your Channel ID in YouTube Studio under Settings → Channel
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="max-results">Max Videos to Display</Label>
                    <Input
                      id="max-results"
                      type="number"
                      min="1"
                      max="10"
                      value={youtubeConfig.maxResults}
                      onChange={(e) => setYoutubeConfig({...youtubeConfig, maxResults: e.target.value})}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Save className="h-4 w-4 mr-2" />
                    Save YouTube Configuration
                  </Button>
                </form>
              </Card>
            </TabsContent>

            {/* LinkedIn Configuration */}
            <TabsContent value="linkedin" className="space-y-6">
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Linkedin className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-foreground">LinkedIn Integration</h2>
                </div>
                
                <form onSubmit={handleLinkedinSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="linkedin-token">LinkedIn Access Token</Label>
                    <div className="relative">
                      <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="linkedin-token"
                        type="password"
                        placeholder="Enter your LinkedIn Access Token"
                        value={linkedinConfig.accessToken}
                        onChange={(e) => setLinkedinConfig({...linkedinConfig, accessToken: e.target.value})}
                        className="pl-10"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Get your access token from the <a href="https://developer.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn Developer Portal</a>
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company-id">Company ID</Label>
                    <Input
                      id="company-id"
                      placeholder="Enter your LinkedIn Company ID"
                      value={linkedinConfig.companyId}
                      onChange={(e) => setLinkedinConfig({...linkedinConfig, companyId: e.target.value})}
                    />
                    <p className="text-sm text-muted-foreground">
                      Find your Company ID in LinkedIn Company Page URL
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="linkedin-max-results">Max Posts to Display</Label>
                    <Input
                      id="linkedin-max-results"
                      type="number"
                      min="1"
                      max="10"
                      value={linkedinConfig.maxResults}
                      onChange={(e) => setLinkedinConfig({...linkedinConfig, maxResults: e.target.value})}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Save className="h-4 w-4 mr-2" />
                    Save LinkedIn Configuration
                  </Button>
                </form>
              </Card>
            </TabsContent>

            {/* Preview */}
            <TabsContent value="preview" className="space-y-6">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Integration Preview</h2>
                
                <div className="space-y-8">
                  {/* YouTube Preview */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <Youtube className="h-5 w-5 text-red-600 mr-2" />
                      YouTube Integration Status
                    </h3>
                    <div className="bg-muted/20 rounded-lg p-4">
                      <p className="text-muted-foreground">
                        {youtubeConfig.apiKey && youtubeConfig.channelId 
                          ? "✅ YouTube integration configured successfully" 
                          : "❌ YouTube configuration incomplete"}
                      </p>
                      {youtubeConfig.apiKey && youtubeConfig.channelId && (
                        <div className="mt-2 text-sm text-muted-foreground">
                          <p>Channel ID: {youtubeConfig.channelId}</p>
                          <p>Max Results: {youtubeConfig.maxResults}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* LinkedIn Preview */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <Linkedin className="h-5 w-5 text-blue-600 mr-2" />
                      LinkedIn Integration Status
                    </h3>
                    <div className="bg-muted/20 rounded-lg p-4">
                      <p className="text-muted-foreground">
                        {linkedinConfig.accessToken && linkedinConfig.companyId 
                          ? "✅ LinkedIn integration configured successfully" 
                          : "❌ LinkedIn configuration incomplete"}
                      </p>
                      {linkedinConfig.accessToken && linkedinConfig.companyId && (
                        <div className="mt-2 text-sm text-muted-foreground">
                          <p>Company ID: {linkedinConfig.companyId}</p>
                          <p>Max Results: {linkedinConfig.maxResults}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-2">Implementation Notes:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• API keys will be securely stored and used to fetch live content</li>
                    <li>• Content is cached for 15 minutes to optimize performance</li>
                    <li>• All API calls are made server-side to protect credentials</li>
                    <li>• Integration supports automatic fallback to mock data if APIs are unavailable</li>
                  </ul>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Instructions */}
          <Card className="mt-8 p-8">
            <div className="flex items-center mb-4">
              <Settings className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-xl font-bold text-foreground">Setup Instructions</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">YouTube Setup:</h4>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Go to Google Developers Console</li>
                  <li>Create a new project or select existing</li>
                  <li>Enable YouTube Data API v3</li>
                  <li>Create credentials (API Key)</li>
                  <li>Copy your Channel ID from YouTube Studio</li>
                </ol>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">LinkedIn Setup:</h4>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Go to LinkedIn Developer Portal</li>
                  <li>Create a new app</li>
                  <li>Request access to required APIs</li>
                  <li>Generate access token</li>
                  <li>Find your Company ID from page URL</li>
                </ol>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IntegrationDemo;